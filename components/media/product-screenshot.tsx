import Image from "next/image";

import { cn } from "@/lib/utils";
import type { MediaAsset } from "@/data/media";

type ProductScreenshotProps = {
  media: MediaAsset;
  priority?: boolean;
  float?: boolean;
  glow?: boolean;
  className?: string;
  frameClassName?: string;
};

export function ProductScreenshot({
  media,
  priority = false,
  float = false,
  glow = false,
  className,
  frameClassName,
}: ProductScreenshotProps) {
  return (
    <div className={cn("relative", className)}>
      {glow ? (
        <div
          className={cn(
            "absolute -inset-4 rounded-[1.75rem] bg-[radial-gradient(circle_at_30%_20%,rgba(208,104,44,0.22),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(108,100,96,0.12),transparent_50%)] blur-2xl",
            float && "animate-float"
          )}
          aria-hidden
        />
      ) : null}
      <div
        className={cn(
          "group relative overflow-hidden rounded-xl border border-black/8 bg-white shadow-[0_20px_40px_-24px_rgba(47,44,42,0.35)] transition-transform duration-300 ease-out hover:scale-[1.01]",
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
