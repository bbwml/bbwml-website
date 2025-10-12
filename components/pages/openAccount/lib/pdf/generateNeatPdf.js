// lib/pdf/generateNeatPdf.js
import jsPDF from "jspdf";

function arrayBufferToBase64(buffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i += 1) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

/** Convert a File or dataURL to a JPEG dataURL (handles AVIF/WEBP etc) */
async function toJpegDataUrl(fileOrDataUrl, maxW = 1200, quality = 0.92) {
  let objectUrl = "";
  let revokeLater = false;

  // If it's already a data URL, re-encode via canvas to be safe
  if (typeof fileOrDataUrl === "string" && fileOrDataUrl.startsWith("data:image/")) {
    const img = await new Promise((res, rej) => {
      const i = new Image();
      i.onload = () => res(i);
      i.onerror = rej;
      i.src = fileOrDataUrl;
    });
    const scale = img.width > maxW ? maxW / img.width : 1;
    const w = Math.max(1, Math.round(img.width * scale));
    const h = Math.max(1, Math.round(img.height * scale));
    const c = document.createElement("canvas");
    c.width = w; c.height = h;
    const ctx = c.getContext("2d");
    ctx.drawImage(img, 0, 0, w, h);
    return c.toDataURL("image/jpeg", quality);
  }

  if (fileOrDataUrl instanceof File) {
    objectUrl = URL.createObjectURL(fileOrDataUrl);
    revokeLater = true;
  } else if (typeof fileOrDataUrl === "string") {
    objectUrl = fileOrDataUrl;
  } else {
    return null;
  }

  try {
    const img = await new Promise((res, rej) => {
      const i = new Image();
      i.crossOrigin = "anonymous";
      i.onload = () => res(i);
      i.onerror = rej;
      i.src = objectUrl;
    });
    const scale = img.width > maxW ? maxW / img.width : 1;
    const w = Math.max(1, Math.round(img.width * scale));
    const h = Math.max(1, Math.round(img.height * scale));
    const c = document.createElement("canvas");
    c.width = w; c.height = h;
    const ctx = c.getContext("2d");
    ctx.drawImage(img, 0, 0, w, h);
    return c.toDataURL("image/jpeg", quality);
  } finally {
    if (revokeLater) URL.revokeObjectURL(objectUrl);
  }
}

export async function generateNeatPdf(vals) {
  const doc = new jsPDF({ unit: "pt", format: "a4", compress: true });
  const page = { w: doc.internal.pageSize.getWidth(), h: doc.internal.pageSize.getHeight() };

  // Spacing tuned for cleaner look
  const m = 40;          // margin
  const gap = 16;        // line gap
  const sectionTop = 36; // top padding before section title
  const sectionAfter = 20;// space after hr
  let y = m;

  const setFont = (size = 11, bold = false) => {
    doc.setFont("helvetica", bold ? "bold" : "normal");
    doc.setFontSize(size);
    doc.setTextColor(0, 0, 0);
  };
  const hr = () => {
    const yy = y + 6;
    doc.setDrawColor(220);
    doc.line(m, yy, page.w - m, yy);
    y = yy + sectionAfter;
  };
  const ensureSpace = (need = 80) => {
    if (y + need > page.h - m) {
      doc.addPage();
      y = m;
    }
  };
  const section = (title) => {
    ensureSpace(80);
    y += sectionTop;
    setFont(13, true);
    doc.text(title, m, y);
    y += 8;
    hr();
  };
  const lineWrap = (label, text = "") => {
    setFont(10, true);
    const labelW = doc.getTextWidth(label + ": ");
    const startX = m;
    const valX = m + labelW + 2;
    const maxW = page.w - m - valX;
    doc.text(label + ":", startX, y);
    setFont(10, false);
    const lines = doc.splitTextToSize(String(text || ""), maxW);
    doc.text(lines, valX, y);
    y += lines.length * 16 + 4;
  };
  const pair = (items = []) => {
    const colW = (page.w - 2 * m - 24) / 2;
    const baseY = y;
    items.forEach((item, i) => {
      const x = m + i * (colW + 24);
      setFont(10, true); doc.text((item.label || "") + ":", x, baseY);
      setFont(10, false);
      const text = String(item.value ?? "");
      const lines = doc.splitTextToSize(text, colW - 6);
      doc.text(lines, x, baseY + 16);
      y = Math.max(y, baseY + (lines.length * 16));
    });
    y += gap;
  };
  const checkboxRow = (label, options = [], selected) => {
    setFont(10, true); doc.text(label + ":", m, y); setFont(10, false);
    let x = m + doc.getTextWidth(label + ": ") + 6;
    options.forEach(opt => {
      doc.rect(x, y - 8, 10, 10);
      if (selected === opt) { doc.setLineWidth(1); doc.line(x, y - 8, x + 10, y + 2); doc.line(x, y + 2, x + 10, y - 8); doc.setLineWidth(0.2); }
      doc.text(" " + opt, x + 14, y);
      x += 14 + doc.getTextWidth(" " + opt) + 28;
    });
    y += 24;
  };
  const imageBox = async (dataUrl, x, yTop, w, h) => {
    if (!dataUrl) return;
    try { doc.addImage(dataUrl, "JPEG", x, yTop, w, h, undefined, "FAST"); }
    catch { try { doc.addImage(dataUrl, "PNG", x, yTop, w, h, undefined, "FAST"); } catch {} }
  };
  const linkRow = (label, url) => {
    if (!url) return;
    ensureSpace(28);
    setFont(10, true);
    const left = `${label}: `;
    const leftW = doc.getTextWidth(left);
    doc.text(left, m, y);

    const x = m + leftW;
    setFont(10, true);
    doc.setTextColor(0, 0, 255);
    doc.textWithLink("Open", x, y, { url });
    const openW = doc.getTextWidth("Open");
    doc.setDrawColor(0, 0, 255);
    doc.line(x, y + 2, x + openW, y + 2);

    setFont(10, false);
    y += 18;
  };
  const linkRowBelow = (label, url) => {
    if (!url) return;
    ensureSpace(32);
    setFont(10, true);
    doc.text(`${label}:`, m, y);
    y += 14;
    setFont(10, true);
    doc.setTextColor(0, 0, 255);
    doc.textWithLink("Open", m, y, { url });
    const openW = doc.getTextWidth("Open");
    doc.setDrawColor(0, 0, 255);
    doc.line(m, y + 2, m + openW, y + 2);
    setFont(10, false);
    y += 12;
  };

  // Header
  setFont(16, true); doc.text("Individual Account Opening Form", m, y);
  setFont(10, false); doc.text(
    "Generated electronically",
    page.w - m - doc.getTextWidth("Generated electronically"),
    y
  );
  y += 18; hr();

  // Passport (top-right) - accept File, dataURL, or URL from Cloudinary
  if (vals.account?.passportPhoto || vals.account?.passportUrl) {
    const src = vals.account?.passportPhoto || vals.account?.passportUrl;
    const passportJpeg = await toJpegDataUrl(src, 1000, 0.92);
    const w = 90, h = 110;
    await imageBox(passportJpeg, page.w - m - w, y, w, h);
  }

  // 1. Personal & ID
  section("1. Personal & Identification");
  pair([{ label: "Title", value: vals.account.title }, { label: "Gender", value: vals.account.gender }]);
  pair([{ label: "Surname", value: vals.account.surname }, { label: "First Name", value: vals.account.firstName }]);
  pair([{ label: "Other Name", value: vals.account.otherName }, { label: "Date of Birth", value: vals.account.dob }]);
  pair([{ label: "Nationality", value: vals.account.nationality }, { label: "State of Origin", value: vals.account.stateOfOrigin }]);
  pair([{ label: "L.G.A.", value: vals.account.lga }, { label: "Marital Status", value: vals.account.maritalStatus }]);
  lineWrap("Residential Address", vals.account.residentialAddress);
  lineWrap("Correspondence Address", vals.account.correspondenceAddress);
  pair([{ label: "Mobile No.", value: vals.account.mobile }, { label: "Alternative No.", value: vals.account.altMobile }]);
  pair([{ label: "Email", value: vals.account.email }, { label: "Mother's Maiden Name", value: vals.account.mothersMaidenName }]);
  pair([{ label: "ID Type", value: vals.account.idType }, { label: "ID Number", value: vals.account.idNumber }]);
  // Clickable link to the uploaded passport image
  if (vals.account?.passportUrl) {
    linkRow("Passport Photograph", vals.account.passportUrl);
  }

  // 2. Employment
  section("2. Employment Details");
  checkboxRow("Status", ["Employed", "Self-Employed", "Retired", "Others"], vals.employment.status);
  pair([{ label: "Employer’s Name", value: vals.employment.employerName }, { label: "Date Employed", value: vals.employment.dateEmployed }]);
  lineWrap("Employer’s Address", vals.employment.employerAddress);
  pair([{ label: "Business/Occupation", value: vals.employment.occupation }, { label: "Source of Income", value: vals.employment.sourceOfIncome }]);

  // 3. Bank
  section("3. Bank Details");
  pair([{ label: "Bank Name", value: vals.bank.bankName }, { label: "Account Name", value: vals.bank.accountName }]);
  pair([{ label: "Account No.", value: vals.bank.accountNo }, { label: "BVN", value: vals.bank.bvn }]);
  checkboxRow("Account Type", ["Savings", "Current"], vals.bank.accountType);

  // 4. Next of Kin
  section("4. Next of Kin");
  pair([{ label: "Title", value: vals.nok.title }, { label: "Gender", value: vals.nok.gender }]);
  pair([{ label: "Surname", value: vals.nok.surname }, { label: "First Name", value: vals.nok.firstName }]);
  pair([{ label: "Other Name", value: vals.nok.otherName }, { label: "Date of Birth", value: vals.nok.dob }]);
  lineWrap("Contact Address", vals.nok.address);
  pair([{ label: "Relationship", value: vals.nok.relationship }, { label: "Mobile No.", value: vals.nok.mobile }]);
  lineWrap("Email", vals.nok.email);

  // 5. Investment & Horizon
  section("5. Investment Details & Time Horizon");
  checkboxRow("Management Mode", ["Discretionary", "Non-Discretionary"], vals.investment.managementMode);
  checkboxRow("Mode of Investment", ["Cash", "Equities"], vals.investment.modeOfInvestment);
  pair([
    { label: "Cash Amount (NGN)", value: String(vals.investment.cashAmount || "").replace(/₦/g, "NGN ") },
    { label: "Equities Worth (NGN)", value: String(vals.investment.equitiesWorth || "").replace(/₦/g, "NGN ") }
  ]);
  checkboxRow("Mode of Payment", ["Cheque", "Bank Transfer"], vals.investment.modeOfPayment);
  checkboxRow("Objective", ["Capital Preservation", "Capital Appreciation", "Growth", "Income & Growth"], vals.investment.objective);
  pair([{ label: "Time Horizon", value: vals.investment.horizon }, { label: "Liquidity / Income Requirement", value: vals.investment.liquidityNeeds }]);

  // 6. Risk, Docs & Signature
  section("6. Risk & Documents");
  lineWrap("Risk Sensitivity", vals.risk.sensitivity);

  // Clickable document links if URLs are present
  const docs = vals.documents || {};
  const needEquities = vals.investment?.modeOfInvestment === "Equities";
  linkRow("Valid ID", docs.validIdUrl);
  // Place Utility Bill link on a separate line (not on label text)
  linkRowBelow("Utility Bill (≤ 3 months)", docs.utilityBillUrl);
  linkRow("Birth Certificate (if applicable)", docs.birthCertificateUrl);
  if (needEquities) linkRow("Equities Schedule", docs.equitiesScheduleUrl);

  // Signature box
  ensureSpace(120);
  setFont(11, true); doc.text("Signature", m, y); y += 16; setFont(10, false);
  let sigDataUrl = vals.signature?.imageDataUrl || "";
  if (!sigDataUrl && vals.signature?.uploadedSignature) {
    sigDataUrl = await toJpegDataUrl(vals.signature.uploadedSignature, 1000, 0.9);
  }
  doc.rect(m, y, 250, 70);
  if (sigDataUrl) {
    try {
      doc.addImage(sigDataUrl, "JPEG", m + 2, y + 2, 246, 66, undefined, "FAST");
    } catch {
      try { doc.addImage(sigDataUrl, "PNG", m + 2, y + 2, 246, 66, undefined, "FAST"); } catch {}
    }
  }
  doc.text(`Name: ${vals.signature?.nameSurnameFirstOther || ""}`, m + 270, y + 18);
  doc.text(`Date: ${vals.signature?.date || ""}`, m + 270, y + 36);
  y += 86;

  // Link to uploaded signature file (if user uploaded instead of drawing)
  if (vals.signature?.uploadedSignatureUrl) {
    linkRow("Uploaded Signature", vals.signature.uploadedSignatureUrl);
  }

  ensureSpace(40);
  doc.setDrawColor(220); doc.line(m, y, page.w - m, y); y += 10;
  setFont(8); doc.text("This document was generated electronically and may be verified against the submitted data.", m, page.h - m);

  const filename = `Individual_Account_${vals.account?.surname || "client"}.pdf`;
  const arrayBuffer = doc.output("arraybuffer");
  const pdfBase64 = arrayBufferToBase64(arrayBuffer);
  return { filename, pdfBase64 };
}
