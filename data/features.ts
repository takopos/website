export const featuresSection = {
  id: "features",
} as const;

export const features = [
  { id: "pos", icon: "MonitorSmartphone" },
  { id: "kitchen", icon: "ChefHat" },
  { id: "inventory", icon: "Package" },
  { id: "member", icon: "Users" },
  { id: "analytics", icon: "BarChart3" },
  { id: "payment", icon: "CreditCard" },
] as const;

export type Feature = (typeof features)[number];
