"use client";

import React, { useRef } from "react";
import UploadField from "../form/UploadField";

export default function StepBoardResolution({ values, updateFromEvent, update }) {
  const canvasRef = useRef(null);
  const drawing = useRef(false);

  const getPos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    if (e.touches?.[0]) return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };
  const draw = (e) => {
    if (!drawing.current || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
    const { x, y } = getPos(e);
    ctx.lineWidth = 2; ctx.lineCap = "round"; ctx.strokeStyle = "#111";
    ctx.lineTo(x, y); ctx.stroke(); ctx.beginPath(); ctx.moveTo(x, y);
  };
  const startDraw = (e) => { drawing.current = true; draw(e); };
  const endDraw = () => {
    drawing.current = false;
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) ctx.beginPath();
    if (canvasRef.current) update("boardResolution.authorizedPerson.signaturePadDataUrl", canvasRef.current.toDataURL("image/png"));
  };
  const clearPad = () => {
    const c = canvasRef.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    ctx.clearRect(0, 0, c.width, c.height);
    update("boardResolution.authorizedPerson.signaturePadDataUrl", "");
  };

  return (
    <section className="cf-section">
      <h3 className="cf-section__title">Board Resolution & Signature Mandate</h3>
      <div className="cf-grid cf-grid--two">
        <div className="cf-field"><label className="cf-label">Meeting Date *</label>
          <input type="date" className="cf-input" value={values.boardResolution.meetingDate} onChange={updateFromEvent("boardResolution.meetingDate")} required />
        </div>
        <div className="cf-field"><label className="cf-label">Meeting Place *</label>
          <input className="cf-input" value={values.boardResolution.meetingPlace} onChange={updateFromEvent("boardResolution.meetingPlace")} required />
        </div>
        <div className="cf-field cf-field--full"><label className="cf-label">Open account with (Institution) *</label>
          <input className="cf-input" value={values.boardResolution.bankOrFirmName} onChange={updateFromEvent("boardResolution.bankOrFirmName")} required />
        </div>

        <div className="cf-field cf-field--full"><label className="cf-label">Authorized Person</label></div>
        <div className="cf-field"><label className="cf-label">Title</label>
          <input className="cf-input" value={values.boardResolution.authorizedPerson.title} onChange={updateFromEvent("boardResolution.authorizedPerson.title")} />
        </div>
        <div className="cf-field"><label className="cf-label">Designation</label>
          <input className="cf-input" value={values.boardResolution.authorizedPerson.designation} onChange={updateFromEvent("boardResolution.authorizedPerson.designation")} />
        </div>
        <div className="cf-field"><label className="cf-label">First Name *</label>
          <input className="cf-input" value={values.boardResolution.authorizedPerson.firstName} onChange={updateFromEvent("boardResolution.authorizedPerson.firstName")} required />
        </div>
        <div className="cf-field"><label className="cf-label">Other Name</label>
          <input className="cf-input" value={values.boardResolution.authorizedPerson.otherName} onChange={updateFromEvent("boardResolution.authorizedPerson.otherName")} />
        </div>
        <div className="cf-field"><label className="cf-label">Class *</label>
          <select className="cf-select" value={values.boardResolution.authorizedPerson.class} onChange={updateFromEvent("boardResolution.authorizedPerson.class")} required>
            <option value="">Select class</option><option value="A">A</option><option value="B">B</option>
          </select>
        </div>
        <div className="cf-field"><label className="cf-label">Resolution Date *</label>
          <input type="date" className="cf-input" value={values.boardResolution.authorizedPerson.date} onChange={updateFromEvent("boardResolution.authorizedPerson.date")} required />
        </div>
        <div className="cf-field">
          <UploadField label="Authorized Person Passport" accept="image/*" pathPrefix="corporate.boardResolution.authorizedPerson.passport" hint="Image only" />
        </div>
        <div className="cf-field">
          <UploadField label="Authorized Person Signature" accept="image/*" pathPrefix="corporate.boardResolution.authorizedPerson.signature" hint="Image only" />
        </div>
        <div className="cf-field cf-field--full">
          <label className="cf-label">Or Sign on the pad</label>
          <div className="p-3 border rounded-2xl bg-white">
            <canvas
              ref={canvasRef}
              width={600}
              height={160}
              className="w-full h-[160px] border rounded-xl bg-white"
              onMouseDown={startDraw}
              onMouseUp={endDraw}
              onMouseMove={draw}
              onMouseLeave={endDraw}
              onTouchStart={startDraw}
              onTouchEnd={endDraw}
              onTouchMove={draw}
            />
            <div className="mt-2 flex gap-2">
              <button type="button" onClick={clearPad} className="tf-btn style-9 small back-accent">Clear</button>
              {values.boardResolution.authorizedPerson.signaturePadDataUrl && <span className="text-xs text-gray-600">Signature captured ✓</span>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

