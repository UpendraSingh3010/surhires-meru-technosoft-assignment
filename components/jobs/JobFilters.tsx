import { Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import type { JobType } from "@/lib/types";

export type Filters = {
  query: string;
  location: string;
  type: JobType | "";
};

type JobFiltersProps = {
  filters: Filters;
  locations: string[];
  types: JobType[];
  onChange: (filters: Filters) => void;
  onClear: () => void;
};

/** Controlled filter bar; the parent owns the state and does the filtering. */
export function JobFilters({ filters, locations, types, onChange, onClear }: JobFiltersProps) {
  const hasFilters = filters.query !== "" || filters.location !== "" || filters.type !== "";

  return (
    <form
      role="search"
      aria-label="Filter jobs"
      // Results update as you type, so submitting (e.g. pressing Enter) should do nothing.
      onSubmit={(event) => event.preventDefault()}
      className="grid gap-4 rounded-2xl border border-border bg-white p-4 shadow-card sm:grid-cols-2 sm:p-5 lg:grid-cols-[2fr_1fr_1fr_auto] lg:items-end"
    >
      <div className="flex flex-col gap-1.5 sm:col-span-2 lg:col-span-1">
        <label htmlFor="job-query" className="text-small font-semibold text-navy-900">
          Role or keyword
        </label>
        <div className="relative">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-3 size-5 -translate-y-1/2 text-muted"
          />
          <Input
            id="job-query"
            type="search"
            placeholder="e.g. Designer, SQL, Ledgerleaf"
            value={filters.query}
            onChange={(event) => onChange({ ...filters, query: event.target.value })}
            className="pl-10"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="job-location" className="text-small font-semibold text-navy-900">
          Location
        </label>
        <Select
          id="job-location"
          value={filters.location}
          onChange={(event) => onChange({ ...filters, location: event.target.value })}
        >
          <option value="">All locations</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </Select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="job-type" className="text-small font-semibold text-navy-900">
          Job type
        </label>
        <Select
          id="job-type"
          value={filters.type}
          onChange={(event) => onChange({ ...filters, type: event.target.value as Filters["type"] })}
        >
          <option value="">All job types</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
      </div>

      <Button
        variant="secondary"
        onClick={onClear}
        disabled={!hasFilters}
        className="sm:col-span-2 lg:col-span-1"
      >
        Clear filters
      </Button>
    </form>
  );
}
