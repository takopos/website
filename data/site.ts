export const siteConfig = {
  brand: "TAKOPOS",
  companyEn: "Nordi Tech",
  /** Canonical site origin (no trailing slash) */
  url: "https://www.takopos.com.tw",
  keywords: [
    "TAKOPOS",
    "TAKO POS",
    "TPOS AI",
    "POS",
    "餐飲",
    "餐飲 POS",
    "餐飲POS",
    "連鎖餐飲",
    "連鎖餐飲 POS",
    "智慧餐飲系統",
    "餐廳點餐系統",
    "廚房出餐看板",
    "KDS",
    "掃碼點餐",
    "連鎖餐飲管理",
    "庫存管理",
    "AI 菜單辨識",
    "Vision OCR",
    "諾迪科技",
  ],
  ogImage: "/images/brand/takopos-banner-1min.png",
  nav: [
    { key: "diningPos" as const, href: "/dining-pos" },
    { key: "cases" as const, href: "/cases" },
    { key: "features" as const, href: "/#features" },
    { key: "tposAi" as const, href: "/tpos-ai" },
    { key: "operations" as const, href: "/#operations" },
    { key: "chainStore" as const, href: "/#chain-store" },
    { key: "pricing" as const, href: "/#pricing" },
    { key: "support" as const, href: "/#support" },
  ],
  social: {
    facebook: "https://www.facebook.com/takopos",
    /** Official LINE OA add-friend link */
    line: "https://lin.ee/q1mdaMc",
    lineAddFriendImage:
      "https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png",
  },
  contact: {
    email: "service@takopos.com.tw",
    phone: "02 2254 0858",
    /** E.164 for schema.org */
    phoneE164: "+886-2-2254-0858",
    address: "台灣 台北市松山區南京東路三段287號10樓",
    addressParts: {
      streetAddress: "南京東路三段287號10樓",
      addressLocality: "台北市",
      addressRegion: "松山區",
      addressCountry: "TW",
    },
  },
  footer: {
    links: [
      { key: "cases" as const, href: "/cases" },
      { key: "diningPos" as const, href: "/dining-pos" },
      { key: "tposAi" as const, href: "/tpos-ai" },
      { key: "qrOrdering" as const, href: "/qr-ordering" },
      { key: "kitchenDisplay" as const, href: "/kitchen-display" },
      { key: "chainPos" as const, href: "/chain-pos" },
      { key: "chooseDiningPos" as const, href: "/choose-dining-pos" },
      { key: "features" as const, href: "/features" },
      { key: "pricing" as const, href: "/pricing" },
      { key: "privacy" as const, href: "#" },
      { key: "terms" as const, href: "#" },
    ],
  },
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
