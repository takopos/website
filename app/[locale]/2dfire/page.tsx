import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import { PartnerProductLanding } from "@/components/sections/partner-product-landing";
import { routing, type AppLocale } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (hasLocale(routing.locales, raw)
    ? raw
    : routing.defaultLocale) as AppLocale;
  const t = await getTranslations({ locale, namespace: "partnerPages.2dfire" });
  return createPageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/2dfire",
    locale,
    absoluteTitle: true,
    keywords: [
      "二維火",
      "2DFire",
      "2DFire POS",
      "連鎖餐飲 POS",
      "Android POS",
      "TAKOPOS",
      "餐飲 POS 經銷",
    ],
  });
}

export default async function TwoDFirePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  setRequestLocale(raw);
  return <PartnerProductLanding locale={raw as AppLocale} productId="2dfire" />;
}
