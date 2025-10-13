"use client";

import React from "react";

export default function StepCompany({ values, updateFromEvent }) {
  return (
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
  );
}

