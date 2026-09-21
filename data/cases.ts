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

export const cases = [
  {
    id: "abv",
    stores: 11,
    modules: ["pos", "ocard", "erp"] as const,
    featured: true,
  },
  {
    id: "yakiniku-shu",
    stores: 11,
    modules: ["pos", "qr", "hq"] as const,
    featured: true,
  },
  {
    id: "eijiro",
    stores: 2,
    modules: ["pos", "qr", "hq"] as const,
    featured: false,
  },
  {
    id: "meisen",
    stores: 4,
    modules: ["pos", "hq"] as const,
    featured: false,
  },
  {
    id: "gaobei",
    stores: 8,
    modules: ["pos"] as const,
    featured: true,
  },
  {
    id: "origin-bar",
    stores: 3,
    modules: ["pos"] as const,
    featured: false,
  },
] as const;

export type CaseStudy = (typeof cases)[number];
export type CaseId = CaseStudy["id"];
