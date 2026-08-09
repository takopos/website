import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import { DiningPosLanding } from "@/components/sections/dining-pos";
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
  const t = await getTranslations({ locale, namespace: "diningPos" });
  return createPageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/dining-pos",
    locale,
    keywords: [
      "餐飲 POS",
      "餐飲POS",
      "POS",
      "餐廳 POS",
      "連鎖餐飲 POS",
      "餐飲系統",
      "TAKOPOS",
    ],
  });
}

export default async function DiningPosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  setRequestLocale(raw);
  return <DiningPosLanding />;
}
