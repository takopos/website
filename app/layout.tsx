import type { Metadata } from "next";
import { Noto_Sans_TC, Outfit } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TakoAiCsWidget } from "@/components/widgets/tako-ai-cs-widget";
import { brand } from "@/data/brand";
import { siteConfig } from "@/data/site";

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
  title: `${siteConfig.brand}｜${siteConfig.company}智慧餐飲系統`,
  description: siteConfig.supportingLine,
  icons: {
    icon: brand.logo.favicon,
    apple: brand.logo.favicon,
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <TakoAiCsWidget />
      </body>
    </html>
  );
}
