"use client";

import { useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { aiCsConfig } from "@/data/ai-cs";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "bot" | "user";
  text: string;
};

function resolveReply(input: string) {
  if (input.includes("方案") || input.includes("收費") || input.includes("價格")) {
    return aiCsConfig.replies.pricing;
  }
  if (input.includes("預約") || input.includes("體驗") || input.includes("演示")) {
    return aiCsConfig.replies.demo;
  }
  if (input.includes("漏點") || input.includes("尖峰") || input.includes("點餐")) {
    return aiCsConfig.replies.peak;
  }
  if (input.includes("菜單") || input.includes("同步") || input.includes("下發")) {
    return aiCsConfig.replies.menuSync;
  }
  if (input.includes("調撥") || input.includes("庫存") || input.includes("連鎖")) {
    return aiCsConfig.replies.transfer;
  }
  return aiCsConfig.replies.default;
}

export function TakoAiCsWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: "greet", role: "bot", text: aiCsConfig.greeting },
  ]);

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
              <p className="text-sm font-semibold">{aiCsConfig.title}</p>
              <p className="text-xs text-white/75">{aiCsConfig.subtitle}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon-sm"
            className="text-white hover:bg-white/15 hover:text-white"
            onClick={() => setOpen(false)}
            aria-label="關閉客服視窗"
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
            {aiCsConfig.quickReplies.map((reply) => (
              <button
                key={reply}
                type="button"
                onClick={() => send(reply)}
                className="rounded-full border border-border bg-white px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {reply}
              </button>
            ))}
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
            placeholder={aiCsConfig.placeholder}
            className="h-10 flex-1 rounded-xl border border-transparent bg-muted px-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
            aria-label="客服訊息輸入"
          />
          <Button type="submit" size="icon" aria-label="送出訊息">
            <Send />
          </Button>
        </form>
      </div>

      <Button
        size="lg"
        onClick={() => setOpen((value) => !value)}
        className="pointer-events-auto h-14 gap-2 rounded-full px-5 shadow-[0_16px_40px_-16px_rgba(208,104,44,0.7)]"
        aria-expanded={open}
        aria-label={open ? "關閉 TAKO Ai CS" : "開啟 TAKO Ai CS"}
      >
        {open ? <X className="size-5" /> : <MessageCircle className="size-5" />}
        <span className="font-heading text-sm font-semibold">
          {aiCsConfig.brand}
        </span>
      </Button>
    </div>
  );
}
