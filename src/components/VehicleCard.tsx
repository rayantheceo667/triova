"use client";

import Image from "next/image";
import { Gauge, Settings2, Shield, Zap } from "lucide-react";
import {
  badgeLabels,
  badgeStyles,
  type Vehicle,
} from "@/data/vehicles";

interface VehicleCardProps {
  vehicle: Vehicle;
  onReserve: (vehicle: Vehicle) => void;
}

export default function VehicleCard({ vehicle, onReserve }: VehicleCardProps) {
  const badge = vehicle.badge;

  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-white/5 bg-triova-card transition-all duration-500 hover:border-triova-gold/25 hover:glow-gold">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.name}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-triova-card via-transparent to-transparent" />
        {badge && (
          <span
            className={`absolute left-4 top-4 rounded-sm border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] ${badgeStyles[badge]}`}
          >
            {badgeLabels[badge]}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs uppercase tracking-[0.25em] text-triova-gold/70">
          {vehicle.brand}
        </p>
        <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold text-white">
          {vehicle.name}
        </h3>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 rounded-sm bg-white/5 px-3 py-2.5">
            <Zap className="h-4 w-4 shrink-0 text-triova-gold" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/40">
                Puissance
              </p>
              <p className="text-xs font-semibold text-white">{vehicle.power}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-sm bg-white/5 px-3 py-2.5">
            <Settings2 className="h-4 w-4 shrink-0 text-triova-gold" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/40">
                Transmission
              </p>
              <p className="text-xs font-semibold text-white">
                {vehicle.transmission}
              </p>
            </div>
          </div>
        </div>

        <ul className="mt-4 space-y-1.5">
          {vehicle.highlights.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-xs text-white/50"
            >
              <Gauge className="h-3 w-3 text-triova-gold/60" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto border-t border-white/5 pt-5">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/40">
                À partir de
              </p>
              <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-gradient-gold">
                {vehicle.pricePerDay}€
                <span className="text-sm font-normal text-white/40">/jour</span>
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white/40">
              <Shield className="h-3.5 w-3.5 text-triova-gold/60" />
              Caution {vehicle.deposit.toLocaleString("fr-FR")}€
            </div>
          </div>

          <button
            type="button"
            onClick={() => onReserve(vehicle)}
            className="mt-5 w-full rounded-sm border border-triova-gold/50 bg-triova-gold/10 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-triova-gold transition-all hover:bg-triova-gold hover:text-triova-black"
          >
            Réserver ce véhicule
          </button>
        </div>
      </div>
    </article>
  );
}
