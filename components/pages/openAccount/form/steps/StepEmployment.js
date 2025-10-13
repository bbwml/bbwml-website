"use client";

import React from "react";
import { useFormCtx } from "../FormProvider";

export default function StepEmployment() {
  const { values, updateFromEvent } = useFormCtx();
  return (
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
  );
}
