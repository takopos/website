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
  const t = await getTranslations({ locale, namespace: "partnerPages.eats365" });
  return createPageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/eats365",
    locale,
    absoluteTitle: true,
    keywords: [
      "Eats365",
      "Eats365 POS",
      "iPad 點餐",
      "吃到飽掃碼點餐",
      "Apple POS",
      "TAKOPOS",
      "餐飲 POS 經銷",
    ],
  });
}

export default async function Eats365Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  setRequestLocale(raw);
  return (
    <PartnerProductLanding locale={raw as AppLocale} productId="eats365" />
  );
}
