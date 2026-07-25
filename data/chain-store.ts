import { media } from "@/data/media";

export const chainStoreSection = {
  id: "chain-store",
} as const;

export const chainStoreBlocks = [
  {
    id: "hq-control",
    image: media.chainMenuSync,
    imagePosition: "right" as const,
    accentIcons: ["Send", "Store"] as const,
  },
  {
    id: "multi-store-dashboard",
    image: media.chainDataChart,
    imagePosition: "left" as const,
    accentIcons: ["BarChart3", "TrendingUp"] as const,
  },
  {
    id: "inventory-transfer",
    image: media.chainInventory,
    imagePosition: "right" as const,
    accentIcons: ["Box", "ArrowRight", "Truck"] as const,
    showFlow: true,
  },
] as const;

export const transferFlow = [
  { step: 1, icon: "AlertTriangle" },
  { step: 2, icon: "ArrowRightLeft" },
  { step: 3, icon: "PackageCheck" },
] as const;

export const rolePermissions = [
  {
    roleKey: "hq" as const,
    menu: true,
    pricing: true,
    transfer: true,
    reports: true,
    staff: true,
  },
  {
    roleKey: "supervisor" as const,
    menu: false,
    pricing: false,
    transfer: true,
    reports: true,
    staff: true,
  },
  {
    roleKey: "manager" as const,
    menu: false,
    pricing: false,
    transfer: true,
    reports: true,
    staff: true,
  },
  {
    roleKey: "staff" as const,
    menu: false,
    pricing: false,
    transfer: false,
    reports: false,
    staff: false,
  },
] as const;

export const permissionColumns = [
  { key: "menu" as const },
  { key: "pricing" as const },
  { key: "transfer" as const },
  { key: "reports" as const },
  { key: "staff" as const },
] as const;

export type ChainStoreBlock = (typeof chainStoreBlocks)[number];
export type RolePermission = (typeof rolePermissions)[number];
