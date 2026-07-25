import { ChainStoreSection } from "@/components/sections/chain-store";
import { FeaturesSection } from "@/components/sections/features";
import { HeroSection } from "@/components/sections/hero";
import { OperationsSection } from "@/components/sections/operations";
import { PricingSection } from "@/components/sections/pricing";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <OperationsSection />
      <ChainStoreSection />
      <PricingSection />
      <TestimonialsSection />
    </>
  );
}
