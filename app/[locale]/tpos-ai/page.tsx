import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import { TposAiLanding } from "@/components/sections/tpos-ai-landing";
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
  const t = await getTranslations({ locale, namespace: "tposAiPage" });
  return createPageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/tpos-ai",
    locale,
    keywords: [
      "TPOS AI",
      "餐飲 AI",
      "AI 菜單辨識",
      "AI 菜單翻譯",
      "AI 營運分析",
      "Vision OCR",
      "TAKOPOS",
    ],
  });
}

export default async function TposAiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  setRequestLocale(raw);
  return <TposAiLanding />;
}
