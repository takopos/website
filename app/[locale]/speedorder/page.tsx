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
  const t = await getTranslations({
    locale,
    namespace: "partnerPages.speedorder",
  });
  return createPageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/speedorder",
    locale,
    absoluteTitle: true,
    keywords: [
      "速訂",
      "SpeedOrder",
      "雲端訂貨",
      "訂供貨平台",
      "餐飲進貨",
      "TAKOPOS",
      "餐廳供應鏈",
    ],
  });
}

export default async function SpeedOrderPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  setRequestLocale(raw);
  return (
    <PartnerProductLanding locale={raw as AppLocale} productId="speedorder" />
  );
}
