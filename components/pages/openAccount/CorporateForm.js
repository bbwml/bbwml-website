"use client";
import { useState } from "react";
import Stepper from "./Stepper";

const steps = ["Company", "Account", "Signatories", "Investment", "Review"];

export default function CorporateForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState({ accountType: "", managementMode: "", modeOfInvestment: "", signatories: [{ }] });

  const update = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((v) => ({ ...v, [name]: type === "checkbox" ? checked : value }));
  };
  const updateSignatory = (idx, field, val) => {
    setValues((v) => {
      const next = { ...v };
      const list = Array.isArray(next.signatories) ? [...next.signatories] : [];
      list[idx] = { ...list[idx], [field]: val };
      next.signatories = list;
      return next;
    });
  };
  const addSignatory = () => {
    setValues((v) => ({ ...v, signatories: [...(v.signatories || []), {}] }));
  };
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Submitted! Our team will reach out.");
  };

  return (
    <section className="s-section pt-60 pb-60">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="mb-20">
              <Stepper steps={steps} activeIndex={step} />
            </div>
            <form onSubmit={onSubmit} className="comment-wrap style-2">
              {step === 0 && (
                <div className="cols">
                  <fieldset className="mb-15">
                    <input name="companyName" value={values.companyName || ""} onChange={update} type="text" placeholder="Registered Company Name *" required />
                  </fieldset>
                  <fieldset className="mb-15">
                    <input name="rcNumber" value={values.rcNumber || ""} onChange={update} type="text" placeholder="RC/BN Number *" required />
                  </fieldset>
                  <fieldset className="mb-15" style={{width:'100%'}}>
                    <input name="registeredAddress" value={values.registeredAddress || ""} onChange={update} type="text" placeholder="Registered Address *" required />
                  </fieldset>
                  <fieldset className="mb-15">
                    <input name="email" value={values.email || ""} onChange={update} type="email" placeholder="Company Email *" required />
                  </fieldset>
                  <fieldset className="mb-15">
                    <input name="phone" value={values.phone || ""} onChange={update} type="tel" placeholder="Company Phone *" required />
                  </fieldset>
                </div>
              )}

              {step === 1 && (
                <div className="cols">
                  <fieldset className="mb-15">
                    <input name="accountName" value={values.accountName || ""} onChange={update} type="text" placeholder="Account Name *" required />
                  </fieldset>
                  <fieldset className="mb-15">
                    <input name="bvn" value={values.bvn || ""} onChange={update} type="text" placeholder="BVN" />
                  </fieldset>
                  <div className="mb-5" />
                  <div className="checkbox-item mb-10">
                    <label className="fw-6">Account Type *</label>
                  </div>
                  <div className="mb-10">
                    <label style={{marginRight:16}}><input type="radio" name="accountType" value="Savings" checked={values.accountType === "Savings"} onChange={update} /> <span className="ml-6">Savings</span></label>
                    <label><input type="radio" name="accountType" value="Current" checked={values.accountType === "Current"} onChange={update} /> <span className="ml-6">Current</span></label>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="grid gap-20" style={{display:'grid'}}>
                  <div className="flex items-center justify-between" style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <h3 className="fw-6">Authorized Signatories</h3>
                    <button type="button" onClick={addSignatory} className="tf-btn style-9 small">+ Add signatory</button>
                  </div>
                  {(values.signatories || []).map((s, idx) => (
                    <div key={idx} className="box-border style-2 p-20">
                      <div className="cols">
                        <fieldset className="mb-15"><input value={s.firstName || ''} onChange={(e)=>updateSignatory(idx,'firstName',e.target.value)} placeholder="First Name *" required /></fieldset>
                        <fieldset className="mb-15"><input value={s.lastName || ''} onChange={(e)=>updateSignatory(idx,'lastName',e.target.value)} placeholder="Surname *" required /></fieldset>
                        <fieldset className="mb-15"><input value={s.otherName || ''} onChange={(e)=>updateSignatory(idx,'otherName',e.target.value)} placeholder="Other Name" /></fieldset>
                        <fieldset className="mb-15"><input value={s.designation || ''} onChange={(e)=>updateSignatory(idx,'designation',e.target.value)} placeholder="Designation *" required /></fieldset>
                        <fieldset className="mb-15">
                          <select value={s.class || ''} onChange={(e)=>updateSignatory(idx,'class',e.target.value)}>
                            <option value="">Class *</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                          </select>
                        </fieldset>
                        <fieldset className="mb-15"><input type="date" value={s.dob || ''} onChange={(e)=>updateSignatory(idx,'dob',e.target.value)} placeholder="DOB *" /></fieldset>
                        <fieldset className="mb-15"><input type="email" value={s.email || ''} onChange={(e)=>updateSignatory(idx,'email',e.target.value)} placeholder="Email *" /></fieldset>
                        <fieldset className="mb-15" style={{width:'100%'}}><input value={s.address || ''} onChange={(e)=>updateSignatory(idx,'address',e.target.value)} placeholder="Residential Address *" /></fieldset>
                        <fieldset className="mb-15"><input value={s.bvn || ''} onChange={(e)=>updateSignatory(idx,'bvn',e.target.value)} placeholder="BVN" /></fieldset>
                        <fieldset className="mb-15"><input value={s.mobile || ''} onChange={(e)=>updateSignatory(idx,'mobile',e.target.value)} placeholder="Mobile No. *" /></fieldset>
                        <fieldset className="mb-15"><input value={s.telephone || ''} onChange={(e)=>updateSignatory(idx,'telephone',e.target.value)} placeholder="Telephone" /></fieldset>
                        <fieldset className="mb-5" style={{width:'100%'}}>
                          <label className="fw-6 mb-6" style={{display:'block'}}>ID/Address Documents</label>
                          <select multiple value={s.idDocs || []} onChange={(e)=>{
                            const opts = Array.from(e.target.selectedOptions).map(o=>o.value);
                            updateSignatory(idx,'idDocs',opts);
                          }}>
                            <option>Drivers Licence</option>
                            <option>International Passport</option>
                            <option>National ID Card</option>
                            <option>Permanent Voters Card</option>
                            <option>Utility Bill</option>
                          </select>
                        </fieldset>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {step === 3 && (
                <div className="cols">
                  <div className="checkbox-item mb-10"><label className="fw-6">Management Mode *</label></div>
                  <div className="mb-10">
                    <label style={{marginRight:16}}><input type="radio" name="managementMode" value="Discretionary" checked={values.managementMode === "Discretionary"} onChange={update} /> <span className="ml-6">Discretionary</span></label>
                    <label><input type="radio" name="managementMode" value="Non-Discretionary" checked={values.managementMode === "Non-Discretionary"} onChange={update} /> <span className="ml-6">Non-Discretionary</span></label>
                  </div>
                  <div className="checkbox-item mb-10"><label className="fw-6">Mode of Investment</label></div>
                  <div className="mb-10">
                    <label style={{marginRight:16}}><input type="radio" name="modeOfInvestment" value="Cash" checked={values.modeOfInvestment === "Cash"} onChange={update} /> <span className="ml-6">Cash</span></label>
                    <label><input type="radio" name="modeOfInvestment" value="Equities" checked={values.modeOfInvestment === "Equities"} onChange={update} /> <span className="ml-6">Equities</span></label>
                  </div>
                  <fieldset className="mb-15"><input name="cashAmount" value={values.cashAmount || ''} onChange={update} placeholder="Cash Amount (₦)" /></fieldset>
                  <fieldset className="mb-15"><input name="equitiesAmount" value={values.equitiesAmount || ''} onChange={update} placeholder="Equities Worth (₦)" /></fieldset>
                  <fieldset className="mb-15">
                    <select name="objective" value={values.objective || ""} onChange={update} required>
                      <option value="">Objective *</option>
                      <option>Capital Preservation</option>
                      <option>Capital Appreciation</option>
                      <option>Growth</option>
                      <option>Income & Growth</option>
                    </select>
                  </fieldset>
                  <fieldset className="mb-15">
                    <select name="horizon" value={values.horizon || ""} onChange={update} required>
                      <option value="">Time Horizon *</option>
                      <option value="1-2">1–2 years</option>
                      <option value="2-5">2–5 years</option>
                      <option value="5-10">5–10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </fieldset>
                  <fieldset className="mb-15" style={{width:'100%'}}><input name="liquidityNeeds" value={values.liquidityNeeds || ''} onChange={update} placeholder="Liquidity/Income requirement" /></fieldset>
                </div>
              )}

              {step === 4 && (
                <div className="box-border style-2 p-20">
                  <p className="mb-10" style={{color:'#666'}}>Review your entries, then submit.</p>
                  <pre style={{whiteSpace:'pre-wrap', fontSize:12}}>{JSON.stringify(values, null, 2)}</pre>
                </div>
              )}

              <div className="bot mt-20" style={{display:'flex', justifyContent:'space-between'}}>
                <button type="button" onClick={back} className="tf-btn style-9 small" disabled={step===0}>Back</button>
                {step < steps.length - 1 ? (
                  <button type="button" onClick={next} className="tf-btn text-anime-style-1">Next <i className="icon-chevron-right" /></button>
                ) : (
                  <button type="submit" className="tf-btn text-anime-style-1">Submit <i className="icon-chevron-right" /></button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

