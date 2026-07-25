import { media } from "@/data/media";

export const operationsSection = {
  id: "operations",
  eyebrow: "系統操作圖",
  title: "從客人進店到廚房出餐，整場動線我們都懂",
  description:
    "尖峰人手不夠、廚房單亂飛、結帳對不到帳——這些不是功能清單，是每天真實發生的現場。以下介面皆來自 TPOS Ai 實際開發的操作畫面。",
} as const;

export const operationsHighlights = [
  {
    id: "ops-map",
    title: "全店作業一張圖看懂",
    description:
      "前場點餐、桌邊服務、廚房出餐、外送對接、後台報表，全部連在同一套系統，不用再東拼西湊。",
    image: media.systemOpsMap,
  },
  {
    id: "pos-ui",
    title: "真實 TPOS Ai POS 點餐介面",
    description:
      "快速點單、桌號／人數／會員一次到位，尖峰也能穩穩出單，這就是現場真正在用的畫面。",
    image: media.tposaiPosOrdering,
  },
] as const;

export const appUiBlocks = [
  {
    id: "pos-ordering",
    pain: "尖峰漏點、出單慢、新人上手慢",
    title: "TPOS Ai POS 快速點單",
    description:
      "分類清楚、品項一眼可點，購物車與下單送廚同屏完成，忙線也能保持節奏。",
    image: media.tposaiPosOrdering,
  },
  {
    id: "mobile-order",
    pain: "尖峰時段客人等點餐、店員忙到漏點",
    title: "掃碼自助點餐 APP",
    description:
      "客人掃桌邊 QR 就能點，多語系與備註一次到位，訂單直送廚房，前線專心顧桌。",
    image: media.tposaiMobileOrder,
  },
  {
    id: "checkout",
    pain: "結帳排隊、支付方式多、對帳容易亂",
    title: "POS 收銀結帳",
    description:
      "現金、信用卡、LINE Pay 等常見支付一次整合，折扣與會員查詢就在結帳動線上。",
    image: media.tposaiPosCheckout,
  },
  {
    id: "kds",
    pain: "廚房紙本單亂飛、出餐靠吼",
    title: "廚房出餐 KDS",
    description:
      "依站別分流、依訂單或品項彙總備料，尖峰也能看清楚下一步該做什麼。",
    image: media.tposaiKds,
  },
  {
    id: "inventory",
    pain: "盤點耗時、條碼對不到、月底才知耗損",
    title: "TPOS 盤點機 APP",
    description:
      "掃碼槍／鏡頭／手動加計都支援，盤點明細即時留下，庫存不再靠感覺。",
    image: media.tposaiInventoryScan,
  },
  {
    id: "web-admin",
    pain: "改菜單、改價格，各店各做各的",
    title: "Cloud 後台商品主檔",
    description:
      "商品維護後可儲存並同步，總部與門店用同一套真實後台，減少電話追改。",
    image: media.tposaiWebProducts,
  },
] as const;

export const sceneStories = [
  {
    id: "qr-dining",
    pain: "人力愈來愈貴，服務卻不能變差",
    title: "桌邊掃碼，讓服務回到人情味",
    description:
      "重複點餐交給系統，店員把時間留給主動關心與桌邊推薦——客人記得的是體驗，不是等待。",
    image: media.sceneQrDining,
  },
  {
    id: "tableside",
    pain: "客滿時點餐動線卡住，翻桌變慢",
    title: "桌邊點餐，尖峰也能穩",
    description:
      "手持機接單，不用排櫃台、不用搶桌機，整場節奏由你掌控。",
    image: media.sceneTableside,
  },
  {
    id: "kitchen",
    pain: "廚房紙本單亂、出餐順序打架",
    title: "出餐看板，廚房不再靠吼",
    description:
      "訂單即時上牆、狀態清楚，少漏單、少重做，尖峰也能維持出餐品質。",
    image: media.sceneKitchen,
  },
  {
    id: "checkout",
    pain: "結帳排隊長，客人心情先壞一半",
    title: "櫃台結帳要快、也要準",
    description:
      "雙螢幕對帳、流程直覺，忙碌時結得快、錯誤少，客人帶著好心情離開。",
    image: media.sceneCheckout,
  },
  {
    id: "delivery",
    pain: "內用、外帶、外送同時爆單就亂",
    title: "外送交接也有節奏",
    description:
      "外送單與店內單同一條作業流，交接清楚、少錯餐，外送夥伴也不用乾等。",
    image: media.sceneDelivery,
  },
  {
    id: "remote",
    pain: "老闆人在外面，店裡狀況完全黑箱",
    title: "人在店外，營運仍在掌握",
    description:
      "筆電後台與手機 APP 同步戰情，巡店、休假也能即時應變。",
    image: media.sceneOwnerRemote,
  },
] as const;

export type AppUiBlock = (typeof appUiBlocks)[number];
export type SceneStory = (typeof sceneStories)[number];
