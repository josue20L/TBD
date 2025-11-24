"use client";

export default function PremiumPlans() {
  const benefits = [
    {
      title: "Ventas más rápidas",
      description: "Tus publicaciones destacadas reciben 3x más visitas",
    },
    {
      title: "Mayor alcance",
      description: "Aparece en las primeras posiciones de búsqueda",
    },
    {
      title: "Protección de vendedor",
      description: "Garantía en todas tus transacciones",
    },
    {
      title: "Badge exclusivo",
      description: "Destaca como vendedor verificado y premium",
    },
  ];

  const plans = [
    {
      name: "Premium Mensual",
      price: "99 CV/mes",
      highlighted: false,
      features: [
        "Destaca tus publicaciones",
        "Sin comisiones en ventas",
        "Badge Premium en tu perfil",
        "Soporte prioritario 24/7",
        "Estadísticas avanzadas",
        "Hasta 50 publicaciones activas",
      ],
    },
    {
      name: "Premium Trimestral",
      price: "249 CV/3 meses",
      highlighted: true,
      tag: "Más Popular",
      features: [
        "Todas las ventajas del plan mensual",
        "Ahorra 25% comparado al plan mensual",
        "Bono de 100 CV al suscribirte",
        "Acceso anticipado a nuevas funciones",
        "Análisis de mercado",
        "Hasta 100 publicaciones activas",
      ],
    },
    {
      name: "Premium Anual",
      price: "799 CV/año",
      highlighted: false,
      features: [
        "Todas las ventajas del plan trimestral",
        "Ahorra 33% comparado al plan mensual",
        "Bono de 500 CV al suscribirte",
        "Consultor personal de ventas",
        "Promoción gratuita semanal",
        "Publicaciones ilimitadas",
      ],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      {/* Beneficios superiores */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="border border-primary/20 rounded-2xl bg-card p-4 shadow-sm"
          >
            <h3 className="text-sm font-semibold text-foreground mb-1">
              {benefit.title}
            </h3>
            <p className="text-xs text-muted-foreground">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Planes premium */}
      <div className="space-y-4">
        <h2 className="text-sm font-semibold text-center text-muted-foreground">
          Elige tu plan Premium
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border bg-card p-6 flex flex-col h-full ${{
                true: "border-primary shadow-lg shadow-primary/10",
                false: "border-border",
              }[String(plan.highlighted)]}`}
            >
              {plan.highlighted && (
                <div className="inline-flex self-center mb-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  {plan.tag || "Más Popular"}
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-base font-semibold text-foreground mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm font-semibold text-emerald-600">{plan.price}</p>
              </div>

              <button
                className={`w-full py-2.5 rounded-lg text-sm font-semibold mb-4 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:shadow-md"
                    : "bg-slate-900 text-white hover:shadow-md"
                }`}
              >
                Activar Premium
              </button>

              <ul className="space-y-1 text-xs text-muted-foreground flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
