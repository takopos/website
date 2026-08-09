import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import { ChooseDiningPosGuide } from "@/components/sections/choose-dining-pos";
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
  const t = await getTranslations({ locale, namespace: "chooseDiningPos" });
  return createPageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/choose-dining-pos",
    locale,
    keywords: [
      "餐飲 POS 怎麼選",
      "餐飲 POS 比較",
      "餐廳 POS 推薦",
      "餐飲POS",
      "POS 比較",
      "連鎖餐飲 POS",
      "TAKOPOS",
    ],
  });
}

export default async function ChooseDiningPosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  setRequestLocale(raw);
  return <ChooseDiningPosGuide />;
}
