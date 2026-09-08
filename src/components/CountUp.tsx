"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/lib/useInView";

export function CountUp({ value }: { value: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.5);
  // Start at the real value, not 0 — a viewer who never triggers the
  // scroll animation (no JS, reduced motion, a crawler, a quick glance)
  // should never see a false "0" next to a real, nonzero total.
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    // Animate up from a nearby starting point rather than 0, so the
    // number is always in the right ballpark even mid-animation.
    const startValue = Math.max(0, value - Math.max(5, Math.round(value * 0.15)));
    const duration = 1400;
    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(startValue + eased * (value - startValue)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return <span ref={ref}>{display.toLocaleString("en-US")}</span>;
}
