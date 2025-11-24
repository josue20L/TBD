"use client";

import { useMemo, useState } from "react";
import PublicationCard from "@/components/PublicationCard";
import Modal from "@/components/Modal";
import GreenOfferForm from "@/components/GreenOfferForm";

const DUMMY_PUBLICATIONS = [
  {
    id: 1,
    title: "Créditos Verdes - Reforestación Andina",
    description: "Proyecto de reforestación en la región andina con especies nativas.",
    location: "Cochabamba, Bolivia",
    price: 150,
    category: "Reforestación",
    status: "active", // active | sold_out
  },
  {
    id: 2,
    title: "Créditos de Energía Solar Residencial",
    description: "Instalación de paneles solares en viviendas de comunidades rurales.",
    location: "Arequipa, Perú",
    price: 220,
    category: "Energía renovable",
    status: "sold_out",
  },
  {
    id: 3,
    title: "Protección de Bosques Tropicales",
    description: "Conservación de bosques tropicales y monitoreo de biodiversidad.",
    location: "Chocó, Colombia",
    price: 310,
    category: "Conservación",
    status: "active",
  },
];

export default function SellerPublications() {
  const [filterStatus, setFilterStatus] = useState("all"); // all | active | sold_out
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const filtered = useMemo(() => {
    if (filterStatus === "all") return DUMMY_PUBLICATIONS;
    return DUMMY_PUBLICATIONS.filter((p) => p.status === filterStatus);
  }, [filterStatus]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-foreground">Mis Publicaciones</h1>
          <p className="text-xs text-muted-foreground">
            Gestiona las publicaciones de tus proyectos de créditos verdes.
          </p>
        </div>
        <button
          className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:shadow-md"
          onClick={() => setIsCreateOpen(true)}
        >
          + Nueva Publicación
        </button>
      </div>

      {/* Filtro de estado */}
      <div className="flex items-center gap-2 text-xs">
        <button
          className={`px-3 py-1.5 rounded-full border text-xs font-semibold ${
            filterStatus === "all"
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-card text-muted-foreground border-border hover:text-foreground"
          }`}
          onClick={() => setFilterStatus("all")}
        >
          Todas
        </button>
        <button
          className={`px-3 py-1.5 rounded-full border text-xs font-semibold ${
            filterStatus === "active"
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-card text-muted-foreground border-border hover:text-foreground"
          }`}
          onClick={() => setFilterStatus("active")}
        >
          Activas
        </button>
        <button
          className={`px-3 py-1.5 rounded-full border text-xs font-semibold ${
            filterStatus === "sold_out"
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-card text-muted-foreground border-border hover:text-foreground"
          }`}
          onClick={() => setFilterStatus("sold_out")}
        >
          Agotadas
        </button>
      </div>

      {/* Grid de publicaciones */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-2">
        {filtered.map((pub) => (
          <div key={pub.id} className="relative">
            {/* Etiqueta de estado en la esquina superior derecha */}
            <div className="absolute right-3 top-3 z-10 text-[11px] font-semibold">
              {pub.status === "active" ? (
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                  Activa
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200">
                  Agotada
                </span>
              )}
            </div>

            {/* Card reutilizada del marketplace */}
            <PublicationCard offer={pub} onClick={() => {}} />
          </div>
        ))}
      </div>

      {/* Modal para crear una nueva publicación (formulario tipo marketplace de venta) */}
      <Modal open={isCreateOpen} onClose={() => setIsCreateOpen(false)}>
        <div className="space-y-4 text-sm max-h-[80vh] overflow-y-auto">
          <div>
            <h2 className="text-base font-semibold text-foreground">
              Publica tu proyecto de Créditos Verdes
            </h2>
            <p className="text-xs text-muted-foreground">
              Completa los detalles del proyecto para empezar a ofrecer tus créditos verdes.
            </p>
          </div>

          <GreenOfferForm
            onSubmit={(values) => {
              // Por ahora solo simulamos el envío
              console.log("Nueva publicación creada (dummy):", values);
              setIsCreateOpen(false);
            }}
          />
        </div>
      </Modal>
    </section>
  );
}
