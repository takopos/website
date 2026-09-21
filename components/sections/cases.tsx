import { getTranslations } from "next-intl/server";

import { BookingTrigger } from "@/components/booking/booking-trigger";
import { Button } from "@/components/ui/button";
import { cases, type CaseModule } from "@/data/cases";
import { Link } from "@/i18n/navigation";

function ModuleList({
  modules,
  labelFor,
}: {
  modules: readonly CaseModule[];
  labelFor: (key: CaseModule) => string;
}) {
  return (
    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
      {modules.map((m) => labelFor(m)).join(" · ")}
    </p>
  );
}

export async function CasesLanding() {
  const t = await getTranslations("cases");
  const tCta = await getTranslations("cta");

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-[linear-gradient(165deg,#ffffff_0%,#fff7f0_48%,#f5f5f5_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(208,104,44,0.14),transparent_48%),radial-gradient(ellipse_at_bottom_left,rgba(108,100,96,0.08),transparent_42%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="font-heading text-sm font-semibold tracking-[0.22em] text-primary uppercase">
            {t("eyebrow")}
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl leading-[1.15] font-semibold tracking-tight text-foreground sm:text-5xl">
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

      <section className="border-b border-border/60 bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {t("listTitle")}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {t("listLead")}
          </p>

          <ul className="mt-12 divide-y divide-border/70 border-y border-border/70">
            {cases.map((item) => (
              <li
                key={item.id}
                className="grid gap-3 py-8 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8"
              >
                <div>
                  <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                    {t(`items.${item.id}.category`)}
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-semibold text-foreground sm:text-2xl">
                    {t(`items.${item.id}.name`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {t(`items.${item.id}.summary`)}
                  </p>
                  <ModuleList
                    modules={item.modules}
                    labelFor={(key) => t(`modules.${key}`)}
                  />
                </div>
                <p className="font-heading text-sm font-semibold text-foreground sm:pt-8 sm:text-right">
                  {t("stores", { count: item.stores })}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border/60 bg-[#fff7f0] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-2xl font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {t("whyTitle")}
          </h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-3">
            {(["w1", "w2", "w3"] as const).map((key, index) => (
              <li key={key} className="border-t border-primary/20 pt-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">
                  {t(`why.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(`why.${key}.body`)}
                </p>
              </li>
            ))}
          </ul>
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
              render={<Link href="/choose-dining-pos" />}
              variant="outline"
              size="lg"
              className="h-11 border-white/25 bg-transparent px-5 text-sm text-white hover:bg-white/10 hover:text-white"
            >
              {t("seeChoose")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
