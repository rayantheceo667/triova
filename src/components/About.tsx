import Image from "next/image";
import { siteConfig } from "@/data/site";

export default function About() {
  return (
    <section id="apropos" className="relative overflow-hidden bg-triova-dark py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-triova-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-triova-gold/10">
            <Image
              src="/images/storefront.png"
              alt="Showroom TRIØVA"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-triova-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-gradient-gold">
                IAY
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/60">
                {siteConfig.founders.join(" • ")}
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-triova-gold">
              À propos
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold text-white sm:text-5xl">
              Choisir votre expérience
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/50 sm:text-base">
              TRIØVA est née de la passion de trois entrepreneurs pour
              l&apos;automobile d&apos;exception. Notre showroom incarne
              l&apos;élégance et le raffinement : un univers noir et or où
              chaque véhicule est une invitation au voyage.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/50 sm:text-base">
              {siteConfig.experience}. Nous ne louons pas simplement des
              voitures — nous créons des moments mémorables, avec un service
              personnalisé et une attention portée à chaque détail.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/5 pt-10">
              <div>
                <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-gradient-gold">
                  3
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/40">
                  Véhicules premium
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-gradient-gold">
                  24/7
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/40">
                  Assistance
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-gradient-gold">
                  100%
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/40">
                  Sur-mesure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
