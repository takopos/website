import {
  BarChart3,
  FileScan,
  FileText,
  Image,
  Languages,
  Lightbulb,
  MessageSquareWarning,
  ScanLine,
  ShoppingCart,
  Sparkles,
  Wine,
  type LucideIcon,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

import { BookingTrigger } from "@/components/booking/booking-trigger";
import { Button } from "@/components/ui/button";
import {
  tposAiModuleGroups,
  tposAiModules,
} from "@/data/tpos-ai";
import { Link } from "@/i18n/navigation";
import { getFaqPageJsonLd, serializeJsonLd } from "@/lib/seo";

const iconMap: Record<string, LucideIcon> = {
  ScanLine,
  FileScan,
  Wine,
  Languages,
  Image,
  Sparkles,
  FileText,
  BarChart3,
  MessageSquareWarning,
  ShoppingCart,
  Lightbulb,
};

const faqKeys = ["q1", "q2", "q3", "q4"] as const;

export async function TposAiLanding() {
  const t = await getTranslations("tposAiPage");
  const tCta = await getTranslations("cta");

  const faqs = faqKeys.map((key) => ({
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
              render={<Link href="/dining-pos" />}
              variant="outline"
              size="lg"
              className="h-11 px-5 text-sm"
            >
              {t("seeDiningPos")}
            </Button>
          </div>
        </div>
      </section>

      {tposAiModuleGroups.map((groupId) => {
        const modules = tposAiModules.filter((m) => m.group === groupId);
        if (modules.length === 0) return null;

        return (
          <section
            key={groupId}
            className="border-b border-border/60 bg-background py-16 sm:py-20 odd:bg-[#f7f7f8]"
            aria-labelledby={`tpos-ai-group-${groupId}`}
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <h2
                id={`tpos-ai-group-${groupId}`}
                className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
              >
                {t(`groups.${groupId}.title`)}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {t(`groups.${groupId}.lead`)}
              </p>

              <ul className="mt-10 grid gap-6 sm:grid-cols-2">
                {modules.map((mod) => {
                  const Icon = iconMap[mod.icon] ?? Sparkles;
                  return (
                    <li key={mod.id}>
                      <article className="h-full rounded-2xl border border-border/70 bg-background px-6 py-7">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <Icon className="size-5" aria-hidden="true" />
                          </div>
                          <span
                            className={
                              mod.status === "live"
                                ? "rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium tracking-wide text-emerald-700"
                                : "rounded-full bg-violet-50 px-2.5 py-1 text-[11px] font-medium tracking-wide text-violet-700"
                            }
                          >
                            {t(`status.${mod.status}`)}
                          </span>
                        </div>
                        <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                          {t(`modules.${mod.id}.title`)}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {t(`modules.${mod.id}.description`)}
                        </p>
                      </article>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        );
      })}

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
              render={<Link href="/cases" />}
              variant="outline"
              size="lg"
              className="h-11 border-white/25 bg-transparent px-5 text-sm text-white hover:bg-white/10 hover:text-white"
            >
              {t("seeCases")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
