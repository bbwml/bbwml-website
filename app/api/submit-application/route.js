import { NextResponse } from "next/server";
import { Resend } from "resend";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const resend = new Resend(process.env.RESEND_API_KEY);

async function fetchBytes(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error("Failed to fetch: " + url);
  const buf = await r.arrayBuffer();
  return new Uint8Array(buf);
}

export async function POST(req) {
  try {
    const values = await req.json();
    const { account, documents, signature, investment, employment, bank, nok, minors, risk } = values;

    // Build PDF
    const pdf = await PDFDocument.create();
    const page = pdf.addPage([595.28, 841.89]);
    const font = await pdf.embedFont(StandardFonts.Helvetica);
    const { width, height } = page.getSize();
    let y = height - 50;

    const write = (txt, size = 12, bold = false) => {
      page.drawText(txt, { x: 40, y, size, font, color: rgb(0,0,0) });
      y -= size + 6;
    };
    write("Individual Account Application", 18, true);
    write(`Submitted: ${new Date().toLocaleString()}`, 10);

    // Passport
    if (account.passportUrl) {
      try {
        const bytes = await fetchBytes(account.passportUrl);
        let img;
        try { img = await pdf.embedPng(bytes); } catch { img = await pdf.embedJpg(bytes); }
        const scale = 110 / img.height;
        page.drawImage(img, { x: width - 150, y: height - 180, width: img.width * scale, height: img.height * scale });
      } catch {}
    }

    // Simple fields
    write(`Name: ${[account.surname, account.firstName, account.otherName].filter(Boolean).join(" ")}`);
    write(`DOB: ${account.dob} | Gender: ${account.gender} | Marital: ${account.maritalStatus}`);
    write(`Nationality: ${account.nationality} | State: ${account.stateOfOrigin} | LGA: ${account.lga}`);
    write(`Email: ${account.email} | Mobile: ${account.mobile}`);
    write(`Residential: ${account.residentialAddress}`);
    write(`Correspondence: ${account.correspondenceAddress}`);
    write(`ID: ${account.idType} (${account.idNumber})`);
    y -= 6; write("— Employment —", 13, true);
    write(`Status: ${employment.status} | Employer: ${employment.employerName}`);
    write(`Date Employed: ${employment.dateEmployed}`);
    write(`Employer Address: ${employment.employerAddress}`);
    write(`Occupation: ${employment.occupation} | Income Source: ${employment.sourceOfIncome}`);

    y -= 6; write("— Bank —", 13, true);
    write(`Bank: ${bank.bankName} | Account: ${bank.accountName} | No: ${bank.accountNo} | BVN: ${bank.bvn} | Type: ${bank.accountType}`);

    y -= 6; write("— Next of Kin —", 13, true);
    write(`Name: ${[nok.surname, nok.firstName, nok.otherName].filter(Boolean).join(" ")} | Gender: ${nok.gender}`);
    write(`DOB: ${nok.dob} | Relationship: ${nok.relationship}`);
    write(`Email: ${nok.email} | Mobile: ${nok.mobile}`);
    write(`Address: ${nok.address}`);

    y -= 6; write("— Investment —", 13, true);
    write(`Mode: ${investment.managementMode} | Instrument: ${investment.modeOfInvestment}`);
    write(`Cash: ${investment.cashAmount} | Equities: ${investment.equitiesWorth}`);
    write(`Payment: ${investment.modeOfPayment} | Objective: ${investment.objective}`);
    write(`Horizon: ${investment.horizon} | Liquidity: ${investment.liquidityNeeds}`);

    y -= 6; write("— Risk/Minor —", 13, true);
    write(`Risk: ${risk.sensitivity}`);
    write(`Minor: ${minors.applicable ? "YES" : "NO"}`);

    y -= 6; write("— Documents (URLs) —", 13, true);
    const docUrls = [
      ["Valid ID", documents.validIdUrl],
      ["Utility Bill", documents.utilityBillUrl],
      ["Birth Certificate", documents.birthCertificateUrl],
      ["Equities Schedule", documents.equitiesScheduleUrl],
    ].filter(([, u]) => !!u);
    docUrls.forEach(([label, url]) => write(`${label}: ${url}`));

    // Signature box
    y -= 6; write("— Signature —", 13, true);
    write(`Name: ${signature.nameSurnameFirstOther} | Date: ${signature.date}`);
    if (signature.imageDataUrl) {
      try {
        const sigBytes = Uint8Array.from(atob(signature.imageDataUrl.split(",")[1]), c => c.charCodeAt(0));
        let sigImg;
        try { sigImg = await pdf.embedPng(sigBytes); } catch { sigImg = await pdf.embedJpg(sigBytes); }
        const w = 220;
        const scale = w / sigImg.width;
        page.drawImage(sigImg, { x: 40, y: Math.max(60, y - 90), width: w, height: sigImg.height * scale });
        y -= 100;
      } catch {}
    }

    const pdfBytes = await pdf.save();
    const filename = `Application_${account.surname || "client"}.pdf`;

    // Email via Resend
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [account.email],
      cc: process.env.APPLICATIONS_CC_EMAIL ? [process.env.APPLICATIONS_CC_EMAIL] : undefined,
      subject: "Your Account Application (PDF Copy)",
      html: `<p>Hi ${account.firstName || "there"},</p><p>Attached is a PDF copy of your application.</p>`,
      attachments: [{ filename, content: Buffer.from(pdfBytes).toString("base64") }],
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e?.message || "Server error" }, { status: 500 });
  }
}
