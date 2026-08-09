export const siteConfig = {
  brand: "TAKOPOS",
  companyEn: "Nordi Tech",
  /** Canonical site origin (no trailing slash) */
  url: "https://takopos.com.tw",
  keywords: [
    "TAKOPOS",
    "POS",
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
    "諾迪科技",
  ],
  ogImage: "/images/brand/takopos-banner-1min.png",
  nav: [
    { key: "diningPos" as const, href: "/dining-pos" },
    { key: "features" as const, href: "/#features" },
    { key: "operations" as const, href: "/#operations" },
    { key: "chainStore" as const, href: "/#chain-store" },
    { key: "pricing" as const, href: "/#pricing" },
    { key: "support" as const, href: "/#support" },
  ],
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
      { key: "diningPos" as const, href: "/dining-pos" },
      { key: "chooseDiningPos" as const, href: "/choose-dining-pos" },
      { key: "features" as const, href: "/features" },
      { key: "pricing" as const, href: "/pricing" },
      { key: "privacy" as const, href: "#" },
      { key: "terms" as const, href: "#" },
    ],
  },
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
