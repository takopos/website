import {
  BarChart3,
  ChefHat,
  CreditCard,
  MonitorSmartphone,
  Package,
  Users,
  type LucideIcon,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

import { features, featuresSection } from "@/data/features";

const iconMap: Record<string, LucideIcon> = {
  MonitorSmartphone,
  ChefHat,
  Package,
  Users,
  BarChart3,
  CreditCard,
};

export async function FeaturesSection() {
  const t = await getTranslations("features");

  return (
    <section
      id={featuresSection.id}
      className="scroll-mt-20 border-y border-border/60 bg-background py-20 sm:py-24"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            {t("eyebrow")}
          </p>
          <h2
            id="features-heading"
            className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t("description")}
          </p>
        </div>

        <dl className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] ?? MonitorSmartphone;
            const painId = `feature-pain-${feature.id}`;
            const solutionId = `feature-solution-${feature.id}`;

            return (
              <div key={feature.id} className="group">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:-translate-y-0.5">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <dt id={painId} className="mt-4 text-xs font-medium tracking-wide text-primary">
                  <span className="sr-only">{t("painLabel")}: </span>
                  {t("painPrefix")}
                  {t(`items.${feature.id}.pain`)}
                </dt>
                <dd className="mt-1.5" aria-labelledby={`${painId} ${solutionId}`}>
                  <h3
                    id={solutionId}
                    className="font-heading text-lg font-semibold text-foreground"
                  >
                    <span className="sr-only">{t("solutionLabel")}: </span>
                    {t(`items.${feature.id}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(`items.${feature.id}.description`)}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
