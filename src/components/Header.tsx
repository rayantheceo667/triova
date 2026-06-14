"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/data/site";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#flotte", label: "Flotte" },
  { href: "#apropos", label: "À propos" },
  { href: "#localisation", label: "Localisation" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-triova-gold/10 bg-triova-black/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#accueil" className="group flex flex-col" onClick={closeMenu}>
          <span className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[0.2em] text-gradient-gold sm:text-3xl">
            {siteConfig.name}
          </span>
          <span className="text-[10px] uppercase tracking-[0.35em] text-white/50 transition-colors group-hover:text-triova-gold/70">
            {siteConfig.subtitle}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-triova-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:+${siteConfig.phoneRaw}`}
            className="flex items-center gap-2 text-sm text-triova-gold transition-opacity hover:opacity-80"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <a
            href="#contact"
            className="rounded-sm border border-triova-gold/60 bg-triova-gold/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-triova-gold transition-all hover:bg-triova-gold hover:text-triova-black"
          >
            Réserver
          </a>
        </div>

        <button
          type="button"
          className="rounded-sm p-2 text-triova-gold md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-triova-black/98 backdrop-blur-lg md:hidden">
          <nav className="flex flex-col gap-1 px-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-white/5 py-4 text-sm uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-triova-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:+${siteConfig.phoneRaw}`}
              className="mt-6 flex items-center justify-center gap-2 rounded-sm border border-triova-gold/40 py-4 text-triova-gold"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
