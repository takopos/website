import { getLocale } from "next-intl/server";

import { getSiteGraphJsonLd, serializeJsonLd } from "@/lib/seo";
import type { AppLocale } from "@/i18n/routing";

export async function SiteJsonLd() {
  const locale = (await getLocale()) as AppLocale;
  const data = await getSiteGraphJsonLd(locale);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
