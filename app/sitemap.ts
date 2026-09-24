import type { MetadataRoute } from "next";

import { cases } from "@/data/cases";
import { locales, type AppLocale } from "@/i18n/routing";
import { absoluteLocalizedUrl, languageAlternates } from "@/lib/seo";

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

const corePaths: Array<{
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
}> = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/dining-pos", priority: 0.95, changeFrequency: "weekly" },
  { path: "/tpos-ai", priority: 0.95, changeFrequency: "weekly" },
  { path: "/qr-ordering", priority: 0.9, changeFrequency: "weekly" },
  { path: "/kitchen-display", priority: 0.9, changeFrequency: "weekly" },
  { path: "/chain-pos", priority: 0.9, changeFrequency: "weekly" },
  { path: "/choose-dining-pos", priority: 0.9, changeFrequency: "weekly" },
  { path: "/cases", priority: 0.9, changeFrequency: "weekly" },
  { path: "/features", priority: 0.85, changeFrequency: "weekly" },
  { path: "/pricing", priority: 0.85, changeFrequency: "weekly" },
];

function entry(
  locale: AppLocale,
  path: string,
  priority: number,
  changeFrequency: ChangeFrequency
): MetadataRoute.Sitemap[number] {
  return {
    url: absoluteLocalizedUrl(locale, path),
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: languageAlternates(path),
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const items: MetadataRoute.Sitemap = [];

  for (const { path, priority, changeFrequency } of corePaths) {
    for (const locale of locales) {
      items.push(entry(locale, path, priority, changeFrequency));
    }
  }

  for (const item of cases) {
    const path = `/cases/${item.id}`;
    for (const locale of locales) {
      items.push(entry(locale, path, 0.75, "monthly"));
    }
  }

  return items;
}
