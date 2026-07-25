import { defineRouting } from "next-intl/routing";

export const locales = ["zh-Hant", "en", "vi", "th"] as const;
export type AppLocale = (typeof locales)[number];

export const localeNames: Record<AppLocale, string> = {
  "zh-Hant": "繁中",
  en: "EN",
  vi: "VI",
  th: "TH",
};

export const routing = defineRouting({
  locales,
  defaultLocale: "zh-Hant",
  localePrefix: "as-needed",
  localeDetection: true,
});
