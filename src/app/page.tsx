const CONTACT_EMAIL = "amro25@itu.edu.tr";

type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  linkedin?: string;
};

const TEAM: TeamMember[] = [
  {
    name: "Eliya Amro",
    role: "Computer Engineering, ITU",
    bio: "Polish-Tanzanian engineering student in Istanbul working across software and hardware, currently interning in IT alongside his degree.",
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

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-zinc-950">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Bridge for Africa
          </span>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Join us
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
            A monthly bridge to a kid&rsquo;s education.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            We&rsquo;re a group of international students in Turkey who pool a small
            monthly contribution to pay school tuition for kids in need in
            Africa &mdash; starting in Uganda.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="w-full rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 sm:w-auto dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Contribute monthly
            </a>
            <a
              href="#how-it-works"
              className="w-full rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 sm:w-auto dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
            >
              How it works
            </a>
          </div>
        </section>

        {/* Current impact */}
        <section className="border-y border-zinc-200 bg-white py-14 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="mx-auto max-w-4xl px-6 text-center">
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
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            How it works
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white dark:bg-white dark:text-zinc-900">
                1
              </div>
              <h3 className="mt-4 font-medium text-zinc-900 dark:text-zinc-50">
                We chip in monthly
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                A small group of international students in Turkey each give
                what they can, every month.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white dark:bg-white dark:text-zinc-900">
                2
              </div>
              <h3 className="mt-4 font-medium text-zinc-900 dark:text-zinc-50">
                It goes straight to tuition
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Contributions are pooled and paid directly toward a child&rsquo;s
                school fees.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white dark:bg-white dark:text-zinc-900">
                3
              </div>
              <h3 className="mt-4 font-medium text-zinc-900 dark:text-zinc-50">
                We grow, one kid at a time
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                As more people join, we take on the next child who needs
                support.
              </p>
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
              {TEAM.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-950"
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join / contact */}
        <section className="bg-white py-20 dark:bg-zinc-900">
          <div className="mx-auto max-w-2xl px-6 text-center">
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
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-500">
          Bridge for Africa &mdash; built by international students in
          Turkey.
        </p>
      </footer>
    </div>
  );
}
