import { BadgeCheck, MapPin, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { heroStats } from "@/lib/data/home";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="overflow-hidden bg-warm-white">
      <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1.5 text-small font-semibold text-teal-700 ring-1 ring-teal-700/15">
            <Sparkles aria-hidden="true" className="size-4" />
            Every role shows its salary range
          </p>
          <h1 id="hero-heading" className="text-display font-extrabold text-balance">
            Hire the right people. <span className="text-teal-700">Find the right work.</span>
          </h1>
          <p className="mt-6 max-w-xl text-body-lg text-muted">
            Surhires matches employers with candidates on skills, location and pay, so hiring
            teams get a ranked shortlist in days and job seekers only see roles worth applying for.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/employers" size="lg">
              Hire faster
            </ButtonLink>
            <ButtonLink href="/jobs" size="lg" variant="secondary">
              Find a job
            </ButtonLink>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6">
            {heroStats.map((stat) => (
              // Label comes first in the DOM (read as "label: value") but shows below the value.
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-small text-muted">{stat.label}</dt>
                <dd className="font-heading text-xl font-bold text-navy-900 sm:text-2xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}

/** Decorative product mockup built from HTML/CSS; hidden from assistive tech. */
function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="absolute inset-0 rounded-4xl bg-teal-50" />
      <svg
        viewBox="0 0 400 400"
        className="absolute -top-6 -right-6 size-40 text-teal-500/30"
        fill="currentColor"
      >
        {Array.from({ length: 36 }, (_, i) => (
          <circle key={i} cx={20 + (i % 6) * 72} cy={20 + Math.floor(i / 6) * 72} r="8" />
        ))}
      </svg>

      <div className="relative flex flex-col gap-5 p-6 sm:p-10">
        {/* Job card mockup */}
        <div className="rounded-2xl border border-border bg-white p-5 shadow-lift motion-safe:animate-float">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-heading text-lg font-bold text-navy-900">Product Designer</p>
              <p className="text-small text-muted">Kitebox Logistics</p>
            </div>
            <Badge tone="teal">Full-time</Badge>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-small text-muted">
            <span className="inline-flex items-center gap-1">
              <MapPin className="size-4" /> Pune
            </span>
            <span className="font-semibold text-ink">₹14L – ₹20L</span>
          </div>
          <div className="mt-4 h-2 w-full rounded-full bg-warm-white">
            <div className="h-2 w-3/4 rounded-full bg-teal-500" />
          </div>
          <p className="mt-2 text-small text-muted">36 applicants · 9 strong matches</p>
        </div>

        {/* Candidate match card mockup */}
        <div className="ml-auto w-[88%] rounded-2xl bg-navy-900 p-5 text-white shadow-lift motion-safe:animate-float motion-safe:[animation-delay:-3s]">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-teal-500 font-heading font-bold text-navy-900">
              PN
            </span>
            <div>
              <p className="font-semibold">Priya Nair</p>
              <p className="text-small text-navy-100">5 yrs · Figma, design systems</p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between rounded-xl bg-navy-700 px-4 py-3">
            <span className="inline-flex items-center gap-2 text-small">
              <BadgeCheck className="size-5 text-teal-500" /> Skills match
            </span>
            <span className="font-heading text-xl font-bold text-teal-500">94%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
