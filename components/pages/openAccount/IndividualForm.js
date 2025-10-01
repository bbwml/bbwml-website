"use client";
import { useState } from "react";
import Stepper from "./Stepper";

const steps = ["Account", "Next of Kin", "Investment", "Review"];

export default function IndividualForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState({ accountType: "", managementMode: "", modeOfInvestment: "" });

  const update = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((v) => ({ ...v, [name]: type === "checkbox" ? checked : value }));
  };
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to backend if available
    alert("Submitted! We will be in touch shortly.");
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
                    <input name="bankName" value={values.bankName || ""} onChange={update} type="text" placeholder="Bank Name *" required />
                  </fieldset>
                  <fieldset className="mb-15">
                    <input name="accountName" value={values.accountName || ""} onChange={update} type="text" placeholder="Account Name *" required />
                  </fieldset>
                  <fieldset className="mb-15">
                    <input name="accountNo" value={values.accountNo || ""} onChange={update} type="text" placeholder="Account No. *" required />
                  </fieldset>
                  <fieldset className="mb-15">
                    <input name="bvn" value={values.bvn || ""} onChange={update} type="text" placeholder="BVN *" required />
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

              {step === 1 && (
                <div className="cols">
                  <fieldset className="mb-15">
                    <input name="nokFirstName" value={values.nokFirstName || ""} onChange={update} type="text" placeholder="Next of Kin First Name *" required />
                  </fieldset>
                  <fieldset className="mb-15">
                    <input name="nokLastName" value={values.nokLastName || ""} onChange={update} type="text" placeholder="Next of Kin Surname *" required />
                  </fieldset>
                  <fieldset className="mb-15">
                    <input name="nokOtherName" value={values.nokOtherName || ""} onChange={update} type="text" placeholder="Other Name" />
                  </fieldset>
                  <fieldset className="mb-15">
                    <input name="nokDob" value={values.nokDob || ""} onChange={update} type="date" placeholder="DOB" />
                  </fieldset>
                  <fieldset className="mb-15">
                    <select name="nokGender" value={values.nokGender || ""} onChange={update}>
                      <option value="">Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </fieldset>
                  <fieldset className="mb-15">
                    <input name="nokRelationship" value={values.nokRelationship || ""} onChange={update} type="text" placeholder="Relationship *" required />
                  </fieldset>
                  <fieldset className="mb-15">
                    <input name="nokMobile" value={values.nokMobile || ""} onChange={update} type="tel" placeholder="Mobile No. *" required />
                  </fieldset>
                  <fieldset className="mb-15">
                    <input name="nokEmail" value={values.nokEmail || ""} onChange={update} type="email" placeholder="Email" />
                  </fieldset>
                  <fieldset className="mb-15" style={{width:"100%"}}>
                    <input name="nokAddress" value={values.nokAddress || ""} onChange={update} type="text" placeholder="Contact Address *" required />
                  </fieldset>
                </div>
              )}

              {step === 2 && (
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
                  <fieldset className="mb-15">
                    <input name="cashAmount" value={values.cashAmount || ""} onChange={update} type="text" placeholder="Cash Amount (₦)" />
                  </fieldset>
                  <fieldset className="mb-15">
                    <input name="equitiesAmount" value={values.equitiesAmount || ""} onChange={update} type="text" placeholder="Equities Worth (₦)" />
                  </fieldset>
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
                  <fieldset className="mb-15" style={{width:"100%"}}>
                    <input name="liquidityNeeds" value={values.liquidityNeeds || ""} onChange={update} type="text" placeholder="Liquidity/Income requirement" />
                  </fieldset>
                </div>
              )}

              {step === 3 && (
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

