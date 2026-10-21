const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric",
  // A fixed time zone keeps server and browser output identical (no hydration mismatch).
  timeZone: "UTC",
});

/** "2026-10-18" -> "18 Oct 2026" */
export function formatDate(isoDate: string) {
  return dateFormatter.format(new Date(isoDate));
}
