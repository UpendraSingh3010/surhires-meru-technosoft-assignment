import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Tone = "default" | "tinted" | "white";

const tones: Record<Tone, string> = {
  default: "bg-warm-white",
  tinted: "bg-teal-50",
  white: "bg-white",
};

type SectionProps = ComponentProps<"section"> & {
  tone?: Tone;
  /** Small label shown above the heading, e.g. "How it works". */
  eyebrow?: string;
  title?: string;
  intro?: ReactNode;
};

/**
 * Standard page section: consistent vertical padding, a centred container
 * and an optional heading block. When a title is given the section is
 * labelled by it, so screen readers can navigate by region.
 */
export function Section({
  tone = "default",
  eyebrow,
  title,
  intro,
  id,
  className,
  children,
  ...props
}: SectionProps) {
  const headingId = title && id ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("py-16 md:py-24", tones[tone], className)}
      {...props}
    >
      <Container>
        {title && (
          <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
            {eyebrow && (
              <p className="mb-3 text-small font-semibold tracking-wide text-teal-700 uppercase">
                {eyebrow}
              </p>
            )}
            <h2 id={headingId} className="text-h2 font-bold">
              {title}
            </h2>
            {intro && <p className="mt-4 text-body-lg text-muted">{intro}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
