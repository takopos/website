export const brand = {
  productName: "TAKOPOS",
  marketingName: "TAKO",
  company: "諾迪科技",
  slogan: "塔科餐飲智慧",
  /**
   * Official CI from CRM / billing assets
   * (TDC Robin → CRM系統/static/logo.jpg)
   */
  colors: {
    orange: "#D0682C",
    orangeDark: "#B55520",
    iron: "#6C6460",
    ironDark: "#4A4542",
    ironLight: "#8A827C",
    charcoal: "#2F2C2A",
  },
  logo: {
    full: {
      src: "/images/brand/takopos-ci-logo.png",
      alt: "TAKO｜TAKOPOS",
      width: 1542,
      height: 355,
    },
    favicon: "/images/brand/favicon.png",
  },
} as const;
