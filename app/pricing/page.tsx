import type { Metadata } from "next";

import { PricingSection } from "@/components/sections/pricing";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "方案價格",
  description:
    "從單店到連鎖，TAKOPOS 提供可擴充的餐飲系統方案。先解決眼前的痛，再跟著你的店數一起長大。",
  path: "/pricing",
  keywords: [
    "餐飲 POS 價格",
    "餐廳系統方案",
    "連鎖餐飲系統費用",
    "TAKOPOS 方案",
  ],
});

export default function PricingPage() {
  return <PricingSection />;
}
