export const siteConfig = {
  brand: "TAKOPOS",
  company: "諾迪科技",
  tagline: "智慧餐飲系統",
  description: "尖峰不亂、關店不累，讓每一間店都更會賺錢",
  supportingLine:
    "我們懂餐飲現場：人手不夠、漏點錯點、廚房單亂飛、月底才知賠錢。TAKOPOS 把點餐、出餐、庫存與總部控管串成一條路，讓你顧好客人，也顧好成本。",
  cta: {
    primary: "免費預約體驗",
    secondary: "看系統怎麼運作",
    bookDemo: "預約體驗",
  },
  nav: [
    { label: "產品功能", href: "/#features" },
    { label: "系統操作", href: "/#operations" },
    { label: "連鎖管理", href: "/#chain-store" },
    { label: "方案價格", href: "/#pricing" },
    { label: "客戶支援", href: "/#support" },
  ],
  contact: {
    email: "service@takopos.com.tw",
    phone: "02 2254 0858",
    address: "台灣 台北市松山區南京東路三段287號10樓",
  },
  footer: {
    links: [
      { label: "產品功能", href: "/features" },
      { label: "方案價格", href: "/pricing" },
      { label: "隱私權政策", href: "#" },
      { label: "服務條款", href: "#" },
    ],
    copyright: "諾迪科技 Nordi Tech. All rights reserved.",
  },
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
