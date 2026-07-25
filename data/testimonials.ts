import { media } from "@/data/media";

export const testimonialsSection = {
  id: "support",
} as const;

export const testimonials = [
  { id: "1", image: media.caseHotpot },
  { id: "2", image: media.caseBistro },
  { id: "3", image: media.caseZhuduChicken },
] as const;

export type Testimonial = (typeof testimonials)[number];
