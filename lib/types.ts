export type JobType =
  | "Full-time"
  | "Part-time"
  | "Contract"
  | "Internship"
  | "Remote";

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: JobType;
  /** Annual salary range in INR (monthly stipend for internships). */
  salary: string;
  /** ISO date string, e.g. "2026-10-14". */
  postedAt: string;
  skills: string[];
  featured?: boolean;
};

export type Plan = {
  name: string;
  price: string;
  billingNote: string;
  description: string;
  jobPostLimit: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  audience: "Employer" | "Candidate";
};

export type NavLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: NavLink[];
};
