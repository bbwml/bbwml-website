"use client";

import React from "react";
import UploadField from "../form/UploadField";

export default function StepDirectorsSignatories({ values, addDirector, addSignatory, updateListItem }) {
  return (
    <section className="cf-section">
      <h3 className="cf-section__title">Directors & Signatories</h3>

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
                  {["Male","Female"].map(g => (
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
              <div className="cf-field"><label className="cf-label">Mother's Maiden Name</label>
                <input className="cf-input" value={d.mothersMaiden||""} onChange={e=>updateListItem("directors",idx,"mothersMaiden",e.target.value)} />
              </div>
              <div className="cf-field"><label className="cf-label">State of Origin/LGA</label>
                <input className="cf-input" value={d.stateLga||""} onChange={e=>updateListItem("directors",idx,"stateLga",e.target.value)} />
              </div>
              <div className="cf-field"><label className="cf-label">BVN *</label>
                <input className="cf-input" value={d.bvn||""} onChange={e=>updateListItem("directors",idx,"bvn",e.target.value)} required />
              </div>
              <div className="cf-field"><label className="cf-label">Mobile No. *</label>
                <input className="cf-input" value={d.mobile||""} onChange={e=>updateListItem("directors",idx,"mobile",e.target.value)} required />
              </div>
              <div className="cf-field"><label className="cf-label">Telephone</label>
                <input className="cf-input" value={d.telephone||""} onChange={e=>updateListItem("directors",idx,"telephone",e.target.value)} />
              </div>
              <div className="cf-field"><label className="cf-label">Email *</label>
                <input type="email" className="cf-input" value={d.email||""} onChange={e=>updateListItem("directors",idx,"email",e.target.value)} required />
              </div>
              <div className="cf-field cf-field--full"><label className="cf-label">Residential Address *</label>
                <input className="cf-input" value={d.address||""} onChange={e=>updateListItem("directors",idx,"address",e.target.value)} required />
              </div>
              <div className="cf-field cf-field--full"><label className="cf-label">ID Type *</label>
                <select className="cf-select" value={d.idDocs||""} onChange={(e)=> updateListItem("directors", idx, "idDocs", e.target.value)} required>
                  <option value="">Select</option>
                  <option>Drivers Licence</option>
                  <option>International Passport</option>
                  <option>National ID Card</option>
                  <option>Permanent Voters Card</option>
                  <option>Utility Bill</option>
                </select>
              </div>
              <div className="cf-field">
                <UploadField label="Passport Photo" accept="image/*" pathPrefix={`corporate.directors.${idx}.passport`} hint="Image only" />
              </div>
              <div className="cf-field">
                <UploadField label="Signature Image" accept="image/*" pathPrefix={`corporate.directors.${idx}.signature`} hint="Image only" />
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
                  {["Male","Female"].map(g => (
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
              <div className="cf-field">
                <UploadField label="Passport Photo" accept="image/*" pathPrefix={`corporate.signatories.${idx}.passport`} hint="Image only" />
              </div>
              <div className="cf-field">
                <UploadField label="Signature Image" accept="image/*" pathPrefix={`corporate.signatories.${idx}.signature`} hint="Image only" />
              </div>
              <div className="cf-field cf-field--full"><label className="cf-label">ID Type *</label>
                <select className="cf-select" value={s.idDocs||""} onChange={(e)=> updateListItem("signatories", idx, "idDocs", e.target.value)} required>
                  <option value="">Select</option>
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
  );
}

