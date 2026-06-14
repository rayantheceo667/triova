import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.triova-rent.com"),
  title: "TRIØVA — Location de Véhicules de Prestige",
  description:
    "Agence de location de voitures de prestige. Audi RS3, Golf 8R, Cupra Leon. L'exception, à chaque trajet.",
  keywords: [
    "location voiture prestige",
    "location sportive",
    "TRIØVA",
    "Audi RS3 location",
    "Golf 8R location",
  ],
  openGraph: {
    title: "TRIØVA — Location de Véhicules de Prestige",
    description: "L'exception, à chaque trajet. Réservez votre expérience premium.",
    url: "https://www.triova-rent.com",
    siteName: "TRIØVA",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/storefront.png",
        width: 1200,
        height: 630,
        alt: "Showroom TRIØVA",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <body className="min-h-screen" suppressHydrationWarning>{children}</body>
    </html>
  );
}
