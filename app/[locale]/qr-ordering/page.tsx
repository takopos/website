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
  const t = await getTranslations({ locale, namespace: "qrOrdering" });
  return createPageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/qr-ordering",
    locale,
    keywords: [
      "掃碼點餐",
      "QR Code 點餐",
      "桌邊點餐",
      "自助點餐",
      "餐飲 POS",
      "TAKOPOS",
    ],
  });
}

export default async function QrOrderingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  setRequestLocale(raw);
  return (
    <SeoIntentLanding
      namespace="qrOrdering"
      secondaryHref="/dining-pos"
      secondaryLabelKey="seeDiningPos"
      related={[
        { href: "/kitchen-display", labelKey: "relatedKitchen" },
        { href: "/chain-pos", labelKey: "relatedChain" },
        { href: "/cases", labelKey: "seeCases" },
      ]}
    />
  );
}
