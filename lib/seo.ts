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

export async function getSiteGraphJsonLd(locale: AppLocale) {
  const t = await getTranslations({ locale, namespace: "meta" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  const organizationId = `${siteConfig.url}/#organization`;
  const softwareId = `${siteConfig.url}/#software`;
  const websiteId = `${siteConfig.url}/#website`;
  const logoUrl = absoluteUrl(brand.logo.mark.src);
  const logoImageObject = {
    "@type": "ImageObject" as const,
    url: logoUrl,
    contentUrl: logoUrl,
    width: brand.logo.mark.width,
    height: brand.logo.mark.height,
    caption: brand.logo.mark.alt,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: tCommon("company"),
        legalName: tCommon("company"),
        alternateName: [
          siteConfig.brand,
          "TPOS",
          "TPOS AI",
          siteConfig.companyEn,
        ],
        url: `${siteConfig.url}/`,
        logo: logoImageObject,
        image: logoUrl,
        sameAs: [siteConfig.social.facebook],
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
        brand: {
          "@type": "Brand",
          name: siteConfig.brand,
          alternateName: ["TPOS", "TPOS AI", "TAKOPOS（TPOS）"],
          logo: logoUrl,
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
      },
      {
        "@type": "SoftwareApplication",
        "@id": softwareId,
        name: "TAKOPOS (TPOS AI)",
        alternateName: [siteConfig.brand, "TPOS", "TPOS AI", "TAKOPOS POS"],
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Point of Sale (POS)",
        operatingSystem: "Android, Web, Cloud",
        url: siteConfig.url,
        image: logoUrl,
        description: softwareAiDescription,
        featureList: [...softwareAiFeatureList],
        audience: {
          "@type": "BusinessAudience",
          audienceType: t("audience"),
        },
        offers: {
          "@type": "Offer",
          url: absoluteLocalizedUrl(locale, "/pricing"),
          priceCurrency: "TWD",
          availability: "https://schema.org/InStock",
        },
        publisher: { "@id": organizationId },
        provider: { "@id": organizationId },
        brand: {
          "@type": "Brand",
          name: siteConfig.brand,
          alternateName: ["TPOS", "TPOS AI"],
          logo: logoUrl,
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteConfig.brand,
        alternateName: `${tCommon("company")}${tCommon("tagline")}`,
        url: siteConfig.url,
        inLanguage: locale,
        publisher: { "@id": organizationId },
        about: { "@id": softwareId },
      },
    ],
  };
}

/** @deprecated Prefer getSiteGraphJsonLd — kept for incremental callers. */
export async function getOrganizationJsonLd(locale: AppLocale) {
  const graph = await getSiteGraphJsonLd(locale);
  return {
    "@context": "https://schema.org",
    ...(graph["@graph"][0] as Record<string, unknown>),
  };
}

/** @deprecated Prefer getSiteGraphJsonLd — kept for incremental callers. */
export async function getSoftwareApplicationJsonLd(locale: AppLocale) {
  const graph = await getSiteGraphJsonLd(locale);
  return {
    "@context": "https://schema.org",
    ...(graph["@graph"][1] as Record<string, unknown>),
  };
}

/** @deprecated Prefer getSiteGraphJsonLd — kept for incremental callers. */
export async function getWebSiteJsonLd(locale: AppLocale) {
  const graph = await getSiteGraphJsonLd(locale);
  return {
    "@context": "https://schema.org",
    ...(graph["@graph"][2] as Record<string, unknown>),
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
