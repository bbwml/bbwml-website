// components/form/FormProvider.jsx
"use client";

import React from "react";

const Ctx = React.createContext(null);
export const useFormCtx = () => {
  const ctx = React.useContext(Ctx);
  if (!ctx) throw new Error("useFormCtx must be used within <FormProvider>");
  return ctx;
};

function setByPath(obj, path, value) {
  const keys = path.split(".");
  const next = { ...obj };
  let curNew = next;
  let curOld = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i];
    const src = curOld?.[k] ?? {};
    curNew[k] = Array.isArray(src) ? [...src] : { ...src };
    curNew = curNew[k];
    curOld = src;
  }
  curNew[keys[keys.length - 1]] = value;
  return next;
}

export function FormProvider({ children }) {
// components/form/FormProvider.jsx (only showing the state object)
const [values, setValues] = React.useState({
  account: {
    title: "",
    surname: "",
    firstName: "",
    otherName: "",
    dob: "",
    nationality: "",
    stateOfOrigin: "",
    lga: "",
    gender: "",
    maritalStatus: "",
    residentialAddress: "",
    correspondenceAddress: "",
    mobile: "",
    altMobile: "",
    email: "",
    mothersMaidenName: "",
    idType: "",
    idNumber: "",
    passportUrl: "",
    passportPublicId: "",
  },
  employment: {
    status: "",
    employerName: "",
    dateEmployed: "",
    employerAddress: "",
    occupation: "",
    sourceOfIncome: "",
  },
  bank: {
    bankName: "",
    accountName: "",
    accountNo: "",
    bvn: "",
    accountType: "",
  },
  nok: {
    title: "",
    surname: "",
    firstName: "",
    otherName: "",
    dob: "",
    gender: "",
    relationship: "",
    mobile: "",
    email: "",
    address: "",
  },
  investment: {
    managementMode: "",
    modeOfInvestment: "",
    cashAmount: "",
    equitiesWorth: "",
    modeOfPayment: "",
    objective: "",
    horizon: "",
    liquidityNeeds: "",
  },
  risk: { sensitivity: "" },

  // ✅ ADD THIS WHOLE BLOCK
  minors: {
    applicable: false,
    surname: "",
    firstName: "",
    otherName: "",
    relationship: "",
    dob: "",
    residentialAddress: "",
    bvn: "",
    idType: "",
  },

  documents: {
    validIdUrl: "",
    validIdPublicId: "",
    utilityBillUrl: "",
    utilityBillPublicId: "",
    birthCertificateUrl: "",
    birthCertificatePublicId: "",
    equitiesScheduleUrl: "",
    equitiesSchedulePublicId: "",
  },
signature: {
  nameSurnameFirstOther: "",
  date: "",
  imageDataUrl: "",            // for drawn canvas signature (data URL)
  uploadedSignatureUrl: "",    // for photo upload via UploadField
},
});


  const update = (path, value) => setValues((prev) => setByPath(prev, path, value));

  const updateFromEvent = (path) => (e) => {
    const { type, checked, value } = e.target;
    update(path, type === "checkbox" ? checked : value);
  };

  const ctx = React.useMemo(() => ({ values, update, updateFromEvent }), [values]);

  return <Ctx.Provider value={ctx}>{children}</Ctx.Provider>;
}
