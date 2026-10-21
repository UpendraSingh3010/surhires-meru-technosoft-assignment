import { Container } from "@/components/ui/Container";
import { trustedCompanies } from "@/lib/data/companies";

// Varied type treatments make the text wordmarks read like distinct brands.
const wordmarkStyles = [
  "font-heading text-xl font-extrabold tracking-tight",
  "font-sans text-base font-semibold tracking-[0.2em] uppercase",
  "font-heading text-xl font-bold italic",
  "font-sans text-xl font-medium tracking-tight",
  "font-heading text-xl font-semibold tracking-wide lowercase",
  "font-sans text-base font-bold tracking-widest uppercase",
];

export function LogoStrip() {
  return (
    <section aria-labelledby="trusted-heading" className="border-y border-border bg-white py-12">
      <Container>
        <h2
          id="trusted-heading"
          className="text-center font-sans text-small font-semibold text-muted"
        >
          Trusted by hiring teams at
        </h2>
        <ul className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 text-center sm:grid-cols-3 lg:grid-cols-6">
          {trustedCompanies.map((company, index) => (
            <li
              key={company}
              className={`text-muted ${wordmarkStyles[index % wordmarkStyles.length]}`}
            >
              {company}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
