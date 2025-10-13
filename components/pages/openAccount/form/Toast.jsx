"use client";

import React, { useEffect, useMemo } from "react";

export default function Toast({ message, type = "info", onClose }) {
  const theme = useMemo(() => {
    switch (type) {
      case "success":
        return { start: "#16a34a", end: "#059669", icon: (
          <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
        ) };
      case "error":
        return { start: "#e11d48", end: "#dc2626", icon: (
          <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-5a1 1 0 112 0 1 1 0 01-2 0zm0-6a1 1 0 112 0v3a1 1 0 11-2 0V7z" clipRule="evenodd" /></svg>
        ) };
      default:
        return { start: "#0284c7", end: "#4f46e5", icon: (
          <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10A8 8 0 11.001 10 8 8 0 0118 10zM9 7a1 1 0 112 0v1a1 1 0 11-2 0V7zm0 4a1 1 0 100 2h2a1 1 0 100-2H9z" clipRule="evenodd" /></svg>
        ) };
    }
  }, [type]);

  useEffect(() => {
    const onEsc = (e) => { if (e.key === "Escape") onClose?.(); };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onClose]);

  if (!message) return null;

  const panelStyle = {
    minWidth: 260,
    maxWidth: 380,
    color: '#fff',
    padding: '10px 14px',
    borderRadius: 10,
    boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
    background: `linear-gradient(135deg, ${theme.start}, ${theme.end})`,
    display: 'flex',
    gap: 12,
    alignItems: 'flex-start',
    position: 'relative',
    animation: 'toastIn 180ms ease-out',
  };

  const closeStyle = {
    position: 'absolute', top: 8, right: 10, opacity: 0.9, background: 'transparent', border: 0, color: '#fff', cursor: 'pointer'
  };

  return (
    <div style={{ position: 'fixed', right: 16, top: 16, zIndex: 9999 }}>
      <div style={panelStyle}>
        <div style={{ marginTop: 2, opacity: 0.9 }}>{theme.icon}</div>
        <div style={{ fontSize: 13, lineHeight: 1.4, paddingRight: 20 }}>{message}</div>
        <button aria-label="Close" onClick={onClose} style={closeStyle}>
          <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
        </button>
      </div>
      <style jsx>{`
        @keyframes toastIn { from { transform: translateY(8px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
      `}</style>
    </div>
  );
}
