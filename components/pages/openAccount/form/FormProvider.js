"use client";

import React, { createContext, useCallback, useContext, useMemo, useReducer, useState } from "react";
import Toast from "./Toast";

const initialValues = {
  account: {
    title: "", surname: "", firstName: "", otherName: "",
    dob: "", nationality: "", stateOfOrigin: "", lga: "",
    gender: "", maritalStatus: "",
    residentialAddress: "", correspondenceAddress: "",
    mobile: "", altMobile: "", email: "", mothersMaidenName: "",
    passportUrl: "", // Cloudinary URL
    idType: "", idNumber: "",
  },
  employment: {
    status: "", employerName: "", dateEmployed: "",
    employerAddress: "", occupation: "", sourceOfIncome: "",
  },
  bank: { bankName: "", accountName: "", accountNo: "", bvn: "", accountType: "" },
  nok: {
    title: "", surname: "", firstName: "", otherName: "",
    dob: "", gender: "", relationship: "", mobile: "", email: "", address: "",
  },
  investment: {
    managementMode: "", modeOfInvestment: "", cashAmount: "", equitiesWorth: "",
    modeOfPayment: "", objective: "", horizon: "", liquidityNeeds: "",
  },
  risk: { sensitivity: "" },
  minors: {
    applicable: false, surname: "", firstName: "", otherName: "",
    relationship: "", dob: "", residentialAddress: "", bvn: "", idType: "",
  },
  documents: {
    validIdUrl: "", utilityBillUrl: "", birthCertificateUrl: "", equitiesScheduleUrl: "",
  },
  signature: {
    nameSurnameFirstOther: "", date: "",
    imageDataUrl: "", // from canvas
    uploadedSignatureUrl: "", // Cloudinary URL
  },
};

function setByPath(obj, path, value) {
  const keys = path.split(".");
  const clone = Array.isArray(obj) ? [...obj] : { ...obj };
  let curNew = clone, curOld = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i];
    const src = curOld?.[k] ?? {};
    curNew[k] = Array.isArray(src) ? [...src] : { ...src };
    curNew = curNew[k];
    curOld = src;
  }
  curNew[keys[keys.length - 1]] = value;
  return clone;
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_BY_PATH": return setByPath(state, action.path, action.value);
    case "RESET": return initialValues;
    default: return state;
  }
}

const FormCtx = createContext({
  values: initialValues,
  update: () => {},
  updateFromEvent: () => () => {},
  reset: () => {},
  uploadingCount: 0,
  beginUpload: () => {},
  endUpload: () => {},
  toast: null,
  showToast: () => {},
  clearToast: () => {},
});

export function useFormCtx() { return useContext(FormCtx); }

export function FormProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValues);
  const [uploadingCount, setUploadingCount] = useState(0);
  const [toast, setToast] = useState(null); // { message, type: 'info' | 'success' | 'error' }

  const update = useCallback((path, value) => {
    dispatch({ type: "SET_BY_PATH", path, value });
  }, []);

  const updateFromEvent = useCallback((path) => (e) => {
    const { type, checked, value } = e.target;
    update(path, type === "checkbox" ? checked : value);
  }, [update]);

  const reset = useCallback(() => dispatch({ type: "RESET" }), []);

  const beginUpload = useCallback(() => setUploadingCount((c) => c + 1), []);
  const endUpload = useCallback(() => setUploadingCount((c) => Math.max(0, c - 1)), []);
  const showToast = useCallback((message, type = "info", timeout = 2500) => {
    setToast({ message, type });
    if (timeout > 0) {
      setTimeout(() => setToast(null), timeout);
    }
  }, []);
  const clearToast = useCallback(() => setToast(null), []);

  const value = useMemo(
    () => ({ values: state, update, updateFromEvent, reset, uploadingCount, beginUpload, endUpload, toast, showToast, clearToast }),
    [state, update, updateFromEvent, reset, uploadingCount, beginUpload, endUpload, toast, showToast, clearToast]
  );

  return (
    <FormCtx.Provider value={value}>
      {children}
      {/* Global pretty toast */}
      {toast && <Toast message={toast.message} type={toast.type} onClose={clearToast} />}
    </FormCtx.Provider>
  );
}
