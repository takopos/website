export const featuresSection = {
  id: "features",
  eyebrow: "產品功能",
  title: "你每天卡住的地方，我們都先想過了",
  description:
    "不是堆功能給你選，而是針對餐飲最痛的現場——點餐、廚房、庫存、會員與帳務——給可落地的解法。",
} as const;

export const features = [
  {
    id: "pos",
    pain: "尖峰人手不夠、漏點錯點",
    title: "智慧 POS 與行動點餐",
    description:
      "平板、手機、手持機都能出單；忙線也能穩，少一次重做，就多賺一輪翻桌。",
    icon: "MonitorSmartphone",
  },
  {
    id: "kitchen",
    pain: "廚房單亂飛、出餐靠吼",
    title: "廚房出餐看板",
    description:
      "訂單即時分流到各站，狀態清楚可見，縮短等待、也降低客訴。",
    icon: "ChefHat",
  },
  {
    id: "inventory",
    pain: "食材耗損算不清、月底才知賠錢",
    title: "庫存與食材成本",
    description:
      "進銷存連動銷售，缺料先預警，成本不再靠感覺抓。",
    icon: "Package",
  },
  {
    id: "member",
    pain: "客人來過一次就消失",
    title: "會員與再購行銷",
    description:
      "集點、優惠券、再購提醒，把回頭客變成可預期的營收。",
    icon: "Users",
  },
  {
    id: "analytics",
    pain: "憑感覺進貨、不知道哪道菜在賺錢",
    title: "營運數據洞察",
    description:
      "日報、時段熱區、商品排行一手掌握，進貨與排班有依據。",
    icon: "BarChart3",
  },
  {
    id: "payment",
    pain: "結帳排隊、對帳頭痛",
    title: "多元金流與交班",
    description:
      "常見支付一次整合，交班盤點清楚，關店不用再對到半夜。",
    icon: "CreditCard",
  },
] as const;

export type Feature = (typeof features)[number];
