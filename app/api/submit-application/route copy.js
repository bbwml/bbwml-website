import { NextResponse } from "next/server";
import {
  PDFDocument,
  StandardFonts,
  rgb,
  PDFName,
  PDFNumber,
  PDFString,
} from "pdf-lib";

const NGN = "NGN ";
const clean = (s) => String(s ?? "").replace(/\u20A6/g, NGN);

// ---------- low-level fetch helpers ----------
async function fetchBytes(url) {
  // Normalize to https (Cloudinary sometimes returns http in some contexts)
  const safeUrl = url.startsWith("http://") ? url.replace("http://", "https://") : url;
  const r = await fetch(safeUrl, { cache: "no-store" });
  if (!r.ok) throw new Error(`Fetch ${r.status} for ${safeUrl}`);
  const ab = await r.arrayBuffer();
  return new Uint8Array(ab);
}

async function tryEmbed(pdf, bytes) {
  // Try PNG first, then JPG; avoids relying on Content-Type
  try { return await pdf.embedPng(bytes); } catch {}
  try { return await pdf.embedJpg(bytes); } catch {}
  throw new Error("Bytes are not valid PNG/JPEG for pdf-lib");
}

function withTransform(url, transform) {
  // Insert a Cloudinary transformation into /upload/
  // e.g. /image/upload/  -> /image/upload/f_jpg/
  // or  /image/upload/   -> /image/upload/f_jpg,c_limit,w_600/
  if (!url.includes("/upload/")) return url;
  return url.replace("/upload/", `/upload/${transform}/`);
}

async function embedImageSmart(pdf, url) {
  const candidates = [
    (u) => u,                                      // original
    (u) => withTransform(u, "f_jpg"),              // force jpg
    (u) => withTransform(u, "f_png"),              // force png
    (u) => withTransform(u, "f_jpg,c_limit,w_600") // force jpg & shrink
  ];

  let lastErr;
  for (const make of candidates) {
    const candidate = make(url);
    try {
      const bytes = await fetchBytes(candidate);
      const img = await tryEmbed(pdf, bytes);
      console.log("[passport] embedded via", candidate);
      return img;
    } catch (e) {
      lastErr = e;
      console.warn("[passport] candidate failed:", candidate, e?.message || e);
    }
  }
  throw lastErr || new Error("All passport candidates failed");
}

function addLinkAnnotation(page, x, yBaseline, textWidth, fontSize, url) {
  if (!url) return;
  const height = fontSize + 4;
  const y = yBaseline - fontSize - 2;
  const ctx = page.doc.context;
  let annots = page.node.Annots();
  if (!annots) {
    annots = ctx.obj([]);
    page.node.set(PDFName.of("Annots"), annots);
  }
  const linkAnnot = ctx.obj({
    Type: PDFName.of("Annot"),
    Subtype: PDFName.of("Link"),
    Rect: ctx.obj([
      PDFNumber.of(x),
      PDFNumber.of(y),
      PDFNumber.of(x + textWidth),
      PDFNumber.of(y + height),
    ]),
    Border: ctx.obj([PDFNumber.of(0), PDFNumber.of(0), PDFNumber.of(0)]),
    A: ctx.obj({ S: PDFName.of("URI"), URI: PDFString.of(url) }),
  });
  annots.push(linkAnnot);
}

async function embedPassportIfAny(pdf, page, vals) {
  const url = vals?.account?.passportUrl;
  if (!url) return;

  const W = page.getSize().width;
  const H = page.getSize().height;
  const margin = 40;
  const targetW = 90;

  try {
    const image = await embedImageSmart(pdf, url);
    const scale = targetW / image.width;
    const targetH = image.height * scale;
    const x = W - margin - targetW;
    const y = H - margin - targetH - 6;

    page.drawImage(image, { x, y, width: targetW, height: targetH });
    page.drawRectangle({
      x, y, width: targetW, height: targetH,
      borderWidth: 0.5, borderColor: rgb(0.8, 0.8, 0.8), color: rgb(1, 1, 1),
    });
  } catch (err) {
    console.error("Passport embed failed (final):", err?.message || err);
    // draw a small red note where the passport would be so you can see it failed
    const x = W - margin - 90;
    const y = H - margin - 110 - 6;
    page.drawRectangle({
      x, y, width: 90, height: 110,
      borderWidth: 0.6, borderColor: rgb(0.9, 0.3, 0.3), color: rgb(1, 1, 1),
    });
    const helv = await pdf.embedFont(StandardFonts.Helvetica);
    page.drawText("Passport failed", { x: x + 4, y: y + 4, size: 8, font: helv, color: rgb(0.7, 0.1, 0.1) });
  }
}

// NEW: embed signature (prefers drawn dataURL, else uploaded photo URL)
async function embedSignatureIfAny(pdf, page, vals, opts = {}) {
  const margin = 40;
  const boxW = opts.boxW ?? 250;
  const boxH = opts.boxH ?? 70;
  const x = margin;
  const y = Math.max(page.getSize().height * 0.12, margin + 40); // leave some space

  const drawn = vals?.signature?.imageDataUrl;                 // data:image/png;base64,...
  const uploaded = vals?.signature?.uploadedSignatureUrl;      // cloudinary url

  // box first
  page.drawRectangle({
    x, y, width: boxW, height: boxH,
    borderWidth: 0.6,
    borderColor: rgb(0.75, 0.75, 0.75),
    color: rgb(1, 1, 1),
  });

  try {
    let image;
    if (drawn && drawn.startsWith("data:image/")) {
      // parse data URL
      const base64 = drawn.split(",")[1] || "";
      const bytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
      try { image = await pdf.embedPng(bytes); } catch {}
      if (!image) image = await pdf.embedJpg(bytes);
    } else if (uploaded) {
      image = await embedImageSmart(pdf, uploaded);
    }

    if (image) {
      // fit into box preserving aspect
      const s = Math.min(boxW / image.width, boxH / image.height);
      const w = image.width * s;
      const h = image.height * s;
      const cx = x + (boxW - w) / 2;
      const cy = y + (boxH - h) / 2;
      page.drawImage(image, { x: cx, y: cy, width: w, height: h });
    }
  } catch (e) {
    console.error("Signature embed failed:", e?.message || e);
  }
}

// ---------- route ----------
export async function POST(req) {
  try {
    const vals = await req.json();

    const pdf = await PDFDocument.create();
    const helv = await pdf.embedFont(StandardFonts.Helvetica);
    const helvB = await pdf.embedFont(StandardFonts.HelveticaBold);

    const A4 = [595.28, 841.89];
    let page = pdf.addPage(A4);
    const margin = 40;
    let y = page.getSize().height - margin;

    const W = page.getSize().width;
    const sectionGapTop = 24;
    const sectionGapBottom = 12;
    const rowGap = 8;
    const fontSize = 11;

    const ensure = (need = 60) => {
      if (y - need < margin) {
        page = pdf.addPage(A4);
        y = page.getSize().height - margin;
      }
    };

    const hr = () => {
      const yy = y - 6;
      page.drawLine({
        start: { x: margin, y: yy },
        end: { x: W - margin, y: yy },
        thickness: 0.6,
        color: rgb(0.82, 0.82, 0.82),
      });
      y = yy - sectionGapBottom;
    };

    const heading = (t) => {
      ensure(60);
      y -= sectionGapTop;
      page.drawText(clean(t), { x: margin, y, size: 14, font: helvB });
      y -= 18;
      hr();
    };

    const line = (t, bold = false, size = fontSize) => {
      ensure(size + rowGap + 10);
      page.drawText(clean(t), {
        x: margin,
        y,
        size,
        font: bold ? helvB : helv,
        color: rgb(0, 0, 0),
      });
      y -= size + rowGap;
    };

    const pair = (left, right) => {
      ensure(fontSize + rowGap + 10);
      const gap = 24;
      const colW = (W - margin * 2 - gap) / 2;

      const draw = (x, { label, value }) => {
        const lbl = clean(label + ": ");
        const val = clean(value || "");
        page.drawText(lbl, { x, y, size: fontSize, font: helvB });
        const lblW = helvB.widthOfTextAtSize(lbl, fontSize);
        page.drawText(val, { x: x + lblW, y, size: fontSize, font: helv });
      };

      draw(margin, left);
      draw(margin + colW + gap, right);
      y -= fontSize + rowGap;
    };

    const linkRow = (label, url) => {
      if (!url) return;
      ensure(fontSize + rowGap + 12);
      const left = `${label}: `;
      const leftW = helvB.widthOfTextAtSize(left, fontSize);
      const right = "Open";
      const rightW = helvB.widthOfTextAtSize(right, fontSize);

      page.drawText(left, { x: margin, y, size: fontSize, font: helvB });
      page.drawText(right, {
        x: margin + leftW,
        y,
        size: fontSize,
        font: helvB,
        color: rgb(0, 0, 1),
      });
      page.drawLine({
        start: { x: margin + leftW, y: y - 2 },
        end: { x: margin + leftW + rightW, y: y - 2 },
        thickness: 0.5,
        color: rgb(0, 0, 1),
      });
      addLinkAnnotation(page, margin + leftW, y, rightW, fontSize, url);
      y -= fontSize + rowGap + 4;
    };

    // Header
    line("Individual Account Application", true, 18);
    line(`Generated: ${new Date().toLocaleString()}`, false, 9);
    hr();

    // Passport (top-right page 1)
    await embedPassportIfAny(pdf, page, vals);

    // 1. Personal
    heading("1. Personal & Identification");
    pair({ label: "Title", value: vals.account?.title }, { label: "Gender", value: vals.account?.gender });
    pair({ label: "Surname", value: vals.account?.surname }, { label: "First Name", value: vals.account?.firstName });
    pair({ label: "Other Name", value: vals.account?.otherName }, { label: "Date of Birth", value: vals.account?.dob });
    pair({ label: "Nationality", value: vals.account?.nationality }, { label: "State of Origin", value: vals.account?.stateOfOrigin });
    pair({ label: "L.G.A.", value: vals.account?.lga }, { label: "Marital Status", value: vals.account?.maritalStatus });
    line(`Residential Address: ${clean(vals.account?.residentialAddress)}`);
    line(`Correspondence Address: ${clean(vals.account?.correspondenceAddress)}`);
    pair({ label: "Mobile", value: vals.account?.mobile }, { label: "Alt Mobile", value: vals.account?.altMobile });
    pair({ label: "Email", value: vals.account?.email }, { label: "Mother's Maiden Name", value: vals.account?.mothersMaidenName });
    pair({ label: "ID Type", value: vals.account?.idType }, { label: "ID Number", value: vals.account?.idNumber });

    // 2. Employment
    heading("2. Employment");
    pair({ label: "Status", value: vals.employment?.status }, { label: "Date Employed", value: vals.employment?.dateEmployed });
    line(`Employer: ${clean(vals.employment?.employerName)}`);
    line(`Employer Address: ${clean(vals.employment?.employerAddress)}`);
    pair({ label: "Occupation", value: vals.employment?.occupation }, { label: "Source of Income", value: vals.employment?.sourceOfIncome });

    // 3. Bank
    heading("3. Bank");
    pair({ label: "Bank Name", value: vals.bank?.bankName }, { label: "Account Name", value: vals.bank?.accountName });
    pair({ label: "Account No.", value: vals.bank?.accountNo }, { label: "BVN", value: vals.bank?.bvn });
    pair({ label: "Account Type", value: vals.bank?.accountType }, { label: "", value: "" });

    // 4. Next of Kin
    heading("4. Next of Kin");
    pair({ label: "Title", value: vals.nok?.title }, { label: "Gender", value: vals.nok?.gender });
    pair({ label: "Surname", value: vals.nok?.surname }, { label: "First Name", value: vals.nok?.firstName });
    pair({ label: "Other Name", value: vals.nok?.otherName }, { label: "Date of Birth", value: vals.nok?.dob });
    line(`Contact Address: ${clean(vals.nok?.address)}`);
    pair({ label: "Relationship", value: vals.nok?.relationship }, { label: "Mobile", value: vals.nok?.mobile });
    line(`Email: ${clean(vals.nok?.email)}`);

    // 5. Investment
    heading("5. Investment & Horizon");
    pair({ label: "Management Mode", value: vals.investment?.managementMode }, { label: "Mode of Investment", value: vals.investment?.modeOfInvestment });
    pair({ label: "Cash Amount (NGN)", value: vals.investment?.cashAmount }, { label: "Equities Worth (NGN)", value: vals.investment?.equitiesWorth });
    pair({ label: "Mode of Payment", value: vals.investment?.modeOfPayment }, { label: "Objective", value: vals.investment?.objective });
    pair({ label: "Time Horizon", value: vals.investment?.horizon }, { label: "", value: "" });
    line(`Liquidity / Income Requirement: ${clean(vals.investment?.liquidityNeeds)}`);

    // 6. Risk & Docs
    heading("6. Risk & Documents");
    line(`Risk Sensitivity: ${clean(vals.risk?.sensitivity)}`);
    const docs = vals.documents || {};
    const needEquities = vals.investment?.modeOfInvestment === "Equities";
    const docRows = [
      ["Valid ID", docs.validIdUrl],
      ["Utility Bill", docs.utilityBillUrl],
      ["Birth Certificate", docs.birthCertificateUrl],
      ...(needEquities ? [["Equities Schedule", docs.equitiesScheduleUrl]] : []),
    ];
    for (const [lbl, url] of docRows) linkRow(lbl, url);

    // 7. Signature
    heading("7. Signature");
    const name = vals.signature?.nameSurnameFirstOther;
    const date = vals.signature?.date;
    pair({ label: "Name (Surname, First, Other)", value: name }, { label: "Date", value: date });

    await embedSignatureIfAny(pdf, page, vals, { boxW: 250, boxH: 70 });

    // Footer
    if (y - 28 < margin) y = margin + 18;
    hr();
    line("This document was generated electronically and may be verified against the submitted data.", false, 8);

    const pdfBytes = await pdf.save();
    const filename = `Application_${vals.account?.surname || "client"}.pdf`;
    const pdfDataUrl = `data:application/pdf;base64,${Buffer.from(pdfBytes).toString("base64")}`;

    return NextResponse.json({ ok: true, filename, pdfDataUrl });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e?.message || "Server error" }, { status: 500 });
  }
}
