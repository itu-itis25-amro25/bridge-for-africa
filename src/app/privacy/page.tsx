import { Header } from "@/components/Header";
import { CONTACT_EMAIL } from "@/lib/constants";

export default function PrivacyPage() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-zinc-950">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-6 py-20">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Privacy
          </h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Short version: we collect only what&rsquo;s needed to record a
            contribution, we don&rsquo;t sell or share it, and you control
            whether your name is shown publicly.
          </p>

          <div className="mt-10 flex flex-col gap-8">
            <section>
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                What we collect
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                When you contribute, we ask for your name, surname, age,
                country, job or position, and an optional note. We also
                record the amount you chose to contribute.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Why we collect it
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                To keep an accurate record of who has contributed and how
                much, and to maintain the donor list on this site.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                What&rsquo;s shown publicly
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Only your name and contribution amount appear on the{" "}
                <a
                  href="/donors"
                  className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-800 dark:decoration-zinc-700 dark:hover:text-zinc-200"
                >
                  donor list
                </a>
                , and only if you chose to be visible. If you choose to stay
                anonymous, you&rsquo;re shown as &ldquo;Anonymous&rdquo; with
                a random 4-digit number instead of your name. Your age,
                country, job, and notes are never shown publicly &mdash;
                they&rsquo;re for our own records only.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Who has access
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Only the members of Bridge for Africa. We don&rsquo;t sell,
                rent, or share your information with any third party.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Questions or removal requests
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Reach out at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-800 dark:decoration-zinc-700 dark:hover:text-zinc-200"
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                and we&rsquo;ll update or remove your information.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
