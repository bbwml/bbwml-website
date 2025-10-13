"use client";

import React from "react";
import Stepper from "./Stepper";
import StepPersonalID from "./form/steps/StepPersonalID";
import StepEmployment from "./form/steps/StepEmployment";
import StepBank from "./form/steps/StepBank";
import StepNOK from "./form/steps/StepNOK";
import StepInvestment from "./form/steps/StepInvestment";
import StepRiskDocsSignature from "./form/steps/StepRiskDocsSignature";
import ActionsBar from "./form/ActionsBar";
import { FormProvider, useFormCtx } from "./form/FormProvider";

const steps = [
  "Personal & ID",
  "Employment",
  "Bank",
  "Next of Kin",
  "Investment & Horizon",
  "Risk/Docs/Signature/Review",
];

function InnerForm() {
  const { values } = useFormCtx();
  const [step, setStep] = React.useState(0);
  const [submitting, setSubmitting] = React.useState(false);

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const downloadDataUrl = (dataUrl, filename) => {
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = filename || "Application.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const onSubmit = async () => {
    if (!values.account.passportUrl) { alert("Please upload a passport photo before submitting."); return; }
    setSubmitting(true);
    try {
      const res = await fetch("/api/submit-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Submission failed");

      // DEV: if server returned the PDF (DISABLE_EMAIL=true), download it
      if (json?.pdfDataUrl) {
        downloadDataUrl(json.pdfDataUrl, json.filename || "Application.pdf");
        alert("PDF generated locally (email disabled).");
      } else {
        alert("Application submitted! (Email path active).");
      }
    } catch (err) {
      console.error(err);
      alert(err?.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="s-section pt-60 pb-60">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="mb-20">
              <Stepper steps={steps} activeIndex={step} />
            </div>

            {step === 0 && <StepPersonalID />}
            {step === 1 && <StepEmployment />}
            {step === 2 && <StepBank />}
            {step === 3 && <StepNOK />}
            {step === 4 && <StepInvestment />}
            {step === 5 && <StepRiskDocsSignature />}

            <ActionsBar step={step} steps={steps} onBack={back} onNext={next} onSubmit={onSubmit} submitting={submitting} />

            <p className="text-xs text-gray-500 mt-6">
              By submitting, you acknowledge the KYC notes: information may be verified via independent sources and shared with regulators; non-resident investors must notarize KYC documents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function IndividualForm() {
  return (
    <FormProvider>
      <InnerForm />
    </FormProvider>
  );
}
