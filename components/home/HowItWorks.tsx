import { Section } from "@/components/ui/Section";
import { howItWorksSteps } from "@/lib/data/home";

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      tone="white"
      eyebrow="How it works"
      title="From first post to signed offer in three steps"
      intro="The same simple flow works whether you are hiring your first engineer or looking for your next role."
    >
      <ol className="grid gap-6 md:grid-cols-3">
        {howItWorksSteps.map(({ title, description, Icon }, index) => (
          <li
            key={title}
            className="relative rounded-2xl border border-border bg-warm-white p-6 md:p-8"
          >
            <div className="flex items-center gap-4">
              <span className="grid size-12 place-items-center rounded-xl bg-teal-500 text-navy-900">
                <Icon aria-hidden="true" className="size-6" />
              </span>
              <span className="font-heading text-small font-bold text-teal-700">
                Step {index + 1}
              </span>
            </div>
            <h3 className="mt-5 text-h3 font-bold">{title}</h3>
            <p className="mt-2 text-muted">{description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
