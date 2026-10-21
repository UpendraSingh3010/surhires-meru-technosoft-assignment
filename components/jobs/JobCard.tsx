import { Building2, CalendarDays, IndianRupee, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { buttonClasses } from "@/components/ui/Button";
import { cardClasses } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import { formatDate } from "@/lib/format";
import type { Job } from "@/lib/types";

type JobCardProps = {
  job: Job;
};

export function JobCard({ job }: JobCardProps) {
  // No backend: "Apply" opens a pre-filled email to the Surhires applications inbox.
  const applyHref = `mailto:apply@surhires.example?subject=${encodeURIComponent(
    `Application: ${job.title} at ${job.company}`,
  )}`;

  return (
    <article
      className={cn(cardClasses, "flex h-full flex-col p-6 transition-shadow duration-200 hover:shadow-lift")}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-h3 font-bold">{job.title}</h3>
        <Badge tone="teal" className="shrink-0">
          {job.type}
        </Badge>
      </div>

      <dl className="mt-4 grid gap-2 text-small text-muted">
        <div className="flex items-center gap-2">
          <dt>
            <Building2 aria-hidden="true" className="size-4 text-teal-700" />
            <span className="sr-only">Company</span>
          </dt>
          <dd className="font-medium text-ink">{job.company}</dd>
        </div>
        <div className="flex items-center gap-2">
          <dt>
            <MapPin aria-hidden="true" className="size-4 text-teal-700" />
            <span className="sr-only">Location</span>
          </dt>
          <dd>{job.location}</dd>
        </div>
        <div className="flex items-center gap-2">
          <dt>
            <IndianRupee aria-hidden="true" className="size-4 text-teal-700" />
            <span className="sr-only">Salary</span>
          </dt>
          <dd className="font-semibold text-ink">{job.salary}</dd>
        </div>
        <div className="flex items-center gap-2">
          <dt>
            <CalendarDays aria-hidden="true" className="size-4 text-teal-700" />
            <span className="sr-only">Posted</span>
          </dt>
          <dd>
            Posted <time dateTime={job.postedAt}>{formatDate(job.postedAt)}</time>
          </dd>
        </div>
      </dl>

      <ul className="mt-4 mb-auto flex flex-wrap gap-2" aria-label="Key skills">
        {job.skills.map((skill) => (
          <li key={skill}>
            <Badge>{skill}</Badge>
          </li>
        ))}
      </ul>

      <a href={applyHref} className={cn(buttonClasses(), "mt-6 self-start")}>
        Apply
        <span className="sr-only">
          {" "}
          for {job.title} at {job.company}
        </span>
      </a>
    </article>
  );
}
