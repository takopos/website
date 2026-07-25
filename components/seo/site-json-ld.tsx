import { getLocale } from "next-intl/server";

import {
  getOrganizationJsonLd,
  getSoftwareApplicationJsonLd,
  getWebSiteJsonLd,
  serializeJsonLd,
} from "@/lib/seo";
import type { AppLocale } from "@/i18n/routing";

export async function SiteJsonLd() {
  const locale = (await getLocale()) as AppLocale;
  const graphs = await Promise.all([
    getOrganizationJsonLd(locale),
    getSoftwareApplicationJsonLd(locale),
    getWebSiteJsonLd(locale),
  ]);

  return (
    <>
      {graphs.map((data) => (
        <script
          key={String((data as { "@type": string })["@type"])}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
        />
      ))}
    </>
  );
}
