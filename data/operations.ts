import { media } from "@/data/media";

export const operationsSection = {
  id: "operations",
} as const;

export const operationsHighlights = [
  { id: "ops-map", image: media.systemOpsMap },
  { id: "pos-ui", image: media.tposaiPosOrdering },
] as const;

export const appUiBlocks = [
  { id: "pos-ordering", image: media.tposaiPosOrdering },
  { id: "mobile-order", image: media.tposaiMobileOrder },
  { id: "checkout", image: media.tposaiPosCheckout },
  { id: "kds", image: media.tposaiKds },
  { id: "inventory", image: media.tposaiInventoryScan },
  { id: "web-admin", image: media.tposaiWebProducts },
] as const;

export const sceneStories = [
  { id: "qr-dining", image: media.sceneQrDining },
  { id: "tableside", image: media.sceneTableside },
  { id: "kitchen", image: media.sceneKitchen },
  { id: "checkout", image: media.sceneCheckout },
  { id: "delivery", image: media.sceneDelivery },
  { id: "remote", image: media.sceneOwnerRemote },
] as const;

export type AppUiBlock = (typeof appUiBlocks)[number];
export type SceneStory = (typeof sceneStories)[number];
