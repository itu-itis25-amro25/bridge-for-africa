"use client";

import { useInView } from "@/lib/useInView";

export function DrawLine({ className = "" }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      aria-hidden
      className={`origin-left transition-transform duration-[2200ms] ease-out ${
        inView ? "scale-x-100" : "scale-x-0"
      } ${className}`}
      ref={ref}
    />
  );
}
