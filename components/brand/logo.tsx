import Image from "next/image";
import Link from "next/link";

import { brand } from "@/data/brand";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  const asset = brand.logo.full;

  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center", className)}
      aria-label={`${brand.productName}｜${siteConfig.company}`}
    >
      <Image
        src={asset.src}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        priority={priority}
        className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-11"
      />
    </Link>
  );
}
