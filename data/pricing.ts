export const pricingSection = {
  id: "pricing",
} as const;

export const pricingPlans = [
  {
    id: "micro",
    price: "988",
    consult: false,
    featured: false,
    ctaKey: "bookDemo" as const,
  },
  {
    id: "mid",
    price: "1,888",
    consult: false,
    featured: true,
    ctaKey: "bookDemo" as const,
  },
  {
    id: "chain",
    price: "",
    consult: true,
    featured: false,
    ctaKey: "contactSales" as const,
  },
] as const;

export type PricingPlan = (typeof pricingPlans)[number];
