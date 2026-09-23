import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import { SeoIntentLanding } from "@/components/sections/seo-intent-landing";
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
  const t = await getTranslations({ locale, namespace: "kitchenDisplay" });
  return createPageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/kitchen-display",
    locale,
    keywords: [
      "廚房出餐看板",
      "KDS",
      "廚房顯示器",
      "出餐系統",
      "餐飲 POS",
      "TAKOPOS",
    ],
  });
}

export default async function KitchenDisplayPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  setRequestLocale(raw);
  return (
    <SeoIntentLanding
      namespace="kitchenDisplay"
      secondaryHref="/dining-pos"
      secondaryLabelKey="seeDiningPos"
      related={[
        { href: "/qr-ordering", labelKey: "relatedQr" },
        { href: "/chain-pos", labelKey: "relatedChain" },
        { href: "/cases", labelKey: "seeCases" },
      ]}
    />
  );
}
