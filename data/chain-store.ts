import { media } from "@/data/media";

export const chainStoreSection = {
  id: "chain-store",
  eyebrow: "連鎖店鋪管理",
  title: "開第二間開始，真正的麻煩才登場",
  description:
    "菜單改一次要打十幾通電話、各店庫存各做各的、總部看不見現場——TAKOPOS 用真實後台介面，把連鎖成長的摩擦先拿掉。",
} as const;

export const chainStoreBlocks = [
  {
    id: "hq-control",
    eyebrow: "總部中央控管",
    title: "菜單改一次，全台同步，不用再電話追",
    description:
      "價格調錯、加購漏改，往往不是員工不努力，是流程太靠人。總部一鍵下發，門店少失誤、客人也少抱怨。",
    points: [
      "一鍵儲存並同步到指定門店",
      "可勾選商品組、零售組彈性下發",
      "變更紀錄清楚，總部與門店權責分明",
    ],
    image: media.chainMenuSync,
    imagePosition: "right" as const,
    accentIcons: ["Send", "Store"] as const,
  },
  {
    id: "multi-store-dashboard",
    eyebrow: "多店數據看板",
    title: "哪間店在掉速，督導一眼就知道",
    description:
      "不必等店長半夜傳 Excel。集團看板整合營收、帳單與分店排行，支援來得及時，虧損才不會滾很大。",
    points: [
      "總覽／餐飲／零售明細快速切換",
      "分店業績排行與佔比一目了然",
      "基準日與對比日彈性檢視成長率",
    ],
    image: media.chainDataChart,
    imagePosition: "left" as const,
    accentIcons: ["BarChart3", "TrendingUp"] as const,
  },
  {
    id: "inventory-transfer",
    eyebrow: "跨店庫存調撥",
    title: "A 店快斷貨、B 店還堆著，不該再靠 LINE 群",
    description:
      "缺料支援要快，庫存數字要準。全通路庫存矩陣搭配調撥流程，讓支援變成標準作業，不是緊急求救。",
    points: [
      "多門店 SKU 庫存一次比對",
      "警示與匯出報表不影響 POS 出餐",
      "調撥核准後雙方庫存即時更新",
    ],
    image: media.chainInventory,
    imagePosition: "right" as const,
    accentIcons: ["Box", "ArrowRight", "Truck"] as const,
    showFlow: true,
  },
] as const;

export const transferFlow = [
  {
    step: 1,
    title: "A 店缺料",
    description: "低於安全水位就警示，系統提示可調撥來源。",
    icon: "AlertTriangle",
  },
  {
    step: 2,
    title: "線上調撥",
    description: "督導或總部核准，一鍵建立跨店調撥單。",
    icon: "ArrowRightLeft",
  },
  {
    step: 3,
    title: "B 店發貨",
    description: "出貨確認後，雙方庫存同步更新。",
    icon: "PackageCheck",
  },
] as const;

export const rolePermissions = [
  {
    role: "總部",
    menu: true,
    pricing: true,
    transfer: true,
    reports: true,
    staff: true,
  },
  {
    role: "督導",
    menu: false,
    pricing: false,
    transfer: true,
    reports: true,
    staff: true,
  },
  {
    role: "店長",
    menu: false,
    pricing: false,
    transfer: true,
    reports: true,
    staff: true,
  },
  {
    role: "店員",
    menu: false,
    pricing: false,
    transfer: false,
    reports: false,
    staff: false,
  },
] as const;

export const permissionColumns = [
  { key: "menu", label: "菜單管理" },
  { key: "pricing", label: "價格調整" },
  { key: "transfer", label: "跨店調撥" },
  { key: "reports", label: "營運報表" },
  { key: "staff", label: "人員管理" },
] as const;

export type ChainStoreBlock = (typeof chainStoreBlocks)[number];
export type RolePermission = (typeof rolePermissions)[number];
