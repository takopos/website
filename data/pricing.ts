export const pricingSection = {
  id: "pricing",
  eyebrow: "方案價格",
  title: "先解決眼前的痛，再跟著你長大",
  description:
    "從小店到連鎖，透明定價、快速導入。你不該為用不到的功能付費，也不該在成長時被迫換系統。",
} as const;

export const pricingPlans = [
  {
    id: "micro",
    name: "微型店家方案",
    price: "988",
    period: "月",
    description: "人手少、節奏快：先把點餐與出餐穩住。",
    featured: false,
    features: [
      "單店 POS + 廚房看板",
      "基礎庫存與日報",
      "行動點餐（1 裝置）",
      "線上客服支援",
    ],
    cta: "預約體驗",
  },
  {
    id: "mid",
    name: "中大型餐廳方案",
    price: "1,888",
    period: "月",
    description: "多桌區、多工位：把翻桌率與回頭客一起顧。",
    featured: true,
    features: [
      "多裝置同步點餐",
      "會員行銷與優惠券",
      "進階報表與時段分析",
      "金流與電子發票整合",
      "到府導入教學",
    ],
    cta: "預約體驗",
  },
  {
    id: "chain",
    name: "連鎖品牌特規方案",
    price: "洽詢",
    period: "",
    description: "多店同步、總部一把控：成長不再靠人海戰術。",
    featured: false,
    features: [
      "無限分店擴充架構",
      "商品一鍵下發",
      "跨店庫存調撥",
      "角色權限與稽核",
      "專屬成功顧問",
    ],
    cta: "聯絡業務",
  },
] as const;

export type PricingPlan = (typeof pricingPlans)[number];
