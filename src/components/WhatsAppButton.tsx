"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(
    "Bonjour TRIØVA, je souhaite obtenir des informations sur vos véhicules de location."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-transform hover:scale-110 active:scale-95 sm:bottom-8 sm:right-8"
      aria-label="Contacter TRIØVA sur WhatsApp"
    >
      <MessageCircle className="h-7 w-7 fill-white" />
    </a>
  );
}
