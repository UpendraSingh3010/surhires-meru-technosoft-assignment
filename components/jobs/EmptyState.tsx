import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/Button";

type EmptyStateProps = {
  onClear: () => void;
};

export function EmptyState({ onClear }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-border bg-white px-6 py-14 text-center">
      <span className="grid size-16 place-items-center rounded-full bg-teal-50 text-teal-700">
        <SearchX aria-hidden="true" className="size-8" />
      </span>
      <h3 className="mt-5 text-h3 font-bold">No jobs match those filters</h3>
      <p className="mt-2 max-w-md text-muted">
        Try a broader keyword, another city or a different job type. New roles are added every
        weekday.
      </p>
      <Button onClick={onClear} className="mt-6">
        Clear filters
      </Button>
    </div>
  );
}
