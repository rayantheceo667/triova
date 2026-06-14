import { Car, Clock, CreditCard, MapPin, Phone, Shield } from "lucide-react";
import { siteConfig } from "@/data/site";

const guaranteeIcons = [Shield, CreditCard, Car];

export default function Location() {
  const { lat, lng } = siteConfig.address.coordinates;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.04}%2C${lat - 0.03}%2C${lng + 0.04}%2C${lat + 0.03}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <section id="localisation" className="relative bg-triova-dark py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-triova-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-triova-gold">
            Où nous trouver
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold text-white sm:text-5xl">
            Contact &amp; Informations
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <article className="rounded-sm border border-white/10 bg-triova-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-triova-gold/10">
                  <MapPin className="h-5 w-5 text-triova-gold" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Adresse</h3>
                  <p className="mt-1 text-sm text-white/60">
                    {siteConfig.address.city}
                  </p>
                  <p className="text-sm text-white/40">
                    {siteConfig.address.department}
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-sm border border-white/10 bg-triova-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-triova-gold/10">
                  <Clock className="h-5 w-5 text-triova-gold" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Disponibilité
                  </h3>
                  <p className="mt-1 text-sm text-white/60">
                    {siteConfig.availability.hours}
                  </p>
                  <p className="text-sm text-white/40">
                    {siteConfig.availability.note}
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-sm border border-white/10 bg-triova-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-triova-gold/10">
                  <Phone className="h-5 w-5 text-triova-gold" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Contact</h3>
                  <a
                    href={`tel:+${siteConfig.phoneRaw}`}
                    className="mt-1 block text-sm text-white/60 transition-colors hover:text-triova-gold"
                  >
                    {siteConfig.phone}
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 block text-sm text-white/60 transition-colors hover:text-triova-gold"
                  >
                    {siteConfig.email}
                  </a>
                  <p className="mt-2 text-xs text-white/35">
                    Réponse sous 24h
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-sm border border-white/10 bg-triova-card p-6">
              <h3 className="text-sm font-semibold text-white">
                Nos garanties
              </h3>
              <ul className="mt-4 space-y-3">
                {siteConfig.guarantees.map((item, index) => {
                  const Icon = guaranteeIcons[index];
                  return (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-white/55"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-triova-gold" />
                      {item}
                    </li>
                  );
                })}
              </ul>
            </article>
          </div>

          <div className="overflow-hidden rounded-sm border border-white/10 bg-triova-card">
            <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-[340px]">
              <iframe
                title="Carte — Saint-Étienne, Loire"
                src={mapSrc}
                className="absolute inset-0 h-full w-full border-0 grayscale-[30%] invert-[90%] hue-rotate-180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="border-t border-white/5 p-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-triova-gold" />
                <p className="text-sm font-medium text-white">
                  {siteConfig.address.full}
                </p>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-white/40">
                {siteConfig.address.mapNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
