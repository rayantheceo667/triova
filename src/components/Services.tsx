import { services } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="relative bg-triova-dark py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-triova-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-triova-gold">
            Nos engagements
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold text-white sm:text-5xl">
            L&apos;excellence à votre service
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/50 sm:text-base">
            Chaque détail est pensé pour vous offrir une expérience premium,
            de la réservation à la restitution du véhicule.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-sm border border-white/5 bg-triova-card p-6 transition-all duration-300 hover:border-triova-gold/30 hover:glow-gold"
            >
              <div className="mb-5 inline-flex rounded-sm border border-triova-gold/20 bg-triova-gold/5 p-3 transition-colors group-hover:border-triova-gold/40 group-hover:bg-triova-gold/10">
                <service.icon className="h-6 w-6 text-triova-gold" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-white/45">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
