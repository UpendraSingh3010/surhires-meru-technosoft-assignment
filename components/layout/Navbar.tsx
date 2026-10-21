"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { mainNav } from "@/lib/data/nav";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-warm-white">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((link) => {
              const isActive = link.href === pathname;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "inline-flex min-h-11 items-center rounded-lg px-3 text-small font-medium transition-colors",
                      isActive
                        ? "text-teal-700 underline decoration-2 underline-offset-8"
                        : "text-ink hover:bg-teal-50 hover:text-navy-900",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/employers#post-a-job">Post a job</ButtonLink>
        </div>

        <MobileMenu links={mainNav} pathname={pathname} />
      </Container>
    </header>
  );
}
