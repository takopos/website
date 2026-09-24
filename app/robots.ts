import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

/**
 * Explicit allow-list for classic search crawlers + generative-engine / AI bots (GEO).
 * Do not block indexing; Sitemap is declared at the end via MetadataRoute.
 */
const SEARCH_CRAWLERS = ["Googlebot", "Bingbot"] as const;

const AI_CRAWLERS = [
  "Google-Extended",
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "PerplexityBot",
  "ClaudeBot",
  "anthropic-ai",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "meta-externalagent",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [...SEARCH_CRAWLERS],
        allow: "/",
      },
      {
        userAgent: [...AI_CRAWLERS],
        allow: "/",
      },
    ],
    host: siteConfig.url,
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
