import type { MetadataRoute } from "next";

import { cases } from "@/data/cases";
import { locales, type AppLocale } from "@/i18n/routing";
import { absoluteLocalizedUrl, languageAlternates } from "@/lib/seo";

const paths = [
  "/",
  "/features",
  "/pricing",
  "/dining-pos",
  "/choose-dining-pos",
  "/cases",
  "/qr-ordering",
  "/kitchen-display",
  "/chain-pos",
] as const;

function entry(
  locale: AppLocale,
  path: string,
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
    const priority =
      path === "/"
        ? 1
        : path === "/dining-pos" ||
            path === "/choose-dining-pos" ||
            path === "/cases" ||
            path === "/qr-ordering" ||
            path === "/kitchen-display" ||
            path === "/chain-pos"
          ? 0.9
          : 0.8;
    for (const locale of locales) {
      items.push(entry(locale, path, priority));
    }
  }

  for (const item of cases) {
    const path = `/cases/${item.id}`;
    for (const locale of locales) {
      items.push(entry(locale, path, 0.85));
    }
  }

  return items;
}
