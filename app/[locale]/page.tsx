import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import { ChainStoreSection } from "@/components/sections/chain-store";
import { FeaturesSection } from "@/components/sections/features";
import { HeroSection } from "@/components/sections/hero";
import { OperationsSection } from "@/components/sections/operations";
import { PaymentsSection } from "@/components/sections/payments";
import { PricingSection } from "@/components/sections/pricing";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { routing, type AppLocale } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (hasLocale(routing.locales, raw) ? raw : routing.defaultLocale) as AppLocale;
  return createPageMetadata({ path: "/", locale });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  setRequestLocale(raw);

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <OperationsSection />
      <PaymentsSection />
      <ChainStoreSection />
      <PricingSection />
      <TestimonialsSection />
    </>
  );
}
