"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function OpenAccountModal({ isOpen, onClose }) {
  const router = useRouter();

  if (!isOpen) return null;

  const go = (path) => {
    onClose?.();
    router.push(path);
  };

  return (
    <div className="bb-modal-overlay" role="dialog" aria-modal="true">
      <div className="bb-modal-card">
        <div className="bb-modal-header">
          <h3 className="bb-modal-title">Open an Account</h3>
          <button className="bb-close" aria-label="Close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="bb-modal-body">
          <p className="bb-modal-sub">Select the type of account to open</p>

          <div className="bb-options">
            <button className="bb-option" onClick={() => go("/open-account/individual")}> 
              <span className="bb-option-title">Individual</span>
              <span className="bb-option-text">For personal investment accounts</span>
            </button>
            <button className="bb-option" onClick={() => go("/open-account/corporate")}>
              <span className="bb-option-title">Corporate</span>
              <span className="bb-option-text">For companies and institutions</span>
            </button>
          </div>

          <div className="bb-printable">
            <p className="mb-10">Prefer to fill a hardcopy?</p>
            <div className="bb-print-links">
              <Link href="/open-account/printable/individual" className="tf-btn style-9 small">Printable Individual Form</Link>
              <Link href="/open-account/printable/corporate" className="tf-btn style-9 small type-2">Printable Corporate Form</Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bb-modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: grid; place-items: center; z-index: 1000; }
        .bb-modal-card { background: #fff; width: min(640px, 92vw); border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); overflow: hidden; }
        .bb-modal-header { display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; border-bottom: 1px solid #eee; }
        .bb-modal-title { margin: 0; font-size: 20px; }
        .bb-close { background: transparent; border: none; font-size: 24px; line-height: 1; cursor: pointer; }
        .bb-modal-body { padding: 20px; }
        .bb-modal-sub { margin: 0 0 12px 0; color: #666; }
        .bb-options { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 14px; margin-top: 8px; }
        .bb-option { border: 1px solid #e5e5e5; border-radius: 14px; padding: 18px; text-align: left; cursor: pointer; background: #fff; transition: border-color .2s, box-shadow .2s, transform .06s; }
        .bb-option:hover { border-color: #111; box-shadow: 0 4px 14px rgba(0,0,0,0.06); }
        .bb-option:active { transform: translateY(1px); }
        .bb-option-title { display: block; font-weight: 600; font-size: 16px; }
        .bb-option-text { display: block; font-size: 13px; color: #666; margin-top: 2px; }
        .bb-printable { margin-top: 18px; padding-top: 14px; border-top: 1px solid #eee; }
        .bb-print-links { display: flex; gap: 10px; flex-wrap: wrap; }
        @media (max-width: 520px) { .bb-options { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}

