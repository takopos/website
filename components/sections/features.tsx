import { getTranslations } from "next-intl/server";

import { features, featuresSection } from "@/data/features";

export async function FeaturesSection({
  asPage = false,
}: {
  /** Standalone /features page needs a single page-level h1. */
  asPage?: boolean;
} = {}) {
  const t = await getTranslations("features");
  const Heading = asPage ? "h1" : "h2";

  return (
    <section
      id={featuresSection.id}
      className="scroll-mt-20 bg-background py-20 sm:py-24"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Heading
            id="features-heading"
            className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {t("title")}
          </Heading>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted-foreground">
            {t("description")}
          </p>
        </div>

        <dl className="mt-12 divide-y divide-border/80 border-y border-border/80">
          {features.map((feature, index) => {
            const painId = `feature-pain-${feature.id}`;
            const solutionId = `feature-solution-${feature.id}`;

            return (
              <div
                key={feature.id}
                className="grid gap-3 py-7 sm:grid-cols-[4.5rem_minmax(0,1fr)_minmax(0,1.1fr)] sm:items-start sm:gap-8"
              >
                <dt className="font-heading text-sm font-semibold tabular-nums text-primary">
                  {String(index + 1).padStart(2, "0")}
                </dt>
                <dd className="min-w-0" aria-labelledby={`${painId} ${solutionId}`}>
                  <p
                    id={painId}
                    className="text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="sr-only">{t("painLabel")}: </span>
                    {t(`items.${feature.id}.pain`)}
                  </p>
                  <h3
                    id={solutionId}
                    className="mt-1.5 font-heading text-lg font-semibold text-foreground sm:text-xl"
                  >
                    <span className="sr-only">{t("solutionLabel")}: </span>
                    {t(`items.${feature.id}.title`)}
                  </h3>
                </dd>
                <dd className="min-w-0 text-sm leading-relaxed text-muted-foreground sm:pt-0.5">
                  {t(`items.${feature.id}.description`)}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
