"use client";

import React, { useState } from "react";
import { useFormCtx } from "../FormProvider";
import { uploadToCloudinary } from "../../lib/cloudinaryUpload";

export default function StepInvestment() {
  const { values, updateFromEvent, update } = useFormCtx();
  const [busy, setBusy] = useState(false);

  const onEquitiesScheduleChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    try {
      const isImage = file.type.startsWith("image/");
      const up = await uploadToCloudinary(file, { resource_type: isImage ? "image" : "raw" });
      update("documents.equitiesScheduleUrl", up.url);
    } finally { setBusy(false); }
  };

  return (
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
          <input type="file" className="cf-input" onChange={onEquitiesScheduleChange} />
          {busy ? <p className="text-xs text-gray-500">Uploading...</p> : values.documents.equitiesScheduleUrl && <p className="text-xs text-green-700">Uploaded ✓</p>}
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
  );
}
