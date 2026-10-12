/**
 * TAKOPOS product portfolio:
 * - Owned: TPOS AI (Taiwan-built AI POS)
 * - Partner / authorized distribution: 2DFire, Eats365, SpeedOrder
 */

export const productLinesSection = {
  id: "product-lines",
} as const;

export type ProductLineKind = "owned" | "partner";
export type ProductLineCategory = "pos" | "supply";

export type ProductLine = {
  id: "tpos-ai" | "2dfire" | "eats365" | "speedorder";
  href: `/${string}`;
  kind: ProductLineKind;
  category: ProductLineCategory;
  /** Optional brand mark under /public */
  logoSrc?: string;
  logoAltKey?: "tposAi";
};

export const productLines: readonly ProductLine[] = [
  {
    id: "tpos-ai",
    href: "/tpos-ai",
    kind: "owned",
    category: "pos",
    logoSrc: "/images/brand/tpos-premium-logo-transparent.png",
    logoAltKey: "tposAi",
  },
  {
    id: "2dfire",
    href: "/2dfire",
    kind: "partner",
    category: "pos",
  },
  {
    id: "eats365",
    href: "/eats365",
    kind: "partner",
    category: "pos",
  },
  {
    id: "speedorder",
    href: "/speedorder",
    kind: "partner",
    category: "supply",
  },
] as const;

export const posProductLines = productLines.filter((p) => p.category === "pos");
export const supplyProductLines = productLines.filter(
  (p) => p.category === "supply"
);
