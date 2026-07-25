import Image from "next/image";

import { ProductScreenshot } from "@/components/media/product-screenshot";
import {
  appUiBlocks,
  operationsHighlights,
  operationsSection,
  sceneStories,
} from "@/data/operations";
import { cn } from "@/lib/utils";

export function OperationsSection() {
  return (
    <section
      id={operationsSection.id}
      className="scroll-mt-20 border-y border-border/60 bg-[#2f2c2a] py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            {operationsSection.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            {operationsSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            {operationsSection.description}
          </p>
        </div>

        <div className="mt-14 space-y-10">
          {operationsHighlights.map((item) => (
            <article key={item.id}>
              <div className="mb-4 max-w-2xl">
                <h3 className="font-heading text-xl font-semibold sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {item.description}
                </p>
              </div>
              <ProductScreenshot
                media={item.image}
                frameClassName="border-white/10 bg-[#1c1a19] ring-primary/20"
              />
            </article>
          ))}
        </div>

        <div className="mt-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
              TPOS Ai 真實操作介面
            </p>
            <h3 className="mt-3 font-heading text-2xl font-semibold sm:text-3xl">
              現場怎麼忙，介面就怎麼幫你扛
            </h3>
            <p className="mt-2 text-sm text-white/55">
              截圖來源：TPOSAI 專案實際開發之 POS／掃碼點餐／KDS／盤點 APP／Cloud 後台。
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {appUiBlocks.map((block) => {
              const portrait =
                "portrait" in block.image && block.image.portrait === true;

              return (
                <article
                  key={block.id}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
                >
                  <div
                    className={cn(
                      "flex items-center justify-center bg-[#1c1a19] p-3 sm:p-4",
                      portrait ? "min-h-[22rem]" : "min-h-[14rem]"
                    )}
                  >
                    <Image
                      src={block.image.src}
                      alt={block.image.alt}
                      width={block.image.width}
                      height={block.image.height}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={cn(
                        "h-auto w-full object-contain",
                        portrait ? "max-h-[28rem]" : "max-h-[18rem] sm:max-h-[20rem]"
                      )}
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-xs font-medium tracking-wide text-primary">
                      痛點 · {block.pain}
                    </p>
                    <h4 className="mt-2 font-heading text-lg font-semibold">
                      {block.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      {block.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
              餐飲現場情境
            </p>
            <h3 className="mt-3 font-heading text-2xl font-semibold sm:text-3xl">
              不是展示科技，是還原你的一天
            </h3>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sceneStories.map((scene) => (
              <article key={scene.id} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={scene.image.src}
                    alt={scene.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-[11px] font-medium tracking-wide text-primary">
                      {scene.pain}
                    </p>
                    <h4 className="mt-1 font-heading text-base font-semibold text-white">
                      {scene.title}
                    </h4>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {scene.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
