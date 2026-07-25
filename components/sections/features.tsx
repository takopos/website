import {
  BarChart3,
  ChefHat,
  CreditCard,
  MonitorSmartphone,
  Package,
  Users,
  type LucideIcon,
} from "lucide-react";

import { features, featuresSection } from "@/data/features";

const iconMap: Record<string, LucideIcon> = {
  MonitorSmartphone,
  ChefHat,
  Package,
  Users,
  BarChart3,
  CreditCard,
};

export function FeaturesSection() {
  return (
    <section
      id={featuresSection.id}
      className="scroll-mt-20 border-y border-border/60 bg-background py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            {featuresSection.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {featuresSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {featuresSection.description}
          </p>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] ?? MonitorSmartphone;
            return (
              <article key={feature.id} className="group">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:-translate-y-0.5">
                  <Icon className="size-5" />
                </div>
                <p className="mt-4 text-xs font-medium tracking-wide text-primary">
                  痛點 · {feature.pain}
                </p>
                <h3 className="mt-1.5 font-heading text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
