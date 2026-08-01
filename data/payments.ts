export const paymentsSection = {
  id: "payments",
} as const;

export const paymentMethods = [
  {
    id: "credit-card",
    icon: "/images/payments/credit-card.svg",
  },
  {
    id: "line-pay",
    icon: "/images/payments/line-pay.svg",
  },
  {
    id: "pxpay",
    icon: "/images/payments/pxpay.svg",
  },
] as const;

export type PaymentMethod = (typeof paymentMethods)[number];
