export function BridgeMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="4" y1="23" x2="28" y2="23" />
      <line x1="10" y1="23" x2="10" y2="8" />
      <line x1="22" y1="23" x2="22" y2="8" />
      <path d="M10,8 Q16,17 22,8" />
    </svg>
  );
}
