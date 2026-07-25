import { Check } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { BookingTrigger } from "@/components/booking/booking-trigger";
import { Badge } from "@/components/ui/badge";
import { pricingPlans, pricingSection } from "@/data/pricing";
import { cn } from "@/lib/utils";

export async function PricingSection() {
  const t = await getTranslations("pricing");
  const tCta = await getTranslations("cta");

  return (
    <section
      id={pricingSection.id}
      className="scroll-mt-20 bg-background py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t("description")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => {
            const features = t.raw(`plans.${plan.id}.features`) as string[];

            return (
              <article
                key={plan.id}
                className={cn(
                  "relative flex flex-col rounded-2xl border p-6 transition-transform duration-300 hover:-translate-y-1",
                  plan.featured
                    ? "border-primary bg-[linear-gradient(180deg,#fff7f0,white)] shadow-[0_24px_50px_-28px_rgba(208,104,44,0.45)]"
                    : "border-border/80 bg-background"
                )}
              >
                {plan.featured && (
                  <Badge className="absolute -top-2.5 left-6">
                    {t("popular")}
                  </Badge>
                )}
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {t(`plans.${plan.id}.name`)}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t(`plans.${plan.id}.description`)}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  {plan.consult ? (
                    <span className="font-heading text-4xl font-semibold tracking-tight">
                      {t("consult")}
                    </span>
                  ) : (
                    <>
                      <span className="text-sm text-muted-foreground">
                        {t("currency")}
                      </span>
                      <span className="font-heading text-4xl font-semibold tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        / {t("month")}
                      </span>
                    </>
                  )}
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <BookingTrigger
                  label={tCta(plan.ctaKey)}
                  variant={plan.featured ? "default" : "outline"}
                  className="mt-8"
                  fullWidth
                  size="lg"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
