"use client";

import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";

import { BookingTrigger } from "@/components/booking/booking-trigger";
import { BrandLogo } from "@/components/brand/logo";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/data/site";
import { Link } from "@/i18n/navigation";

export function Header() {
  const tNav = useTranslations("nav");
  const tCta = useTranslations("cta");

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <BrandLogo priority />

        <nav className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {tNav(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <BookingTrigger
            label={tCta("primary")}
            className="hidden sm:inline-flex"
            size="lg"
          />

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden"
                  aria-label="Menu"
                />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="px-4">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <BrandLogo />
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                {siteConfig.nav.map((item) => (
                  <SheetClose
                    key={item.href}
                    nativeButton={false}
                    render={
                      <Link
                        href={item.href}
                        className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
                      />
                    }
                  >
                    {tNav(item.key)}
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-6 space-y-3">
                <LanguageSwitcher />
                <BookingTrigger
                  label={tCta("primary")}
                  fullWidth
                  size="lg"
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
