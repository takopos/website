import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { cases } from "@/data/cases";
import { Link } from "@/i18n/navigation";

export async function TestimonialsSection() {
  const t = await getTranslations("cases");
  const tHome = await getTranslations("testimonials");

  const featured = cases.filter((item) => item.featured);

  return (
    <section
      id="support"
      className="scroll-mt-20 border-t border-border/60 bg-[#f7f7f8] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
              {tHome("eyebrow")}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {tHome("title")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {tHome("description")}
            </p>
          </div>
          <Button
            nativeButton={false}
            render={<Link href="/cases" />}
            variant="outline"
            className="shrink-0"
          >
            {t("seeAll")}
          </Button>
        </div>

        <ul className="mt-12 divide-y divide-border/70 border-y border-border/70">
          {featured.map((item) => (
            <li
              key={item.id}
              className="grid gap-2 py-6 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8"
            >
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                  {t(`items.${item.id}.category`)}
                </p>
                <p className="mt-1 font-heading text-xl font-semibold text-foreground">
                  {t(`items.${item.id}.name`)}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.modules.map((m) => t(`modules.${m}`)).join(" · ")}
                </p>
              </div>
              <p className="text-sm font-semibold text-foreground sm:text-right">
                {t("stores", { count: item.stores })}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
