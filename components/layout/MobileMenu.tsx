"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { NavLink } from "@/lib/types";

type MobileMenuProps = {
  links: NavLink[];
  pathname: string;
};

const PANEL_ID = "mobile-menu";

export function MobileMenu({ links, pathname }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close the menu whenever the route changes (including back/forward).
  // Adjusting state during render is React's recommended alternative to an effect here.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) return;

    // Lock page scroll behind the open menu and move focus into it.
    document.body.style.overflow = "hidden";
    wrapperRef.current?.querySelector<HTMLElement>(`#${PANEL_ID} a`)?.focus();

    // Close if the viewport grows to the desktop layout, where the menu is hidden.
    const desktop = window.matchMedia("(min-width: 64rem)");
    const closeOnDesktop = () => desktop.matches && setIsOpen(false);
    desktop.addEventListener("change", closeOnDesktop);

    return () => {
      document.body.style.overflow = "";
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [isOpen]);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (!isOpen) return;

    if (event.key === "Escape") {
      setIsOpen(false);
      buttonRef.current?.focus();
      return;
    }

    // Keep Tab focus inside the toggle button and the menu panel while open.
    if (event.key === "Tab" && wrapperRef.current) {
      const focusable = wrapperRef.current.querySelectorAll<HTMLElement>("button, a");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  }

  return (
    <div ref={wrapperRef} onKeyDown={handleKeyDown} className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={PANEL_ID}
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex size-11 items-center justify-center rounded-lg text-navy-900 transition-colors hover:bg-teal-50 active:bg-border"
      >
        {isOpen ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      </button>

      <nav
        id={PANEL_ID}
        aria-label="Main"
        hidden={!isOpen}
        className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto border-t border-border bg-warm-white"
      >
        <ul className="flex flex-col gap-1 px-4 py-6 sm:px-6">
          {links.map((link) => {
            const isActive = link.href === pathname;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  // Same-page anchor links don't change the route, so close explicitly.
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex min-h-12 items-center rounded-lg px-4 font-heading text-lg font-semibold transition-colors",
                    isActive ? "bg-teal-50 text-teal-700" : "text-navy-900 hover:bg-teal-50 active:bg-border",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="border-t border-border px-4 py-6 sm:px-6">
          <ButtonLink
            href="/employers#post-a-job"
            size="lg"
            className="w-full"
            onClick={() => setIsOpen(false)}
          >
            Post a job
          </ButtonLink>
        </div>
      </nav>
    </div>
  );
}
