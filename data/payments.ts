export const paymentsSection = {
  id: "payments",
} as const;

/**
 * Official brand marks sourced from each provider:
 * - credit-card: Visa Brand Mark (visa.com.tw) + Mastercard symbol (Wikimedia/Mastercard brand)
 * - line-pay: LINE Pay Developers logo pack (developers-pay.line.me)
 * - pxpay: 全支付 official site favicon/mark (pxpayplus.com)
 */
export const paymentMethods = [
  {
    id: "credit-card",
    icon: "/images/payments/credit-card-tile.png",
  },
  {
    id: "line-pay",
    icon: "/images/payments/line-pay.png",
  },
  {
    id: "pxpay",
    icon: "/images/payments/pxpay.png",
  },
] as const;

export type PaymentMethod = (typeof paymentMethods)[number];
