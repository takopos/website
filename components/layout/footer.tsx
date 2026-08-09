import { getTranslations } from "next-intl/server";

import { BrandLogo } from "@/components/brand/logo";
import { siteConfig } from "@/data/site";
import { Link } from "@/i18n/navigation";

export async function Footer() {
  const t = await getTranslations("footer");
  const tCommon = await getTranslations("common");
  const tNav = await getTranslations("nav");

  return (
    <footer className="border-t border-white/10 bg-[var(--brand-charcoal)] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div className="space-y-4">
          <BrandLogo className="[&_img]:h-12 sm:[&_img]:h-14" />
          <p className="text-sm text-white/65">
            {tCommon("company")} · {tCommon("tagline")}
          </p>
          <p className="max-w-md text-sm leading-relaxed text-white/70">
            {t("blurb")}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--brand-orange)] uppercase">
              {t("quickLinks")}
            </p>
            <ul className="mt-4 space-y-2">
              {siteConfig.footer.links.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-[var(--brand-orange)]"
                  >
                    {link.key === "features" ||
                    link.key === "pricing" ||
                    link.key === "diningPos"
                      ? tNav(link.key)
                      : t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--brand-orange)] uppercase">
              {tCommon("contactUs")}
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
          © {new Date().getFullYear()} {tCommon("copyright")}
        </p>
      </div>
    </footer>
  );
}
