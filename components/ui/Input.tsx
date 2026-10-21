import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

/** Shared look for text inputs, selects and textareas. */
export const controlClasses =
  "w-full min-h-11 rounded-lg border border-border bg-white px-3.5 py-2.5 text-body text-ink " +
  "placeholder:text-muted transition-colors hover:border-muted " +
  "focus-visible:border-teal-700 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-teal-700 " +
  "disabled:cursor-not-allowed disabled:bg-warm-white disabled:opacity-60 " +
  "aria-invalid:border-danger aria-invalid:focus-visible:outline-danger";

export function Input({ className, ...props }: ComponentProps<"input">) {
  return <input className={cn(controlClasses, className)} {...props} />;
}

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return <textarea className={cn(controlClasses, "min-h-36", className)} {...props} />;
}
