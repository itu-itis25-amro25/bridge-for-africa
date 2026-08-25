"use client";

import { useState } from "react";

export function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-zinc-200 bg-white px-5 py-4 dark:border-zinc-800 dark:bg-zinc-900">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 text-left text-sm font-medium text-zinc-900 dark:text-zinc-50"
      >
        {question}
        <span
          className={`shrink-0 text-zinc-400 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
