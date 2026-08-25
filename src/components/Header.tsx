import Link from "next/link";
import { BridgeMark } from "@/components/BridgeMark";
import { CONTACT_EMAIL } from "@/lib/constants";

export function Header() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          <BridgeMark className="h-[22px] w-[22px]" />
          Bridge for Africa
        </Link>
        <div className="flex items-center gap-5">
          <Link
            href="/donors"
            className="relative hidden text-sm font-medium text-zinc-600 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-zinc-900 after:transition-all after:duration-300 hover:text-zinc-900 hover:after:w-full sm:inline dark:text-zinc-400 dark:after:bg-zinc-100 dark:hover:text-zinc-100"
          >
            Donors
          </Link>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-zinc-700 motion-safe:active:scale-95 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Join us
          </a>
        </div>
      </div>
    </header>
  );
}
