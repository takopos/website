"use client";

import { useEffect, useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { aiCsReplyMatchers } from "@/data/ai-cs";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "bot" | "user";
  text: string;
};

const quickReplyKeys = ["peak", "demo", "menu"] as const;

export function TakoAiCsWidget() {
  const t = useTranslations("aiCs");
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: "greet", role: "bot", text: t("greeting") },
  ]);

  useEffect(() => {
    setMessages([{ id: "greet", role: "bot", text: t("greeting") }]);
  }, [locale, t]);

  function resolveReply(inputText: string) {
    const lower = inputText.toLowerCase();
    for (const matcher of aiCsReplyMatchers) {
      if (matcher.keywords.some((kw) => lower.includes(kw.toLowerCase()))) {
        return t(`replies.${matcher.replyKey}`);
      }
    }
    return t("replies.default");
  }

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMessage: Message = {
      id: `u-${Date.now()}`,
      role: "user",
      text: trimmed,
    };
    const botMessage: Message = {
      id: `b-${Date.now()}`,
      role: "bot",
      text: resolveReply(trimmed),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  }

  return (
    <div className="pointer-events-none fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <div
        className={cn(
          "pointer-events-auto w-[min(100vw-2rem,22rem)] origin-bottom-right overflow-hidden rounded-2xl border border-border bg-background shadow-[0_24px_60px_-28px_oklch(0.35_0.05_220/0.55)] transition-all duration-300",
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-95 opacity-0"
        )}
        aria-hidden={!open}
      >
        <div className="flex items-start justify-between gap-3 bg-[linear-gradient(135deg,var(--brand-charcoal),var(--brand-iron-dark))] px-4 py-3 text-white">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-white/15">
              <Bot className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">{t("title")}</p>
              <p className="text-xs text-white/75">{t("subtitle")}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon-sm"
            className="text-white hover:bg-white/15 hover:text-white"
            onClick={() => setOpen(false)}
            aria-label={t("close")}
          >
            <X />
          </Button>
        </div>

        <div className="flex max-h-72 flex-col gap-3 overflow-y-auto bg-[oklch(0.985_0.01_210)] px-3 py-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed",
                message.role === "bot"
                  ? "self-start bg-white text-foreground shadow-sm"
                  : "self-end bg-primary text-primary-foreground"
              )}
            >
              {message.text}
            </div>
          ))}
          <div className="flex flex-wrap gap-2">
            {quickReplyKeys.map((key) => {
              const reply = t(`quickReplies.${key}`);
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => send(reply)}
                  className="rounded-full border border-border bg-white px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {reply}
                </button>
              );
            })}
          </div>
        </div>

        <form
          className="flex items-center gap-2 border-t border-border bg-background p-2"
          onSubmit={(event) => {
            event.preventDefault();
            send(input);
          }}
        >
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder={t("placeholder")}
            className="h-10 flex-1 rounded-xl border border-transparent bg-muted px-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
            aria-label={t("placeholder")}
          />
          <Button type="submit" size="icon" aria-label={t("send")}>
            <Send />
          </Button>
        </form>
      </div>

      <Button
        size="lg"
        onClick={() => setOpen((value) => !value)}
        className="pointer-events-auto h-14 gap-2 rounded-full px-5 shadow-[0_16px_40px_-16px_rgba(208,104,44,0.7)]"
        aria-expanded={open}
        aria-label={open ? t("close") : t("open")}
      >
        {open ? <X className="size-5" /> : <MessageCircle className="size-5" />}
        <span className="font-heading text-sm font-semibold">{t("brand")}</span>
      </Button>
    </div>
  );
}
