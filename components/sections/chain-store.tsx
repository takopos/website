import {
  AlertTriangle,
  ArrowRight,
  ArrowRightLeft,
  BarChart3,
  Box,
  Check,
  PackageCheck,
  Send,
  Store,
  TrendingUp,
  Truck,
  X,
  type LucideIcon,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

import { ProductScreenshot } from "@/components/media/product-screenshot";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  chainStoreBlocks,
  chainStoreSection,
  permissionColumns,
  rolePermissions,
  transferFlow,
} from "@/data/chain-store";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  AlertTriangle,
  ArrowRight,
  ArrowRightLeft,
  BarChart3,
  Box,
  PackageCheck,
  Send,
  Store,
  TrendingUp,
  Truck,
};

function AccentIcons({ icons }: { icons: readonly string[] }) {
  return (
    <div className="mb-5 flex flex-wrap items-center gap-2">
      {icons.map((name, index) => {
        const Icon = iconMap[name] ?? Box;
        return (
          <div key={name} className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="size-4" />
            </span>
            {index < icons.length - 1 && (
              <ArrowRight className="size-4 text-primary/40" aria-hidden />
            )}
          </div>
        );
      })}
    </div>
  );
}

export async function ChainStoreSection() {
  const t = await getTranslations("chain");

  return (
    <section
      id={chainStoreSection.id}
      className="scroll-mt-20 bg-[#f7f7f8] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t("description")}
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {chainStoreBlocks.map((block) => {
            const imageFirst = block.imagePosition === "left";
            const points = t.raw(`blocks.${block.id}.points`) as string[];

            return (
              <article
                key={block.id}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
              >
                <div
                  className={cn(
                    "order-2",
                    imageFirst ? "lg:order-1" : "lg:order-2"
                  )}
                >
                  <ProductScreenshot media={block.image} />
                </div>

                <div
                  className={cn(
                    "order-1",
                    imageFirst ? "lg:order-2" : "lg:order-1"
                  )}
                >
                  <AccentIcons icons={block.accentIcons} />
                  <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
                    {t(`blocks.${block.id}.eyebrow`)}
                  </p>
                  <h3 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {t(`blocks.${block.id}.title`)}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {t(`blocks.${block.id}.description`)}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm text-muted-foreground"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {"showFlow" in block && block.showFlow && (
                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                      {transferFlow.map((step, index) => {
                        const Icon = iconMap[step.icon] ?? Box;
                        return (
                          <div
                            key={step.step}
                            className="relative rounded-xl border border-border/80 bg-background/80 p-4"
                          >
                            <div className="flex items-center gap-2">
                              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                <Icon className="size-4" />
                              </span>
                              {index < transferFlow.length - 1 && (
                                <ArrowRight className="ml-auto hidden size-4 text-primary/50 sm:block lg:hidden xl:block" />
                              )}
                            </div>
                            <p className="mt-3 text-sm font-semibold text-foreground">
                              {step.step}. {t(`flow.${step.step}.title`)}
                            </p>
                            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                              {t(`flow.${step.step}.description`)}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-20">
          <h3 className="font-heading text-2xl font-semibold text-foreground">
            {t("rolesTitle")}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {t("rolesDescription")}
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border border-border/70 bg-background shadow-sm">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-24"> </TableHead>
                  {permissionColumns.map((column) => (
                    <TableHead key={column.key} className="text-center">
                      {t(`columns.${column.key}`)}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {rolePermissions.map((row) => (
                  <TableRow key={row.roleKey}>
                    <TableCell className="font-medium">
                      {t(`roles.${row.roleKey}`)}
                    </TableCell>
                    {permissionColumns.map((column) => {
                      const allowed = row[column.key];
                      return (
                        <TableCell key={column.key} className="text-center">
                          {allowed ? (
                            <Check
                              className="mx-auto size-4 text-primary"
                              aria-hidden
                            />
                          ) : (
                            <X
                              className="mx-auto size-4 text-muted-foreground/50"
                              aria-hidden
                            />
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
}
