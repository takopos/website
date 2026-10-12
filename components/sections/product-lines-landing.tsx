import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { BookingTrigger } from "@/components/booking/booking-trigger";
import { Button } from "@/components/ui/button";
import {
  posProductLines,
  productLines,
  supplyProductLines,
  type ProductLine,
} from "@/data/product-lines";
import { Link } from "@/i18n/navigation";
import {
  getFaqPageJsonLd,
  getProductLinesOfferCatalogJsonLd,
  serializeJsonLd,
} from "@/lib/seo";
import type { AppLocale } from "@/i18n/routing";

const faqKeys = ["q1", "q2", "q3", "q4"] as const;

function DetailBlock({
  product,
  t,
}: {
  product: ProductLine;
  t: Awaited<ReturnType<typeof getTranslations>>;
}) {
  const kindLabel =
    product.kind === "owned" ? t("kind.owned") : t("kind.partner");
  const highlights = t.raw(`items.${product.id}.highlights`) as string[];

  return (
    <article
      id={product.id}
      className="scroll-mt-24 border-t border-border/80 py-12 first:border-t-0 first:pt-0"
    >
      <div className="flex flex-wrap items-center gap-3">
        {product.logoSrc ? (
          <Image
            src={product.logoSrc}
            alt={t(`items.${product.id}.name`)}
            width={180}
            height={54}
            className="h-10 w-auto object-contain object-left"
          />
        ) : null}
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {t(`items.${product.id}.name`)}
        </h2>
        <span className="text-xs font-medium text-primary">{kindLabel}</span>
      </div>
      <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted-foreground">
        {t(`items.${product.id}.lead`)}
      </p>
      <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-foreground/85">
        {t(`items.${product.id}.fit`)}
      </p>
      <ul className="mt-6 max-w-xl space-y-2">
        {highlights.map((item) => (
          <li
            key={item}
            className="border-l-2 border-primary/40 pl-3 text-sm leading-relaxed text-muted-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button
          nativeButton={false}
          render={<Link href={product.href} />}
          className="active:translate-y-px"
        >
          {t(`items.${product.id}.cta`)}
        </Button>
        <BookingTrigger
          label={t("bookFit")}
          variant="outline"
          className="active:translate-y-px"
        />
      </div>
    </article>
  );
}

export async function ProductLinesLanding({ locale }: { locale: AppLocale }) {
  const t = await getTranslations("productLinesPage");
  const tHome = await getTranslations("productLines");
  const tCta = await getTranslations("cta");

  const faqs = faqKeys.map((key) => ({
    question: t(`faqs.${key}.q`),
    answer: t(`faqs.${key}.a`),
  }));

  const catalog = getProductLinesOfferCatalogJsonLd({
    locale,
    products: productLines.map((p) => ({
      id: p.id,
      href: p.href,
      name: tHome(`items.${p.id}.name`),
      description: tHome(`items.${p.id}.summary`),
      kind: p.kind,
    })),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(catalog) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(getFaqPageJsonLd(faqs)),
        }}
      />

      <section className="border-b border-border/70">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h1 className="max-w-3xl font-heading text-4xl leading-[1.15] font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
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
              render={<Link href="/choose-dining-pos" />}
              variant="outline"
              size="lg"
              className="h-11 px-5 text-sm active:translate-y-px"
            >
              {t("seeChoose")}
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
            {tHome("posGroupTitle")}
          </h2>
          <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-muted-foreground">
            {tHome("posGroupLead")}
          </p>
          <div className="mt-10">
            {posProductLines.map((product) => (
              <DetailBlock key={product.id} product={product} t={tHome} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/70 bg-[#f3f2f1] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
            {tHome("supplyGroupTitle")}
          </h2>
          <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-muted-foreground">
            {tHome("supplyGroupLead")}
          </p>
          <div className="mt-10">
            {supplyProductLines.map((product) => (
              <DetailBlock key={product.id} product={product} t={tHome} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/70 bg-background py-16 sm:py-20">
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
        </div>
      </section>
    </>
  );
}
