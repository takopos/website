import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import { CaseDetail } from "@/components/sections/case-detail";
import { cases } from "@/data/cases";
import { routing, type AppLocale } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return cases.map((item) => ({ id: item.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale: raw, id } = await params;
  const locale = (hasLocale(routing.locales, raw)
    ? raw
    : routing.defaultLocale) as AppLocale;
  const item = cases.find((c) => c.id === id);
  if (!item) return {};

  const t = await getTranslations({ locale, namespace: "cases" });
  const name = t(`items.${item.id}.name`);
  return createPageMetadata({
    title: t("detailMetaTitle", { name }),
    description: t(`items.${item.id}.detailLead`),
    path: `/cases/${item.id}`,
    locale,
    keywords: [
      name,
      "餐飲 POS",
      "TAKOPOS",
      "合作案例",
      t(`items.${item.id}.category`),
    ],
  });
}

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale: raw, id } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  if (!cases.some((c) => c.id === id)) notFound();
  setRequestLocale(raw);
  return <CaseDetail id={id} />;
}
