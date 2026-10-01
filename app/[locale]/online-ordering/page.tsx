import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import { OnlineOrderingLanding } from "@/components/sections/online-ordering-landing";
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
  const t = await getTranslations({ locale, namespace: "onlineOrdering" });
  return createPageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/online-ordering",
    locale,
    absoluteTitle: true,
    keywords: [
      "線上點餐系統",
      "線上點餐 POS",
      "桌邊線上點餐",
      "掃碼點餐系統",
      "餐飲線上點餐方案",
      "QR Code 點餐串接",
      "TPOS AI",
      "TAKOPOS",
    ],
  });
}

export default async function OnlineOrderingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  setRequestLocale(raw);
  return <OnlineOrderingLanding locale={raw as AppLocale} />;
}
