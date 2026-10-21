import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  /** "light" is for navy backgrounds such as the footer. */
  tone?: "dark" | "light";
};

/** Surhires mark (an "S" path inside a rounded square) plus text wordmark. */
export function Logo({ tone = "dark" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex min-h-11 items-center gap-2.5 rounded-lg focus-visible:outline-offset-4",
        tone === "light" && "focus-visible:outline-white",
      )}
    >
      <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true">
        <rect width="32" height="32" rx="9" className="fill-teal-700" />
        <path
          d="M21.5 11.5c-.9-1.6-2.8-2.5-5.1-2.5-3 0-5.1 1.5-5.1 3.7 0 2.3 2 3.1 5 3.7 3 .6 5 1.5 5 3.8 0 2.3-2.2 3.8-5.3 3.8-2.4 0-4.4-1-5.3-2.8"
          fill="none"
          strokeWidth="2.6"
          strokeLinecap="round"
          className="stroke-white"
        />
        <circle cx="23" cy="22" r="2.2" className="fill-teal-500" />
      </svg>
      <span
        className={cn(
          "font-heading text-xl font-extrabold tracking-tight",
          tone === "dark" ? "text-navy-900" : "text-white",
        )}
      >
        Surhires
      </span>
    </Link>
  );
}
