import { JobBoard } from "@/components/jobs/JobBoard";
import { Container } from "@/components/ui/Container";
import { jobLocations, jobs, jobTypes } from "@/lib/data/jobs";

export default function JobsPage() {
  return (
    <>
      <section aria-labelledby="jobs-heading" className="border-b border-border bg-teal-50 py-12 md:py-16">
        <Container>
          <p className="mb-3 text-small font-semibold tracking-wide text-teal-700 uppercase">
            Find jobs
          </p>
          <h1 id="jobs-heading" className="max-w-3xl text-h1 font-extrabold">
            Roles with real salaries, from teams that reply
          </h1>
          <p className="mt-4 max-w-2xl text-body-lg text-muted">
            Browse {jobs.length} open roles across engineering, design, sales, HR and operations.
            Filter by keyword, city or job type and apply in a couple of minutes.
          </p>
        </Container>
      </section>

      <section aria-label="Job search" className="py-10 md:py-14">
        <Container>
          <JobBoard jobs={jobs} locations={jobLocations} types={jobTypes} />
        </Container>
      </section>
    </>
  );
}
