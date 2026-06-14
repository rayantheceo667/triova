"use client";

import { useState } from "react";
import { vehicles, type Vehicle } from "@/data/vehicles";
import VehicleCard from "./VehicleCard";
import ReservationModal from "./ReservationModal";

export default function Fleet() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleReserve = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedVehicle(null), 300);
  };

  return (
    <>
      <section id="flotte" className="relative bg-triova-black py-24 sm:py-32">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-triova-gold/30 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.4em] text-triova-gold">
                Notre flotte
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold text-white sm:text-5xl">
                Véhicules d&apos;exception
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/50 sm:text-base">
                Sportives premium, performances pures. Chaque modèle est entretenu
                avec le plus grand soin pour garantir une expérience inoubliable.
              </p>
            </div>
            <p className="max-w-xs text-xs leading-relaxed text-white/35 lg:text-right">
              Tarifs indicatifs par jour. Règlement et caution en espèces lors
              de la récupération du véhicule.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {vehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onReserve={handleReserve}
              />
            ))}
          </div>
        </div>
      </section>

      <ReservationModal
        open={modalOpen}
        vehicle={selectedVehicle}
        onClose={closeModal}
      />
    </>
  );
}
