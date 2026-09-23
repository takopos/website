import { getTranslations } from "next-intl/server";

import { BookingTrigger } from "@/components/booking/booking-trigger";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { getFaqPageJsonLd, serializeJsonLd } from "@/lib/seo";

const defaultPointKeys = ["p1", "p2", "p3", "p4"] as const;
const defaultFaqKeys = ["q1", "q2", "q3", "q4"] as const;

type SeoIntentLandingProps = {
  namespace: "qrOrdering" | "kitchenDisplay" | "chainPos";
  secondaryHref: "/dining-pos" | "/choose-dining-pos" | "/cases" | "/chain-pos";
  secondaryLabelKey: "seeDiningPos" | "seeChoose" | "seeCases" | "seeChain";
  related?: {
    href: "/qr-ordering" | "/kitchen-display" | "/chain-pos" | "/dining-pos" | "/cases";
    labelKey: string;
  }[];
};

export async function SeoIntentLanding({
  namespace,
  secondaryHref,
  secondaryLabelKey,
  related = [],
}: SeoIntentLandingProps) {
  const t = await getTranslations(namespace);
  const tCta = await getTranslations("cta");

  const faqs = defaultFaqKeys.map((key) => ({
    question: t(`faqs.${key}.q`),
    answer: t(`faqs.${key}.a`),
  }));

  return (
    <>
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
          <h1 className="mt-4 max-w-3xl font-heading text-4xl leading-[1.15] font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
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
              render={<Link href={secondaryHref} />}
              variant="outline"
              size="lg"
              className="h-11 px-5 text-sm"
            >
              {t(secondaryLabelKey)}
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
            {t("pointsTitle")}
          </h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2">
            {defaultPointKeys.map((key) => (
              <li key={key} className="border-t border-white/15 pt-5">
                <p className="font-heading text-lg font-semibold">
                  {t(`points.${key}.title`)}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {t(`points.${key}.body`)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="border-b border-border/60 bg-[#fff7f0] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {t("relatedTitle")}
            </h2>
            <ul className="mt-8 flex flex-wrap gap-3">
              {related.map((item) => (
                <li key={item.href}>
                  <Button
                    nativeButton={false}
                    render={<Link href={item.href} />}
                    variant="outline"
                    className="h-10 px-4 text-sm"
                  >
                    {t(item.labelKey)}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="border-b border-border/60 bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {t("faqTitle")}
          </h2>
          <div className="mt-10 space-y-8">
            {defaultFaqKeys.map((key) => (
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
              render={<Link href="/dining-pos" />}
              variant="outline"
              size="lg"
              className="h-11 border-white/25 bg-transparent px-5 text-sm text-white hover:bg-white/10 hover:text-white"
            >
              {t("seeDiningPos")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
