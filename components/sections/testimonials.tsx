import Image from "next/image";

import { testimonials, testimonialsSection } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section
      id={testimonialsSection.id}
      className="scroll-mt-20 border-t border-border/60 bg-[#f7f7f8] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            {testimonialsSection.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {testimonialsSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {testimonialsSection.description}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.id} className="relative">
              <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-2xl bg-[#2f2c2a]">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="font-heading text-4xl leading-none text-primary/30">
                “
              </p>
              <p className="mt-2 text-base leading-relaxed text-foreground">
                {item.quote}
              </p>
              <footer className="mt-6">
                <p className="text-sm font-semibold text-foreground">
                  {item.name}
                </p>
                <p className="text-xs text-muted-foreground">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
