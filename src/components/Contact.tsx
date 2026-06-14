import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import ReservationForm from "./ReservationForm";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-triova-black py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-triova-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-triova-gold">
              Réservation
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold text-white sm:text-5xl">
              Réservez votre expérience
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50 sm:text-base">
              Remplissez le formulaire ci-contre ou contactez-nous directement.
              Notre équipe traitera votre demande dans les plus brefs délais.
            </p>

            <div className="mt-10 space-y-6">
              <a
                href={`tel:+${siteConfig.phoneRaw}`}
                className="group flex items-center gap-4 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-triova-gold/20 bg-triova-gold/5 transition-colors group-hover:border-triova-gold/40">
                  <Phone className="h-5 w-5 text-triova-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                    Téléphone
                  </p>
                  <p className="text-sm font-medium text-white group-hover:text-triova-gold">
                    {siteConfig.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center gap-4 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-triova-gold/20 bg-triova-gold/5 transition-colors group-hover:border-triova-gold/40">
                  <Mail className="h-5 w-5 text-triova-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                    E-mail
                  </p>
                  <p className="text-sm font-medium text-white group-hover:text-triova-gold">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-triova-gold/20 bg-triova-gold/5">
                  <MapPin className="h-5 w-5 text-triova-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                    Showroom
                  </p>
                  <p className="text-sm font-medium text-white">
                    {siteConfig.address.full}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-white/5 bg-triova-card p-6 sm:p-8">
            <ReservationForm vehicle={null} />
          </div>
        </div>
      </div>
    </section>
  );
}
