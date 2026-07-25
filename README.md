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

1. Cloudflare Dashboard → **Workers & Pages** → 選專案 → **Settings** → **Build**
2. 請改成以下（預設 `npm run build` 會失敗）：

| 欄位 | 值 |
|------|-----|
| **Build command** | `npm run build:cf` |
| **Deploy command** | `npx wrangler deploy` |
| **Root directory** | （空白） |

3. 存檔後到 **Deployments** → **Retry deployment**

失敗常見原因：Build 只跑了 `next build`，沒產生 `.open-next`，Deploy 才會報  
`Could not find compiled Open Next config`。

也可繼續用 [Vercel](https://vercel.com) 部署同一套 Next.js 程式。

## CRM 預約體驗整合

「免費預約體驗」表單會經由 `POST /api/leads` 寫入 TAKOCRM 潛在顧客名單（來源：`官網預約體驗`）。

本機請複製 `.env.example` 為 `.env.local`，填入與 Render CRM / LINE bot 相同的：

```bash
CRM_BASE_URL=https://takocrm.onrender.com
CRM_PUSH_API_SECRET=...
```

Cloudflare 請在 **Workers & Pages → website → Settings → Variables and Secrets** 設定：

| 名稱 | 類型 | 值 |
|------|------|-----|
| `CRM_BASE_URL` | Variable | `https://takocrm.onrender.com` |
| `CRM_PUSH_API_SECRET` | Secret | 與 TAKOCRM 相同 |
