"use client";

import React from "react";
import { useFormCtx } from "./FormProvider";

export default function ReviewPanel() {
  const { values } = useFormCtx();
  return (
    <div className="cf-review mt-6">
      <p className="cf-review__hint">Review your entries, then submit.</p>
      <pre className="cf-review__json">{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
}
