"use client";

// Dashboard estático por ahora, preparado para recibir datos reales por props

export default function MyCreditsDashboard({ summary, transactions }) {
  const safeSummary =
    summary || {
      totalBalance: 1235,
      earnedThisMonth: 1470,
      spentThisMonth: 335,
    };

  const safeTransactions =
    transactions || [
      {
        id: 1,
        title: "Venta: Laptop Dell Inspiron 15",
        date: "10 Nov 2025",
        amount: "+850 CV",
        type: "in",
      },
      {
        id: 2,
        title: "Compra: Curso de sostenibilidad",
        date: "05 Nov 2025",
        amount: "-200 CV",
        type: "out",
      },
      {
        id: 3,
        title: "Bonificación mensual",
        date: "01 Nov 2025",
        amount: "+120 CV",
        type: "in",
      },
    ];

  return (
    <div className="w-full px-6 py-6 flex flex-col gap-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-primary text-primary-foreground rounded-2xl p-5 shadow-sm">
          <p className="text-sm opacity-90">Balance Total</p>
          <p className="mt-2 text-2xl font-semibold">{safeSummary.totalBalance} CV</p>
          <p className="mt-4 text-sm flex items-center gap-2 opacity-90">
            <span className="text-lg">$</span>
            Créditos Verdes disponibles
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-5 shadow-sm flex flex-col justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Ganado este mes</p>
            <p className="mt-2 text-xl font-semibold text-emerald-600">
              +{safeSummary.earnedThisMonth} CV
            </p>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Ingresos por ventas</p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-5 shadow-sm flex flex-col justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Gastado este mes</p>
            <p className="mt-2 text-xl font-semibold text-red-500">-{safeSummary.spentThisMonth} CV</p>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Compras realizadas</p>
        </div>
      </div>

      <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-emerald-800 mb-4">Gana más Créditos Verdes</h2>

        <div className="space-y-2">
          <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-emerald-100">
            <div>
              <p className="text-sm font-medium text-foreground">Invita a un amigo</p>
              <p className="text-xs text-muted-foreground">Gana 50 CV por cada amigo que se registre</p>
            </div>
            <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
              Invitar
            </button>
          </div>

          <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-emerald-100">
            <div>
              <p className="text-sm font-medium text-foreground">Vende un artículo</p>
              <p className="text-xs text-muted-foreground">Obtén CV por cada venta exitosa</p>
            </div>
            <button className="px-4 py-2 rounded-full border border-emerald-500 text-emerald-700 text-xs font-semibold">
              Publicar
            </button>
          </div>

          <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-emerald-100">
            <div>
              <p className="text-sm font-medium text-foreground">Completa tu perfil</p>
              <p className="text-xs text-muted-foreground">Gana 25 CV extra</p>
            </div>
            <button className="px-4 py-2 rounded-full border border-emerald-500 text-emerald-700 text-xs font-semibold">
              Completar
            </button>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-foreground">Historial de transacciones</h2>
        <p className="text-xs text-muted-foreground mb-4">
          Tus últimas actividades con Créditos Verdes
        </p>

        <div className="space-y-2">
          {safeTransactions.map((tx) => (
            <div
              key={tx.id}
              className={`flex items-center justify-between rounded-xl px-4 py-3 border border-border ${
                tx.type === "in" ? "bg-muted/50" : "bg-card"
              }`}
            >
              <div className="flex flex-col">
                <p className="text-sm font-medium text-foreground">{tx.title}</p>
                <p className="text-[11px] text-muted-foreground">{tx.date}</p>
              </div>
              <p
                className={`text-sm font-semibold ${
                  tx.type === "out" ? "text-red-500" : "text-emerald-600"
                }`}
              >
                {tx.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
