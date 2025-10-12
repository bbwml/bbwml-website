"use client";

import React from "react";
import { useFormCtx } from "../FormProvider";

export default function StepNOK() {
  const { values, updateFromEvent } = useFormCtx();
  return (
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
  );
}
