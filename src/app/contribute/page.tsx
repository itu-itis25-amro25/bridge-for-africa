"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";

const PRESET_AMOUNTS = [50, 100, 250, 500, 1000];

export default function ContributePage() {
  const router = useRouter();
  const [selected, setSelected] = useState<number | null>(null);
  const [custom, setCustom] = useState("");

  const customValue = Number(custom);
  const amount = custom ? customValue : selected;
  const isValid = amount !== null && amount > 0;

  function pickPreset(value: number) {
    setSelected(value);
    setCustom("");
  }

  function handleContinue() {
    if (!isValid || amount === null) return;
    router.push(`/contribute/details?amount=${amount}`);
  }

  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-zinc-950">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-md px-6 py-20">
          <p className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Step 1 of 2
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Choose an amount
          </h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Every contribution, monthly or one-time, goes toward a
            child&rsquo;s tuition.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {PRESET_AMOUNTS.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => pickPreset(value)}
                className={`rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                  selected === value && !custom
                    ? "border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-zinc-900"
                    : "border-zinc-300 text-zinc-900 hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-50 dark:hover:border-zinc-600"
                }`}
              >
                ₺{value}
              </button>
            ))}
          </div>

          <div className="mt-6">
            <label
              htmlFor="custom-amount"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Or enter a custom amount
            </label>
            <div className="mt-2 flex items-center rounded-xl border border-zinc-300 bg-white px-4 py-3 focus-within:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:focus-within:border-zinc-500">
              <span className="text-zinc-500 dark:text-zinc-400">₺</span>
              <input
                id="custom-amount"
                type="number"
                min="1"
                inputMode="numeric"
                placeholder="Amount in TL"
                value={custom}
                onChange={(e) => {
                  setCustom(e.target.value);
                  setSelected(null);
                }}
                className="ml-2 w-full bg-transparent text-zinc-900 outline-none placeholder:text-zinc-400 dark:text-zinc-50"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleContinue}
            disabled={!isValid}
            className="mt-8 w-full rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Continue
          </button>
        </div>
      </main>
    </div>
  );
}
