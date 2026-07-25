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
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(165deg,#ffffff_0%,#fff7f0_48%,#f5f5f5_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(208,104,44,0.14),transparent_48%),radial-gradient(ellipse_at_bottom_left,rgba(108,100,96,0.08),transparent_42%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pt-14 pb-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:px-8 lg:pt-20 lg:pb-28">
        <div className="animate-fade-up max-w-xl">
          <p className="font-heading text-sm font-semibold tracking-[0.22em] text-primary uppercase">
            {tCommon("company")} · {tCommon("brand")}
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-[1.15] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.15rem]">
            {t("headline")}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("supporting")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookingTrigger
              label={tCta("bookDemo")}
              size="lg"
              className="h-11 px-5 text-sm"
            />
            <Button
              nativeButton={false}
              render={<Link href="/#operations" />}
              variant="outline"
              size="lg"
              className="h-11 px-5 text-sm"
            >
              {tCta("secondary")}
            </Button>
          </div>
        </div>

        <div className="animate-fade-up-delayed">
          <ProductScreenshot
            media={media.tposaiPosOrdering}
            priority
            float
            className="mx-auto max-w-xl lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
