import { getTranslations } from "next-intl/server";

import { BookingTrigger } from "@/components/booking/booking-trigger";
import { Button } from "@/components/ui/button";
import { productLines, type ProductLine } from "@/data/product-lines";
import { Link } from "@/i18n/navigation";
import {
  getFaqPageJsonLd,
  getPartnerProductJsonLd,
  serializeJsonLd,
} from "@/lib/seo";
import type { AppLocale } from "@/i18n/routing";

const faqKeys = ["q1", "q2", "q3"] as const;

export async function PartnerProductLanding({
  locale,
  productId,
}: {
  locale: AppLocale;
  productId: Exclude<ProductLine["id"], "tpos-ai">;
}) {
  const product = productLines.find((p) => p.id === productId);
  if (!product) return null;

  const t = await getTranslations(`partnerPages.${productId}`);
  const tLines = await getTranslations("productLines");
  const tCta = await getTranslations("cta");

  const faqs = faqKeys.map((key) => ({
    question: t(`faqs.${key}.q`),
    answer: t(`faqs.${key}.a`),
  }));
  const highlights = t.raw("highlights") as string[];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(
            getPartnerProductJsonLd({
              locale,
              name: t("name"),
              description: t("metaDescription"),
              path: product.href,
              category:
                product.category === "supply"
                  ? "ProcurementApplication"
                  : "BusinessApplication",
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

      <section className="border-b border-border/70">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-medium text-primary">
            {tLines("kind.partner")}
            {" · "}
            {tLines("brandOfTakopos")}
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-4xl leading-[1.15] font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
            {t("h1")}
          </h1>
          <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("lead")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookingTrigger
              label={tCta("bookDemo")}
              size="lg"
              className="h-11 px-5 text-sm active:translate-y-px"
            />
            <Button
              nativeButton={false}
              render={<Link href="/product-lines" />}
              variant="outline"
              size="lg"
              className="h-11 px-5 text-sm active:translate-y-px"
            >
              {t("seeAllLines")}
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
            {t("fitTitle")}
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted-foreground">
            {t("fitBody")}
          </p>
          <ul className="mt-8 max-w-2xl space-y-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="border-l-2 border-primary/40 pl-3 text-sm leading-relaxed text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border/70 bg-[#f3f2f1] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
            {t("faqTitle")}
          </h2>
          <dl className="mt-10 max-w-3xl divide-y divide-border/80 border-y border-border/80">
            {faqKeys.map((key) => (
              <div key={key} className="py-6">
                <dt className="font-heading text-lg font-semibold text-foreground">
                  {t(`faqs.${key}.q`)}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(`faqs.${key}.a`)}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              render={<Link href="/tpos-ai" />}
              variant="outline"
              className="active:translate-y-px"
            >
              {t("relatedTposAi")}
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="/choose-dining-pos" />}
              variant="outline"
              className="active:translate-y-px"
            >
              {t("relatedChoose")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
