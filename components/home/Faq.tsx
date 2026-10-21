import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";
import { faqs } from "@/lib/data/faqs";

export function Faq() {
  return (
    <Section
      id="faq"
      tone="white"
      eyebrow="FAQ"
      title="Questions, answered"
      intro="Everything employers and job seekers usually ask before getting started."
    >
      <div className="mx-auto max-w-3xl">
        <Accordion items={faqs} />
      </div>
    </Section>
  );
}
