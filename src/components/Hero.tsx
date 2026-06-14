import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/storefront.png"
          alt="Showroom TRIØVA — Agence de location de véhicules de prestige"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-triova-black via-triova-black/70 to-triova-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-triova-black/80 via-transparent to-triova-black/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pb-32">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-triova-gold/80 sm:text-sm">
            {siteConfig.subtitle}
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold leading-none tracking-wide sm:text-7xl lg:text-8xl">
            <span className="text-gradient-gold">{siteConfig.name}</span>
          </h1>
          <p className="mt-6 font-[family-name:var(--font-display)] text-xl italic text-white/90 sm:text-2xl lg:text-3xl">
            {siteConfig.tagline}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
            {siteConfig.experience}. Découvrez notre flotte de sportives
            d&apos;exception et vivez une expérience de conduite incomparable.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#flotte"
              className="inline-flex items-center justify-center rounded-sm bg-triova-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-triova-black transition-all hover:bg-triova-gold-light hover:shadow-[0_0_30px_rgba(201,169,98,0.4)]"
            >
              Découvrir la flotte
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-sm border border-white/20 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all hover:border-triova-gold/50 hover:text-triova-gold"
            >
              Demander une réservation
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.15em] text-white/50">
            <span>{siteConfig.website}</span>
            <span className="hidden text-triova-gold/30 sm:inline">|</span>
            <a
              href={`tel:+${siteConfig.phoneRaw}`}
              className="transition-colors hover:text-triova-gold"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-triova-gold/60 transition-colors hover:text-triova-gold"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
}
