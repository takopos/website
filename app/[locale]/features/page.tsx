import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import { FeaturesSection } from "@/components/sections/features";
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
    title: t("featuresTitle"),
    description: t("featuresDescription"),
    path: "/features",
    locale,
    keywords: [
      "餐飲 POS 功能",
      "廚房出餐看板",
      "掃碼點餐",
      "庫存管理",
      "會員行銷",
      "TAKOPOS",
    ],
  });
}

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  setRequestLocale(raw);
  return <FeaturesSection />;
}
