import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { BookingTrigger } from "@/components/booking/booking-trigger";
import { ProductScreenshot } from "@/components/media/product-screenshot";
import { media } from "@/data/media";
import { paymentMethods, paymentsSection } from "@/data/payments";

export async function PaymentsSection() {
  const t = await getTranslations("payments");
  const tCta = await getTranslations("cta");

  return (
    <section
      id={paymentsSection.id}
      className="relative scroll-mt-20 overflow-hidden border-y border-border/60 py-20 sm:py-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(165deg,#ffffff_0%,#fff7f0_52%,#f7f5f4_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(208,104,44,0.10),transparent_46%),radial-gradient(ellipse_at_bottom_right,rgba(108,100,96,0.08),transparent_40%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            {t("description")}
          </p>

          <ul className="mt-8 flex flex-wrap gap-4 sm:gap-5">
            {paymentMethods.map((method, index) => (
              <li
                key={method.id}
                className="animate-fade-up group flex min-w-[7.5rem] flex-col items-center gap-2.5"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <span className="flex size-16 items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 sm:size-[4.5rem]">
                  <Image
                    src={method.icon}
                    alt={t(`methods.${method.id}.name`)}
                    width={72}
                    height={72}
                    unoptimized
                    className="size-full drop-shadow-[0_10px_18px_rgba(47,44,42,0.12)]"
                  />
                </span>
                <span className="font-heading text-sm font-semibold tracking-tight text-foreground">
                  {t(`methods.${method.id}.name`)}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <BookingTrigger
              label={tCta("bookDemo")}
              size="lg"
              className="h-11 px-5 text-sm"
            />
          </div>
        </div>

        <div className="animate-fade-up-delayed">
          <ProductScreenshot
            media={media.tposaiPosCheckout}
            className="mx-auto max-w-xl lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
