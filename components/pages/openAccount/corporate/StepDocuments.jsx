"use client";

import React from "react";
import UploadField from "../form/UploadField";

export default function StepDocuments() {
  return (
    <section className="cf-section">
      <h3 className="cf-section__title">Required Documents</h3>
      <div className="cf-grid cf-grid--two">
        <UploadField label="Certificate of Incorporation" accept="image/*,application/pdf" pathPrefix="corporate.documents.certificateOfIncorporation" required />
        <UploadField label="MEMART" accept="image/*,application/pdf" pathPrefix="corporate.documents.memart" required />
        <UploadField label="CAC Form CO7 (Directors)" accept="image/*,application/pdf" pathPrefix="corporate.documents.cacCO7Directors" required />
        <UploadField label="CAC Form CO2 (Allotment)" accept="image/*,application/pdf" pathPrefix="corporate.documents.cacCO2Allotment" required />
        <UploadField label="Board Resolution" accept="image/*,application/pdf" pathPrefix="corporate.documents.boardResolution" required />
        <UploadField label="Valid IDs (Directors & Signatories)" accept="image/*,application/pdf" pathPrefix="corporate.documents.idsDirectorsSignatories" required />
        <UploadField label="Company Utility Bill (≤ 3 months)" accept="image/*,application/pdf" pathPrefix="corporate.documents.companyUtilityBill" required />
        <UploadField label="Passport Photos (Directors & Signatories)" accept="image/*,application/pdf" pathPrefix="corporate.documents.passportsDirectorsSignatories" required />
        <UploadField label="SCUML Certificate (if applicable)" accept="image/*,application/pdf" pathPrefix="corporate.documents.scuml" />
      </div>
    </section>
  );
}

