import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

import { routing } from "./i18n/routing";

/**
 * Use deprecated `middleware.ts` (Edge) instead of Next.js 16 `proxy.ts` (Node).
 * OpenNext Cloudflare rejects Node middleware until that runtime is supported.
 * @see https://github.com/cloudflare/workers-sdk/issues/13755
 */
const handleI18n = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase() ?? "";

  // Consolidate apex → www so the browser and Google use one host.
  if (host === "takopos.com.tw") {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = "www.takopos.com.tw";
    return NextResponse.redirect(url, 301);
  }

  return handleI18n(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
