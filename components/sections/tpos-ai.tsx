import {
  Languages,
  ScanLine,
  Sparkles,
  Wine,
  type LucideIcon,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { tposAiFeatures, tposAiSection } from "@/data/tpos-ai";
import { Link } from "@/i18n/navigation";

const iconMap: Record<string, LucideIcon> = {
  ScanLine,
  Wine,
  Languages,
  Sparkles,
};

export async function TposAiSection() {
  const t = await getTranslations("tposAi");

  return (
    <section
      id={tposAiSection.id}
      className="scroll-mt-20 bg-[#f7f7f8] py-20 sm:py-24"
      aria-labelledby="tpos-ai-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            {t("eyebrow")}
          </p>
          <h2
            id="tpos-ai-heading"
            className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t("description")}
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {tposAiFeatures.map((feature) => {
            const Icon = iconMap[feature.icon] ?? Sparkles;
            return (
              <li key={feature.id}>
                <article
                  className="group h-full rounded-2xl border border-border/70 bg-background px-6 py-7 transition-transform duration-300 hover:-translate-y-0.5"
                  aria-labelledby={`tpos-ai-${feature.id}`}
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3
                    id={`tpos-ai-${feature.id}`}
                    className="mt-4 font-heading text-lg font-semibold text-foreground"
                  >
                    {t(`items.${feature.id}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(`items.${feature.id}.description`)}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>

        <div className="mt-10">
          <Button
            nativeButton={false}
            render={<Link href="/tpos-ai" />}
            size="lg"
            className="h-11 px-5 text-sm"
          >
            {t("seeAll")}
          </Button>
        </div>
      </div>
    </section>
  );
}
