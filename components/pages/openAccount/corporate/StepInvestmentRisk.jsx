"use client";

import React from "react";
import UploadField from "../form/UploadField";

export default function StepInvestmentRisk({ values, updateFromEvent }) {
  return (
    <section className="cf-section">
      <h3 className="cf-section__title">Investment & Risk</h3>
      <div className="cf-grid cf-grid--two">
        <div className="cf-field cf-field--full"><label className="cf-label">Management Mode *</label>
          <div className="cf-radio-group">
            {["Discretionary","Non-Discretionary"].map(m => (
              <label key={m} className="cf-radio-option">
                <input type="radio" name="mgmt" value={m} checked={values.investment.managementMode===m} onChange={updateFromEvent("investment.managementMode")} required />
                <span>{m}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="cf-field cf-field--full"><label className="cf-label">Mode of Investment *</label>
          <div className="cf-radio-group">
            {["Cash","Equities"].map(m => (
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
            {["Cheque","Bank Transfer"].map(p => (
              <label key={p} className="cf-radio-option">
                <input type="radio" name="payMode" value={p} checked={values.investment.paymentMode===p} onChange={updateFromEvent("investment.paymentMode")} required />
                <span>{p}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="cf-field"><label className="cf-label">Investment Objective *</label>
          <div className="cf-radio-group">
            {["Capital Preservation","Capital Appreciation","Growth","Income & Growth"].map(o => (
              <label key={o} className="cf-radio-option">
                <input type="radio" name="objective" value={o} checked={values.investment.objective===o} onChange={updateFromEvent("investment.objective")} required />
                <span>{o}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="cf-field"><label className="cf-label">Time Horizon *</label>
          <div className="cf-radio-group">
            {["Immediate Access (1–2 years)","Short Term (2–5 years)","Intermediate (5–10 years)","Long Term (10+ years)"].map(h => (
              <label key={h} className="cf-radio-option">
                <input type="radio" name="horizon" value={h} checked={values.investment.horizon===h} onChange={updateFromEvent("investment.horizon")} required />
                <span>{h}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="cf-field cf-field--full"><label className="cf-label">Liquidity / Income requirement *</label>
          <input className="cf-input" value={values.investment.liquidityNeeds} onChange={updateFromEvent("investment.liquidityNeeds")} required />
        </div>
        {values.investment.modeOfInvestment === "Equities" && (
          <div className="cf-field cf-field--full">
            <UploadField
              label="Equities Schedule (attach if applicable)"
              accept="image/*,application/pdf"
              pathPrefix="corporate.documents.equitiesSchedule"
              hint="Optional"
            />
          </div>
        )}
      </div>
    </section>
  );
}

