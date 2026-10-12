import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import { ProductLinesLanding } from "@/components/sections/product-lines-landing";
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
  const t = await getTranslations({ locale, namespace: "productLinesPage" });
  return createPageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/product-lines",
    locale,
    absoluteTitle: true,
    keywords: [
      "TAKOPOS 產品線",
      "TPOS AI",
      "二維火",
      "2DFire",
      "Eats365",
      "速訂",
      "SpeedOrder",
      "餐飲 POS",
      "雲端訂供貨",
      "餐飲 POS 選型",
    ],
  });
}

export default async function ProductLinesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  setRequestLocale(raw);
  return <ProductLinesLanding locale={raw as AppLocale} />;
}
