"use client";
export default function Stepper({ steps, activeIndex }) {
  return (
    <ol className="bb-stepper">
      {steps.map((label, i) => (
        <li key={label} className="bb-step">
          <div className={`bb-step-dot ${i <= activeIndex ? "bb-step-active" : ""}`}>{i + 1}</div>
          <span className={`bb-step-label ${i <= activeIndex ? "bb-step-label-active" : ""}`}>{label}</span>
          {i < steps.length - 1 && <div className="bb-step-line" />}
        </li>
      ))}
      <style jsx>{`
        .bb-stepper { display: flex; align-items: center; gap: 8px; font-size: 12px; flex-wrap: wrap; }
        .bb-step { display: flex; align-items: center; }
        .bb-step-dot { height: 28px; min-width: 28px; border-radius: 999px; display: grid; place-items: center; border: 1px solid #111; background: #fff; }
        .bb-step-active { background: #111; color: #fff; }
        .bb-step-label { margin-left: 8px; margin-right: 12px; color: #666; }
        .bb-step-label-active { color: inherit; font-weight: 600; }
        .bb-step-line { width: 24px; height: 1px; background: #d1d5db; }
      `}</style>
    </ol>
  );
}

