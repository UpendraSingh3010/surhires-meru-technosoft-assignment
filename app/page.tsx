import type { Metadata } from "next";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Faq } from "@/components/home/Faq";
import { FeaturedRoles } from "@/components/home/FeaturedRoles";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { LogoStrip } from "@/components/home/LogoStrip";
import { Testimonials } from "@/components/home/Testimonials";
import { siteConfig } from "@/lib/site";

// Title, description and Open Graph tags come from the root layout defaults.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Organization structured data for search engines.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/icon.svg`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // Escaping "<" prevents the JSON from closing the script tag early.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <LogoStrip />
      <HowItWorks />
      <FeaturedRoles />
      <Testimonials />
      <Faq />
      <CtaBanner />
    </>
  );
}
