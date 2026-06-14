import {
  CalendarCheck,
  Crown,
  Diamond,
  Headphones,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Diamond,
    title: "Véhicules Prestige",
    description:
      "Une flotte exclusive de sportives et berlines haut de gamme, sélectionnées pour l'excellence.",
  },
  {
    icon: ShieldCheck,
    title: "Assurance Tout Compris",
    description:
      "Roulez l'esprit tranquille avec une couverture complète incluse dans chaque location.",
  },
  {
    icon: CalendarCheck,
    title: "Réservation Facile",
    description:
      "Réservez en quelques clics. Notre équipe confirme votre demande sous 24 heures.",
  },
  {
    icon: Headphones,
    title: "Service 24/7",
    description:
      "Assistance disponible à toute heure pour répondre à vos besoins, où que vous soyez.",
  },
  {
    icon: Crown,
    title: "Conciergerie Sur-Mesure",
    description:
      "Livraison à domicile, véhicule de remplacement et services personnalisés à la demande.",
  },
];

export const siteConfig = {
  name: "TRIØVA",
  tagline: "L'EXCEPTION, À CHAQUE TRAJET",
  subtitle: "Agence de Location",
  experience: "PLUS QU'UNE LOCATION, UNE EXPÉRIENCE",
  website: "www.triova-rent.com",
  phone: "06 98 71 95 22",
  phoneRaw: "33698719522",
  email: "triova.service@gmail.com",
  founders: ["Yasmine", "Imène", "Anis"],
  address: {
    city: "Saint-Étienne",
    department: "Loire (42), France",
    full: "Saint-Étienne, Loire (42), France",
    mapNote:
      "L'adresse exacte vous sera communiquée lors de la confirmation de réservation. Prise en charge possible à l'aéroport de Lyon Saint-Exupéry sur demande.",
    coordinates: { lat: 45.4397, lng: 4.3872 },
  },
  availability: {
    hours: "Lun–Dim : 8h – 20h",
    note: "Sur rendez-vous",
  },
  guarantees: [
    "Véhicules assurés et entretenus",
    "Paiement sur place, sans surprise",
    "Livraison possible sur Saint-Étienne",
  ],
  paymentNote:
    "Règlement et caution en espèces lors de la récupération du véhicule à l'agence.",
};
