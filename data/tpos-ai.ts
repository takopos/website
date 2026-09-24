export const tposAiSection = {
  id: "tpos-ai",
} as const;

/** Homepage highlight cards (summary → /tpos-ai). */
export const tposAiFeatures = [
  { id: "visionCatalog", icon: "ScanLine" },
  { id: "barStocktake", icon: "Wine" },
  { id: "imagenTranslate", icon: "Languages" },
  { id: "opsAdvisor", icon: "Sparkles" },
] as const;

export type TposAiFeature = (typeof tposAiFeatures)[number];

export type TposAiModuleStatus = "live" | "planned";

export type TposAiModuleGroupId =
  | "menuBuild"
  | "translateMedia"
  | "opsInsight"
  | "upcoming";

export const tposAiModuleGroups = [
  "menuBuild",
  "translateMedia",
  "opsInsight",
  "upcoming",
] as const;

/** Full AI module catalog for /tpos-ai (marketing names; codes stay internal). */
export const tposAiModules = [
  {
    id: "menuRecognize",
    group: "menuBuild",
    status: "live",
    icon: "ScanLine",
  },
  {
    id: "stockInDocument",
    group: "menuBuild",
    status: "live",
    icon: "FileScan",
  },
  {
    id: "barStocktake",
    group: "menuBuild",
    status: "live",
    icon: "Wine",
  },
  {
    id: "catalogBulkTranslate",
    group: "translateMedia",
    status: "live",
    icon: "Languages",
  },
  {
    id: "categoryTranslate",
    group: "translateMedia",
    status: "live",
    icon: "Languages",
  },
  {
    id: "productTranslate",
    group: "translateMedia",
    status: "live",
    icon: "Languages",
  },
  {
    id: "productImageGenerate",
    group: "translateMedia",
    status: "live",
    icon: "Image",
  },
  {
    id: "menuAdvisor",
    group: "opsInsight",
    status: "live",
    icon: "Sparkles",
  },
  {
    id: "menuAdvisorLlm",
    group: "opsInsight",
    status: "live",
    icon: "FileText",
  },
  {
    id: "operationsReport",
    group: "opsInsight",
    status: "live",
    icon: "BarChart3",
  },
  {
    id: "lineOpsAnomaly",
    group: "opsInsight",
    status: "live",
    icon: "MessageSquareWarning",
  },
  {
    id: "cartUpsell",
    group: "upcoming",
    status: "planned",
    icon: "ShoppingCart",
  },
  {
    id: "posSmartRecommend",
    group: "upcoming",
    status: "planned",
    icon: "Lightbulb",
  },
] as const satisfies readonly {
  id: string;
  group: TposAiModuleGroupId;
  status: TposAiModuleStatus;
  icon: string;
}[];

export type TposAiModule = (typeof tposAiModules)[number];

/** Canonical SoftwareApplication description for Schema.org / GEO. */
export const softwareAiDescription =
  "TAKOPOS 智慧餐飲 POS 系統，原生整合 TPOS AI：菜單影像建檔、進貨單辨識、多語翻譯、商品圖生成、菜單顧問與營運分析，並支援酒吧液面盤點。";

/** Canonical AI featureList for Schema.org / GEO (zh-Hant primary market). */
export const softwareAiFeatureList = [
  "AI 視覺建立菜單（菜單圖片辨識）",
  "AI 入庫單據辨識",
  "AI 一鍵／批量菜單多語翻譯",
  "AI 商品圖生成",
  "AI 菜單顧問分析與 LLM 深度報告",
  "AI 營運分析報告",
  "LINE 營運異常 AI 診斷",
  "AI 酒吧液面盤點",
] as const;
