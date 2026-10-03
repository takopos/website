import { Check } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { BookingTrigger } from "@/components/booking/booking-trigger";
import { Badge } from "@/components/ui/badge";
import { pricingPlans, pricingSection } from "@/data/pricing";
import { cn } from "@/lib/utils";

export async function PricingSection({
  asPage = false,
}: {
  /** Standalone /pricing page needs a single page-level h1. */
  asPage?: boolean;
} = {}) {
  const t = await getTranslations("pricing");
  const tCta = await getTranslations("cta");
  const Heading = asPage ? "h1" : "h2";

  return (
    <section
      id={pricingSection.id}
      className="scroll-mt-20 bg-background py-20 sm:py-24"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Heading
            id="pricing-heading"
            className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {t("title")}
          </Heading>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted-foreground">
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
                  "relative flex flex-col rounded-xl border p-6 transition-transform duration-200 active:translate-y-px",
                  plan.featured
                    ? "border-primary bg-[#fff7f0] shadow-[0_18px_40px_-28px_rgba(208,104,44,0.4)]"
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
