import type { Metadata } from "next";
import { Noto_Sans_TC, Outfit } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SiteJsonLd } from "@/components/seo/site-json-ld";
import { TakoAiCsWidget } from "@/components/widgets/tako-ai-cs-widget";
import { brand } from "@/data/brand";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...createPageMetadata({ path: "/" }),
  title: {
    default: `${siteConfig.brand}｜${siteConfig.company}${siteConfig.tagline}`,
    template: `%s｜${siteConfig.brand}`,
  },
  icons: {
    icon: brand.logo.favicon,
    apple: brand.logo.favicon,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${outfit.variable} ${notoSansTc.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <SiteJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <TakoAiCsWidget />
      </body>
    </html>
  );
}
