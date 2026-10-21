import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";
import { plans } from "@/lib/data/plans";

export function PricingTable() {
  return (
    <Section
      id="pricing"
      tone="white"
      eyebrow="Plans and pricing"
      title="Simple plans that grow with your hiring"
      intro="Prices exclude 18% GST. Every plan includes salary-transparent listings and an applicant inbox."
    >
      <ul className="mx-auto grid max-w-md gap-6 lg:max-w-none lg:grid-cols-3 lg:items-start">
        {plans.map((plan) => (
          <li
            key={plan.name}
            className={cn(
              "relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-card md:p-8",
              plan.highlighted ? "border-teal-700 ring-1 ring-teal-700 lg:-mt-4 lg:pb-12" : "border-border",
            )}
          >
            {plan.highlighted && (
              <p className="absolute -top-3.5 left-6 rounded-full bg-teal-700 px-3 py-1 text-small font-semibold text-white">
                Most popular
              </p>
            )}
            <h3 className="text-h3 font-bold">{plan.name}</h3>
            <p className="mt-2 text-muted">{plan.description}</p>
            <p className="mt-6">
              <span className="font-heading text-4xl font-extrabold text-navy-900">{plan.price}</span>
              <span className="mt-1 block text-small text-muted">{plan.billingNote}</span>
            </p>
            <p className="mt-6 rounded-lg bg-teal-50 px-3 py-2 text-small font-semibold text-teal-700">
              {plan.jobPostLimit}
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-teal-700" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <ButtonLink
              href="/employers#post-a-job"
              size="lg"
              variant={plan.highlighted ? "primary" : "secondary"}
              className="mt-8 w-full"
            >
              {plan.cta}
            </ButtonLink>
          </li>
        ))}
      </ul>
    </Section>
  );
}
