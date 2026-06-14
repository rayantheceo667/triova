"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import type { Vehicle } from "@/data/vehicles";
import ReservationForm from "./ReservationForm";

interface ReservationModalProps {
  open: boolean;
  vehicle: Vehicle | null;
  onClose: () => void;
}

export default function ReservationModal({
  open,
  vehicle,
  onClose,
}: ReservationModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-title"
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 max-h-[92vh] w-full overflow-y-auto rounded-t-lg border border-triova-gold/20 bg-triova-card sm:mx-4 sm:max-w-lg sm:rounded-sm">
        <div className="sticky top-0 flex items-center justify-between border-b border-white/5 bg-triova-card px-6 py-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-triova-gold">
              Réservation
            </p>
            <h2
              id="reservation-title"
              className="font-[family-name:var(--font-display)] text-xl font-bold text-white"
            >
              Demande de location
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-sm p-2 text-white/50 transition-colors hover:text-white"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <ReservationForm vehicle={vehicle} />
        </div>
      </div>
    </div>
  );
}
