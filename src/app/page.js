"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-3xl w-full bg-card border border-border rounded-2xl p-8 shadow-sm space-y-6 text-center">
        <h1 className="text-2xl font-semibold text-foreground">
          Bienvenido a <span className="text-primary">GreenMarket</span>
        </h1>
        <p className="text-sm text-muted-foreground">
          Compra y vende <span className="font-semibold">Créditos Verdes</span> de proyectos
          reales de impacto climático: reforestación, energía renovable y conservación.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left text-xs mt-4">
          <div className="bg-background/60 border border-border rounded-xl p-4">
            <p className="font-semibold text-foreground mb-1">Explora el marketplace</p>
            <p className="text-muted-foreground">
              Descubre proyectos de créditos verdes listos para ser financiados o comercializados.
            </p>
          </div>
          <div className="bg-background/60 border border-border rounded-xl p-4">
            <p className="font-semibold text-foreground mb-1">Sigue tus créditos</p>
            <p className="text-muted-foreground">
              Visualiza tu balance, tus ganancias y el historial de transacciones en tiempo real.
            </p>
          </div>
          <div className="bg-background/60 border border-border rounded-xl p-4">
            <p className="font-semibold text-foreground mb-1">Vende tus proyectos</p>
            <p className="text-muted-foreground">
              Publica proyectos, administra su estado y destaca tus mejores ofertas.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4">
          <Link
            href="/marketplace"
            className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:shadow-md"
          >
            Ir al Marketplace
          </Link>
          <Link
            href="/mi-cuenta"
            className="px-5 py-2.5 rounded-full border border-border text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted"
          >
            Crear cuenta
          </Link>
        </div>
      </div>
    </main>
  );
}