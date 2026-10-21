import { Quote } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { testimonials } from "@/lib/data/testimonials";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      tone="tinted"
      eyebrow="Hiring stories"
      title="Teams hire faster. Candidates choose with confidence."
    >
      <ul className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <li key={testimonial.name}>
            <figure className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-card md:p-8">
              <div className="flex items-center justify-between">
                <Quote aria-hidden="true" className="size-8 text-teal-500" />
                <Badge tone={testimonial.audience === "Employer" ? "teal" : "neutral"}>
                  {testimonial.audience}
                </Badge>
              </div>
              <blockquote className="mt-4 flex-1 text-body-lg text-ink">
                <p>“{testimonial.quote}”</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 border-t border-border pt-6">
                <span
                  aria-hidden="true"
                  className="grid size-12 shrink-0 place-items-center rounded-full bg-navy-900 font-heading font-bold text-white"
                >
                  {initials(testimonial.name)}
                </span>
                <div>
                  <p className="font-semibold text-navy-900">{testimonial.name}</p>
                  <p className="text-small text-muted">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}
