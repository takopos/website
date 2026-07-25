# TAKOPOS Website

諾迪科技 TAKOPOS 官方網站（Next.js）。

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — eslint
- `npm run preview` — Cloudflare Workers 本機預覽（OpenNext）
- `npm run deploy` — 建置並部署到 Cloudflare Workers

## Deploy on Cloudflare

本專案已接上 [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare)（Workers + OpenNext）。

### 本機部署

```bash
npx wrangler login
npm run deploy
```

### Git 連線自動部署（Dashboard）

1. Cloudflare Dashboard → **Workers & Pages** → 連 GitHub repo `takopos/website`
2. Build command：`npx opennextjs-cloudflare build`
3. Deploy command：`npx wrangler deploy`
4. 根目錄保持專案根（含 `wrangler.jsonc`）

也可繼續用 [Vercel](https://vercel.com) 部署同一套 Next.js 程式。
