"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Benefit = {
  title: string;
  body: string;
  detail: string;
  source?: string;
  sourceUrl: string;
  image: string;
};

export function BenefitCard({ benefit }: { benefit: Benefit }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 text-left transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:hover:border-zinc-700"
      >
        <div className="p-6 pb-5">
          <h3 className="font-medium text-zinc-900 dark:text-zinc-50">
            {benefit.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            {benefit.body}
          </p>
          <div className="mt-4 flex items-center justify-between gap-3">
            {benefit.source && (
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                {benefit.source}
              </p>
            )}
            <span className="shrink-0 text-xs font-medium text-zinc-500 underline decoration-zinc-300 underline-offset-4 dark:text-zinc-400 dark:decoration-zinc-700">
              Read more
            </span>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_45%)] [mask-image:linear-gradient(to_bottom,transparent,black_45%)]">
          <Image src={benefit.image} alt="" fill className="object-cover" />
        </div>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-xl dark:bg-zinc-900"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={benefit.image}
                alt=""
                fill
                className="object-cover"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                {benefit.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {benefit.detail}
              </p>
              <a
                href={benefit.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-xs font-medium uppercase tracking-wide text-zinc-500 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-700 dark:text-zinc-400 dark:decoration-zinc-700 dark:hover:text-zinc-200"
              >
                Source: {benefit.source}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
