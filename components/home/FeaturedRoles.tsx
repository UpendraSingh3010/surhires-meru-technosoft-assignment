import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { JobCard } from "@/components/jobs/JobCard";
import { Section } from "@/components/ui/Section";
import { featuredJobs } from "@/lib/data/jobs";

export function FeaturedRoles() {
  return (
    <Section
      id="featured-roles"
      eyebrow="Featured roles"
      title="Roles hiring this week"
      intro="Hand-picked openings from verified employers, every one with a published salary range."
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredJobs.map((job) => (
          <li key={job.id}>
            <JobCard job={job} />
          </li>
        ))}
      </ul>
      <div className="mt-10 text-center">
        <Link
          href="/jobs"
          className="inline-flex min-h-11 items-center gap-2 rounded-lg px-2 font-semibold text-teal-700 underline-offset-4 hover:underline active:text-navy-900"
        >
          View all jobs
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </Section>
  );
}
