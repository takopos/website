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
  /** Source page URL for attribution / license */
  url: string;
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
      alt: "台式麵攤湯麵情境示意（非店家實景）",
      width: 1280,
      height: 1707,
      credit: {
        credit: "Jjj84206／Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Oyster_Vermicelli.jpg",
        license: "CC BY-SA 4.0｜情境示意",
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
      alt: "精釀啤酒情境示意（非店家實景）",
      width: 1200,
      height: 800,
      credit: {
        credit: "Unsplash",
        url: "https://unsplash.com/photos/FOUXiB2nujw",
        license: "Unsplash License｜情境示意",
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
      alt: "炭火燒肉情境示意（非店家實景）",
      width: 1200,
      height: 801,
      credit: {
        credit: "Unsplash",
        url: "https://unsplash.com/license",
        license: "Unsplash License｜情境示意",
      },
    },
  },
  {
    id: "eijiro",
    stores: 2,
    modules: ["pos", "qr", "hq"] as const,
    featured: false,
    image: {
      src: "/images/cases/case-eijiro.jpg",
      alt: "個人燒肉情境示意（非店家實景）",
      width: 1200,
      height: 977,
      credit: {
        credit: "Unsplash",
        url: "https://unsplash.com/license",
        license: "Unsplash License｜情境示意",
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
      alt: "抹茶茶飲情境示意（非店家實景）",
      width: 1200,
      height: 1800,
      credit: {
        credit: "Unsplash",
        url: "https://unsplash.com/license",
        license: "Unsplash License｜情境示意",
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
      alt: "鮮果牛乳飲品情境示意（非店家實景）",
      width: 1200,
      height: 675,
      credit: {
        credit: "Unsplash",
        url: "https://unsplash.com/license",
        license: "Unsplash License｜情境示意",
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
      alt: "酒吧調酒情境示意（非店家實景）",
      width: 1200,
      height: 802,
      credit: {
        credit: "Unsplash",
        url: "https://unsplash.com/license",
        license: "Unsplash License｜情境示意",
      },
    },
  },
] as const;

export type CaseStudy = (typeof cases)[number];
export type CaseId = CaseStudy["id"];
