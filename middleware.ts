import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";

/**
 * Use deprecated `middleware.ts` (Edge) instead of Next.js 16 `proxy.ts` (Node).
 * OpenNext Cloudflare rejects Node middleware until that runtime is supported.
 * @see https://github.com/cloudflare/workers-sdk/issues/13755
 */
export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
