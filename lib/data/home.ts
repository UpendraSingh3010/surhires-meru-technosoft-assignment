import { Handshake, Sparkles, UserRoundPlus, type LucideIcon } from "lucide-react";

export const heroStats = [
  { value: "18 days", label: "average time to hire" },
  { value: "4,200+", label: "companies hiring" },
  { value: "120+", label: "cities across India" },
];

export type Step = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

export const howItWorksSteps: Step[] = [
  {
    title: "Post a role or build your profile",
    description:
      "Employers publish a role with a salary range in under ten minutes. Job seekers list their skills, preferred cities and expected pay once.",
    Icon: UserRoundPlus,
  },
  {
    title: "Get matched on skills",
    description:
      "Our matching ranks candidates against each role and explains every match, so recruiters shortlist faster and candidates see why they fit.",
    Icon: Sparkles,
  },
  {
    title: "Hire or get hired",
    description:
      "Schedule interviews, share feedback and send offers from one inbox. Most Surhires roles are filled within three weeks.",
    Icon: Handshake,
  },
];
