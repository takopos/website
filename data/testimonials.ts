import { media } from "@/data/media";

export const testimonialsSection = {
  id: "support",
  eyebrow: "客戶怎麼說",
  title: "因為懂現場，所以被現場選擇",
  description:
    "從單店到連鎖，TAKOPOS 陪餐飲業者把尖峰穩住、帳務理清、成長少踩雷。",
} as const;

export const testimonials = [
  {
    id: "1",
    quote:
      "以前尖峰廚房單飛來飛去，現在看板清楚，出餐時間明顯縮短；店長也不用再半夜對帳到凌晨。",
    name: "林店長",
    role: "桃園火鍋｜單店",
    image: media.caseHotpot,
  },
  {
    id: "2",
    quote:
      "改價、改菜單再也不用電話追十幾間店。總部按一次，全台同步，少了很多錯單與客訴。",
    name: "陳營運長",
    role: "餐酒館｜11 間分店",
    image: media.caseBistro,
  },
  {
    id: "3",
    quote:
      "巡店前先看報表，哪間店掉速一目了然。TAKOPOS 真的懂督導每天在煩什麼。",
    name: "黃督導",
    role: "中式豬肚雞｜12 間分店",
    image: media.caseZhuduChicken,
  },
] as const;

export type Testimonial = (typeof testimonials)[number];
