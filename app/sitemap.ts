import type { MetadataRoute } from "next";

import { locales, type AppLocale } from "@/i18n/routing";
import { absoluteLocalizedUrl, languageAlternates } from "@/lib/seo";

const paths = ["/", "/features", "/pricing"] as const;

function entry(
  locale: AppLocale,
  path: (typeof paths)[number],
  priority: number
) {
  return {
    url: absoluteLocalizedUrl(locale, path),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority,
    alternates: {
      languages: languageAlternates(path),
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const items: MetadataRoute.Sitemap = [];

  for (const path of paths) {
    const priority = path === "/" ? 1 : 0.8;
    for (const locale of locales) {
      items.push(entry(locale, path, priority));
    }
  }

  return items;
}
