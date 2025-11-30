"use client";

import React from "react";
import { useFormCtx } from "../FormProvider";
import SignaturePad from "../SignaturePad";
import UploadField from "../UploadField";

export default function StepRiskDocsSignature() {
  const { values, update, updateFromEvent } = useFormCtx();

  return (
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
        <UploadField
          label="Valid ID"
          accept="image/*,application/pdf"
          pathPrefix="documents.validId"
          required
          hint={values.documents.validIdUrl ? "Uploaded ✓" : "Image or PDF"}
        />
        <UploadField
          label="Utility Bill (≤ 3 months)"
          accept="image/*,application/pdf"
          pathPrefix="documents.utilityBill"
          required
          hint={values.documents.utilityBillUrl ? "Uploaded ✓" : "Image or PDF"}
        />
        <UploadField
          label="Birth Certificate (if applicable)"
          accept="image/*,application/pdf"
          pathPrefix="documents.birthCertificate"
          hint={values.documents.birthCertificateUrl ? "Uploaded ✓" : "Optional"}
        />

        {/* Signature */}
        <div className="cf-field cf-field--full"><label className="cf-label">Signature Name (Surname, First, Other) *</label>
          <input className="cf-input" value={values.signature.nameSurnameFirstOther} onChange={updateFromEvent("signature.nameSurnameFirstOther")} required />
        </div>
        <div className="cf-field"><label className="cf-label">Signature Date *</label>
          <input type="date" className="cf-input" value={values.signature.date} onChange={updateFromEvent("signature.date")} required />
        </div>
        <div className="cf-field cf-field--full">
          <label className="cf-label">Sign on the pad (or upload a photo below)</label>
          <SignaturePad />
        </div>
        <UploadField
          label="Or Upload a Photo of Signature"
          accept="image/*"
          pathPrefix="signature.uploadedSignature"
          hint={values.signature.uploadedSignatureUrl ? "Uploaded ✓" : "Image only"}
        />
      </div>

      {/* Review removed for production */}
    </section>
  );
}
