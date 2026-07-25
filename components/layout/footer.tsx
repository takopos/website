import Link from "next/link";

import { BrandLogo } from "@/components/brand/logo";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--brand-charcoal)] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div className="space-y-4">
          <BrandLogo className="[&_img]:h-12 sm:[&_img]:h-14" />
          <p className="text-sm text-white/65">
            {siteConfig.company} · {siteConfig.tagline}
          </p>
          <p className="max-w-md text-sm leading-relaxed text-white/70">
            懂現場的智慧餐飲系統：把尖峰、廚房、交班與連鎖同步的痛點，變成可執行的作業流。
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--brand-orange)] uppercase">
              快速連結
            </p>
            <ul className="mt-4 space-y-2">
              {siteConfig.footer.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-[var(--brand-orange)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--brand-orange)] uppercase">
              聯絡我們
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>{siteConfig.contact.phone}</li>
              <li>{siteConfig.contact.email}</li>
              <li>{siteConfig.contact.address}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-white/45 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {siteConfig.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
