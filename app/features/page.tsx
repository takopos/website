import type { Metadata } from "next";

import { FeaturesSection } from "@/components/sections/features";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "產品功能",
  description:
    "智慧 POS、行動點餐、廚房出餐看板、庫存成本、會員行銷與營運數據——TAKOPOS 把餐飲現場每天卡住的環節一次打通。",
  path: "/features",
  keywords: [
    "餐飲 POS 功能",
    "廚房出餐看板",
    "掃碼點餐",
    "庫存管理",
    "會員行銷",
    "TAKOPOS",
  ],
});

export default function FeaturesPage() {
  return <FeaturesSection />;
}
