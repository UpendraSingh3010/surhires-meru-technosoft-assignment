import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { PostJobForm } from "@/components/employers/PostJobForm";
import { PricingTable } from "@/components/employers/PricingTable";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { employerHighlights } from "@/lib/data/plans";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Hire faster: plans and job posting for employers",
  description:
    "Post a job on Surhires and get a ranked shortlist of matched candidates within 48 hours. Plans from ₹2,999 a month with no placement fees.",
  path: "/employers",
});

export default function EmployersPage() {
  return (
    <>
      <section aria-labelledby="employers-heading" className="bg-teal-50">
        <Container className="grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-small font-semibold tracking-wide text-teal-700 uppercase">
              For employers
            </p>
            <h1 id="employers-heading" className="text-h1 font-extrabold text-balance">
              Fill open roles in weeks, not quarters
            </h1>
            <p className="mt-4 max-w-xl text-body-lg text-muted">
              Post a role once and Surhires sends you a ranked shortlist of candidates who match on
              skills, location and salary.
            </p>
            <ul className="mt-6 space-y-2">
              {employerHighlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2 font-medium text-ink">
                  <CheckCircle2 aria-hidden="true" className="size-5 shrink-0 text-teal-700" />
                  {highlight}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#post-a-job" size="lg">
                Post a job
              </ButtonLink>
              <ButtonLink href="#pricing" size="lg" variant="secondary">
                Compare plans
              </ButtonLink>
            </div>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
            alt="A small hiring team working on laptops around a shared table in a bright office"
            width={1200}
            height={800}
            sizes="(min-width: 1280px) 600px, (min-width: 1024px) 45vw, 100vw"
            preload
            className="aspect-3/2 w-full rounded-3xl object-cover shadow-lift"
          />
        </Container>
      </section>

      <PricingTable />

      <Section
        id="post-a-job"
        tone="tinted"
        eyebrow="Post a job"
        title="Tell us about the role"
        intro="It takes about five minutes. We review every listing and publish it within two working hours."
      >
        <div className="mx-auto max-w-3xl">
          <PostJobForm />
        </div>
      </Section>
    </>
  );
}
