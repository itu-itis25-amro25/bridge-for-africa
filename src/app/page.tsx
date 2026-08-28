import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { CONTACT_EMAIL } from "@/lib/constants";
import { getTotals } from "@/lib/db";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { DrawLine } from "@/components/DrawLine";
import { FaqItem } from "@/components/FaqItem";

export const dynamic = "force-dynamic";

type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  linkedin?: string;
};

type Stat = {
  value: string;
  label: string;
  source: string;
};

const STATS: Stat[] = [
  {
    value: "9–10%",
    label:
      "Average increase in earnings for every additional year of schooling completed, worldwide.",
    source: "World Bank",
  },
  {
    value: "1 in 5",
    label:
      "African children of school age are currently out of school — about 20% of the continent's school-age population.",
    source: "UNESCO, 2025",
  },
  {
    value: "30%",
    label:
      "Of secondary school students in Uganda drop out before completing their education.",
    source: "UNICEF Uganda",
  },
  {
    value: "$15–30T",
    label:
      "Estimated global cost in lost lifetime earnings from not educating girls to the same level as boys.",
    source: "World Bank, 2018",
  },
];

type Benefit = {
  title: string;
  body: string;
  source?: string;
};

const BENEFITS: Benefit[] = [
  {
    title: "It's about cost, not ability",
    body: "In Uganda, financial barriers are the single most-cited reason children never enroll or drop out — not distance, not capacity, not interest. Some government-aided secondary schools charge families as much as $700 a term, and education now eats up roughly 8.5% of household spending, over four times the global average.",
    source: "UNICEF Uganda, Policy Note 1/2024",
  },
  {
    title: "It breaks the cycle",
    body: "Children whose own education was funded are far more likely to keep their kids in school a generation later — a single paid tuition tends to compound well beyond one child.",
    source: "World Bank",
  },
  {
    title: "Girls see the largest gains",
    body: "Secondary education for girls is linked to a near-elimination of child marriage, and women with a secondary education typically earn almost twice as much over their lives as those with none.",
    source: "World Bank, 2018",
  },
];

type Source = {
  label: string;
  url: string;
};

const SOURCES: Source[] = [
  {
    label: "World Bank — returns to investment in education",
    url: "https://documents1.worldbank.org/curated/en/442521523465644318/pdf/WPS8402.pdf",
  },
  {
    label:
      "World Bank — \"Missed Opportunities: The High Cost of Not Educating Girls\" (2018)",
    url: "https://www.worldbank.org/en/news/press-release/2018/07/11/not-educating-girls-costs-countries-trillions-of-dollars-says-new-world-bank-report",
  },
  {
    label: "UNESCO — Global Education Monitoring Report / SDG 4 Scorecard",
    url: "https://www.unesco.org/gem-report/en",
  },
  {
    label: "UNICEF Uganda — Overcoming the Challenges of Education in Uganda",
    url: "https://www.unicef.org/uganda/media/16861/file/Challenges%20of%20Education%20Sector%20in%20Uganda%20in%20Brief.pdf.pdf",
  },
];

type FaqItem = {
  question: string;
  answer: string;
};

const FAQ: FaqItem[] = [
  {
    question: "Are you a registered nonprofit?",
    answer:
      "Not yet. Bridge for Africa started about 7 months ago as a small group project. As we grow and bring on third-party contributors, we're working toward formal registration.",
  },
  {
    question: "How much does each core member contribute?",
    answer:
      "Each of our 7 founding members contributes ₺500 every month. Third-party contributors can give any amount they choose.",
  },
  {
    question: "How do you decide which child gets funded?",
    answer:
      "We look at demonstrated financial need. The child we currently support in Uganda was selected this way, and we're working to formalize this process as the group grows.",
  },
  {
    question: "Is a contribution recurring or one-time?",
    answer:
      "Whatever works for you. Third-party contributions can be made at any time — a single gift or something you repeat, there's no fixed schedule required.",
  },
  {
    question: "How do you know the money actually reaches the child?",
    answer:
      "We provide proof of payment — tuition receipts or other documentation of the educational costs covered.",
  },
];

const TEAM: TeamMember[] = [
  {
    name: "Eliya Amro",
    role: "Computer Engineering, ITU",
    linkedin: "https://www.linkedin.com/in/eliya-amro-91b619351/",
  },
  {
    name: "Hisham Habib Abdulaziz",
    role: "Industrial Engineering, YTU",
    linkedin: "https://www.linkedin.com/in/habib-abdulaziz-hisham-02438b365/",
  },
  {
    name: "Rayan Ssebunya",
    role: "Economics, YTU",
    bio: "International Students Administrative & Financial Affairs Officer at YDV Gençlik.",
  },
  {
    name: "Sedia Danso",
    role: "Electrical Engineering, ITU",
    linkedin: "https://www.linkedin.com/in/sedia-danso-a8aa4529b/",
  },
];

export default async function Home() {
  const totals = await getTotals().catch(() => ({ total: 0, count: 0 }));

  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-zinc-950">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
          <Reveal>
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
              A monthly bridge to a kid&rsquo;s education.
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              We&rsquo;re a group of international students in Turkey who pool a small
              monthly contribution to pay school tuition for kids in need in
              Africa &mdash; starting in Uganda.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contribute"
                className="w-full rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-zinc-700 motion-safe:hover:-translate-y-0.5 motion-safe:active:scale-95 sm:w-auto dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Contribute monthly
              </Link>
              <a
                href="#how-it-works"
                className="w-full rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition-all duration-300 hover:bg-zinc-100 motion-safe:hover:-translate-y-0.5 motion-safe:active:scale-95 sm:w-auto dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
              >
                How it works
              </a>
            </div>
          </Reveal>
        </section>

        {/* Photo */}
        <section className="mx-auto max-w-4xl px-6 pb-4">
          <Reveal delay={300}>
            <div className="relative h-[320px] w-full overflow-hidden rounded-2xl border border-zinc-200 sm:h-[420px] dark:border-zinc-800">
              <Image
                src="/images/classroom.jpg"
                alt=""
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent sm:h-20" />
            </div>
          </Reveal>
        </section>

        {/* Current impact */}
        <section className="border-y border-zinc-200 bg-white py-14 dark:border-zinc-800 dark:bg-zinc-900">
          <Reveal className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Right now
            </p>
            <p className="mt-3 text-2xl font-semibold text-zinc-900 sm:text-3xl dark:text-zinc-50">
              We&rsquo;re covering one child&rsquo;s tuition in Uganda &mdash;
              and growing.
            </p>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              Every new member gets us closer to supporting the next child.
            </p>
            <p className="mt-6 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {totals.count > 0 ? (
                <>
                  ₺<CountUp value={totals.total} /> raised so far from{" "}
                  {totals.count} contributor{totals.count === 1 ? "" : "s"}.
                </>
              ) : (
                "No contributions yet — yours could be the first."
              )}
            </p>
          </Reveal>
        </section>

        {/* Why it matters — stats band */}
        <section className="bg-zinc-900 py-20 text-white dark:bg-black">
          <div className="mx-auto max-w-5xl px-6">
            <p className="text-center text-sm font-medium uppercase tracking-wide text-zinc-400">
              Why it matters
            </p>
            <h2 className="mt-3 text-center text-3xl font-semibold tracking-tight sm:text-4xl">
              Tuition money is a lever, not a handout.
            </h2>
            <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map((stat, i) => (
                <Reveal
                  key={stat.label}
                  delay={i * 180}
                  variant="scale"
                  className="text-center sm:text-left"
                >
                  <p className="text-4xl font-semibold tracking-tight tabular-nums sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-wide text-zinc-500">
                    {stat.source}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            How it works
          </h2>
          <div className="relative mt-16 grid gap-10 sm:grid-cols-3">
            <DrawLine className="absolute top-5 right-0 left-0 hidden h-px bg-zinc-200 sm:block dark:bg-zinc-800" />
            <Reveal delay={0} className="relative text-center">
              <div className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white ring-8 ring-zinc-50 dark:bg-white dark:text-zinc-900 dark:ring-zinc-950">
                1
              </div>
              <h3 className="mt-4 font-medium text-zinc-900 dark:text-zinc-50">
                We chip in monthly
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                A small group of international students in Turkey each give
                what they can, every month.
              </p>
            </Reveal>
            <Reveal delay={150} className="relative text-center">
              <div className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white ring-8 ring-zinc-50 dark:bg-white dark:text-zinc-900 dark:ring-zinc-950">
                2
              </div>
              <h3 className="mt-4 font-medium text-zinc-900 dark:text-zinc-50">
                It goes straight to tuition
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Contributions are pooled and paid directly toward a child&rsquo;s
                school fees.
              </p>
            </Reveal>
            <Reveal delay={300} className="relative text-center">
              <div className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white ring-8 ring-zinc-50 dark:bg-white dark:text-zinc-900 dark:ring-zinc-950">
                3
              </div>
              <h3 className="mt-4 font-medium text-zinc-900 dark:text-zinc-50">
                We grow, one kid at a time
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                As more people join, we take on the next child who needs
                support.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Benefits / case for support */}
        <section className="border-t border-zinc-200 bg-white py-20 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              The case for a few dollars a month
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600 dark:text-zinc-400">
              Paying tuition isn&rsquo;t charity in the abstract &mdash; it
              removes the single biggest reason kids in Uganda leave school in
              the first place.
            </p>
            <div className="mt-14 grid gap-8 sm:grid-cols-3">
              {BENEFITS.map((benefit, i) => (
                <Reveal
                  key={benefit.title}
                  delay={i * 180}
                  variant={i === 0 ? "left" : i === 2 ? "right" : "up"}
                  className="rounded-2xl border border-zinc-200 p-6 transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:hover:border-zinc-700"
                >
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-50">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {benefit.body}
                  </p>
                  {benefit.source && (
                    <p className="mt-4 text-xs font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                      {benefit.source}
                    </p>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="border-t border-zinc-200 bg-white py-20 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Who&rsquo;s behind it
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {TEAM.map((member, i) => (
                <Reveal
                  key={member.name}
                  delay={(i % 2) * 180}
                  variant="scale"
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
                >
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-50">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    {member.role}
                  </p>
                  {member.bio && (
                    <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {member.bio}
                    </p>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 dark:text-zinc-50 dark:decoration-zinc-700"
                    >
                      LinkedIn
                    </a>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Frequently asked questions
            </h2>
            <div className="mt-10 flex flex-col gap-3">
              {FAQ.map((item) => (
                <FaqItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Join / contact */}
        <section className="bg-white py-20 dark:bg-zinc-900">
          <Reveal className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Want to join?
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              Reach out and we&rsquo;ll walk you through how the monthly
              contribution works.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-6 inline-block text-lg font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 dark:text-zinc-50 dark:decoration-zinc-700"
            >
              {CONTACT_EMAIL}
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-10 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
            Sources
          </p>
          <ul className="mt-3 flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-1.5">
            {SOURCES.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-500 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-700 dark:text-zinc-500 dark:decoration-zinc-700 dark:hover:text-zinc-300"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-500">
            Bridge for Africa &mdash; built by international students in
            Turkey.
          </p>
          <p className="mt-2 text-center text-xs text-zinc-400 dark:text-zinc-600">
            <Link
              href="/privacy"
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-600 dark:decoration-zinc-700 dark:hover:text-zinc-400"
            >
              Privacy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
