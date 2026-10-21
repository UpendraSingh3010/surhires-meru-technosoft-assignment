import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Tone = "teal" | "neutral";

const tones: Record<Tone, string> = {
  teal: "bg-teal-50 text-teal-700 ring-teal-700/20",
  neutral: "bg-warm-white text-muted ring-border",
};

type BadgeProps = ComponentProps<"span"> & { tone?: Tone };

export function Badge({ tone = "neutral", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full whitespace-nowrap px-2.5 py-1 text-small font-medium ring-1 ring-inset",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
