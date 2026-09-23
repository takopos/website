import { getTranslations } from "next-intl/server";

import { BookingTrigger } from "@/components/booking/booking-trigger";
import { ProductScreenshot } from "@/components/media/product-screenshot";
import { Button } from "@/components/ui/button";
import { media } from "@/data/media";
import { Link } from "@/i18n/navigation";

export async function HeroSection() {
  const t = await getTranslations("hero");
  const tCommon = await getTranslations("common");
  const tCta = await getTranslations("cta");

  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0 bg-[linear-gradient(165deg,#ffffff_0%,#fff7f0_48%,#f5f5f5_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(208,104,44,0.14),transparent_48%),radial-gradient(ellipse_at_bottom_left,rgba(108,100,96,0.08),transparent_42%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pt-14 pb-16 sm:px-6 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-12 lg:px-8 lg:pt-20 lg:pb-24 xl:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] xl:gap-16">
        <div className="animate-fade-up">
          <p className="font-heading text-sm font-semibold tracking-[0.22em] text-primary uppercase">
            {tCommon("company")}
          </p>
          <h1
            id="hero-heading"
            className="mt-4 font-heading text-[2.35rem] leading-[1.18] font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-[3rem]"
          >
            <span className="block">{tCommon("brand")}</span>
            <span className="mt-2 block text-[0.72em] font-semibold tracking-tight text-foreground/90 sm:mt-3">
              {t("headline")}
            </span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("supporting")}
          </p>
          <div
            className="mt-8 flex flex-wrap gap-3"
            role="group"
            aria-label={t("ctaGroupLabel")}
          >
            <BookingTrigger
              label={tCta("bookDemo")}
              ariaLabel={t("bookDemoAria")}
              size="lg"
              className="h-11 px-5 text-sm"
            />
            <Button
              nativeButton={false}
              render={<Link href="/#operations" />}
              variant="outline"
              size="lg"
              className="h-11 px-5 text-sm"
              aria-label={t("secondaryAria")}
            >
              {tCta("secondary")}
            </Button>
          </div>
        </div>

        <div className="animate-fade-up-delayed relative w-full justify-self-center lg:justify-self-end">
          <div
            className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-[radial-gradient(circle_at_35%_25%,rgba(208,104,44,0.2),transparent_55%),radial-gradient(circle_at_85%_80%,rgba(108,100,96,0.1),transparent_50%)] blur-3xl"
            aria-hidden
          />
          <ProductScreenshot
            media={media.tposaiPosOrdering}
            priority
            glow={false}
            className="relative mx-auto w-full max-w-xl lg:ml-auto lg:mr-0 lg:max-w-none"
            frameClassName="rounded-2xl border border-black/5 bg-[#111] shadow-[0_28px_64px_-28px_rgba(28,22,18,0.55)] ring-1 ring-primary/10 hover:scale-100"
          />
        </div>
      </div>
    </section>
  );
}
