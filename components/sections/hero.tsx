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
    <section
      className="relative overflow-hidden border-b border-border/70"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,#fafaf9_0%,#f4f2f0_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-y-0 right-0 hidden w-[55%] bg-[linear-gradient(105deg,transparent_0%,rgba(208,104,44,0.06)_45%,rgba(47,44,42,0.04)_100%)] lg:block"
        aria-hidden
      />

      <div className="relative mx-auto grid min-h-[min(100dvh,52rem)] max-w-6xl items-center gap-10 px-4 pt-12 pb-14 sm:px-6 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-10 lg:px-8 lg:pt-16 lg:pb-20 xl:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] xl:gap-14">
        <div className="animate-fade-up max-w-md lg:max-w-none">
          <h1
            id="hero-heading"
            className="font-heading text-[2.5rem] leading-[1.12] font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-[3.15rem]"
          >
            <span className="block text-primary">{tCommon("brand")}</span>
            <span className="mt-3 block text-[0.68em] font-semibold tracking-tight text-foreground sm:mt-4">
              {t("headline")}
            </span>
          </h1>
          <p className="mt-5 max-w-[34ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
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
              className="h-11 px-5 text-sm active:translate-y-px"
            />
            <Button
              nativeButton={false}
              render={<Link href="/#operations" />}
              variant="outline"
              size="lg"
              className="h-11 px-5 text-sm active:translate-y-px"
              aria-label={t("secondaryAria")}
            >
              {tCta("secondary")}
            </Button>
          </div>
        </div>

        <div className="animate-fade-up-delayed relative w-full lg:justify-self-end">
          <ProductScreenshot
            media={media.tposaiPosOrdering}
            priority
            glow={false}
            className="relative mx-auto w-full max-w-xl lg:ml-auto lg:mr-0 lg:max-w-none"
            frameClassName="rounded-xl border border-black/8 bg-[#111] shadow-[0_24px_48px_-24px_rgba(47,44,42,0.45)] ring-0 hover:scale-100"
          />
        </div>
      </div>
    </section>
  );
}
