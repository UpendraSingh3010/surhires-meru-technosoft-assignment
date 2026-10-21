import type { FooterColumn, NavLink } from "@/lib/types";

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Find jobs", href: "/jobs" },
  { label: "For employers", href: "/employers" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Job seekers",
    links: [
      { label: "Browse all jobs", href: "/jobs" },
      { label: "How matching works", href: "/#how-it-works" },
      { label: "Candidate FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Employers",
    links: [
      { label: "Post a job", href: "/employers#post-a-job" },
      { label: "Plans and pricing", href: "/employers#pricing" },
      { label: "Hiring stories", href: "/#testimonials" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Surhires", href: "/#how-it-works" },
      { label: "Contact us", href: "mailto:hello@surhires.example" },
      { label: "Privacy policy", href: "#" },
    ],
  },
];
