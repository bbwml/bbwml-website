"use client";

import React, { useRef } from "react";
import { useFormCtx } from "./FormProvider";

export default function SignaturePad() {
  const { update, values } = useFormCtx();
  const canvasRef = useRef(null);
  const drawing = useRef(false);

  const getPos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    if (e.touches?.[0]) return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const startDraw = (e) => { drawing.current = true; draw(e); };
  const endDraw = () => {
    drawing.current = false;
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) ctx.beginPath();
    if (canvasRef.current) update("signature.imageDataUrl", canvasRef.current.toDataURL("image/png"));
  };
  const draw = (e) => {
    if (!drawing.current || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d"); if (!ctx) return;
    const { x, y } = getPos(e);
    ctx.lineWidth = 2; ctx.lineCap = "round"; ctx.strokeStyle = "#111";
    ctx.lineTo(x, y); ctx.stroke(); ctx.beginPath(); ctx.moveTo(x, y);
  };
  const clearSignature = () => {
    const c = canvasRef.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    ctx.clearRect(0, 0, c.width, c.height);
    update("signature.imageDataUrl", "");
  };

  return (
    <div className="p-3 border rounded-2xl bg-white">
      <canvas
        ref={canvasRef}
        width={600}
        height={180}
        className="w-full h-[180px] border rounded-xl bg-white"
        onMouseDown={startDraw}
        onMouseUp={endDraw}
        onMouseMove={draw}
        onMouseLeave={endDraw}
        onTouchStart={startDraw}
        onTouchEnd={endDraw}
        onTouchMove={draw}
      />
      <div className="mt-2 flex gap-2 items-center">
        <button type="button" onClick={clearSignature} className="tf-btn style-9 small back-accent">Clear</button>
        {values.signature.imageDataUrl && <span className="text-xs text-gray-600">Signature captured ✓</span>}
      </div>
    </div>
  );
}
