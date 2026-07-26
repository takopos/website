/** Keyword → reply key; matched case-insensitively against user input. */
export const aiCsReplyMatchers: {
  replyKey: "pricing" | "demo" | "peak" | "menuSync" | "transfer";
  keywords: string[];
}[] = [
  {
    replyKey: "pricing",
    keywords: [
      "方案",
      "收費",
      "價格",
      "price",
      "pricing",
      "cost",
      "giá",
      "ราคา",
    ],
  },
  {
    replyKey: "demo",
    keywords: [
      "預約",
      "體驗",
      "現場介紹",
      "介紹",
      "演示",
      "demo",
      "book",
      "đặt",
      "จอง",
    ],
  },
  {
    replyKey: "peak",
    keywords: [
      "漏點",
      "尖峰",
      "點餐",
      "peak",
      "missed",
      "order",
      "cao điểm",
      "พีค",
    ],
  },
  {
    replyKey: "menuSync",
    keywords: [
      "菜單",
      "同步",
      "下發",
      "menu",
      "sync",
      "thực đơn",
      "เมนู",
    ],
  },
  {
    replyKey: "transfer",
    keywords: [
      "調撥",
      "庫存",
      "連鎖",
      "transfer",
      "inventory",
      "chain",
      "kho",
      "สต็อก",
    ],
  },
];
