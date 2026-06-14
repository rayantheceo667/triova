"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Calendar, Loader2, Mail, MessageSquare, Phone, User, X } from "lucide-react";
import type { Vehicle } from "@/data/vehicles";
import { siteConfig } from "@/data/site";

interface ReservationFormProps {
  vehicle: Vehicle | null;
  onSuccess?: () => void;
}

interface FormData {
  name: string;
  phone: string;
  startDate: string;
  endDate: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  phone: "",
  startDate: "",
  endDate: "",
  message: "",
};

function formatDateFr(isoDate: string): string {
  if (!isoDate) return "";
  return new Date(`${isoDate}T12:00:00`).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ReservationForm({
  vehicle,
  onSuccess,
}: ReservationFormProps) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setForm(initialForm);
    setStatus("idle");
    setErrorMessage("");
  }, [vehicle]);

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const vehicleLabel = vehicle
      ? `${vehicle.brand} ${vehicle.name}`
      : "Non spécifié";

    const templateParams = {
      from_name: form.name,
      from_phone: form.phone,
      start_date: formatDateFr(form.startDate),
      end_date: formatDateFr(form.endDate),
      message: form.message || "Aucun message",
      vehicle: vehicleLabel,
      to_email: siteConfig.email,
    };

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setErrorMessage(
        "Configuration e-mail manquante. Contactez-nous par téléphone ou WhatsApp."
      );
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus("success");
      setForm(initialForm);
      onSuccess?.();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Une erreur est survenue. Veuillez réessayer ou nous contacter directement."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-sm border border-triova-green/30 bg-triova-green/5 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-triova-green/20">
          <Mail className="h-7 w-7 text-triova-green" />
        </div>
        <h3 className="text-lg font-semibold text-white">
          Demande envoyée avec succès
        </h3>
        <p className="mt-2 text-sm text-white/50">
          Notre équipe vous recontactera sous 24 heures pour confirmer votre
          réservation.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-xs uppercase tracking-[0.15em] text-triova-gold hover:underline"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {vehicle && (
        <div className="rounded-sm border border-triova-gold/20 bg-triova-gold/5 px-4 py-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-triova-gold/70">
            Véhicule sélectionné
          </p>
          <p className="mt-1 font-[family-name:var(--font-display)] text-lg text-white">
            {vehicle.brand} {vehicle.name}
          </p>
          <p className="text-xs text-white/40">
            {vehicle.pricePerDay}€/jour — Caution{" "}
            {vehicle.deposit.toLocaleString("fr-FR")}€
          </p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-white/50">
            <User className="h-3.5 w-3.5" />
            Nom complet *
          </span>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            className="w-full rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-triova-gold/50"
            placeholder="Votre nom"
          />
        </label>

        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-white/50">
            <Phone className="h-3.5 w-3.5" />
            Téléphone *
          </span>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className="w-full rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-triova-gold/50"
            placeholder="06 98 71 95 22"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-white/50">
            <Calendar className="h-3.5 w-3.5" />
            Date de début *
          </span>
          <input
            type="date"
            required
            value={form.startDate}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => updateField("startDate", e.target.value)}
            className="w-full rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-triova-gold/50 [color-scheme:dark]"
          />
        </label>

        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-white/50">
            <Calendar className="h-3.5 w-3.5" />
            Date de fin *
          </span>
          <input
            type="date"
            required
            value={form.endDate}
            min={form.startDate || new Date().toISOString().split("T")[0]}
            onChange={(e) => updateField("endDate", e.target.value)}
            className="w-full rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-triova-gold/50 [color-scheme:dark]"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-white/50">
          <MessageSquare className="h-3.5 w-3.5" />
          Message (optionnel)
        </span>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          className="w-full resize-none rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-triova-gold/50"
          placeholder="Précisez vos besoins (livraison, kilométrage, etc.)"
        />
      </label>

      {status === "error" && (
        <div className="flex items-start gap-3 rounded-sm border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          <X className="mt-0.5 h-4 w-4 shrink-0" />
          {errorMessage}
        </div>
      )}

      <p className="text-xs text-white/30">{siteConfig.paymentNote}</p>

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-sm bg-triova-gold py-4 text-xs font-bold uppercase tracking-[0.2em] text-triova-black transition-all hover:bg-triova-gold-light disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          "Envoyer ma demande"
        )}
      </button>
    </form>
  );
}
