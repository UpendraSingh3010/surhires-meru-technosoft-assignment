import type { Plan } from "@/lib/types";

export const employerHighlights: string[] = [
  "Ranked shortlists within 48 hours",
  "Verified candidates in 120+ cities",
  "No placement fees, cancel any time",
];

export const plans: Plan[] = [
  {
    name: "Starter",
    price: "₹2,999",
    billingNote: "per month, billed monthly",
    description: "For founders and small teams making their first few hires.",
    jobPostLimit: "2 active job posts",
    features: [
      "30-day listing on Surhires",
      "Applicant inbox with shortlist and reject",
      "Screening questions on every post",
      "Email support within one business day",
    ],
    cta: "Start with Starter",
  },
  {
    name: "Growth",
    price: "₹7,999",
    billingNote: "per month, billed monthly",
    description: "For growing companies hiring across several teams at once.",
    jobPostLimit: "10 active job posts",
    features: [
      "Everything in Starter",
      "Skill-based candidate matching",
      "Featured placement for 3 roles a month",
      "Interview scheduling with calendar sync",
      "3 recruiter seats",
    ],
    cta: "Choose Growth",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "₹19,999",
    billingNote: "per month, billed annually",
    description: "For HR teams running high-volume or multi-city hiring.",
    jobPostLimit: "Unlimited job posts",
    features: [
      "Everything in Growth",
      "Unlimited recruiter seats",
      "Hiring funnel reports by role and city",
      "Branded careers page",
      "Dedicated account manager",
    ],
    cta: "Talk to sales",
  },
];
