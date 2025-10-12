"use client";

import React from "react";

export default function StepBank({ values, updateFromEvent }) {
  return (
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
        <div className="cf-field"><label className="cf-label">Date of Opening *</label>
          <input type="date" className="cf-input" value={values.bank.dateOfOpening} onChange={updateFromEvent("bank.dateOfOpening")} required />
        </div>
        <div className="cf-field"><label className="cf-label">Account Type *</label>
          <div className="cf-radio-group">
            {["Savings","Current"].map(t => (
              <label key={t} className="cf-radio-option">
                <input type="radio" name="accttype" value={t} checked={values.bank.accountType===t} onChange={updateFromEvent("bank.accountType")} required />
                <span>{t}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

