"use client";

import { useRef, useState } from "react";
import Stepper from "./Stepper";
import jsPDF from "jspdf"; // npm i jspdf

const steps = [
  "Company",
  "Bank",
  "Directors & Signatories",
  "Investment & Risk",
  "Documents",
  "Board Resolution & Review",
];

export default function CorporateForm() {
  const [step, setStep] = useState(0);

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

  async function generateCorporatePdf(v) {
    const doc = new jsPDF({ unit: "pt", format: "a4", compress: true });
    const page = { w: doc.internal.pageSize.getWidth(), h: doc.internal.pageSize.getHeight() };
    const m = 40, gap = 10; let y = m;
    const setFont = (size=11,bold=false)=>{ doc.setFont("helvetica", bold?"bold":"normal"); doc.setFontSize(size); };
    const hr = ()=>{ doc.setDrawColor(220); doc.line(m,y,page.w-m,y); y += gap; };
    const ensure = (need=60)=>{ if (y+need>page.h-m){ doc.addPage(); y=m; } };
    const labelWrap = (label, text="")=>{
      setFont(10,true); const lw = doc.getTextWidth(label+": "); const sx = m; const vx = m+lw+2; const mw = page.w-m-vx;
      doc.text(label+":", sx, y); setFont(10,false);
      const lines = doc.splitTextToSize(String(text||""), mw);
      doc.text(lines, vx, y); y += lines.length*14;
    };
    const pair = (pairs=[])=>{
      const colW = (page.w-2*m-20)/2; const baseY=y;
      pairs.forEach((p,i)=>{
        const x = m+i*(colW+20);
        setFont(10,true); doc.text((p.label||"")+":", x, baseY);
        setFont(10,false);
        const t = String(p.value??""); const lines = doc.splitTextToSize(t, colW-5);
        doc.text(lines, x, baseY+14);
        y = Math.max(y, baseY + lines.length*14);
      });
      y += gap;
    };
    const checkRow = (label, options=[], selected)=>{
      setFont(10,true); doc.text(label+":", m, y); setFont(10,false);
      let x = m + doc.getTextWidth(label+": ") + 6;
      options.forEach(opt=>{
        doc.rect(x, y-8, 10, 10);
        if (selected===opt){ doc.setLineWidth(1); doc.line(x,y-8,x+10,y+2); doc.line(x,y+2,x+10,y-8); doc.setLineWidth(0.2); }
        doc.text(" "+opt, x+14, y);
        x += 14 + doc.getTextWidth(" "+opt) + 24;
      }); y += 18;
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
      labelWrap("Identification Documents", (d?.idDocs||[]).join(", "));
      // Passport & signature images
      let yStart = y; const boxH = 80;
      if (d?.passport){ const u = await fileToDataURL(d.passport); await addImageAuto(doc, u, m, yStart, 90, boxH); }
      if (d?.signatureImg){ const u = await fileToDataURL(d.signatureImg); await addImageAuto(doc, u, m+100, yStart, 140, boxH); }
      if (d?.passport || d?.signatureImg) y = yStart + boxH + gap;
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
      labelWrap("Identification Documents", (s?.idDocs||[]).join(", "));
      // Passport & signature image
      let yStart = y; const boxH = 80;
      if (s?.passport){ const u = await fileToDataURL(s.passport); await addImageAuto(doc, u, m, yStart, 90, boxH); }
      if (s?.signatureImg){ const u = await fileToDataURL(s.signatureImg); await addImageAuto(doc, u, m+100, yStart, 140, boxH); }
      if (s?.passport || s?.signatureImg) y = yStart + boxH + gap;
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
    const docCheck = (lbl, present) => { doc.text(`${present?"✓":"✗"} ${lbl}`, m+10, y); y += 14; };
    docCheck("Certificate of Incorporation", !!v.documents.certificateOfIncorporation);
    docCheck("Memorandum & Articles of Association (MEMART)", !!v.documents.memart);
    docCheck("CAC Form CO7 (Particulars of Directors)", !!v.documents.cacCO7Directors);
    docCheck("CAC Form CO2 (Allotment of Shares)", !!v.documents.cacCO2Allotment);
    docCheck("Board Resolution", !!v.documents.boardResolution);
    docCheck("Valid ID of Directors & Authorized Signatories", !!v.documents.idsDirectorsSignatories);
    docCheck("Company Utility Bill (≤ 3 months)", !!v.documents.companyUtilityBill);
    docCheck("Passport Photos of Directors & Signatories", !!v.documents.passportsDirectorsSignatories);
    docCheck("SCUML Certificate (if applicable)", !!v.documents.scuml);
    if (v.investment.modeOfInvestment === "Equities") docCheck("Equities Schedule (if applicable)", !!v.documents.equitiesSchedule);

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

    // Passport
    if (v.boardResolution.authorizedPerson.passport) {
      const u = await fileToDataURL(v.boardResolution.authorizedPerson.passport);
      await addImageAuto(doc, u, m, y, 90, 110);
    }
    // Signature: pad preferred else uploaded img
    let sigUrl = v.boardResolution.authorizedPerson.signaturePadDataUrl;
    if (!sigUrl && v.boardResolution.authorizedPerson.signatureImg) {
      sigUrl = await fileToDataURL(v.boardResolution.authorizedPerson.signatureImg);
    }
    doc.rect(m+110, y, 220, 80);
    if (sigUrl) await addImageAuto(doc, sigUrl, m+112, y+2, 216, 76);
    y += 120;

    // Footer
    ensure(); hr();
    setFont(8,false);
    doc.text("This document was generated electronically and may be verified against the submitted data. Investors resident outside Nigeria must notarize KYC documents.", m, page.h - m);

    doc.save(`Corporate_Account_${v.company.name || "client"}.pdf`);
  }

  const next = () => setStep(s => Math.min(s + 1, steps.length - 1));
  const back = () => setStep(s => Math.max(s - 1, 0));

  // ---------- submit ----------
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await generateCorporatePdf(values);
    } catch (err) {
      console.error(err);
      alert("PDF creation failed. See console for details.");
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
              {step === 0 && (
                <section className="cf-section">
                  <h3 className="cf-section__title">Company Details</h3>
                  <div className="cf-grid cf-grid--two">
                    <div className="cf-field"><label className="cf-label">Registered Company Name *</label>
                      <input className="cf-input" value={values.company.name} onChange={updateFromEvent("company.name")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">RC/BN Number *</label>
                      <input className="cf-input" value={values.company.rcNumber} onChange={updateFromEvent("company.rcNumber")} required />
                    </div>
                    <div className="cf-field cf-field--full"><label className="cf-label">Registered Address *</label>
                      <input className="cf-input" value={values.company.address} onChange={updateFromEvent("company.address")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Company Email *</label>
                      <input type="email" className="cf-input" value={values.company.email} onChange={updateFromEvent("company.email")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Company Phone *</label>
                      <input type="tel" className="cf-input" value={values.company.phone} onChange={updateFromEvent("company.phone")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Website</label>
                      <input className="cf-input" value={values.company.website} onChange={updateFromEvent("company.website")} />
                    </div>
                    <div className="cf-field"><label className="cf-label">Date of Incorporation *</label>
                      <input type="date" className="cf-input" value={values.company.dateOfIncorporation} onChange={updateFromEvent("company.dateOfIncorporation")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Tax Identification Number (TIN) *</label>
                      <input className="cf-input" value={values.company.tin} onChange={updateFromEvent("company.tin")} required />
                    </div>
                    <div className="cf-field cf-field--full"><label className="cf-label">Nature of Business *</label>
                      <input className="cf-input" value={values.company.natureOfBusiness} onChange={updateFromEvent("company.natureOfBusiness")} required />
                    </div>
                    <div className="cf-field cf-field--full"><label className="cf-label">Annual Turnover *</label>
                      <div className="cf-radio-group">
                        {["<50 Million","50 Million - 99.9 Million","100 Million - 499.9 Million","500 - 999.9 Million","1 Billion - 4.9 Billion","5 Billion & Above"].map(t => (
                          <label key={t} className="cf-radio-option">
                            <input type="radio" name="turnover" value={t} checked={values.company.annualTurnover===t} onChange={updateFromEvent("company.annualTurnover")} required />
                            <span>{t}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* 1) Bank */}
              {step === 1 && (
                <section className="cf-section">
                  <h3 className="cf-section__title">Bank Details</h3>
                  <div className="cf-grid cf-grid--two">
                    <div className="cf-field"><label className="cf-label">Bank Name *</label>
                      <input className="cf-input" value={values.bank.bankName} onChange={updateFromEvent("bank.bankName")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Account No. *</label>
                      <input className="cf-input" value={values.bank.accountNo} onChange={updateFromEvent("bank.accountNo")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Account Name *</label>
                      <input className="cf-input" value={values.bank.accountName} onChange={updateFromEvent("bank.accountName")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">BVN *</label>
                      <input className="cf-input" value={values.bank.bvn} onChange={updateFromEvent("bank.bvn")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Date of Opening</label>
                      <input type="date" className="cf-input" value={values.bank.dateOfOpening} onChange={updateFromEvent("bank.dateOfOpening")} />
                    </div>
                    <div className="cf-field cf-field--full"><label className="cf-label">Account Type *</label>
                      <div className="cf-radio-group">
                        {["Savings","Current"].map(t => (
                          <label key={t} className="cf-radio-option">
                            <input type="radio" name="acctType" value={t} checked={values.bank.accountType===t} onChange={updateFromEvent("bank.accountType")} required />
                            <span>{t}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* 2) Directors & Signatories */}
              {step === 2 && (
                <section className="cf-section">
                  <div className="cf-section__header">
                    <h3 className="cf-section__title">Directors & Authorized Signatories</h3>
                  </div>

                  {/* Directors */}
                  <header className="cf-card__header"><h4 className="cf-card__title">Directors</h4></header>
                  <div className="cf-stack">
                    {(values.directors || []).map((d, idx) => (
                      <article key={idx} className="cf-card">
                        <h5 className="cf-card__title">Director {idx+1}</h5>
                        <div className="cf-grid cf-grid--two">
                          <div className="cf-field"><label className="cf-label">Title</label>
                            <input className="cf-input" value={d.title||""} onChange={e=>updateListItem("directors",idx,"title",e.target.value)} />
                          </div>
                          <div className="cf-field"><label className="cf-label">Gender</label>
                            <div className="cf-radio-group">
                              {["Male","Female"].map(g=>(
                                <label key={g} className="cf-radio-option">
                                  <input type="radio" name={`d-g-${idx}`} value={g} checked={d.gender===g} onChange={e=>updateListItem("directors",idx,"gender",e.target.value)} />
                                  <span>{g}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                          <div className="cf-field"><label className="cf-label">Surname *</label>
                            <input className="cf-input" value={d.surname||""} onChange={e=>updateListItem("directors",idx,"surname",e.target.value)} required />
                          </div>
                          <div className="cf-field"><label className="cf-label">First Name *</label>
                            <input className="cf-input" value={d.firstName||""} onChange={e=>updateListItem("directors",idx,"firstName",e.target.value)} required />
                          </div>
                          <div className="cf-field"><label className="cf-label">Other Name</label>
                            <input className="cf-input" value={d.otherName||""} onChange={e=>updateListItem("directors",idx,"otherName",e.target.value)} />
                          </div>
                          <div className="cf-field"><label className="cf-label">Date of Birth *</label>
                            <input type="date" className="cf-input" value={d.dob||""} onChange={e=>updateListItem("directors",idx,"dob",e.target.value)} required />
                          </div>
                          <div className="cf-field"><label className="cf-label">Mother's Maiden Name *</label>
                            <input className="cf-input" value={d.mothersMaiden||""} onChange={e=>updateListItem("directors",idx,"mothersMaiden",e.target.value)} required />
                          </div>
                          <div className="cf-field"><label className="cf-label">State of Origin / LGA *</label>
                            <input className="cf-input" value={d.stateLga||""} onChange={e=>updateListItem("directors",idx,"stateLga",e.target.value)} required />
                          </div>
                          <div className="cf-field"><label className="cf-label">BVN</label>
                            <input className="cf-input" value={d.bvn||""} onChange={e=>updateListItem("directors",idx,"bvn",e.target.value)} />
                          </div>
                          <div className="cf-field cf-field--full"><label className="cf-label">Residential Address *</label>
                            <input className="cf-input" value={d.address||""} onChange={e=>updateListItem("directors",idx,"address",e.target.value)} required />
                          </div>
                          <div className="cf-field"><label className="cf-label">Mobile No. *</label>
                            <input className="cf-input" value={d.mobile||""} onChange={e=>updateListItem("directors",idx,"mobile",e.target.value)} required />
                          </div>
                          <div className="cf-field"><label className="cf-label">Telephone</label>
                            <input className="cf-input" value={d.telephone||""} onChange={e=>updateListItem("directors",idx,"telephone",e.target.value)} />
                          </div>
                          <div className="cf-field"><label className="cf-label">Email</label>
                            <input type="email" className="cf-input" value={d.email||""} onChange={e=>updateListItem("directors",idx,"email",e.target.value)} />
                          </div>
                          <div className="cf-field cf-field--full"><label className="cf-label">ID/Address Documents</label>
                            <select multiple className="cf-select cf-select--multi" value={d.idDocs||[]} onChange={(e)=>{
                              const opts = Array.from(e.target.selectedOptions).map(o=>o.value);
                              updateListItem("directors",idx,"idDocs",opts);
                            }}>
                              <option>Drivers Licence</option>
                              <option>International Passport</option>
                              <option>National ID Card</option>
                              <option>Permanent Voters Card</option>
                              <option>Utility Bill</option>
                            </select>
                          </div>
                          <div className="cf-field"><label className="cf-label">Passport Photo</label>
                            <input type="file" accept="image/*" className="cf-input" onChange={e=>updateListItem("directors",idx,"passport",e.target.files?.[0]||null)} />
                          </div>
                          <div className="cf-field"><label className="cf-label">Signature Image</label>
                            <input type="file" accept="image/*" className="cf-input" onChange={e=>updateListItem("directors",idx,"signatureImg",e.target.files?.[0]||null)} />
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                  <button type="button" onClick={addDirector} className="tf-btn style-9 small cf-accent mt-10">+ Add director</button>

                  {/* Signatories */}
                  <header className="cf-card__header mt-20"><h4 className="cf-card__title">Authorized Signatories</h4></header>
                  <div className="cf-stack">
                    {(values.signatories || []).map((s, idx) => (
                      <article key={idx} className="cf-card">
                        <h5 className="cf-card__title">Signatory {idx+1}</h5>
                        <div className="cf-grid cf-grid--two">
                          <div className="cf-field"><label className="cf-label">Title</label>
                            <input className="cf-input" value={s.title||""} onChange={e=>updateListItem("signatories",idx,"title",e.target.value)} />
                          </div>
                          <div className="cf-field"><label className="cf-label">Gender</label>
                            <div className="cf-radio-group">
                              {["Male","Female"].map(g=>(
                                <label key={g} className="cf-radio-option">
                                  <input type="radio" name={`s-g-${idx}`} value={g} checked={s.gender===g} onChange={e=>updateListItem("signatories",idx,"gender",e.target.value)} />
                                  <span>{g}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                          <div className="cf-field"><label className="cf-label">Surname *</label>
                            <input className="cf-input" value={s.surname||""} onChange={e=>updateListItem("signatories",idx,"surname",e.target.value)} required />
                          </div>
                          <div className="cf-field"><label className="cf-label">First Name *</label>
                            <input className="cf-input" value={s.firstName||""} onChange={e=>updateListItem("signatories",idx,"firstName",e.target.value)} required />
                          </div>
                          <div className="cf-field"><label className="cf-label">Other Name</label>
                            <input className="cf-input" value={s.otherName||""} onChange={e=>updateListItem("signatories",idx,"otherName",e.target.value)} />
                          </div>
                          <div className="cf-field"><label className="cf-label">Designation *</label>
                            <input className="cf-input" value={s.designation||""} onChange={e=>updateListItem("signatories",idx,"designation",e.target.value)} required />
                          </div>
                          <div className="cf-field"><label className="cf-label">Class *</label>
                            <select className="cf-select" value={s.class||""} onChange={e=>updateListItem("signatories",idx,"class",e.target.value)} required>
                              <option value="">Select class</option><option value="A">A</option><option value="B">B</option>
                            </select>
                          </div>
                          <div className="cf-field"><label className="cf-label">Date of Birth *</label>
                            <input type="date" className="cf-input" value={s.dob||""} onChange={e=>updateListItem("signatories",idx,"dob",e.target.value)} required />
                          </div>
                          <div className="cf-field"><label className="cf-label">Email *</label>
                            <input type="email" className="cf-input" value={s.email||""} onChange={e=>updateListItem("signatories",idx,"email",e.target.value)} required />
                          </div>
                          <div className="cf-field cf-field--full"><label className="cf-label">Residential Address *</label>
                            <input className="cf-input" value={s.address||""} onChange={e=>updateListItem("signatories",idx,"address",e.target.value)} required />
                          </div>
                          <div className="cf-field"><label className="cf-label">BVN *</label>
                            <input className="cf-input" value={s.bvn||""} onChange={e=>updateListItem("signatories",idx,"bvn",e.target.value)} required />
                          </div>
                          <div className="cf-field"><label className="cf-label">Mobile No. *</label>
                            <input className="cf-input" value={s.mobile||""} onChange={e=>updateListItem("signatories",idx,"mobile",e.target.value)} required />
                          </div>
                          <div className="cf-field"><label className="cf-label">Telephone</label>
                            <input className="cf-input" value={s.telephone||""} onChange={e=>updateListItem("signatories",idx,"telephone",e.target.value)} />
                          </div>
                          <div className="cf-field"><label className="cf-label">Passport Photo</label>
                            <input type="file" accept="image/*" className="cf-input" onChange={e=>updateListItem("signatories",idx,"passport",e.target.files?.[0]||null)} />
                          </div>
                          <div className="cf-field"><label className="cf-label">Signature (upload image)</label>
                            <input type="file" accept="image/*" className="cf-input" onChange={e=>updateListItem("signatories",idx,"signatureImg",e.target.files?.[0]||null)} />
                          </div>
                          <div className="cf-field cf-field--full"><label className="cf-label">ID/Address Documents</label>
                            <select multiple className="cf-select cf-select--multi" value={s.idDocs||[]} onChange={(e)=>{
                              const opts = Array.from(e.target.selectedOptions).map(o=>o.value);
                              updateListItem("signatories",idx,"idDocs",opts);
                            }}>
                              <option>Drivers Licence</option>
                              <option>International Passport</option>
                              <option>National ID Card</option>
                              <option>Permanent Voters Card</option>
                              <option>Utility Bill</option>
                            </select>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                  <button type="button" onClick={addSignatory} className="tf-btn style-9 small cf-accent mt-10">+ Add signatory</button>
                </section>
              )}

              {/* 3) Investment & Risk */}
              {step === 3 && (
                <section className="cf-section">
                  <h3 className="cf-section__title">Investment & Risk</h3>
                  <div className="cf-grid cf-grid--two">
                    <div className="cf-field cf-field--full"><label className="cf-label">Management Mode *</label>
                      <div className="cf-radio-group">
                        {["Discretionary","Non-Discretionary"].map(m=>(
                          <label key={m} className="cf-radio-option">
                            <input type="radio" name="mgmt" value={m} checked={values.investment.managementMode===m} onChange={updateFromEvent("investment.managementMode")} required />
                            <span>{m}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="cf-field cf-field--full"><label className="cf-label">Mode of Investment *</label>
                      <div className="cf-radio-group">
                        {["Cash","Equities"].map(m=>(
                          <label key={m} className="cf-radio-option">
                            <input type="radio" name="moi" value={m} checked={values.investment.modeOfInvestment===m} onChange={updateFromEvent("investment.modeOfInvestment")} required />
                            <span>{m}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="cf-field"><label className="cf-label">Cash Amount (₦)</label>
                      <input className="cf-input" value={values.investment.cashAmount} onChange={updateFromEvent("investment.cashAmount")} placeholder="0.00" />
                    </div>
                    <div className="cf-field"><label className="cf-label">Equities Worth (₦)</label>
                      <input className="cf-input" value={values.investment.equitiesWorth} onChange={updateFromEvent("investment.equitiesWorth")} placeholder="0.00" />
                    </div>
                    <div className="cf-field"><label className="cf-label">Mode of Payment *</label>
                      <div className="cf-radio-group">
                        {["Cheque","Bank Transfer"].map(p=>(
                          <label key={p} className="cf-radio-option">
                            <input type="radio" name="payMode" value={p} checked={values.investment.paymentMode===p} onChange={updateFromEvent("investment.paymentMode")} required />
                            <span>{p}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="cf-field"><label className="cf-label">Investment Objective *</label>
                      <div className="cf-radio-group">
                        {["Capital Preservation","Capital Appreciation","Growth","Income & Growth"].map(o=>(
                          <label key={o} className="cf-radio-option">
                            <input type="radio" name="objective" value={o} checked={values.investment.objective===o} onChange={updateFromEvent("investment.objective")} required />
                            <span>{o}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="cf-field"><label className="cf-label">Time Horizon *</label>
                      <select className="cf-select" value={values.investment.horizon} onChange={updateFromEvent("investment.horizon")} required>
                        <option value="">Select duration</option>
                        <option value="Immediate Access (1–2 years)">Immediate Access (1–2 years)</option>
                        <option value="Short Term (2–5 years)">Short Term (2–5 years)</option>
                        <option value="Intermediate (5–10 years)">Intermediate (5–10 years)</option>
                        <option value="Long Term (10+ years)">Long Term (10+ years)</option>
                      </select>
                    </div>
                    <div className="cf-field"><label className="cf-label">Client Risk Sensitivity *</label>
                      <div className="cf-radio-group">
                        {["High-risk","Moderate","Low-risk"].map(r=>(
                          <label key={r} className="cf-radio-option">
                            <input type="radio" name="risk" value={r} checked={values.investment.riskSensitivity===r} onChange={updateFromEvent("investment.riskSensitivity")} required />
                            <span>{r}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="cf-field cf-field--full"><label className="cf-label">Liquidity / Income requirement *</label>
                      <input className="cf-input" value={values.investment.liquidityNeeds} onChange={updateFromEvent("investment.liquidityNeeds")} required />
                    </div>
                    {values.investment.modeOfInvestment === "Equities" && (
                      <div className="cf-field cf-field--full"><label className="cf-label">Equities Schedule (attach if applicable)</label>
                        <input type="file" className="cf-input" onChange={updateFile("documents.equitiesSchedule")} />
                      </div>
                    )}
                  </div>
                </section>
              )}

              {/* 4) Documents */}
              {step === 4 && (
                <section className="cf-section">
                  <h3 className="cf-section__title">Required Documents</h3>
                  <div className="cf-grid cf-grid--two">
                    <div className="cf-field"><label className="cf-label">Certificate of Incorporation *</label>
                      <input type="file" className="cf-input" onChange={updateFile("documents.certificateOfIncorporation")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">MEMART *</label>
                      <input type="file" className="cf-input" onChange={updateFile("documents.memart")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">CAC Form CO7 (Directors) *</label>
                      <input type="file" className="cf-input" onChange={updateFile("documents.cacCO7Directors")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">CAC Form CO2 (Allotment) *</label>
                      <input type="file" className="cf-input" onChange={updateFile("documents.cacCO2Allotment")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Board Resolution *</label>
                      <input type="file" className="cf-input" onChange={updateFile("documents.boardResolution")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Valid IDs (Directors & Signatories) *</label>
                      <input type="file" className="cf-input" onChange={updateFile("documents.idsDirectorsSignatories")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Company Utility Bill (≤ 3 months) *</label>
                      <input type="file" className="cf-input" onChange={updateFile("documents.companyUtilityBill")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Passport Photos (Directors & Signatories) *</label>
                      <input type="file" className="cf-input" onChange={updateFile("documents.passportsDirectorsSignatories")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">SCUML Certificate (if applicable)</label>
                      <input type="file" className="cf-input" onChange={updateFile("documents.scuml")} />
                    </div>
                  </div>
                </section>
              )}

              {/* 5) Board Resolution & Review */}
              {step === 5 && (
                <section className="cf-section">
                  <h3 className="cf-section__title">Board Resolution & Review</h3>
                  <div className="cf-grid cf-grid--two">
                    <div className="cf-field"><label className="cf-label">Meeting Date *</label>
                      <input type="date" className="cf-input" value={values.boardResolution.meetingDate} onChange={updateFromEvent("boardResolution.meetingDate")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Meeting Place *</label>
                      <input className="cf-input" value={values.boardResolution.meetingPlace} onChange={updateFromEvent("boardResolution.meetingPlace")} required />
                    </div>
                    <div className="cf-field cf-field--full"><label className="cf-label">Open account with (Institution) *</label>
                      <input className="cf-input" value={values.boardResolution.bankOrFirmName} onChange={updateFromEvent("boardResolution.bankOrFirmName")} required />
                    </div>

                    <div className="cf-field cf-field--full"><label className="cf-label">Authorized Person</label></div>
                    <div className="cf-field"><label className="cf-label">Title</label>
                      <input className="cf-input" value={values.boardResolution.authorizedPerson.title} onChange={updateFromEvent("boardResolution.authorizedPerson.title")} />
                    </div>
                    <div className="cf-field"><label className="cf-label">Designation</label>
                      <input className="cf-input" value={values.boardResolution.authorizedPerson.designation} onChange={updateFromEvent("boardResolution.authorizedPerson.designation")} />
                    </div>
                    <div className="cf-field"><label className="cf-label">First Name *</label>
                      <input className="cf-input" value={values.boardResolution.authorizedPerson.firstName} onChange={updateFromEvent("boardResolution.authorizedPerson.firstName")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Other Name</label>
                      <input className="cf-input" value={values.boardResolution.authorizedPerson.otherName} onChange={updateFromEvent("boardResolution.authorizedPerson.otherName")} />
                    </div>
                    <div className="cf-field"><label className="cf-label">Class *</label>
                      <select className="cf-select" value={values.boardResolution.authorizedPerson.class} onChange={updateFromEvent("boardResolution.authorizedPerson.class")} required>
                        <option value="">Select class</option><option value="A">A</option><option value="B">B</option>
                      </select>
                    </div>
                    <div className="cf-field"><label className="cf-label">Resolution Date *</label>
                      <input type="date" className="cf-input" value={values.boardResolution.authorizedPerson.date} onChange={updateFromEvent("boardResolution.authorizedPerson.date")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Authorized Person Passport</label>
                      <input type="file" accept="image/*" className="cf-input" onChange={updateFile("boardResolution.authorizedPerson.passport")} />
                    </div>
                    <div className="cf-field"><label className="cf-label">Authorized Person Signature (upload)</label>
                      <input type="file" accept="image/*" className="cf-input" onChange={updateFile("boardResolution.authorizedPerson.signatureImg")} />
                    </div>
                    <div className="cf-field cf-field--full">
                      <label className="cf-label">Or Sign on the pad</label>
                      <div className="p-3 border rounded-2xl bg-white">
                        <canvas
                          ref={canvasRef}
                          width={600}
                          height={160}
                          className="w-full h-[160px] border rounded-xl bg-white"
                          onMouseDown={startDraw}
                          onMouseUp={endDraw}
                          onMouseMove={draw}
                          onMouseLeave={endDraw}
                          onTouchStart={startDraw}
                          onTouchEnd={endDraw}
                          onTouchMove={draw}
                        />
                        <div className="mt-2 flex gap-2">
                          <button type="button" onClick={clearPad} className="tf-btn style-9 small back-accent">Clear</button>
                          {values.boardResolution.authorizedPerson.signaturePadDataUrl && <span className="text-xs text-gray-600">Signature captured ✓</span>}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Review JSON */}
                  <div className="cf-review mt-6">
                    <p className="cf-review__hint">Review your entries, then submit to download a clean PDF.</p>
                    <pre className="cf-review__json">{JSON.stringify(values, null, 2)}</pre>
                  </div>
                </section>
              )}

              {/* nav */}
              <div className="cf-actions">
                <button type="button" onClick={back} className="tf-btn style-9 small back-accent" disabled={step===0}>Back</button>
                {step < steps.length - 1 ? (
                  <button type="button" onClick={next} className="tf-btn text-anime-style-1">Next <i className="icon-chevron-right" /></button>
                ) : (
                  <button type="submit" className="tf-btn text-anime-style-1">Submit <i className="icon-chevron-right" /></button>
                )}
              </div>
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
