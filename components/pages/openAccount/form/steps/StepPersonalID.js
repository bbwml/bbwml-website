"use client";

import React from "react";
import { useFormCtx } from "../FormProvider";
import UploadField from "../UploadField";

export default function StepPersonalID() {
  const { values, updateFromEvent } = useFormCtx();

  return (
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
        <div className="cf-field cf-field--full"><label className="cf-label">Correspondence Address *</label>
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
        <UploadField
          label="Passport Photograph"
          accept="image/*"
          pathPrefix="account.passport"
          required
          hint={values.account.passportUrl ? "Uploaded ✓" : "JPEG/PNG: clear face photo"}
        />
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
  );
}
