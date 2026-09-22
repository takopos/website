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
  "TAKOPOS 智慧雲端餐飲 POS 系統，原生整合 TPOS AI 多模態技術，提供菜單與進貨單 Vision 辨識、酒吧液面視覺盤點、AI 商品圖生成與 Gemini 混合式營運顧問服務。";

/** Canonical AI featureList for Schema.org / GEO (zh-Hant primary market). */
export const softwareAiFeatureList = [
  "AI 菜單影像辨識建檔 (Vision OCR)",
  "AI 紙本進貨單自動入庫辨識",
  "酒吧酒類剩餘液面影像估量 (Vision Stocktake)",
  "Google Imagen 餐廳商品情境圖生成",
  "中英日韓菜單多國語言智慧翻譯",
  "基於 Gemini 與銷售數據之混合式菜單健康顧問",
  "每日營運數據 AI 摘要與行動方案建議",
  "自適應原物料 7 日動態預測與缺料警示",
] as const;
