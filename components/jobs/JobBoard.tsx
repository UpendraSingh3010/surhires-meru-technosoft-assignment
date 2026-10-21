"use client";

import { useState } from "react";
import type { Job, JobType } from "@/lib/types";
import { EmptyState } from "./EmptyState";
import { JobCard } from "./JobCard";
import { JobFilters, type Filters } from "./JobFilters";

type JobBoardProps = {
  jobs: Job[];
  locations: string[];
  types: JobType[];
};

const emptyFilters: Filters = { query: "", location: "", type: "" };

function matches(job: Job, filters: Filters) {
  const query = filters.query.trim().toLowerCase();
  const searchable = [job.title, job.company, ...job.skills].join(" ").toLowerCase();

  return (
    (query === "" || searchable.includes(query)) &&
    (filters.location === "" || job.location === filters.location) &&
    (filters.type === "" || job.type === filters.type)
  );
}

/** Owns the filter state and renders the filter bar plus the matching jobs. */
export function JobBoard({ jobs, locations, types }: JobBoardProps) {
  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const results = jobs.filter((job) => matches(job, filters));

  function clearFilters() {
    setFilters(emptyFilters);
    // The clicked button becomes disabled or disappears, so move focus somewhere useful.
    document.getElementById("job-query")?.focus();
  }

  return (
    <>
      <JobFilters
        filters={filters}
        locations={locations}
        types={types}
        onChange={setFilters}
        onClear={clearFilters}
      />

      <div className="mt-10 mb-6 flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-h3 font-bold">Open roles</h2>
        <p aria-live="polite" className="text-small font-medium text-muted">
          Showing {results.length} of {jobs.length} jobs
        </p>
      </div>

      {results.length > 0 ? (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((job) => (
            <li key={job.id}>
              <JobCard job={job} />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState onClear={clearFilters} />
      )}
    </>
  );
}
