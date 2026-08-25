import { Header } from "@/components/Header";

type Donor = {
  label: string;
  amount: number;
};

const DONORS: Donor[] = [];

export default function DonorsPage() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-zinc-950">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-6 py-20">
          <p className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Thank you
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Donors
          </h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Everyone who has contributed, shown by name or anonymously by
            their own choice.
          </p>

          <div className="mt-10 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900">
            {DONORS.length === 0 ? (
              <p className="px-6 py-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
                No contributions listed yet &mdash; be the first.
              </p>
            ) : (
              DONORS.map((donor, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-6 py-4"
                >
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                    {donor.label}
                  </span>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    ₺{donor.amount}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
