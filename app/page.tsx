import { CtaBanner } from "@/components/home/CtaBanner";
import { Faq } from "@/components/home/Faq";
import { FeaturedRoles } from "@/components/home/FeaturedRoles";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { LogoStrip } from "@/components/home/LogoStrip";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
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
