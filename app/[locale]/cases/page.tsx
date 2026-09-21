import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import { CasesLanding } from "@/components/sections/cases";
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
  const t = await getTranslations({ locale, namespace: "cases" });
  return createPageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/cases",
    locale,
    keywords: [
      "餐飲",
      "POS",
      "餐飲 POS",
      "餐飲POS",
      "餐飲 POS 案例",
      "餐廳 POS 導入",
      "連鎖餐飲 POS",
      "掃碼點餐",
      "TAKOPOS",
      "燒肉眾",
      "ABV",
    ],
  });
}

export default async function CasesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  setRequestLocale(raw);
  return <CasesLanding />;
}
