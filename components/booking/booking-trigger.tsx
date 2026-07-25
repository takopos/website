"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { bookingForm } from "@/data/booking";
import { cn } from "@/lib/utils";

type BookingTriggerProps = {
  label: string;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link";
  size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg";
  fullWidth?: boolean;
};

type FormState = {
  storeName: string;
  contactName: string;
  phone: string;
  city: string;
  isFnb: "是" | "否";
  fnbType: string;
  needEinvoice: "是" | "否";
  note: string;
};

const initialForm: FormState = {
  storeName: "",
  contactName: "",
  phone: "",
  city: "",
  isFnb: "是",
  fnbType: "火鍋",
  needEinvoice: "是",
  note: "",
};

export function BookingTrigger({
  label,
  className,
  variant = "default",
  size = "lg",
  fullWidth = false,
}: BookingTriggerProps) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [leadNo, setLeadNo] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as {
        success?: boolean;
        message?: string;
        leadNo?: string;
      };

      if (!res.ok || !data.success) {
        setError(data.message || "送出失敗，請稍後再試");
        return;
      }

      setLeadNo(data.leadNo || "");
      setDone(true);
      setForm(initialForm);
    } catch {
      setError("網路異常，請稍後再試");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Sheet
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) {
          setError("");
          setDone(false);
          setLeadNo("");
        }
      }}
    >
      <SheetTrigger
        render={
          <Button
            variant={variant}
            size={size}
            className={cn(fullWidth && "w-full", className)}
          />
        }
      >
        {label}
      </SheetTrigger>
      <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-md">
        <SheetHeader>
          <SheetTitle>{bookingForm.title}</SheetTitle>
          <SheetDescription>{bookingForm.description}</SheetDescription>
        </SheetHeader>

        {done ? (
          <div className="mt-8 space-y-4 px-1">
            <p className="text-base font-medium text-foreground">
              已收到您的預約，業務將盡快與您聯繫。
            </p>
            {leadNo ? (
              <p className="text-sm text-muted-foreground">諮詢編號：{leadNo}</p>
            ) : null}
            <Button className="w-full" onClick={() => setOpen(false)}>
              關閉
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-6 space-y-4 px-1 pb-6">
            <Field label="店名 / 品牌" required>
              <input
                required
                value={form.storeName}
                onChange={(e) => update("storeName", e.target.value)}
                className={fieldClass}
                placeholder="例如：桃園火鍋店"
              />
            </Field>
            <Field label="聯絡人">
              <input
                value={form.contactName}
                onChange={(e) => update("contactName", e.target.value)}
                className={fieldClass}
                placeholder="例如：林店長"
              />
            </Field>
            <Field label="聯絡電話" required>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className={fieldClass}
                placeholder="09xxxxxxxx"
              />
            </Field>
            <Field label="營業縣市" required>
              <select
                required
                value={form.city}
                onChange={(e) => update("city", e.target.value)}
                className={fieldClass}
              >
                <option value="" disabled>
                  請選擇
                </option>
                {bookingForm.cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="是否餐飲業" required>
              <select
                value={form.isFnb}
                onChange={(e) =>
                  update("isFnb", e.target.value === "否" ? "否" : "是")
                }
                className={fieldClass}
              >
                <option value="是">是</option>
                <option value="否">否</option>
              </select>
            </Field>
            {form.isFnb === "是" ? (
              <Field label="餐飲類型" required>
                <select
                  required
                  value={form.fnbType}
                  onChange={(e) => update("fnbType", e.target.value)}
                  className={fieldClass}
                >
                  {bookingForm.fnbTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </Field>
            ) : null}
            <Field label="是否需要電子發票" required>
              <select
                value={form.needEinvoice}
                onChange={(e) =>
                  update("needEinvoice", e.target.value === "否" ? "否" : "是")
                }
                className={fieldClass}
              >
                <option value="是">是</option>
                <option value="否">否</option>
              </select>
            </Field>
            <Field label="備註">
              <textarea
                value={form.note}
                onChange={(e) => update("note", e.target.value)}
                className={cn(fieldClass, "min-h-24 resize-y")}
                placeholder="希望演示時段、分店數等（選填）"
              />
            </Field>

            {error ? <p className="text-sm text-destructive">{error}</p> : null}

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={submitting}
            >
              {submitting ? "送出中…" : "送出預約"}
            </Button>
          </form>
        )}
      </SheetContent>
    </Sheet>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm font-medium text-foreground">
        {label}
        {required ? <span className="text-primary"> *</span> : null}
      </span>
      {children}
    </label>
  );
}

const fieldClass =
  "w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20";
