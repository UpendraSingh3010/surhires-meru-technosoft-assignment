import { cacheLife } from "next/cache";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerColumns } from "@/lib/data/nav";
import { Logo } from "./Logo";
import { InstagramIcon, LinkedInIcon, XIcon } from "./SocialIcons";

const socialLinks = [
  { label: "Surhires on LinkedIn", href: "#", Icon: LinkedInIcon },
  { label: "Surhires on X", href: "#", Icon: XIcon },
  { label: "Surhires on Instagram", href: "#", Icon: InstagramIcon },
];

const linkClasses =
  "rounded text-navy-100 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-white";

export async function Footer() {
  // With Cache Components, `new Date()` must run inside a cached scope.
  // The footer is cached for a day, so the year stays current without
  // making every page dynamic.
  "use cache";
  cacheLife("days");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-navy-100">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo tone="light" />
            <p className="mt-4 max-w-sm">
              Surhires connects growing Indian companies with people ready for their next role.
              Transparent salaries, skill-based matching and no recruiter spam.
            </p>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="font-heading text-small font-bold tracking-wide text-white uppercase">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-1">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={`inline-flex min-h-11 items-center ${linkClasses}`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col-reverse gap-6 border-t border-navy-700 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-small">© {year} Surhires Technologies Pvt. Ltd. All rights reserved.</p>
          <ul className="flex gap-2">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="inline-flex size-11 items-center justify-center rounded-lg text-navy-100 transition-colors hover:bg-navy-700 hover:text-white active:bg-navy-900 focus-visible:outline-white"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
