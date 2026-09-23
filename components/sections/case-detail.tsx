import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import { BookingTrigger } from "@/components/booking/booking-trigger";
import { Button } from "@/components/ui/button";
import { cases, type CaseId } from "@/data/cases";
import { Link } from "@/i18n/navigation";

export async function CaseDetail({ id }: { id: string }) {
  const item = cases.find((c) => c.id === id);
  if (!item) notFound();

  const t = await getTranslations("cases");
  const tCta = await getTranslations("cta");
  const caseId = item.id as CaseId;

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-[linear-gradient(165deg,#ffffff_0%,#fff7f0_48%,#f5f5f5_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(208,104,44,0.14),transparent_48%),radial-gradient(ellipse_at_bottom_left,rgba(108,100,96,0.08),transparent_42%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="font-heading text-sm font-semibold tracking-[0.22em] text-primary uppercase">
              {t(`items.${caseId}.category`)}
            </p>
            <h1 className="mt-4 font-heading text-4xl leading-[1.15] font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
              {t(`items.${caseId}.name`)}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t(`items.${caseId}.detailLead`)}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              {t("stores", { count: item.stores })}
              {" · "}
              {item.modules.map((m) => t(`modules.${m}`)).join(" · ")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookingTrigger
                label={tCta("bookDemo")}
                size="lg"
                className="h-11 px-5 text-sm"
              />
              <Button
                nativeButton={false}
                render={<Link href="/cases" />}
                variant="outline"
                size="lg"
                className="h-11 px-5 text-sm"
              >
                {t("backToList")}
              </Button>
            </div>
          </div>

          <figure className="overflow-hidden rounded-2xl bg-muted">
            <Image
              src={item.image.src}
              alt={item.image.alt}
              width={item.image.width}
              height={item.image.height}
              className="aspect-[4/3] h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 520px"
              priority
            />
            {"credit" in item.image && item.image.credit ? (
              <figcaption className="px-3 py-2 text-[11px] leading-relaxed text-muted-foreground">
                {item.image.credit.credit}
                <span className="text-muted-foreground/80">
                  {" · "}
                  {item.image.credit.license}
                </span>
              </figcaption>
            ) : null}
          </figure>
        </div>
      </section>

      <section className="border-b border-border/60 bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {t("detailWhyTitle")}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t(`items.${caseId}.detailBody`)}
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/90">
            {t(`items.${caseId}.summary`)}
          </p>
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
              render={<Link href="/chain-pos" />}
              variant="outline"
              size="lg"
              className="h-11 border-white/25 bg-transparent px-5 text-sm text-white hover:bg-white/10 hover:text-white"
            >
              {t("seeChainPos")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
