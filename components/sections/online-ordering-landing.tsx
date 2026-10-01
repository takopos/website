import { getTranslations } from "next-intl/server";

import { BookingTrigger } from "@/components/booking/booking-trigger";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import {
  getFaqPageJsonLd,
  getOnlineOrderingSoftwareJsonLd,
  serializeJsonLd,
} from "@/lib/seo";

const painKeys = ["missedOrders", "posSync", "turnover"] as const;
const featureKeys = ["tableQr", "takeout", "cloudReports"] as const;
const faqKeys = ["q1", "q2", "q3", "q4"] as const;

export async function OnlineOrderingLanding({
  locale,
}: {
  locale: AppLocale;
}) {
  const t = await getTranslations("onlineOrdering");
  const faqs = faqKeys.map((key) => ({
    question: t(`faqs.${key}.q`),
    answer: t(`faqs.${key}.a`),
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(
            getOnlineOrderingSoftwareJsonLd({
              locale,
              name: t("schemaName"),
              description: t("metaDescription"),
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(getFaqPageJsonLd(faqs)),
        }}
      />

      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-[linear-gradient(165deg,#ffffff_0%,#fff7f0_48%,#f5f5f5_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(208,104,44,0.14),transparent_48%),radial-gradient(ellipse_at_bottom_left,rgba(108,100,96,0.08),transparent_42%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="font-heading text-sm font-semibold tracking-[0.22em] text-primary uppercase">
            {t("eyebrow")}
          </p>
          <h1 className="mt-4 max-w-4xl font-heading text-3xl leading-[1.18] font-semibold tracking-tight text-balance text-foreground sm:text-4xl lg:text-[2.65rem]">
            {t("h1")}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("lead")}
          </p>
          <div
            className="mt-8 flex flex-wrap gap-3"
            role="group"
            aria-label={t("ctaGroupLabel")}
          >
            <BookingTrigger
              label={t("primaryCta")}
              size="lg"
              className="h-11 px-5 text-sm"
            />
            <Button
              nativeButton={false}
              render={<Link href="/pricing" />}
              variant="outline"
              size="lg"
              className="h-11 px-5 text-sm"
            >
              {t("secondaryCta")}
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground sm:text-sm">
            {t("audienceNote")}
          </p>
        </div>
      </section>

      <section className="border-b border-border/60 bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
              {t("whatEyebrow")}
            </p>
            <p className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {t("whatTitle")}
            </p>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>{t("whatBody1")}</p>
            <p>{t("whatBody2")}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-[var(--brand-charcoal)] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-[0.18em] text-[var(--brand-orange)] uppercase">
            {t("painsEyebrow")}
          </p>
          {painKeys.map((key) => (
            <article
              key={key}
              className="border-t border-white/15 pt-8 first:border-t-0 first:pt-0"
            >
              <h2 className="max-w-3xl font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                {t(`pains.${key}.title`)}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
                {t(`pains.${key}.body`)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-border/60 bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            {t("featuresEyebrow")}
          </p>
          {featureKeys.map((key) => (
            <article
              key={key}
              className="border-t border-border/70 pt-8 first:border-t-0 first:pt-0"
            >
              <h2 className="max-w-3xl font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {t(`features.${key}.title`)}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {t(`features.${key}.body`)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-border/60 bg-[#fff7f0] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {t("relatedTitle")}
          </h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            <li>
              <Button
                nativeButton={false}
                render={<Link href="/qr-ordering" />}
                variant="outline"
                className="h-10 px-4 text-sm"
              >
                {t("relatedQr")}
              </Button>
            </li>
            <li>
              <Button
                nativeButton={false}
                render={<Link href="/dining-pos" />}
                variant="outline"
                className="h-10 px-4 text-sm"
              >
                {t("relatedDiningPos")}
              </Button>
            </li>
            <li>
              <Button
                nativeButton={false}
                render={<Link href="/tpos-ai" />}
                variant="outline"
                className="h-10 px-4 text-sm"
              >
                {t("relatedTposAi")}
              </Button>
            </li>
            <li>
              <Button
                nativeButton={false}
                render={<Link href="/cases" />}
                variant="outline"
                className="h-10 px-4 text-sm"
              >
                {t("relatedCases")}
              </Button>
            </li>
          </ul>
        </div>
      </section>

      <section className="border-b border-border/60 bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {t("faqTitle")}
          </h2>
          <div className="mt-10 space-y-8">
            {faqKeys.map((key) => (
              <div key={key} className="border-t border-border/70 pt-6">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {t(`faqs.${key}.q`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {t(`faqs.${key}.a`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-charcoal)] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
            {t("ctaTitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
            {t("ctaBody")}
          </p>
          <div
            className="mt-8 flex flex-wrap justify-center gap-3"
            role="group"
            aria-label={t("ctaGroupLabel")}
          >
            <BookingTrigger
              label={t("primaryCta")}
              size="lg"
              className="h-11 px-5 text-sm"
            />
            <Button
              nativeButton={false}
              render={<Link href="/pricing" />}
              variant="outline"
              size="lg"
              className="h-11 border-white/25 bg-transparent px-5 text-sm text-white hover:bg-white/10 hover:text-white"
            >
              {t("secondaryCta")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
