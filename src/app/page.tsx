import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { BridgeMark } from "@/components/BridgeMark";
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
import { FaqList } from "@/components/FaqList";

export const dynamic = "force-dynamic";

type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  linkedin?: string;
  photo?: string;
  photoPosition?: string;
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
  stat: string;
  body: string;
  detail: string;
  source?: string;
  sourceUrl: string;
  image: string;
};

const BENEFITS: Benefit[] = [
  {
    title: "It's about cost, not ability",
    stat: "$700/term",
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
    stat: "9–10%",
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
    stat: "$15–30T",
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
    bio: "Handles the technical side of Bridge for Africa, including the website and the database behind it, along with the finances covering incoming contributions and expansion.",
    linkedin: "https://www.linkedin.com/in/eliya-amro-91b619351/",
    photo: "/images/team-eliya.png",
  },
  {
    name: "Hisham Habib Abdulaziz",
    role: "Industrial Engineering, YTU",
    bio: "Oversees the project's overall direction and vision planning, setting the long-term strategy for how Bridge for Africa grows and shaping the priorities the team works toward every month.",
    linkedin: "https://www.linkedin.com/in/habib-abdulaziz-hisham-02438b365/",
    photo: "/images/team-hisham.png",
  },
  {
    name: "Rayan Ssebunya",
    role: "Economics, YTU",
    bio: "Leads outreach to potential contributors and partner organizations, and handles most of the project's external communication and relationship-building.",
    linkedin: "https://www.linkedin.com/in/rayan-ssebunya-b84325244/",
    photo: "/images/team-rayan.png",
  },
  {
    name: "Sedia Danso",
    role: "Electrical Engineering, ITU",
    bio: "Coordinates logistics with the school in Uganda, including scheduling and documentation, and makes sure tuition payments and proof of payment come through as expected.",
    linkedin: "https://www.linkedin.com/in/sedia-danso-a8aa4529b/",
    photo: "/images/team-sedia.png",
    photoPosition: "40% center",
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
        <section id="impact" className="border-y border-zinc-200 bg-white py-14 dark:border-zinc-800 dark:bg-zinc-900">
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
                  {totals.count} contributor{totals.count === 1 ? "" : "s"}{" "}
                  supporting the project so far
                  {totals.total > 0 && (
                    <>
                      , with ₺<CountUp value={totals.total} /> raised toward
                      tuition
                    </>
                  )}
                  .
                </>
              ) : (
                "No contributions yet. Yours could be the first."
              )}
            </p>
          </Reveal>
        </section>

        {/* Transparency */}
        <section className="mx-auto max-w-4xl px-6 py-20">
          <Reveal className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Where your contribution goes
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
              Bridge for Africa is currently an independent, student-led
              project, and not yet a registered nonprofit. Here&rsquo;s
              exactly how we handle contributions in the meantime.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            <Reveal delay={0} className="text-center">
              <p className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                100%
              </p>
              <h3 className="mt-2 font-medium text-zinc-900 dark:text-zinc-50">
                Goes to tuition
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                There&rsquo;s no organization to fund. Every contribution goes
                directly toward a child&rsquo;s school fees.
              </p>
            </Reveal>
            <Reveal delay={150} className="text-center">
              <p className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                Proof
              </p>
              <h3 className="mt-2 font-medium text-zinc-900 dark:text-zinc-50">
                Payment provided
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                We share tuition receipts and other documentation showing the
                costs were actually covered.
              </p>
            </Reveal>
            <Reveal delay={300} className="text-center">
              <p className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                1 at a time
              </p>
              <h3 className="mt-2 font-medium text-zinc-900 dark:text-zinc-50">
                One child at a time
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Contributions are pooled until we can responsibly take on the
                next child who needs support.
              </p>
            </Reveal>
          </div>
          <Reveal delay={450} className="mt-14 text-center">
            <Link
              href="/contribute"
              className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition-all duration-300 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white motion-safe:hover:-translate-y-0.5 motion-safe:active:scale-95 dark:border-zinc-700 dark:text-zinc-50 dark:hover:border-white dark:hover:bg-white dark:hover:text-zinc-900"
            >
              Help fund the next child
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
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
            <p className="mx-auto mt-4 max-w-md text-center text-zinc-600 dark:text-zinc-400">
              Meet the students who started Bridge for Africa.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {TEAM.map((member, i) => (
                <Reveal
                  key={member.name}
                  delay={(i % 2) * 180}
                  variant="scale"
                  className="flex overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
                >
                  <div className="flex-1 p-6">
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
                  </div>
                  {member.photo && (
                    <div className="relative w-2/5 shrink-0 [-webkit-mask-image:linear-gradient(to_right,transparent,black_45%)] [mask-image:linear-gradient(to_right,transparent,black_45%)]">
                      <Image
                        src={member.photo}
                        alt=""
                        fill
                        className="object-cover"
                        style={
                          member.photoPosition
                            ? { objectPosition: member.photoPosition }
                            : undefined
                        }
                      />
                    </div>
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
            <FaqList items={FAQ} />
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
                className="relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-5 text-left transition-all duration-300 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="pointer-events-none absolute -right-5 -bottom-5 h-28 w-28 text-zinc-900/[0.06] dark:text-zinc-50/[0.08]"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m3 6.5 9 6.5 9-6.5" />
                </svg>
                <div className="relative">
                  <div className="text-xs font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                    Email
                  </div>
                  <div className="mt-1 font-medium text-zinc-900 dark:text-zinc-50">
                    {CONTACT_EMAIL}
                  </div>
                </div>
              </a>
              <a
                href={FOUNDER_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-5 text-left transition-all duration-300 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="pointer-events-none absolute -right-5 -bottom-5 h-28 w-28 text-green-600/[0.06] dark:text-green-400/[0.08]"
                >
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.48 1.32 5L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m5.83 14.11c-.25.7-1.45 1.33-2 1.42-.51.08-1.15.11-1.86-.12a17 17 0 0 1-1.68-.62c-2.96-1.28-4.89-4.26-5.04-4.46-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.79-.37h.57c.18 0 .43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.32-.13.62.17.3.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.35.08.13.08.75-.17 1.45" />
                </svg>
                <div className="relative">
                  <div className="text-xs font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                    WhatsApp
                  </div>
                  <div className="mt-1 font-medium text-zinc-900 dark:text-zinc-50">
                    Message Eliya
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-14 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2 text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                <BridgeMark className="h-[18px] w-[18px]" />
                Bridge for Africa
              </div>
              <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                Students building access to education, one child at a time.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                Project
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-sm">
                <li>
                  <a
                    href="#how-it-works"
                    className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="#impact"
                    className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    Impact
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                Get involved
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-sm">
                <li>
                  <Link
                    href="/contribute"
                    className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    Contribute
                  </Link>
                </li>
                <li>
                  <a
                    href={WHATSAPP_GROUP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    Join us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                Contact
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-sm">
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href={FOUNDER_WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
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
          </div>

          <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              Bridge for Africa, built by international students in Turkey.
            </p>
            <p className="text-xs text-zinc-400 dark:text-zinc-600">
              <Link
                href="/privacy"
                className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-600 dark:decoration-zinc-700 dark:hover:text-zinc-400"
              >
                Privacy
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
