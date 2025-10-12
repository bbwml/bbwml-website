// components/form/UploadField.jsx
"use client";

import React, { useState } from "react";
import { useFormCtx } from "./FormProvider";
import { uploadToCloudinary } from "../lib/cloudinaryUpload";

export default function UploadField({
  label = "Upload file",
  accept = "image/*,application/pdf",
  pathPrefix,              // e.g. "account.passport" -> writes "account.passportUrl"
  required = false,
  hint = "",
}) {
  const { values, update, beginUpload, endUpload, showToast } = useFormCtx();
  const [busy, setBusy] = useState(false);

  if (!pathPrefix) {
    throw new Error("UploadField requires pathPrefix (e.g. 'documents.validId')");
  }
  const urlPath = `${pathPrefix}Url`;       // where we store the Cloudinary secure_url
  const idPath = `${pathPrefix}PublicId`;   // optional: store public_id too
  const currentUrl = urlPath.split(".").reduce((o, k) => (o ? o[k] : undefined), values);

  const onChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    beginUpload();
    try {
      const up = await uploadToCloudinary(file, { folder: "applications" });
      update(urlPath, up.secure_url);
      update(idPath, up.public_id);
      showToast(`${label}: Upload complete`, "success");
    } catch (err) {
      console.error(err);
      showToast(err?.message || "Upload failed", "error", 4000);
    } finally {
      setBusy(false);
      endUpload();
    }
  };

  return (
    <div className="cf-field cf-field--full">
      <label className="cf-label">
        {label} {required ? "*" : ""}
      </label>
      <input
        type="file"
        className="cf-input"
        accept={accept}
        onChange={onChange}
        required={required && !currentUrl}
        disabled={busy}
      />
      <div style={{ marginTop: 6, minHeight: 18 }}>
        {busy && (
          <span aria-label="Uploading" title="Uploading" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <svg width="16" height="16" viewBox="0 0 50 50" role="img" aria-hidden="true">
              <circle cx="25" cy="25" r="20" stroke="#d1d5db" strokeWidth="6" fill="none"/>
              <path d="M25 5 a20 20 0 0 1 0 40" stroke="#2563eb" strokeWidth="6" strokeLinecap="round" fill="none">
                <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.9s" repeatCount="indefinite"/>
              </path>
            </svg>
          </span>
        )}
        {!busy && currentUrl && (
          <a href={currentUrl} target="_blank" rel="noreferrer" className="text-xs text-blue-600 underline">
            open
          </a>
        )}
        {hint && <span className="text-xs text-gray-500" style={{ marginLeft: 8 }}>{hint}</span>}
      </div>
    </div>
  );
}
