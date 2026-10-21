import { Compass } from "lucide-react";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-heading" className="py-20 md:py-32">
      <Container className="flex flex-col items-center text-center">
        <span className="grid size-16 place-items-center rounded-full bg-teal-50 text-teal-700">
          <Compass aria-hidden="true" className="size-8" />
        </span>
        <p className="mt-6 text-small font-semibold tracking-wide text-teal-700 uppercase">
          Error 404
        </p>
        <h1 id="not-found-heading" className="mt-2 text-h1 font-extrabold">
          This page has moved on
        </h1>
        <p className="mt-4 max-w-md text-body-lg text-muted">
          The link may be old or the role may have been filled. Try browsing open jobs or head back
          to the home page.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/jobs" size="lg">
            Browse open jobs
          </ButtonLink>
          <ButtonLink href="/" size="lg" variant="secondary">
            Back to home
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
