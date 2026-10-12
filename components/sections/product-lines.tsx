import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import {
  posProductLines,
  productLinesSection,
  supplyProductLines,
  type ProductLine,
} from "@/data/product-lines";
import { Link } from "@/i18n/navigation";

function ProductCard({
  product,
  t,
}: {
  product: ProductLine;
  t: Awaited<ReturnType<typeof getTranslations>>;
}) {
  const kindLabel =
    product.kind === "owned" ? t("kind.owned") : t("kind.partner");

  return (
    <article className="flex h-full flex-col border-t border-border/80 pt-6">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          {product.logoSrc ? (
            <Image
              src={product.logoSrc}
              alt={t(`items.${product.id}.name`)}
              width={160}
              height={48}
              className="h-8 w-auto object-contain object-left"
            />
          ) : (
            <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground">
              {t(`items.${product.id}.name`)}
            </h3>
          )}
          {product.logoSrc ? (
            <p className="mt-2 font-heading text-lg font-semibold text-foreground">
              {t(`items.${product.id}.name`)}
            </p>
          ) : null}
        </div>
        <p className="shrink-0 text-xs font-medium text-primary">{kindLabel}</p>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {t(`items.${product.id}.summary`)}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-foreground/80">
        {t(`items.${product.id}.fit`)}
      </p>
      <div className="mt-5">
        <Button
          nativeButton={false}
          render={<Link href={product.href} />}
          variant="outline"
          className="active:translate-y-px"
        >
          {t(`items.${product.id}.cta`)}
        </Button>
      </div>
    </article>
  );
}

export async function ProductLinesSection() {
  const t = await getTranslations("productLines");

  return (
    <section
      id={productLinesSection.id}
      className="scroll-mt-20 border-y border-border/70 bg-[#f3f2f1] py-20 sm:py-24"
      aria-labelledby="product-lines-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2
            id="product-lines-heading"
            className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {t("title")}
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted-foreground">
            {t("description")}
          </p>
        </div>

        <div className="mt-12">
          <h3 className="font-heading text-lg font-semibold text-foreground">
            {t("posGroupTitle")}
          </h3>
          <p className="mt-2 max-w-[65ch] text-sm text-muted-foreground">
            {t("posGroupLead")}
          </p>
          <div className="mt-8 grid gap-10 md:grid-cols-3">
            {posProductLines.map((product) => (
              <ProductCard key={product.id} product={product} t={t} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-heading text-lg font-semibold text-foreground">
            {t("supplyGroupTitle")}
          </h3>
          <p className="mt-2 max-w-[65ch] text-sm text-muted-foreground">
            {t("supplyGroupLead")}
          </p>
          <div className="mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {supplyProductLines.map((product) => (
              <ProductCard key={product.id} product={product} t={t} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <Button
            nativeButton={false}
            render={<Link href="/product-lines" />}
            size="lg"
            className="h-11 px-5 text-sm active:translate-y-px"
          >
            {t("seeAll")}
          </Button>
        </div>
      </div>
    </section>
  );
}
