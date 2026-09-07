import Link from "next/link";
import { Header } from "@/components/Header";
import { ImageCarousel } from "@/components/ImageCarousel";
import { BenefitCard } from "@/components/BenefitCard";
import {
  CONTACT_EMAIL,
  WHATSAPP_GROUP_URL,
  FOUNDER_WHATSAPP_URL,
} from "@/lib/constants";
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
      "African children of school age are currently out of school.",
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
  detail: string;
  source?: string;
  sourceUrl: string;
  image: string;
};

const BENEFITS: Benefit[] = [
  {
    title: "It's about cost, not ability",
    body: "In Uganda, financial barriers are the single most-cited reason children never enroll or drop out. Not distance, not capacity, not interest. Some government-aided secondary schools charge families as much as $700 a term, and education now eats up roughly 8.5% of household spending, over four times the global average.",
    detail:
      "This is the reason Bridge for Africa exists. When we spoke with families and school administrators, the same barrier kept coming up: unpaid tuition, not a lack of interest or ability, is what pulls children out of the classroom. In Uganda, a single term at a government-aided secondary school can cost as much as $700, while the average household already spends roughly 8.5% of its budget on education, more than four times the global average. For families already stretched thin, that gap is often the difference between a child finishing school and a child dropping out. A pooled monthly contribution, even a modest one, closes that gap directly.",
    source: "UNICEF Uganda, Policy Note 1/2024",
    sourceUrl:
      "https://www.unicef.org/uganda/media/16861/file/Challenges%20of%20Education%20Sector%20in%20Uganda%20in%20Brief.pdf.pdf",
    image: "/images/benefit-cost.png",
  },
  {
    title: "It breaks the cycle",
    body: "Children whose own education was funded are far more likely to keep their kids in school a generation later. Paying for one child's tuition tends to ripple well beyond that one child.",
    detail:
      "Education doesn't stop with one child. A parent's own schooling is one of the strongest predictors of whether their children stay in school a generation later, and each additional year of education raises lifetime earnings by roughly 9 to 10% on average worldwide. Covering one child's tuition today means that child is far more likely to keep their own kids enrolled in the future. It isn't a one-time gift. It's the first link in a much longer chain, which is exactly why we treat this as a recurring, monthly commitment rather than a single donation.",
    source: "World Bank",
    sourceUrl:
      "https://documents1.worldbank.org/curated/en/442521523465644318/pdf/WPS8402.pdf",
    image: "/images/benefit-cycle.png",
  },
  {
    title: "Girls see the largest gains",
    body: "Secondary education for girls is linked to a near-elimination of child marriage, and women with a secondary education typically earn almost twice as much over their lives as those with none.",
    detail:
      "The World Bank's 2018 report on the cost of not educating girls estimates that the gap costs the global economy between $15 and $30 trillion in lost lifetime earnings. The reverse is just as striking: secondary education for girls is linked to a near-elimination of child marriage, and women who complete secondary school typically earn close to twice as much over their lifetime as those who don't. Every contribution that keeps a girl enrolled in Uganda is working directly against those numbers.",
    source: "World Bank, 2018",
    sourceUrl:
      "https://www.worldbank.org/en/topic/education/publication/missed-opportunities-the-high-cost-of-not-educating-girls",
    image: "/images/benefit-girls.png",
  },
];

type Source = {
  label: string;
  url: string;
};

const SOURCES: Source[] = [
  {
    label: "World Bank: returns to investment in education",
    url: "https://documents1.worldbank.org/curated/en/442521523465644318/pdf/WPS8402.pdf",
  },
  {
    label:
      "World Bank: \"Missed Opportunities: The High Cost of Not Educating Girls\" (2018)",
    url: "https://www.worldbank.org/en/topic/education/publication/missed-opportunities-the-high-cost-of-not-educating-girls",
  },
  {
    label: "UNESCO: Global Education Monitoring Report / SDG 4 Scorecard",
    url: "https://www.unesco.org/gem-report/en",
  },
  {
    label: "UNICEF Uganda: Overcoming the Challenges of Education in Uganda",
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
      "Whatever works for you. Third-party contributions can be made at any time, whether as a one-time gift or something you repeat. There's no fixed schedule to stick to.",
  },
  {
    question: "How do you know the money actually reaches the child?",
    answer:
      "We provide proof of payment, like tuition receipts or other documentation of the costs covered.",
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
              Africa, currently in Uganda.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex items-center justify-center">
              <a
                href="#how-it-works"
                className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-zinc-700 motion-safe:hover:-translate-y-0.5 motion-safe:active:scale-95 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                See how it works
              </a>
            </div>
          </Reveal>
        </section>

        {/* Photo */}
        <section className="mx-auto max-w-4xl px-6 pb-4">
          <Reveal delay={300}>
            <ImageCarousel
              images={[
                { src: "/images/classroom.jpg" },
                { src: "/images/writing.png" },
                { src: "/images/presentation.png" },
              ]}
            />
          </Reveal>
        </section>

        {/* Current impact */}
        <section className="border-y border-zinc-200 bg-white py-14 dark:border-zinc-800 dark:bg-zinc-900">
          <Reveal className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Right now
            </p>
            <p className="mt-3 text-2xl font-semibold text-zinc-900 sm:text-3xl dark:text-zinc-50">
              We&rsquo;re currently covering one child&rsquo;s tuition in
              Uganda, and looking to take on more.
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
                "No contributions yet. Yours could be the first."
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
              What the research says
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
              Tuition is the single biggest reason kids in Uganda leave school.
              Paying it removes that barrier directly.
            </p>
            <div className="mt-14 grid items-start gap-8 sm:grid-cols-3">
              {BENEFITS.map((benefit) => (
                <BenefitCard key={benefit.title} benefit={benefit} />
              ))}
            </div>
          </div>
        </section>

        {/* Contribute CTA */}
        <section className="bg-zinc-900 py-20 text-white dark:bg-black">
          <Reveal className="mx-auto max-w-2xl px-6 text-center">
            <p className="text-sm font-medium uppercase tracking-wide text-zinc-400">
              Ready to help?
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              You&rsquo;ve seen why it matters. Here&rsquo;s how you help.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-zinc-300">
              A monthly contribution, even a small one, goes straight to a
              child&rsquo;s tuition. You can start today.
            </p>
            <p className="mx-auto mt-4 max-w-md text-zinc-300">
              We started with 7 members and one child. Our goal is to grow
              this into something much bigger, and that only happens with
              more people like you. The more of us there are, the more kids
              we can reach.
            </p>
            <Link
              href="/contribute"
              className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition-all duration-300 hover:bg-zinc-200 motion-safe:hover:-translate-y-0.5 motion-safe:active:scale-95"
            >
              Contribute monthly
            </Link>
          </Reveal>
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

        {/* Join */}
        <section className="bg-white py-20 dark:bg-zinc-900">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Become part of the group
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              We&rsquo;re a small circle of people who actually make this
              happen, and we&rsquo;d genuinely like you to be one of us. In
              the group chat we coordinate contributions and share updates on
              the child we&rsquo;re supporting. Come say hello.
            </p>
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-zinc-700 motion-safe:hover:-translate-y-0.5 motion-safe:active:scale-95 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Become a member
            </a>
          </div>
        </section>

        {/* Contact the founders */}
        <section className="border-t border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Have other questions?
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              Reach out to Eliya, one of the founders, directly.
            </p>
            <div className="mx-auto mt-8 grid max-w-md gap-4 sm:grid-cols-2">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="rounded-xl border border-zinc-200 bg-white p-5 text-left transition-all duration-300 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
              >
                <div className="text-xs font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                  Email
                </div>
                <div className="mt-1 font-medium text-zinc-900 dark:text-zinc-50">
                  {CONTACT_EMAIL}
                </div>
              </a>
              <a
                href={FOUNDER_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-zinc-200 bg-white p-5 text-left transition-all duration-300 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
              >
                <div className="text-xs font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                  WhatsApp
                </div>
                <div className="mt-1 font-medium text-zinc-900 dark:text-zinc-50">
                  Message Eliya
                </div>
              </a>
            </div>
          </div>
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
            Bridge for Africa, built by international students in Turkey.
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
