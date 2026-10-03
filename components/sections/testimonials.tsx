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
      className="scroll-mt-20 border-t border-border/70 bg-background py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {tHome("title")}
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted-foreground">
            {tHome("description")}
          </p>
          <div className="mt-6">
            <Button
              nativeButton={false}
              render={<Link href="/cases" />}
              variant="outline"
              className="active:translate-y-px"
            >
              {t("seeAll")}
            </Button>
          </div>
        </div>

        <ul className="mt-12 divide-y divide-border/80 border-y border-border/80">
          {featured.map((item) => (
            <li
              key={item.id}
              className="grid gap-2 py-6 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8"
            >
              <div>
                <p className="font-heading text-xl font-semibold text-foreground">
                  {t(`items.${item.id}.name`)}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t(`items.${item.id}.category`)}
                  {" · "}
                  {item.modules.map((m) => t(`modules.${m}`)).join(" · ")}
                </p>
              </div>
              <p className="text-sm font-semibold text-primary sm:text-right">
                {t("stores", { count: item.stores })}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
