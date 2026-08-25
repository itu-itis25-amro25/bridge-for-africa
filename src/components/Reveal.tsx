"use client";

import { useInView } from "@/lib/useInView";

type Variant = "up" | "scale" | "left" | "right";

const HIDDEN: Record<Variant, string> = {
  up: "translate-y-6 opacity-0",
  scale: "scale-90 opacity-0",
  left: "-translate-x-8 opacity-0",
  right: "translate-x-8 opacity-0",
};

const SHOWN =
  "translate-y-0 translate-x-0 scale-100 opacity-100";

export function Reveal({
  children,
  delay = 0,
  variant = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  variant?: Variant;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? SHOWN : HIDDEN[variant]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
