export const tposAiSection = {
  id: "tpos-ai",
} as const;

export const tposAiFeatures = [
  { id: "visionCatalog", icon: "ScanLine" },
  { id: "barStocktake", icon: "Wine" },
  { id: "imagenTranslate", icon: "Languages" },
  { id: "opsAdvisor", icon: "Sparkles" },
] as const;

export type TposAiFeature = (typeof tposAiFeatures)[number];

/** Canonical SoftwareApplication description for Schema.org / GEO. */
export const softwareAiDescription =
  "TAKOPOS 智慧餐飲 POS 系統，原生整合 TPOS AI 多模態技術，提供視覺菜單辨識、酒吧液面盤點與 Gemini 混合式營運顧問服務。";

/** Canonical AI featureList for Schema.org / GEO (zh-Hant primary market). */
export const softwareAiFeatureList = [
  "AI 菜單影像辨識建檔 (Vision OCR)",
  "AI 紙本進貨單自動入庫辨識",
  "酒吧酒類剩餘液面影像估量 (Vision Stocktake)",
  "Google Imagen 餐廳商品情境圖生成",
  "中英日韓菜單多國語言智慧翻譯",
  "基於 Gemini 與銷售數據之混合式營運與菜單健康顧問",
  "原物料動態預測與缺料警示",
] as const;
