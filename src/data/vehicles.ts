export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  power: string;
  transmission: string;
  pricePerDay: number;
  deposit: number;
  badge?: "prestige" | "sport" | "performance";
  image: string;
  highlights: string[];
}

export const vehicles: Vehicle[] = [
  {
    id: "audi-rs3",
    name: "RS3 Sportback",
    brand: "Audi",
    power: "400 ch",
    transmission: "DSG 7 (Quattro)",
    pricePerDay: 500,
    deposit: 3000,
    badge: "prestige",
    image: "/images/audi-rs3.png",
    highlights: ["Quattro intégral", "5 cylindres turbo", "0-100 en 3,8 s"],
  },
  {
    id: "golf-8r",
    name: "Golf 8R",
    brand: "Volkswagen",
    power: "320 ch",
    transmission: "DSG 7 (4Motion)",
    pricePerDay: 750,
    deposit: 4000,
    badge: "sport",
    image: "/images/golf-8r.png",
    highlights: ["4Motion AWD", "Drift Mode", "Performance maximale"],
  },
  {
    id: "cupra-leon",
    name: "Leon",
    brand: "Cupra",
    power: "310 ch",
    transmission: "DSG 7",
    pricePerDay: 400,
    deposit: 2500,
    badge: "performance",
    image: "/images/cupra-leon.png",
    highlights: ["Design agressif", "Châssis sport", "Rapport qualité-prix"],
  },
];

export const badgeStyles = {
  prestige: "bg-triova-gold/20 text-triova-gold border-triova-gold/40",
  sport: "bg-triova-magenta/20 text-triova-magenta border-triova-magenta/40",
  performance: "bg-triova-green/20 text-triova-green border-triova-green/40",
} as const;

export const badgeLabels = {
  prestige: "Prestige",
  sport: "Sport",
  performance: "Performance",
} as const;
