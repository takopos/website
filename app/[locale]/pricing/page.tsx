import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import { PricingSection } from "@/components/sections/pricing";
import { routing, type AppLocale } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (hasLocale(routing.locales, raw) ? raw : routing.defaultLocale) as AppLocale;
  const t = await getTranslations({ locale, namespace: "meta" });
  return createPageMetadata({
    title: t("pricingTitle"),
    description: t("pricingDescription"),
    path: "/pricing",
    locale,
    keywords: [
      "餐飲 POS 價格",
      "餐廳系統方案",
      "連鎖餐飲系統費用",
      "TAKOPOS 方案",
    ],
  });
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  setRequestLocale(raw);
  return <PricingSection />;
}
