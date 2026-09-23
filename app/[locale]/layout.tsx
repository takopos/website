import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Noto_Sans_TC, Outfit } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SiteJsonLd } from "@/components/seo/site-json-ld";
import { TakoAiCsWidget } from "@/components/widgets/tako-ai-cs-widget";
import { brand } from "@/data/brand";
import { siteConfig } from "@/data/site";
import { routing, type AppLocale } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/seo";

import "../globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const notoSansTc = Noto_Sans_TC({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (hasLocale(routing.locales, raw)
    ? raw
    : routing.defaultLocale) as AppLocale;
  const metadata = await createPageMetadata({ path: "/", locale });
  const defaultTitle =
    typeof metadata.title === "object" &&
    metadata.title &&
    "absolute" in metadata.title
      ? String(metadata.title.absolute)
      : String(metadata.title ?? siteConfig.brand);

  return {
    metadataBase: new URL(siteConfig.url),
    ...metadata,
    title: {
      default: defaultTitle,
      template: `%s｜${siteConfig.brand}`,
    },
    icons: {
      icon: [
        {
          url: brand.logo.favicon,
          type: "image/png",
          sizes: "512x512",
        },
        { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      ],
      shortcut: brand.logo.favicon,
      apple: [
        {
          url: "/apple-icon.png",
          type: "image/png",
          sizes: "180x180",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) {
    notFound();
  }
  const locale = raw as AppLocale;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${outfit.variable} ${notoSansTc.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <NextIntlClientProvider messages={messages}>
          <SiteJsonLd />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <TakoAiCsWidget />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
