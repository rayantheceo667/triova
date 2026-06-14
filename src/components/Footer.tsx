import { siteConfig } from "@/data/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-triova-dark py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[0.15em] text-gradient-gold">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-xs italic text-white/40">
              {siteConfig.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.15em] text-white/40">
            <a
              href="#flotte"
              className="transition-colors hover:text-triova-gold"
            >
              Flotte
            </a>
            <a
              href="#services"
              className="transition-colors hover:text-triova-gold"
            >
              Services
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-triova-gold"
            >
              Contact
            </a>
            <a
              href={`https://${siteConfig.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-triova-gold"
            >
              {siteConfig.website}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-8 text-center text-xs text-white/25">
          <p>
            © {currentYear} {siteConfig.name} — Tous droits réservés.{" "}
            {siteConfig.paymentNote}
          </p>
        </div>
      </div>
    </footer>
  );
}
