"use client";

import { useRef, useState } from "react";
import Stepper from "./Stepper";
import jsPDF from "jspdf"; 

const steps = [
  "Personal & ID",
  "Employment",
  "Bank",
  "Next of Kin",
  "Investment & Horizon",
  "Risk/Docs/Signature/Review",
];

export default function IndividualForm() {
  const [step, setStep] = useState(0);

  const [values, setValues] = useState({
    account: {
      title: "",
      surname: "",
      firstName: "",
      otherName: "",
      dob: "",
      nationality: "",
      stateOfOrigin: "",
      lga: "",
      gender: "", // Male | Female
      maritalStatus: "", // Single | Married | Others
      residentialAddress: "",
      correspondenceAddress: "",
      mobile: "",
      altMobile: "",
      email: "",
      mothersMaidenName: "",
      passportPhoto: null, // File
      idType: "",
      idNumber: "",
    },
    employment: {
      status: "", // Employed | Self-Employed | Retired | Others
      employerName: "",
      dateEmployed: "",
      employerAddress: "",
      occupation: "",
      sourceOfIncome: "",
    },
    bank: {
      bankName: "",
      accountName: "",
      accountNo: "",
      bvn: "",
      accountType: "", // Savings | Current
    },
    nok: {
      title: "",
      surname: "",
      firstName: "",
      otherName: "",
      dob: "",
      gender: "",
      relationship: "",
      mobile: "",
      email: "",
      address: "",
    },
    investment: {
      managementMode: "", // Discretionary | Non-Discretionary
      modeOfInvestment: "", // Cash | Equities
      cashAmount: "",
      equitiesWorth: "",
      modeOfPayment: "", // Cheque | Bank Transfer
      objective: "", // Capital Preservation | Capital Appreciation | Growth | Income & Growth
      horizon: "", // 1-2 | 2-5 | 5-10 | 10+
      liquidityNeeds: "",
    },
    risk: { sensitivity: "" }, // High-risk | Moderate | Low-risk
    minors: {
      applicable: false,
      surname: "",
      firstName: "",
      otherName: "",
      relationship: "",
      dob: "",
      residentialAddress: "",
      bvn: "",
      idType: "",
    },
    documents: {
      validId: null,
      utilityBill: null,
      birthCertificate: null,
      equitiesSchedule: null,
    },
    signature: {
      nameSurnameFirstOther: "",
      date: "",
      imageDataUrl: "",        // from canvas
      uploadedSignature: null, // optional photo
    },
  });

  // ---------- state helpers (immutably, keep File objects) ----------
  const setByPath = (obj, path, value) => {
    const keys = path.split(".");
    const newObj = { ...obj };
    let curNew = newObj;
    let curOld = obj;
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
  const update = (path, value) => setValues((prev) => setByPath(prev, path, value));
  const updateFromEvent = (path) => (e) => {
    const { type, checked, value } = e.target;
    update(path, type === "checkbox" ? checked : value);
  };
  const updateFile = (path) => (e) => update(path, e.target.files?.[0] || null);

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  // ---------- signature pad ----------
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
    if (canvasRef.current) update("signature.imageDataUrl", canvasRef.current.toDataURL("image/png"));
  };
  const draw = (e) => {
    if (!drawing.current || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
    const { x, y } = getPos(e);
    ctx.lineWidth = 2; ctx.lineCap = "round"; ctx.strokeStyle = "#111";
    ctx.lineTo(x, y); ctx.stroke(); ctx.beginPath(); ctx.moveTo(x, y);
  };
  const clearSignature = () => {
    const c = canvasRef.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    ctx.clearRect(0, 0, c.width, c.height); update("signature.imageDataUrl", "");
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

  async function generateNeatPdf(vals) {
    const doc = new jsPDF({ unit: "pt", format: "a4", compress: true });
    const page = { w: doc.internal.pageSize.getWidth(), h: doc.internal.pageSize.getHeight() };
    const m = 40;    // margin
    const gap = 10;  // vertical spacing
    let y = m;

    const setFont = (size = 11, bold = false) => {
      doc.setFont("helvetica", bold ? "bold" : "normal");
      doc.setFontSize(size);
    };
    const hr = () => { doc.setDrawColor(220); doc.line(m, y, page.w - m, y); y += gap; };
    const ensureSpace = (needed = 60) => { if (y + needed > page.h - m) { doc.addPage(); y = m; } };

    const section = (title) => {
      y += gap; setFont(13, true); doc.text(title, m, y); y += gap; hr();
    };
    const lineWrap = (label, text = "") => {
      setFont(10, true);
      const labelWidth = doc.getTextWidth(label + ": ");
      const startX = m;
      const valX = m + labelWidth + 2;
      const maxWidth = page.w - m - valX;
      doc.text(label + ":", startX, y);
      setFont(10, false);
      const lines = doc.splitTextToSize(String(text || ""), maxWidth);
      doc.text(lines, valX, y);
      y += lines.length * 14;
    };
    const pair = (items = []) => {
      const colW = (page.w - 2 * m - 20) / 2;
      const baseY = y;
      items.forEach((item, i) => {
        const x = m + i * (colW + 20);
        setFont(10, true); doc.text((item.label || "") + ":", x, baseY);
        setFont(10, false);
        const text = String(item.value ?? "");
        const lines = doc.splitTextToSize(text, colW - 5);
        doc.text(lines, x, baseY + 14);
        y = Math.max(y, baseY + (lines.length * 14));
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
        x += 14 + doc.getTextWidth(" " + opt) + 24;
      });
      y += 18;
    };
    const imageBox = async (dataUrl, x, yTop, w, h) => {
      if (!dataUrl) return;
      try { doc.addImage(dataUrl, "JPEG", x, yTop, w, h, undefined, "FAST"); }
      catch { try { doc.addImage(dataUrl, "PNG", x, yTop, w, h, undefined, "FAST"); } catch {} }
    };

    // Header
    setFont(16, true); doc.text("Individual Account Opening Form", m, y);
    setFont(11, false); doc.text("Generated electronically", page.w - m - doc.getTextWidth("Generated electronically"), y);
    y += 18; hr();

    // Passport (top-right)
    if (vals.account.passportPhoto) {
      const passportUrl = await fileToDataURL(vals.account.passportPhoto);
      const w = 90, h = 110;
      await imageBox(passportUrl, page.w - m - w, y, w, h);
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

    // 2. Employment
    ensureSpace(); section("2. Employment Details");
    checkboxRow("Status", ["Employed", "Self-Employed", "Retired", "Others"], vals.employment.status);
    pair([{ label: "Employer’s Name", value: vals.employment.employerName }, { label: "Date Employed", value: vals.employment.dateEmployed }]);
    lineWrap("Employer’s Address", vals.employment.employerAddress);
    pair([{ label: "Business/Occupation", value: vals.employment.occupation }, { label: "Source of Income", value: vals.employment.sourceOfIncome }]);

    // 3. Bank
    ensureSpace(); section("3. Bank Details");
    pair([{ label: "Bank Name", value: vals.bank.bankName }, { label: "Account Name", value: vals.bank.accountName }]);
    pair([{ label: "Account No.", value: vals.bank.accountNo }, { label: "BVN", value: vals.bank.bvn }]);
    checkboxRow("Account Type", ["Savings", "Current"], vals.bank.accountType);

    // 4. Next of Kin
    ensureSpace(); section("4. Next of Kin");
    pair([{ label: "Title", value: vals.nok.title }, { label: "Gender", value: vals.nok.gender }]);
    pair([{ label: "Surname", value: vals.nok.surname }, { label: "First Name", value: vals.nok.firstName }]);
    pair([{ label: "Other Name", value: vals.nok.otherName }, { label: "Date of Birth", value: vals.nok.dob }]);
    lineWrap("Contact Address", vals.nok.address);
    pair([{ label: "Relationship", value: vals.nok.relationship }, { label: "Mobile No.", value: vals.nok.mobile }]);
    lineWrap("Email", vals.nok.email);

    // 5. Investment & Horizon
    ensureSpace(); section("5. Investment Details & Time Horizon");
    checkboxRow("Management Mode", ["Discretionary", "Non-Discretionary"], vals.investment.managementMode);
    checkboxRow("Mode of Investment", ["Cash", "Equities"], vals.investment.modeOfInvestment);
    pair([{ label: "Cash Amount (₦)", value: vals.investment.cashAmount }, { label: "Equities Worth (₦)", value: vals.investment.equitiesWorth }]);
    checkboxRow("Mode of Payment", ["Cheque", "Bank Transfer"], vals.investment.modeOfPayment);
    checkboxRow("Objective", ["Capital Preservation", "Capital Appreciation", "Growth", "Income & Growth"], vals.investment.objective);
    pair([{ label: "Time Horizon", value: vals.investment.horizon }, { label: "Liquidity / Income Requirement", value: vals.investment.liquidityNeeds }]);

    // 6. Risk, Minors, Documents & Signature
    ensureSpace(); section("6. Risk, Minors (if any), Documents & Signature");
    checkboxRow("Risk Sensitivity", ["High-risk", "Moderate", "Low-risk"], vals.risk.sensitivity);

    if (vals.minors.applicable) {
      setFont(11, true); doc.text("Acting for a Minor: YES", m, y); y += 16;
      pair([{ label: "Guardian Surname", value: vals.minors.surname }, { label: "Guardian First Name", value: vals.minors.firstName }]);
      pair([{ label: "Other Name", value: vals.minors.otherName }, { label: "Relationship", value: vals.minors.relationship }]);
      pair([{ label: "Date of Birth", value: vals.minors.dob }, { label: "BVN", value: vals.minors.bvn }]);
      lineWrap("Residential Address", vals.minors.residentialAddress);
      pair([{ label: "Guardian ID Type", value: vals.minors.idType }, { label: "", value: "" }]);
    } else {
      setFont(11, true); doc.text("Acting for a Minor: NO", m, y); y += 16;
    }

    ensureSpace();
    setFont(11, true); doc.text("Documents Attached:", m, y); y += 16; setFont(10, false);
    const docCheck = (lbl, present) => { doc.text(`${present ? "✓" : "✗"} ${lbl}`, m + 10, y); y += 14; };
    docCheck("Valid ID", !!vals.documents.validId);
    docCheck("Utility Bill (≤ 3 months)", !!vals.documents.utilityBill);
    docCheck("Birth Certificate (if applicable)", !!vals.documents.birthCertificate);
    if (vals.investment.modeOfInvestment === "Equities") docCheck("Equities Schedule", !!vals.documents.equitiesSchedule);

    ensureSpace();
    setFont(11, true); doc.text("Signature", m, y); y += 16; setFont(10, false);
    let sigUrl = vals.signature.imageDataUrl;
    if (!sigUrl && vals.signature.uploadedSignature) sigUrl = await fileToDataURL(vals.signature.uploadedSignature);
    doc.rect(m, y, 250, 70);
    if (sigUrl) await imageBox(sigUrl, m + 2, y + 2, 246, 66);
    doc.text(`Name: ${vals.signature.nameSurnameFirstOther || ""}`, m + 270, y + 18);
    doc.text(`Date: ${vals.signature.date || ""}`, m + 270, y + 36);
    y += 80;

    ensureSpace(); hr();
    setFont(8); doc.text("This document was generated electronically and may be verified against the submitted data.", m, page.h - m);

    const filename = `Individual_Account_${vals.account.surname || "client"}.pdf`;
    doc.save(filename); // triggers download
  }

  // ---------- submit ----------
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await generateNeatPdf(values);
    } catch (err) {
      console.error(err);
      alert("PDF creation failed. See console for details.");
    }
  };

  return (
    <section className="s-section pt-60 pb-60">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="mb-20">
              <Stepper steps={steps} activeIndex={step} />
            </div>

            <form onSubmit={onSubmit} className="comment-wrap style-2 cf-form">
              {/* STEP 0: PERSONAL & ID */}
              {step === 0 && (
                <section className="cf-section">
                  <h3 className="cf-section__title">Personal Information</h3>
                  <div className="cf-grid cf-grid--two">
                    <div className="cf-field"><label className="cf-label">Title *</label>
                      <input className="cf-input" value={values.account.title} onChange={updateFromEvent("account.title")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Gender *</label>
                      <div className="cf-radio-group">
                        {["Male", "Female"].map((g) => (
                          <label key={g} className="cf-radio-option">
                            <input type="radio" name="gender" value={g} checked={values.account.gender === g} onChange={updateFromEvent("account.gender")} required />
                            <span>{g}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="cf-field"><label className="cf-label">Surname *</label>
                      <input className="cf-input" value={values.account.surname} onChange={updateFromEvent("account.surname")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">First Name *</label>
                      <input className="cf-input" value={values.account.firstName} onChange={updateFromEvent("account.firstName")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Other Name</label>
                      <input className="cf-input" value={values.account.otherName} onChange={updateFromEvent("account.otherName")} />
                    </div>
                    <div className="cf-field"><label className="cf-label">Date of Birth *</label>
                      <input type="date" className="cf-input" value={values.account.dob} onChange={updateFromEvent("account.dob")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Nationality (if dual, state) *</label>
                      <input className="cf-input" value={values.account.nationality} onChange={updateFromEvent("account.nationality")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">State of Origin *</label>
                      <input className="cf-input" value={values.account.stateOfOrigin} onChange={updateFromEvent("account.stateOfOrigin")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">L.G.A. *</label>
                      <input className="cf-input" value={values.account.lga} onChange={updateFromEvent("account.lga")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Marital Status *</label>
                      <div className="cf-radio-group">
                        {["Single", "Married", "Others"].map((m) => (
                          <label key={m} className="cf-radio-option">
                            <input type="radio" name="marital" value={m} checked={values.account.maritalStatus === m} onChange={updateFromEvent("account.maritalStatus")} required />
                            <span>{m}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="cf-field cf-field--full"><label className="cf-label">Residential Address *</label>
                      <input className="cf-input" value={values.account.residentialAddress} onChange={updateFromEvent("account.residentialAddress")} required />
                    </div>
                    <div className="cf-field cf-field--full"><label className="cf-label">Correspondence Address (if different) *</label>
                      <input className="cf-input" value={values.account.correspondenceAddress} onChange={updateFromEvent("account.correspondenceAddress")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Mobile No. *</label>
                      <input type="tel" className="cf-input" value={values.account.mobile} onChange={updateFromEvent("account.mobile")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Alternative No. *</label>
                      <input type="tel" className="cf-input" value={values.account.altMobile} onChange={updateFromEvent("account.altMobile")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Email *</label>
                      <input type="email" className="cf-input" value={values.account.email} onChange={updateFromEvent("account.email")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Mother's Maiden Name *</label>
                      <input className="cf-input" value={values.account.mothersMaidenName} onChange={updateFromEvent("account.mothersMaidenName")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Passport Photograph *</label>
                      <input type="file" accept="image/*" className="cf-input" onChange={updateFile("account.passportPhoto")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">ID Type *</label>
                      <select className="cf-select" value={values.account.idType} onChange={updateFromEvent("account.idType")} required>
                        <option value="">Select</option>
                        <option>Drivers Licence</option>
                        <option>International Passport</option>
                        <option>National ID Card</option>
                        <option>Permanent Voters Card</option>
                      </select>
                    </div>
                    <div className="cf-field"><label className="cf-label">ID Number *</label>
                      <input className="cf-input" value={values.account.idNumber} onChange={updateFromEvent("account.idNumber")} required />
                    </div>
                  </div>
                </section>
              )}

              {/* STEP 1: EMPLOYMENT */}
              {step === 1 && (
                <section className="cf-section">
                  <h3 className="cf-section__title">Employment Details</h3>
                  <div className="cf-grid cf-grid--two">
                    <div className="cf-field cf-field--full"><label className="cf-label">Employment Status *</label>
                      <div className="cf-radio-group">
                        {["Employed", "Self-Employed", "Retired", "Others"].map((s) => (
                          <label key={s} className="cf-radio-option">
                            <input type="radio" name="empStatus" value={s} checked={values.employment.status === s} onChange={updateFromEvent("employment.status")} required />
                            <span>{s}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="cf-field"><label className="cf-label">Employer’s Name *</label>
                      <input className="cf-input" value={values.employment.employerName} onChange={updateFromEvent("employment.employerName")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Date Employed *</label>
                      <input type="date" className="cf-input" value={values.employment.dateEmployed} onChange={updateFromEvent("employment.dateEmployed")} required />
                    </div>
                    <div className="cf-field cf-field--full"><label className="cf-label">Employer’s Address *</label>
                      <input className="cf-input" value={values.employment.employerAddress} onChange={updateFromEvent("employment.employerAddress")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Business/Occupation *</label>
                      <input className="cf-input" value={values.employment.occupation} onChange={updateFromEvent("employment.occupation")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Source of Income *</label>
                      <input className="cf-input" value={values.employment.sourceOfIncome} onChange={updateFromEvent("employment.sourceOfIncome")} required />
                    </div>
                  </div>
                </section>
              )}

              {/* STEP 2: BANK */}
              {step === 2 && (
                <section className="cf-section">
                  <h3 className="cf-section__title">Bank Details</h3>
                  <div className="cf-grid cf-grid--two">
                    <div className="cf-field"><label className="cf-label">Bank Name *</label>
                      <input className="cf-input" value={values.bank.bankName} onChange={updateFromEvent("bank.bankName")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Account Name *</label>
                      <input className="cf-input" value={values.bank.accountName} onChange={updateFromEvent("bank.accountName")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Account No. *</label>
                      <input className="cf-input" value={values.bank.accountNo} onChange={updateFromEvent("bank.accountNo")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">BVN *</label>
                      <input className="cf-input" value={values.bank.bvn} onChange={updateFromEvent("bank.bvn")} required />
                    </div>
                    <div className="cf-field cf-field--full"><span className="cf-label">Account Type *</span>
                      <div className="cf-radio-group">
                        {["Savings", "Current"].map((t) => (
                          <label key={t} className="cf-radio-option">
                            <input type="radio" name="acctType" value={t} checked={values.bank.accountType === t} onChange={updateFromEvent("bank.accountType")} required />
                            <span>{t}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* STEP 3: NOK */}
              {step === 3 && (
                <section className="cf-section">
                  <h3 className="cf-section__title">Next of Kin</h3>
                  <div className="cf-grid cf-grid--two">
                    <div className="cf-field"><label className="cf-label">Title</label>
                      <input className="cf-input" value={values.nok.title} onChange={updateFromEvent("nok.title")} />
                    </div>
                    <div className="cf-field"><label className="cf-label">Date of Birth</label>
                      <input type="date" className="cf-input" value={values.nok.dob} onChange={updateFromEvent("nok.dob")} />
                    </div>
                    <div className="cf-field"><label className="cf-label">Gender</label>
                      <div className="cf-radio-group">
                        {["Male", "Female"].map((g) => (
                          <label key={g} className="cf-radio-option">
                            <input type="radio" name="nokGender" value={g} checked={values.nok.gender === g} onChange={updateFromEvent("nok.gender")} />
                            <span>{g}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="cf-field"><label className="cf-label">Surname *</label>
                      <input className="cf-input" value={values.nok.surname} onChange={updateFromEvent("nok.surname")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">First Name *</label>
                      <input className="cf-input" value={values.nok.firstName} onChange={updateFromEvent("nok.firstName")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Other Name</label>
                      <input className="cf-input" value={values.nok.otherName} onChange={updateFromEvent("nok.otherName")} />
                    </div>
                    <div className="cf-field"><label className="cf-label">Relationship *</label>
                      <input className="cf-input" value={values.nok.relationship} onChange={updateFromEvent("nok.relationship")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Mobile No. *</label>
                      <input type="tel" className="cf-input" value={values.nok.mobile} onChange={updateFromEvent("nok.mobile")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Email *</label>
                      <input type="email" className="cf-input" value={values.nok.email} onChange={updateFromEvent("nok.email")} required />
                    </div>
                    <div className="cf-field cf-field--full"><label className="cf-label">Contact Address *</label>
                      <input className="cf-input" value={values.nok.address} onChange={updateFromEvent("nok.address")} required />
                    </div>
                  </div>
                </section>
              )}

              {/* STEP 4: INVESTMENT & HORIZON */}
              {step === 4 && (
                <section className="cf-section">
                  <h3 className="cf-section__title">Investment Details & Time Horizon</h3>
                  <div className="cf-grid cf-grid--two">
                    <div className="cf-field cf-field--full"><span className="cf-label">Management Mode *</span>
                      <div className="cf-radio-group">
                        {["Discretionary", "Non-Discretionary"].map((m) => (
                          <label key={m} className="cf-radio-option">
                            <input type="radio" name="mgmt" value={m} checked={values.investment.managementMode === m} onChange={updateFromEvent("investment.managementMode")} required />
                            <span>{m}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="cf-field cf-field--full"><span className="cf-label">Mode of Investment *</span>
                      <div className="cf-radio-group">
                        {["Cash", "Equities"].map((m) => (
                          <label key={m} className="cf-radio-option">
                            <input type="radio" name="moi" value={m} checked={values.investment.modeOfInvestment === m} onChange={updateFromEvent("investment.modeOfInvestment")} required />
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
                    <div className="cf-field"><label className="cf-label">If equities, attach schedule</label>
                      <input type="file" className="cf-input" onChange={updateFile("documents.equitiesSchedule")} />
                    </div>
                    <div className="cf-field"><label className="cf-label">Mode of Payment *</label>
                      <div className="cf-radio-group">
                        {["Cheque", "Bank Transfer"].map((p) => (
                          <label key={p} className="cf-radio-option">
                            <input type="radio" name="payMode" value={p} checked={values.investment.modeOfPayment === p} onChange={updateFromEvent("investment.modeOfPayment")} required />
                            <span>{p}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="cf-field"><label className="cf-label">Investment Objective *</label>
                      <div className="cf-radio-group">
                        {["Capital Preservation", "Capital Appreciation", "Growth", "Income & Growth"].map((o) => (
                          <label key={o} className="cf-radio-option">
                            <input type="radio" name="objective" value={o} checked={values.investment.objective === o} onChange={updateFromEvent("investment.objective")} required />
                            <span>{o}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="cf-field"><label className="cf-label">Time Horizon *</label>
                      <select className="cf-select" value={values.investment.horizon} onChange={updateFromEvent("investment.horizon")} required>
                        <option value="">Select duration</option>
                        <option value="1-2">Immediate Access (1–2 years)</option>
                        <option value="2-5">Short Term (2–5 years)</option>
                        <option value="5-10">Intermediate (5–10 years)</option>
                        <option value="10+">Long Term (10+ years)</option>
                      </select>
                    </div>
                    <div className="cf-field cf-field--full"><label className="cf-label">Liquidity / Income Requirement *</label>
                      <input className="cf-input" value={values.investment.liquidityNeeds} onChange={updateFromEvent("investment.liquidityNeeds")} required />
                    </div>
                  </div>
                </section>
              )}

              {/* STEP 5: RISK + MINORS + DOCS + SIGNATURE + REVIEW */}
              {step === 5 && (
                <section className="cf-section">
                  <h3 className="cf-section__title">Risk, Minors, Documents & Signature</h3>
                  <div className="cf-grid cf-grid--two">
                    {/* Risk */}
                    <div className="cf-field"><label className="cf-label">Client Risk Sensitivity *</label>
                      <div className="cf-radio-group">
                        {["High-risk", "Moderate", "Low-risk"].map((r) => (
                          <label key={r} className="cf-radio-option">
                            <input type="radio" name="risk" value={r} checked={values.risk.sensitivity === r} onChange={updateFromEvent("risk.sensitivity")} required />
                            <span>{r}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Minors */}
                    <div className="cf-field"><label className="cf-label">Acting for a Minor?</label>
                      <label className="cf-checkbox">
                        <input type="checkbox" checked={values.minors.applicable} onChange={(e) => update("minors.applicable", e.target.checked)} />
                        <span>Yes, provide guardian/parent details</span>
                      </label>
                    </div>

                    {values.minors.applicable && (
                      <>
                        <div className="cf-field"><label className="cf-label">Guardian Surname *</label>
                          <input className="cf-input" value={values.minors.surname} onChange={updateFromEvent("minors.surname")} required />
                        </div>
                        <div className="cf-field"><label className="cf-label">Guardian First Name *</label>
                          <input className="cf-input" value={values.minors.firstName} onChange={updateFromEvent("minors.firstName")} required />
                        </div>
                        <div className="cf-field"><label className="cf-label">Other Name</label>
                          <input className="cf-input" value={values.minors.otherName} onChange={updateFromEvent("minors.otherName")} />
                        </div>
                        <div className="cf-field"><label className="cf-label">Relationship *</label>
                          <input className="cf-input" value={values.minors.relationship} onChange={updateFromEvent("minors.relationship")} required />
                        </div>
                        <div className="cf-field"><label className="cf-label">Date of Birth *</label>
                          <input type="date" className="cf-input" value={values.minors.dob} onChange={updateFromEvent("minors.dob")} required />
                        </div>
                        <div className="cf-field cf-field--full"><label className="cf-label">Residential Address *</label>
                          <input className="cf-input" value={values.minors.residentialAddress} onChange={updateFromEvent("minors.residentialAddress")} required />
                        </div>
                        <div className="cf-field"><label className="cf-label">BVN *</label>
                          <input className="cf-input" value={values.minors.bvn} onChange={updateFromEvent("minors.bvn")} required />
                        </div>
                        <div className="cf-field"><label className="cf-label">ID Type *</label>
                          <select className="cf-select" value={values.minors.idType} onChange={updateFromEvent("minors.idType")} required>
                            <option value="">Select</option>
                            <option>Drivers Licence</option>
                            <option>International Passport</option>
                            <option>National ID Card</option>
                            <option>Permanent Voters Card</option>
                          </select>
                        </div>
                      </>
                    )}

                    {/* Documents */}
                    <div className="cf-field"><label className="cf-label">Valid ID *</label>
                      <input type="file" accept="image/*,application/pdf" className="cf-input" onChange={updateFile("documents.validId")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Utility Bill (≤ 3 months) *</label>
                      <input type="file" accept="image/*,application/pdf" className="cf-input" onChange={updateFile("documents.utilityBill")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Birth Certificate (if applicable)</label>
                      <input type="file" accept="image/*,application/pdf" className="cf-input" onChange={updateFile("documents.birthCertificate")} />
                    </div>

                    {/* Signature */}
                    <div className="cf-field cf-field--full"><label className="cf-label">Signature Name (Surname, First, Other) *</label>
                      <input className="cf-input" value={values.signature.nameSurnameFirstOther} onChange={updateFromEvent("signature.nameSurnameFirstOther")} required />
                    </div>
                    <div className="cf-field"><label className="cf-label">Signature Date *</label>
                      <input type="date" className="cf-input" value={values.signature.date} onChange={updateFromEvent("signature.date")} required />
                    </div>
                    <div className="cf-field cf-field--full">
                      <label className="cf-label">Sign on the pad (or upload a photo below)</label>
                      <div className="p-3 border rounded-2xl bg-white">
                        <canvas
                          ref={canvasRef}
                          width={600}
                          height={180}
                          className="w-full h-[180px] border rounded-xl bg-white"
                          onMouseDown={startDraw}
                          onMouseUp={endDraw}
                          onMouseMove={draw}
                          onMouseLeave={endDraw}
                          onTouchStart={startDraw}
                          onTouchEnd={endDraw}
                          onTouchMove={draw}
                        />
                        <div className="mt-2 flex gap-2">
                          <button type="button" onClick={clearSignature} className="tf-btn style-9 small back-accent">Clear</button>
                          {values.signature.imageDataUrl && <span className="text-xs text-gray-600">Signature captured ✓</span>}
                        </div>
                      </div>
                    </div>
                    <div className="cf-field"><label className="cf-label">Or Upload a Photo of Signature</label>
                      <input type="file" accept="image/*" className="cf-input" onChange={updateFile("signature.uploadedSignature")} />
                    </div>
                  </div>

                  {/* Review JSON */}
                  <div className="cf-review mt-6">
                    <p className="cf-review__hint">Review your entries, then submit.</p>
                    <pre className="cf-review__json">{JSON.stringify(values, null, 2)}</pre>
                  </div>
                </section>
              )}

              <div className="cf-actions">
                <button type="button" onClick={back} className="tf-btn style-9 small back-accent" disabled={step === 0}>Back</button>
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
