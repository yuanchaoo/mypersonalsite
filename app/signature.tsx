"use client";

import { useEffect, useState } from "react";

type SignatureProps = {
  labels: string[];
};

export function Signature({ labels }: SignatureProps) {
  const [labelIndex, setLabelIndex] = useState(0);
  const [previousLabel, setPreviousLabel] = useState<string | null>(null);

  useEffect(() => {
    if (labels.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setLabelIndex((current) => {
        setPreviousLabel(labels[current]);

        return (current + 1) % labels.length;
      });
    }, 3000);

    return () => window.clearInterval(interval);
  }, [labels]);

  useEffect(() => {
    if (!previousLabel) {
      return;
    }

    const timer = window.setTimeout(() => {
      setPreviousLabel(null);
    }, 520);

    return () => window.clearTimeout(timer);
  }, [previousLabel]);

  return (
    <p className="mt-24 flex items-baseline gap-2 font-pixel text-[25px] leading-none whitespace-nowrap">
      <span className="text-black/20 italic">YUANCHAO/</span>{" "}
      <span className="signature-label-shell relative -my-2 inline-grid overflow-hidden py-2 align-baseline font-bold text-[#7a05ff]">
        {previousLabel ? (
          <span
            key={`previous-${previousLabel}`}
            className="signature-label-exit col-start-1 row-start-1 inline-block whitespace-nowrap"
          >
            {previousLabel}
          </span>
        ) : null}
        <span
          key={`current-${labels[labelIndex]}`}
          className="signature-label-enter col-start-1 row-start-1 inline-block whitespace-nowrap"
        >
          {labels[labelIndex]}
        </span>
      </span>
    </p>
  );
}
