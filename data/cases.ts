export type CaseModule =
  | "pos"
  | "qr"
  | "hq"
  | "ocard"
  | "erp";

export const caseModules: CaseModule[] = [
  "pos",
  "qr",
  "hq",
  "ocard",
  "erp",
];

export type CaseImageCredit = {
  /** Photographer or rights holder label */
  credit: string;
  /** Source page URL for attribution / license (optional) */
  url?: string;
  /** License short label shown in UI */
  license: string;
};

export const cases = [
  {
    id: "luo-mama",
    stores: 1,
    modules: ["pos"] as const,
    featured: true,
    image: {
      src: "/images/cases/case-luo-mama.jpg",
      alt: "羅媽媽米粉湯：米粉湯與黑白切小菜",
      width: 530,
      height: 377,
      credit: {
        credit: "市場處",
        license: "圖片來源",
      },
    },
  },
  {
    id: "abv",
    stores: 11,
    modules: ["pos", "ocard", "erp"] as const,
    featured: true,
    image: {
      src: "/images/cases/case-abv.jpg",
      alt: "ABV 精釀啤酒餐廳門市啤酒牆",
      width: 738,
      height: 375,
      credit: {
        credit: "ABV精釀啤酒餐廳",
        license: "圖片來源",
      },
    },
  },
  {
    id: "yakiniku-shu",
    stores: 11,
    modules: ["pos", "qr", "hq"] as const,
    featured: true,
    image: {
      src: "/images/cases/case-yakiniku-shu.jpg",
      alt: "燒肉眾日式炭火燒肉",
      width: 640,
      height: 640,
      // Brand / partner-provided image — no public citation required
    },
  },
  {
    id: "eijiro",
    stores: 2,
    modules: ["pos", "qr", "hq"] as const,
    featured: false,
    image: {
      src: "/images/cases/case-eijiro.jpg",
      alt: "榮次郎個人燒肉門市外觀",
      width: 515,
      height: 388,
      credit: {
        credit: "元創餐飲集團",
        license: "圖片來源",
      },
    },
  },
  {
    id: "meisen",
    stores: 4,
    modules: ["pos", "hq"] as const,
    featured: false,
    image: {
      src: "/images/cases/case-meisen.jpg",
      alt: "明森宇治日式料理與抹茶甜點",
      width: 528,
      height: 378,
      credit: {
        credit: "明森宇治官網",
        license: "圖片來源",
      },
    },
  },
  {
    id: "gaobei",
    stores: 8,
    modules: ["pos"] as const,
    featured: true,
    image: {
      src: "/images/cases/case-gaobei.jpg",
      alt: "高北牛乳大王木瓜牛乳與品牌杯",
      width: 1024,
      height: 747,
      credit: {
        credit: "高北牛乳大王",
        license: "圖片來源",
      },
    },
  },
  {
    id: "origin-bar",
    stores: 3,
    modules: ["pos"] as const,
    featured: false,
    image: {
      src: "/images/cases/case-origin-bar.jpg",
      alt: "Origin Bar 初門市 ORIGIN TRUE 牆面裝置",
      width: 447,
      height: 447,
      credit: {
        credit: "Origin 初 官網",
        license: "圖片來源",
      },
    },
  },
] as const;

export type CaseStudy = (typeof cases)[number];
export type CaseId = CaseStudy["id"];
