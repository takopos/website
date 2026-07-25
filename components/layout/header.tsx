"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { BookingTrigger } from "@/components/booking/booking-trigger";
import { BrandLogo } from "@/components/brand/logo";
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

export function Header() {
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
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <BookingTrigger
            label={siteConfig.cta.primary}
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
                  aria-label="開啟選單"
                />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="px-4">
              <SheetHeader>
                <SheetTitle className="sr-only">導覽選單</SheetTitle>
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
                    {item.label}
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-6">
                <BookingTrigger
                  label={siteConfig.cta.primary}
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
