import Image from "next/image";

import { cn } from "@/lib/utils";
import type { MediaAsset } from "@/data/media";

type ProductScreenshotProps = {
  media: MediaAsset;
  priority?: boolean;
  float?: boolean;
  className?: string;
  frameClassName?: string;
};

export function ProductScreenshot({
  media,
  priority = false,
  float = false,
  className,
  frameClassName,
}: ProductScreenshotProps) {
  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "absolute -inset-4 rounded-[1.75rem] bg-[radial-gradient(circle_at_30%_20%,rgba(208,104,44,0.22),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(108,100,96,0.12),transparent_50%)] blur-2xl",
          float && "animate-float"
        )}
        aria-hidden
      />
      <div
        className={cn(
          "group relative overflow-hidden rounded-xl border border-white/70 bg-white shadow-xl ring-1 ring-primary/10 transition-transform duration-500 ease-out hover:scale-[1.015]",
          float && "animate-float",
          frameClassName
        )}
      >
        <Image
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
          className="h-auto w-full object-contain object-top"
        />
      </div>
    </div>
  );
}
