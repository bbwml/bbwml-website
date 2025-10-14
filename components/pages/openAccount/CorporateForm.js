"use client";

import { useRef, useState } from "react";
import Stepper from "./Stepper";
import jsPDF from "jspdf"; // npm i jspdf
import ActionsBar from "./form/ActionsBar";
import { FormProvider, useFormCtx } from "./form/FormProvider";
import UploadField from "./form/UploadField";
import StepCompany from "./corporate/StepCompany";
import StepBank from "./corporate/StepBank";
import StepDirectorsSignatories from "./corporate/StepDirectorsSignatories";
import StepInvestmentRisk from "./corporate/StepInvestmentRisk";
import StepDocuments from "./corporate/StepDocuments";
import StepBoardResolution from "./corporate/StepBoardResolution";

const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_APPLICATIONS_EMAIL || "info@bbwml.com";

const steps = [
  "Company",
  "Bank",
  "Directors & Signatories",
  "Investment & Risk",
  "Documents",
  "Board Resolution",
];

function InnerCorporateForm() {
  const [step, setStep] = useState(0);
  const { uploadingCount, values: globalVals, showToast } = useFormCtx();
  const [submitting, setSubmitting] = useState(false);

  const [values, setValues] = useState({
    company: {
      name: "",
      rcNumber: "",
      address: "",
      email: "",
      phone: "",
      website: "",
      dateOfIncorporation: "",
      tin: "",
      natureOfBusiness: "",
      annualTurnover: "", // <50M | 50–99.9M | 100–499.9M | 500–999.9M | 1–4.9B | 5B+
    },
    bank: {
      bankName: "",
      accountNo: "",
      accountName: "",
      bvn: "",
      dateOfOpening: "",
      accountType: "", // Savings | Current
    },
    directors: [
      // up to 3 commonly, but dynamic
      // { title:"", gender:"", surname:"", firstName:"", otherName:"", dob:"", mothersMaiden:"", stateLga:"", bvn:"", address:"", mobile:"", telephone:"", idDocs:[], passport:null, signatureImg:null, email:"" }
    ],
    signatories: [
      // { title:"", gender:"", surname:"", firstName:"", otherName:"", designation:"", class:"", dob:"", email:"", address:"", bvn:"", mobile:"", telephone:"", idDocs:[], passport:null, signatureImg:null }
    ],
    investment: {
      managementMode: "", // Discretionary | Non-Discretionary
      modeOfInvestment: "", // Cash | Equities
      cashAmount: "",
      equitiesWorth: "",
      paymentMode: "", // Cheque | Bank Transfer
      objective: "", // Capital Preservation | Capital Appreciation | Growth | Income & Growth
      horizon: "", // Immediate(1–2) | Short(2–5) | Intermediate(5–10) | Long(10+)
      liquidityNeeds: "",
      riskSensitivity: "", // High-risk | Moderate | Low-risk
    },
    documents: {
      certificateOfIncorporation: null,
      memart: null,
      cacCO7Directors: null,
      cacCO2Allotment: null,
      boardResolution: null,
      idsDirectorsSignatories: null, // can be a combined PDF/zip or image
      companyUtilityBill: null,
      passportsDirectorsSignatories: null,
      scuml: null, // optional
      equitiesSchedule: null, // if equities chosen
    },
    boardResolution: {
      meetingDate: "",
      meetingPlace: "",
      bankOrFirmName: "",
      authorizedPerson: {
        title: "",
        firstName: "",
        otherName: "",
        class: "", // A | B
        designation: "",
        date: "",
        passport: null,
        signaturePadDataUrl: "",
        signatureImg: null, // optional upload
      },
    },
  });

  // ---------- generic state helpers ----------
  const setByPath = (obj, path, value) => {
    const keys = path.split(".");
    const newObj = { ...obj };
    let curNew = newObj, curOld = obj;
    for (let i = 0; i < keys.length - 1; i++) {
      const k = keys[i];
      const src = curOld?.[k] ?? {};
      curNew[k] = Array.isArray(src) ? [...src] : { ...src };
      curNew = curNew[k];
      curOld = src;
    }
    curNew[keys[keys.length - 1]] = value;
    return newObj;
  };
  const update = (path, value) => setValues(prev => setByPath(prev, path, value));
  const updateFromEvent = (path) => (e) => {
    const { type, checked, value } = e.target;
    update(path, type === "checkbox" ? checked : value);
  };
  const updateFile = (path) => (e) => update(path, e.target.files?.[0] || null);

  // directors/signatories list ops
  const addDirector = () => update("directors", [...values.directors, {}]);
  const addSignatory = () => update("signatories", [...values.signatories, {}]);
  const updateListItem = (key, idx, field, val) => {
    const list = [...values[key]];
    list[idx] = { ...list[idx], [field]: val };
    update(key, list);
  };

  // ---------- board resolution signature pad ----------
  const canvasRef = useRef(null);
  const drawing = useRef(false);
  const getPos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    if (e.touches?.[0]) {
      return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
    }
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };
  const startDraw = (e) => { drawing.current = true; draw(e); };
  const endDraw = () => {
    drawing.current = false;
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) ctx.beginPath();
    if (canvasRef.current) update("boardResolution.authorizedPerson.signaturePadDataUrl", canvasRef.current.toDataURL("image/png"));
  };
  const draw = (e) => {
    if (!drawing.current || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
    const { x, y } = getPos(e);
    ctx.lineWidth = 2; ctx.lineCap = "round"; ctx.strokeStyle = "#111";
    ctx.lineTo(x, y); ctx.stroke(); ctx.beginPath(); ctx.moveTo(x, y);
  };
  const clearPad = () => {
    const c = canvasRef.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    ctx.clearRect(0, 0, c.width, c.height);
    update("boardResolution.authorizedPerson.signaturePadDataUrl", "");
  };

  // ---------- PDF helpers (jsPDF) ----------
  async function fileToDataURL(file) {
    if (!file) return null;
    return new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(r.result);
      r.onerror = reject;
      r.readAsDataURL(file);
    });
  }
  async function addImageAuto(doc, dataUrl, x, y, w, h) {
    if (!dataUrl) return;
    try { doc.addImage(dataUrl, "JPEG", x, y, w, h, undefined, "FAST"); }
    catch { try { doc.addImage(dataUrl, "PNG", x, y, w, h, undefined, "FAST"); } catch {} }
  }
  function arrayBufferToBase64(buffer) {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i += 1) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  async function generateCorporatePdf(v) {
    const doc = new jsPDF({ unit: "pt", format: "a4", compress: true });
    const page = { w: doc.internal.pageSize.getWidth(), h: doc.internal.pageSize.getHeight() };
    const m = 40, gap = 16; let y = m;
    const setFont = (size=11,bold=false)=>{ doc.setFont("helvetica", bold?"bold":"normal"); doc.setFontSize(size); };
    const hr = ()=>{ doc.setDrawColor(220); doc.line(m,y,page.w-m,y); y += 20; };
    const ensure = (need=60)=>{ if (y+need>page.h-m){ doc.addPage(); y=m; } };
    const labelWrap = (label, text="")=>{
      setFont(10,true); const lw = doc.getTextWidth(label+": "); const sx = m; const vx = m+lw+2; const mw = page.w-m-vx;
      doc.text(label+":", sx, y); setFont(10,false);
      const lines = doc.splitTextToSize(String(text||""), mw);
      doc.text(lines, vx, y); y += lines.length*16 + 4;
    };
    const pair = (pairs=[])=>{
      const colW = (page.w-2*m-24)/2; const baseY=y;
      pairs.forEach((p,i)=>{
        const x = m+i*(colW+24);
        setFont(10,true); doc.text((p.label||"")+":", x, baseY);
        setFont(10,false);
        const t = String(p.value??""); const lines = doc.splitTextToSize(t, colW-6);
        doc.text(lines, x, baseY+16);
        y = Math.max(y, baseY + lines.length*16);
      });
      y += gap;
    };
    const checkRow = (label, options = [], selected) => {
      setFont(10, true);
      doc.text(label + ":", m, y);
      setFont(10, false);
      const labelWidth = doc.getTextWidth(label + ": ");
      const startX = m + labelWidth + 6;
      const maxX = page.w - m;
      const lineHeight = 20;
      const startY = y;
      let x = startX;
      let baseline = y;
      let lines = 1;

      options.forEach(opt => {
        const text = " " + opt;
        const textWidth = doc.getTextWidth(text);
        const optionWidth = 10 + 4 + textWidth; // checkbox + gap + text

        if (x + optionWidth > maxX) {
          lines += 1;
          baseline = startY + (lines - 1) * lineHeight;
          x = startX;
        }

        doc.rect(x, baseline - 8, 10, 10);
        if (selected === opt) {
          doc.setLineWidth(1);
          doc.line(x, baseline - 8, x + 10, baseline + 2);
          doc.line(x, baseline + 2, x + 10, baseline - 8);
          doc.setLineWidth(0.2);
        }
        doc.text(text, x + 14, baseline);
        x += 14 + textWidth + 28; // advance to next option with consistent spacing
      });

      y = startY + lines * lineHeight + 4;
    };
    const linkRow = (label, url) => {
      if (!url) return; ensure(28);
      setFont(10, true); const left = `${label}: `; const leftW = doc.getTextWidth(left); doc.text(left, m, y);
      const x = m + leftW; setFont(10,true); doc.setTextColor(0,0,255); doc.textWithLink("Open", x, y, { url });
      const openW = doc.getTextWidth("Open"); doc.setDrawColor(0,0,255); doc.line(x, y+2, x+openW, y+2);
      setFont(10,false); doc.setTextColor(0,0,0); y += 18;
    };

    // Header
    setFont(16,true); doc.text("Corporate Account Opening Form", m, y);
    setFont(11,false); doc.text("Generated electronically", page.w - m - doc.getTextWidth("Generated electronically"), y);
    y += 18; hr();

    // 1) Company
    setFont(13,true); doc.text("1. Company Details", m, y); y+=gap; hr();
    labelWrap("Registered Company Name", v.company.name);
    pair([{label:"RC/BN Number", value: v.company.rcNumber},{label:"Date of Incorporation", value: v.company.dateOfIncorporation}]);
    pair([{label:"Tax ID (TIN)", value: v.company.tin},{label:"Nature of Business", value: v.company.natureOfBusiness}]);
    labelWrap("Registered Address", v.company.address);
    pair([{label:"Company Email", value: v.company.email},{label:"Company Phone", value: v.company.phone}]);
    labelWrap("Website", v.company.website);
    checkRow("Annual Turnover", ["<50 Million","50 Million - 99.9 Million","100 Million - 499.9 Million","500 - 999.9 Million","1 Billion - 4.9 Billion","5 Billion & Above"], v.company.annualTurnover);

    // 2) Bank
    ensure(); setFont(13,true); doc.text("2. Bank Details", m, y); y+=gap; hr();
    pair([{label:"Bank Name", value: v.bank.bankName},{label:"Account No.", value: v.bank.accountNo}]);
    pair([{label:"Account Name", value: v.bank.accountName},{label:"BVN", value: v.bank.bvn}]);
    pair([{label:"Date of Opening", value: v.bank.dateOfOpening},{label:"", value:""}]);
    checkRow("Account Type", ["Savings","Current"], v.bank.accountType);

    // 3) Directors
    ensure(); setFont(13,true); doc.text("3. Directors Details", m, y); y+=gap; hr();
    if (!v.directors?.length) { setFont(10,false); doc.text("No directors added.", m, y); y += 16; }
    for (let i=0; i<(v.directors||[]).length; i++){
      const d = v.directors[i];
      setFont(11,true); doc.text(`Director ${i+1}`, m, y); y += 14; setFont(10,false);
      pair([{label:"Title", value:d?.title},{label:"Gender", value:d?.gender}]);
      pair([{label:"Surname", value:d?.surname},{label:"First Name", value:d?.firstName}]);
      pair([{label:"Other Name", value:d?.otherName},{label:"Date of Birth", value:d?.dob}]);
      pair([{label:"Mother's Maiden Name", value:d?.mothersMaiden},{label:"State of Origin/LGA", value:d?.stateLga}]);
      pair([{label:"BVN", value:d?.bvn},{label:"Mobile No.", value:d?.mobile}]);
      pair([{label:"Telephone", value:d?.telephone},{label:"Email", value:d?.email}]);
      labelWrap("Residential Address", d?.address);
      const idDocsText = Array.isArray(d?.idDocs) ? d.idDocs.join(", ") : (d?.idDocs || "");
      labelWrap("ID Type", idDocsText);
      // Passport & signature images
      let yStart = y; const boxH = 80;
      if (d?.passport){ const u = await fileToDataURL(d.passport); await addImageAuto(doc, u, m, yStart, 90, boxH); }
      if (d?.signatureImg){ const u = await fileToDataURL(d.signatureImg); await addImageAuto(doc, u, m+100, yStart, 140, boxH); }
      if (d?.passport || d?.signatureImg) y = yStart + boxH + gap;
      // Links from Cloudinary uploads (if used)
      const dUrls = (globalVals?.corporate?.directors?.[i]) || {};
      if (dUrls.passportUrl) linkRow("Passport Photo", dUrls.passportUrl);
      if (dUrls.signatureUrl) linkRow("Signature Image", dUrls.signatureUrl);
      ensure();
    }

    // 4) Authorized Signatories
    ensure(); setFont(13,true); doc.text("4. Authorized Signatories", m, y); y+=gap; hr();
    if (!v.signatories?.length) { setFont(10,false); doc.text("No signatories added.", m, y); y += 16; }
    for (let i=0; i<(v.signatories||[]).length; i++){
      const s = v.signatories[i];
      setFont(11,true); doc.text(`Signatory ${i+1}`, m, y); y += 14; setFont(10,false);
      pair([{label:"Title", value:s?.title},{label:"Gender", value:s?.gender}]);
      pair([{label:"Surname", value:s?.surname},{label:"First Name", value:s?.firstName}]);
      pair([{label:"Other Name", value:s?.otherName},{label:"Date of Birth", value:s?.dob}]);
      pair([{label:"Designation", value:s?.designation},{label:"Class", value:s?.class}]);
      pair([{label:"Email", value:s?.email},{label:"BVN", value:s?.bvn}]);
      pair([{label:"Mobile No.", value:s?.mobile},{label:"Telephone", value:s?.telephone}]);
      labelWrap("Residential Address", s?.address);
      const sIdDocs = Array.isArray(s?.idDocs) ? s.idDocs.join(", ") : (s?.idDocs || "");
      labelWrap("ID Type", sIdDocs);
      // Passport & signature image
      let yStart = y; const boxH = 80;
      if (s?.passport){ const u = await fileToDataURL(s.passport); await addImageAuto(doc, u, m, yStart, 90, boxH); }
      if (s?.signatureImg){ const u = await fileToDataURL(s.signatureImg); await addImageAuto(doc, u, m+100, yStart, 140, boxH); }
      if (s?.passport || s?.signatureImg) y = yStart + boxH + gap;
      const sUrls = (globalVals?.corporate?.signatories?.[i]) || {};
      if (sUrls.passportUrl) linkRow("Passport Photo", sUrls.passportUrl);
      if (sUrls.signatureUrl) linkRow("Signature Image", sUrls.signatureUrl);
      ensure();
    }

    // 5) Investment & Risk
    ensure(); setFont(13,true); doc.text("5. Investment Details & Risk", m, y); y+=gap; hr();
    checkRow("Management Mode", ["Discretionary","Non-Discretionary"], v.investment.managementMode);
    checkRow("Mode of Investment", ["Cash","Equities"], v.investment.modeOfInvestment);
    pair([{label:"Cash Amount (₦)", value:v.investment.cashAmount},{label:"Equities Worth (₦)", value:v.investment.equitiesWorth}]);
    checkRow("Mode of Payment", ["Cheque","Bank Transfer"], v.investment.paymentMode);
    checkRow("Investment Objective", ["Capital Preservation","Capital Appreciation","Growth","Income & Growth"], v.investment.objective);
    checkRow("Time Horizon", ["Immediate Access (1–2 years)","Short Term (2–5 years)","Intermediate (5–10 years)","Long Term (10+ years)"], v.investment.horizon);
    labelWrap("Liquidity / Income requirement", v.investment.liquidityNeeds);
    checkRow("Client Risk Sensitivity", ["High-risk","Moderate","Low-risk"], v.investment.riskSensitivity);

    // 6) Required Documents
    ensure(); setFont(13,true); doc.text("6. Required Documents", m, y); y+=gap; hr();
    const corpDocs = globalVals?.corporate?.documents || {};
    linkRow("Certificate of Incorporation", corpDocs.certificateOfIncorporationUrl);
    linkRow("MEMART", corpDocs.memartUrl);
    linkRow("CAC Form CO7 (Directors)", corpDocs.cacCO7DirectorsUrl);
    linkRow("CAC Form CO2 (Allotment)", corpDocs.cacCO2AllotmentUrl);
    linkRow("Board Resolution", corpDocs.boardResolutionUrl);
    linkRow("Valid IDs (Directors & Signatories)", corpDocs.idsDirectorsSignatoriesUrl);
    // Place Utility Bill on a separate clear line
    linkRow("Company Utility Bill (≤ 3 months)", corpDocs.companyUtilityBillUrl);
    linkRow("Passport Photos (Directors & Signatories)", corpDocs.passportsDirectorsSignatoriesUrl);
    linkRow("SCUML Certificate (if applicable)", corpDocs.scumlUrl);
    if (v.investment.modeOfInvestment === "Equities") linkRow("Equities Schedule (if applicable)", corpDocs.equitiesScheduleUrl);

    // 7) Board Resolution / Signature Mandate
    ensure(); setFont(13,true); doc.text("7. Board Resolution / Signature Mandate", m, y); y+=gap; hr();
    labelWrap("Meeting Date", v.boardResolution.meetingDate);
    labelWrap("Meeting Place", v.boardResolution.meetingPlace);
    labelWrap("Open account with (Institution)", v.boardResolution.bankOrFirmName);

    setFont(11,true); doc.text("Authorized Person", m, y); y += 16; setFont(10,false);
    pair([{label:"Title", value:v.boardResolution.authorizedPerson.title},{label:"Designation", value:v.boardResolution.authorizedPerson.designation}]);
    pair([{label:"First Name", value:v.boardResolution.authorizedPerson.firstName},{label:"Other Name", value:v.boardResolution.authorizedPerson.otherName}]);
    checkRow("Class", ["A","B"], v.boardResolution.authorizedPerson.class);
    labelWrap("Date", v.boardResolution.authorizedPerson.date);

    // Passport (link if uploaded to Cloudinary)
    const ap = globalVals?.corporate?.boardResolution?.authorizedPerson || {};
    if (ap.passportUrl) {
      linkRow("Authorized Person Passport", ap.passportUrl);
    }
    // Signature: pad preferred else uploaded img
    let sigUrl = v.boardResolution.authorizedPerson.signaturePadDataUrl;
    if (!sigUrl && v.boardResolution.authorizedPerson.signatureImg) {
      sigUrl = await fileToDataURL(v.boardResolution.authorizedPerson.signatureImg);
    }
    doc.rect(m+110, y, 220, 80);
    if (sigUrl) await addImageAuto(doc, sigUrl, m+112, y+2, 216, 76);
    y += 120;
    if (ap.signatureUrl) {
      linkRow("Authorized Person Signature (uploaded)", ap.signatureUrl);
    }

    // Footer
    ensure(); hr();
    setFont(8,false);
    doc.text("This document was generated electronically and may be verified against the submitted data. Investors resident outside Nigeria must notarize KYC documents.", m, page.h - m);

    const filename = `Corporate_Account_${v.company.name || "client"}.pdf`;
    const arrayBuffer = doc.output("arraybuffer");
    const pdfBase64 = arrayBufferToBase64(arrayBuffer);
    return { filename, pdfBase64 };
  }

  const next = () => setStep(s => Math.min(s + 1, steps.length - 1));
  const back = () => setStep(s => Math.max(s - 1, 0));

  // ---------- submit ----------
  const onSubmit = async (e) => {
    e.preventDefault();
    if (uploadingCount > 0) return;
    setSubmitting(true);
    try {
      const { filename, pdfBase64 } = await generateCorporatePdf(values);
      const emailRes = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          filename,
          pdfBase64,
          subject: "Corporate Account Application PDF",
          html: "<p>The corporate account application PDF is attached.</p>",
        }),
      });
      const emailJson = await emailRes.json();
      if (!emailRes.ok) {
        throw new Error(emailJson?.error || "Failed to email PDF");
      }
      showToast(
        `Corporate application PDF emailed to ${CONTACT_EMAIL}`,
        "success",
        4000
      );
    } catch (err) {
      console.error(err);
      showToast(err?.message || "PDF creation failed.", "error", 5000);
    } finally {
      setSubmitting(false);
    }
  };

  // ---------- UI ----------
  return (
    <section className="s-section pt-60 pb-60">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="mb-20">
              <Stepper steps={steps} activeIndex={step} />
            </div>

            <form onSubmit={onSubmit} className="comment-wrap style-2 cf-form">
              {/* 0) Company */}
              {step === 0 && <StepCompany values={values} updateFromEvent={updateFromEvent} />}

              {/* 1) Bank */}
              {step === 1 && <StepBank values={values} updateFromEvent={updateFromEvent} />}

              {/* 2) Directors & Signatories */}
              {step === 2 && (
                <StepDirectorsSignatories
                  values={values}
                  addDirector={addDirector}
                  addSignatory={addSignatory}
                  updateListItem={updateListItem}
                />
              )}

              {/* 3) Investment & Risk */}
              {step === 3 && <StepInvestmentRisk values={values} updateFromEvent={updateFromEvent} />}

              {/* 4) Documents */}
              {step === 4 && <StepDocuments />}
              

              {/* 5) Board Resolution */}
              {step === 5 && (
                <StepBoardResolution values={values} updateFromEvent={updateFromEvent} update={update} />
              )}
              

              {/* nav */}
              <ActionsBar step={step} steps={steps} onBack={back} onNext={next} onSubmit={onSubmit} submitting={submitting} disabled={uploadingCount > 0} />
            </form>

            <p className="text-xs text-gray-500 mt-6">
              By submitting, you acknowledge the KYC notes: information may be verified via independent sources and shared with regulators; non-resident investors must notarize KYC documents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CorporateForm() {
  return (
    <FormProvider>
      <InnerCorporateForm />
    </FormProvider>
  );
}
