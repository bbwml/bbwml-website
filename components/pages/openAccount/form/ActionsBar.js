"use client";

import React from "react";

export default function ActionsBar({ step, steps, onBack, onNext, onSubmit, submitting, disabled }) {
  return (
    <div className="cf-actions">
      <button type="button" onClick={onBack} className="tf-btn style-9 small back-accent" disabled={step === 0 || disabled}>Back</button>
      {step < steps.length - 1 ? (
        <button type="button" onClick={onNext} className="tf-btn text-anime-style-1" disabled={disabled}>
          {disabled ? (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 50 50" role="img" aria-hidden="true">
                <circle cx="25" cy="25" r="20" stroke="rgba(255,255,255,0.6)" strokeWidth="6" fill="none"/>
                <path d="M25 5 a20 20 0 0 1 0 40" stroke="rgba(255,255,255,0.95)" strokeWidth="6" strokeLinecap="round" fill="none">
                  <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.9s" repeatCount="indefinite"/>
                </path>
              </svg>
              Please wait
            </span>
          ) : (
            <>Next <i className="icon-chevron-right" /></>
          )}
        </button>
      ) : (
        <button type="button" onClick={onSubmit} className="tf-btn text-anime-style-1" disabled={submitting || disabled}>
          {(submitting || disabled) ? (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 50 50" role="img" aria-hidden="true">
                <circle cx="25" cy="25" r="20" stroke="rgba(255,255,255,0.6)" strokeWidth="6" fill="none"/>
                <path d="M25 5 a20 20 0 0 1 0 40" stroke="rgba(255,255,255,0.95)" strokeWidth="6" strokeLinecap="round" fill="none">
                  <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.9s" repeatCount="indefinite"/>
                </path>
              </svg>
              {submitting ? "Submitting..." : "Please wait"}
            </span>
          ) : (
            <>Submit <i className="icon-chevron-right" /></>
          )}
        </button>
      )}
    </div>
  );
}
