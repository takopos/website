import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { brand } from "@/data/brand";
import { siteConfig } from "@/data/site";
import { softwareAiDescription, softwareAiFeatureList } from "@/data/tpos-ai";
import { locales, type AppLocale, routing } from "@/i18n/routing";

const ogLocaleMap: Record<AppLocale, string> = {
  "zh-Hant": "zh_TW",
  en: "en_US",
  vi: "vi_VN",
  th: "th_TH",
};

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized === "/" ? "" : normalized}`;
}

export function localizedPath(locale: AppLocale, path = "/"): string {
  const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  if (locale === routing.defaultLocale) {
    return normalized || "/";
  }
  return `/${locale}${normalized}`;
}

export function absoluteLocalizedUrl(locale: AppLocale, path = "/"): string {
  return absoluteUrl(localizedPath(locale, path));
}

export function languageAlternates(path = "/") {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = absoluteLocalizedUrl(locale, path);
  }
  languages["x-default"] = absoluteLocalizedUrl(routing.defaultLocale, path);
  return languages;
}

export async function createPageMetadata({
  title,
  description,
  path = "/",
  keywords,
  locale,
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  locale: AppLocale;
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  const defaultTitle = t("defaultTitle");
  const pageDescription = description ?? t("description");
  const pageTitle = title
    ? t("titleTemplate", { title })
    : defaultTitle;
  const url = absoluteLocalizedUrl(locale, path);
  const ogImage = absoluteUrl(siteConfig.ogImage);

  return {
    title: title ?? { absolute: defaultTitle },
    description: pageDescription,
    keywords: keywords ?? [...siteConfig.keywords],
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "website",
      locale: ogLocaleMap[locale],
      url,
      siteName: siteConfig.brand,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: ogImage,
          alt: `${siteConfig.brand}｜${tCommon("tagline")}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
  };
}

export async function getOrganizationJsonLd(locale: AppLocale) {
  const t = await getTranslations({ locale, namespace: "common" });
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: t("company"),
    legalName: t("company"),
    alternateName: [siteConfig.brand, "TPOS", "TPOS AI", siteConfig.companyEn],
    brand: {
      "@type": "Brand",
      name: siteConfig.brand,
      alternateName: ["TPOS", "TPOS AI", "TAKOPOS（TPOS）"],
    },
    url: siteConfig.url,
    sameAs: [siteConfig.social.facebook],
    logo: absoluteUrl(brand.logo.full.src),
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.addressParts.streetAddress,
      addressLocality: siteConfig.contact.addressParts.addressLocality,
      addressRegion: siteConfig.contact.addressParts.addressRegion,
      addressCountry: siteConfig.contact.addressParts.addressCountry,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phoneE164,
      contactType: "customer service",
      areaServed: "TW",
      availableLanguage: ["zh-TW", "en", "vi", "th"],
    },
    knowsAbout: [
      "餐飲 POS",
      "Restaurant POS",
      "TPOS AI",
      "Vision OCR",
      "Kitchen Display System",
      "連鎖餐飲管理",
      "Gemini 營運分析",
    ],
  };
}

export async function getSoftwareApplicationJsonLd(locale: AppLocale) {
  const t = await getTranslations({ locale, namespace: "meta" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TAKOPOS (TPOS AI)",
    operatingSystem: "Android, Web, Cloud",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      url: absoluteLocalizedUrl(locale, "/pricing"),
      priceCurrency: "TWD",
      availability: "https://schema.org/InStock",
    },
    description: softwareAiDescription,
    featureList: [...softwareAiFeatureList],
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.ogImage),
    alternateName: [siteConfig.brand, "TPOS", "TPOS AI", "TAKOPOS POS"],
    applicationSubCategory: "Point of Sale (POS)",
    audience: {
      "@type": "BusinessAudience",
      audienceType: t("audience"),
    },
    provider: {
      "@type": "Organization",
      name: tCommon("company"),
      alternateName: [siteConfig.brand, "TPOS", "TPOS AI", siteConfig.companyEn],
      url: siteConfig.url,
    },
    brand: {
      "@type": "Brand",
      name: siteConfig.brand,
      alternateName: ["TPOS", "TPOS AI"],
    },
  };
}

export async function getWebSiteJsonLd(locale: AppLocale) {
  const t = await getTranslations({ locale, namespace: "common" });
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brand,
    alternateName: `${t("company")}${t("tagline")}`,
    url: siteConfig.url,
    inLanguage: locale,
    publisher: {
      "@type": "Organization",
      name: t("company"),
    },
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function getFaqPageJsonLd(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
