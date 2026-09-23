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
  const t = await getTranslations({ locale, namespace: "chainPos" });
  return createPageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/chain-pos",
    locale,
    keywords: [
      "連鎖餐飲管理",
      "連鎖 POS",
      "總部控管",
      "多店管理",
      "菜單同步",
      "餐飲 POS",
      "TAKOPOS",
    ],
  });
}

export default async function ChainPosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  setRequestLocale(raw);
  return (
    <SeoIntentLanding
      namespace="chainPos"
      secondaryHref="/cases"
      secondaryLabelKey="seeCases"
      related={[
        { href: "/qr-ordering", labelKey: "relatedQr" },
        { href: "/kitchen-display", labelKey: "relatedKitchen" },
        { href: "/dining-pos", labelKey: "seeDiningPos" },
      ]}
    />
  );
}
