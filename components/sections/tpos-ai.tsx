import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { tposAiFeatures, tposAiSection } from "@/data/tpos-ai";
import { Link } from "@/i18n/navigation";

export async function TposAiSection() {
  const t = await getTranslations("tposAi");

  return (
    <section
      id={tposAiSection.id}
      className="scroll-mt-20 border-y border-border/70 bg-[#f3f2f1] py-20 sm:py-24"
      aria-labelledby="tpos-ai-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2
            id="tpos-ai-heading"
            className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {t("title")}
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted-foreground">
            {t("description")}
          </p>
        </div>

        <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {tposAiFeatures.map((feature, index) => (
            <li key={feature.id} className="relative pl-12">
              <span
                className="absolute top-0 left-0 font-heading text-2xl font-semibold tabular-nums text-primary/80"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3
                id={`tpos-ai-${feature.id}`}
                className="font-heading text-lg font-semibold text-foreground"
              >
                {t(`items.${feature.id}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(`items.${feature.id}.description`)}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <Button
            nativeButton={false}
            render={<Link href="/tpos-ai" />}
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
