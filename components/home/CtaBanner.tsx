import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CtaBanner() {
  return (
    <section aria-labelledby="cta-heading" className="bg-warm-white py-16 md:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-12 text-center sm:px-12 md:py-16">
          {/* Decorative teal glow */}
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 size-72 rounded-full bg-teal-500/20 blur-3xl"
          />
          <h2 id="cta-heading" className="relative mx-auto max-w-2xl text-h2 font-bold text-white">
            Your next hire, or your next role, is a few clicks away
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-body-lg text-navy-100">
            Join 4,200+ companies and 380,000 job seekers who use Surhires to make better hiring
            decisions, faster.
          </p>
          <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/employers" size="lg" className="focus-visible:outline-white">
              Hire faster
            </ButtonLink>
            <ButtonLink href="/jobs" size="lg" variant="inverse">
              Find a job
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
