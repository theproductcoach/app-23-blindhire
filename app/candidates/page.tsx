"use client";

import { Suspense } from "react";
import CandidatesContent from "./CandidatesContent";

export default function CandidatesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CandidatesContent />
    </Suspense>
  );
}
