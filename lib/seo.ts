import type { Metadata } from "next";

import { brand } from "@/data/brand";
import { siteConfig } from "@/data/site";

const defaultTitle = `${siteConfig.brand}｜${siteConfig.company}${siteConfig.tagline}`;

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized === "/" ? "" : normalized}`;
}

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords,
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const pageTitle = title ? `${title}｜${siteConfig.brand}` : defaultTitle;
  const pageDescription = description ?? siteConfig.supportingLine;
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(siteConfig.ogImage);

  return {
    // Short segment uses root `title.template`; home uses absolute default.
    title: title ?? { absolute: defaultTitle },
    description: pageDescription,
    keywords: keywords ?? [...siteConfig.keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.brand,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: ogImage,
          alt: `${siteConfig.brand}｜${siteConfig.tagline}`,
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

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.company,
    alternateName: siteConfig.companyEn,
    url: siteConfig.url,
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
      availableLanguage: ["zh-TW"],
    },
  };
}

export function getSoftwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.brand,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    description: siteConfig.supportingLine,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.ogImage),
    offers: {
      "@type": "Offer",
      url: absoluteUrl("/pricing"),
      priceCurrency: "TWD",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.company,
      url: siteConfig.url,
    },
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brand,
    alternateName: `${siteConfig.company}${siteConfig.tagline}`,
    url: siteConfig.url,
    inLanguage: "zh-Hant-TW",
    publisher: {
      "@type": "Organization",
      name: siteConfig.company,
    },
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
