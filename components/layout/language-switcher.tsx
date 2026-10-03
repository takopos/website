"use client";

import { Check, ChevronDown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useId, useRef, useState } from "react";

import { usePathname, useRouter } from "@/i18n/navigation";
import { localeNames, locales, type AppLocale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

/** Static ray endpoints so SSR and client markup stay identical. */
const SUN_RAYS = [
  [1.45, 0, 2.35, 0],
  [1.256, 0.725, 2.035, 1.175],
  [0.725, 1.256, 1.175, 2.035],
  [0, 1.45, 0, 2.35],
  [-0.725, 1.256, -1.175, 2.035],
  [-1.256, 0.725, -2.035, 1.175],
  [-1.45, 0, -2.35, 0],
  [-1.256, -0.725, -2.035, -1.175],
  [-0.725, -1.256, -1.175, -2.035],
  [0, -1.45, 0, -2.35],
  [0.725, -1.256, 1.175, -2.035],
  [1.256, -0.725, 2.035, -1.175],
] as const;

function TaiwanFlag({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 12"
      className={cn("size-4 shrink-0 rounded-[2px] shadow-sm", className)}
      aria-hidden
      focusable="false"
    >
      <rect width="16" height="12" fill="#FE0000" />
      <rect width="8" height="6" fill="#000095" />
      <g transform="translate(4 3)">
        <circle r="1.15" fill="#fff" />
        {SUN_RAYS.map(([x1, y1, x2, y2]) => (
          <line
            key={`${x1}-${y1}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#fff"
            strokeWidth="0.55"
            strokeLinecap="round"
          />
        ))}
        <circle r="0.55" fill="#000095" />
      </g>
    </svg>
  );
}

function LocaleLabel({ code }: { code: AppLocale }) {
  if (code === "zh-Hant") {
    return (
      <>
        <TaiwanFlag />
        <span className="sr-only">{localeNames[code]}</span>
      </>
    );
  }

  return <span>{localeNames[code]}</span>;
}

export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations("common");
  const locale = useLocale() as AppLocale;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const selectLocale = (next: AppLocale) => {
    setOpen(false);
    if (next === locale) return;
    router.replace(pathname, { locale: next });
  };

  return (
    <div ref={rootRef} className={cn("relative inline-flex", className)}>
      <button
        type="button"
        aria-label={t("language")}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border/80 bg-background px-2 text-sm font-medium text-foreground outline-none transition-colors hover:bg-muted focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
      >
        <LocaleLabel code={locale} />
        <ChevronDown
          className={cn(
            "size-3.5 text-muted-foreground transition-transform",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label={t("language")}
          className="absolute top-full right-0 z-50 mt-1 min-w-[7.5rem] overflow-hidden rounded-lg border border-border/80 bg-background py-1 shadow-[0_12px_28px_-16px_rgba(47,44,42,0.45)]"
        >
          {locales.map((code) => {
            const selected = code === locale;
            return (
              <li key={code} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => selectLocale(code)}
                  className={cn(
                    "flex w-full items-center gap-2 px-3 py-2 text-left text-sm font-medium transition-colors hover:bg-muted",
                    selected ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {code === "zh-Hant" ? (
                    <>
                      <TaiwanFlag className="size-[1.125rem]" />
                      <span className="sr-only">{localeNames[code]}</span>
                    </>
                  ) : (
                    <span>{localeNames[code]}</span>
                  )}
                  {selected ? (
                    <Check className="ml-auto size-3.5 text-primary" aria-hidden />
                  ) : (
                    <span className="ml-auto size-3.5" aria-hidden />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
