"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

type Status = "idle" | "submitting" | "done" | "error";

export function DetailsForm() {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount");

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [job, setJob] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [donorLabel, setDonorLabel] = useState("");

  const isValid = name.trim() && surname.trim() && age.trim() && country.trim();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contribute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          name: name.trim(),
          surname: surname.trim(),
          age,
          country: country.trim(),
          job: job.trim(),
          anonymous,
          notes: notes.trim(),
        }),
      });
      if (!res.ok) throw new Error("failed");
      const data = await res.json();
      setDonorLabel(data.label);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="mx-auto max-w-md px-6 py-24 text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Thank you
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          We&rsquo;ve recorded your ₺{amount} pledge
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Listed as <span className="font-medium">{donorLabel}</span>.
          We&rsquo;ll follow up separately with payment details.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md px-6 py-20">
      <p className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        Step 2 of 2
      </p>
      <div className="mt-2 flex items-baseline justify-between gap-4">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Your details
        </h1>
        {amount && (
          <Link
            href="/contribute"
            className="shrink-0 text-sm text-zinc-500 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-700 dark:text-zinc-400 dark:decoration-zinc-700 dark:hover:text-zinc-200"
          >
            ₺{amount} &middot; change
          </Link>
        )}
      </div>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Name" htmlFor="name">
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={inputClass}
            />
          </Field>
          <Field label="Surname" htmlFor="surname">
            <input
              id="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
              className={inputClass}
            />
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Age" htmlFor="age">
            <input
              id="age"
              type="number"
              min="1"
              inputMode="numeric"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              className={inputClass}
            />
          </Field>
          <Field label="Country" htmlFor="country">
            <input
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              className={inputClass}
            />
          </Field>
        </div>

        <Field label="Job / Position" htmlFor="job" optional>
          <input
            id="job"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            className={inputClass}
          />
        </Field>

        <div className="flex items-center justify-between rounded-xl border border-zinc-300 bg-white px-4 py-3.5 dark:border-zinc-700 dark:bg-zinc-900">
          <div>
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
              {anonymous ? "Staying anonymous" : "Visible on donor list"}
            </p>
            <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
              {anonymous
                ? "You’ll be shown as Anonymous with a random ID."
                : "Your name will be shown on the donor list."}
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={anonymous}
            onClick={() => setAnonymous((v) => !v)}
            className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
              anonymous ? "bg-zinc-900 dark:bg-white" : "bg-zinc-300 dark:bg-zinc-700"
            }`}
          >
            <span
              className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform dark:bg-zinc-900 ${
                anonymous ? "translate-x-[22px]" : "translate-x-0.5"
              }`}
            />
          </button>
        </div>

        <Field label="Notes" htmlFor="notes" optional>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            placeholder="Anything you’d like us to know?"
            className={`${inputClass} resize-none`}
          />
        </Field>

        {status === "error" && (
          <p className="text-sm text-red-600 dark:text-red-400">
            Something went wrong submitting this &mdash; please try again.
          </p>
        )}

        <button
          type="submit"
          disabled={!isValid || status === "submitting"}
          className="mt-2 w-full rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          {status === "submitting" ? "Submitting…" : "Confirm contribution"}
        </button>
      </form>
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:focus:border-zinc-500";

function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
      >
        {label}
        {optional && (
          <span className="ml-1 text-xs font-normal text-zinc-400">
            (optional)
          </span>
        )}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
