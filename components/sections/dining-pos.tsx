import { getTranslations } from "next-intl/server";

import { BookingTrigger } from "@/components/booking/booking-trigger";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { getFaqPageJsonLd, serializeJsonLd } from "@/lib/seo";

const moduleKeys = [
  "ordering",
  "kitchen",
  "inventory",
  "loyalty",
  "analytics",
  "chain",
] as const;

const audienceKeys = ["single", "peak", "chain", "swap"] as const;
const checklistKeys = ["c1", "c2", "c3", "c4", "c5", "c6"] as const;
const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6"] as const;

export async function DiningPosLanding() {
  const t = await getTranslations("diningPos");
  const tCta = await getTranslations("cta");

  const faqs = faqKeys.map((key) => ({
    question: t(`faqs.${key}.q`),
    answer: t(`faqs.${key}.a`),
  }));

  const faqJsonLd = getFaqPageJsonLd(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-[linear-gradient(165deg,#ffffff_0%,#fff7f0_48%,#f5f5f5_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(208,104,44,0.14),transparent_48%),radial-gradient(ellipse_at_bottom_left,rgba(108,100,96,0.08),transparent_42%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="font-heading text-sm font-semibold tracking-[0.22em] text-primary uppercase">
            {t("eyebrow")}
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl leading-[1.15] font-semibold tracking-tight text-foreground sm:text-5xl">
            {t("h1")}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("lead")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookingTrigger
              label={tCta("bookDemo")}
              size="lg"
              className="h-11 px-5 text-sm"
            />
            <Button
              nativeButton={false}
              render={<Link href="/features" />}
              variant="outline"
              size="lg"
              className="h-11 px-5 text-sm"
            >
              {t("seeFeatures")}
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {t("whatTitle")}
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>{t("whatBody1")}</p>
            <p>{t("whatBody2")}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-[var(--brand-charcoal)] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
            {t("forTitle")}
          </h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2">
            {audienceKeys.map((key) => (
              <li key={key} className="border-t border-white/15 pt-5">
                <p className="font-heading text-lg font-semibold">
                  {t(`audience.${key}.title`)}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {t(`audience.${key}.body`)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border/60 bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-2xl font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {t("modulesTitle")}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {t("modulesLead")}
          </p>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {moduleKeys.map((key, index) => (
              <li key={key}>
                <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">
                  {t(`modules.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(`modules.${key}.body`)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-border/60 bg-[#fff7f0] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-2xl font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {t("checklistTitle")}
          </h2>
          <ol className="mt-10 space-y-5">
            {checklistKeys.map((key, index) => (
              <li
                key={key}
                className="grid gap-2 border-b border-primary/15 pb-5 sm:grid-cols-[3rem_1fr]"
              >
                <span className="font-heading text-xl font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-medium text-foreground">
                    {t(`checklist.${key}.title`)}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {t(`checklist.${key}.body`)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
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
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <BookingTrigger
              label={tCta("bookDemo")}
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
              {t("seePricing")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
