"use client";

export default function AccountProfile() {
  // Datos dummy de usuario
  const user = {
    name: "Juan Pérez",
    email: "juan.perez@example.com",
    memberSince: "Marzo 2025",
    plan: "Premium Trimestral",
    credits: 1235,
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-10 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Mi perfil</h2>
          <p className="text-xs text-muted-foreground">
            Gestiona tu cuenta, tus datos y tu plan premium.
          </p>
        </div>
        <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold px-3 py-1 border border-emerald-100">
          Cuenta activa
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 bg-card border border-border rounded-2xl p-5 space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Información personal</h3>
          <div className="space-y-3 text-xs">
            <div>
              <p className="text-muted-foreground">Nombre completo</p>
              <p className="font-semibold">{user.name}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Correo electrónico</p>
              <p className="font-semibold">{user.email}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Miembro desde</p>
              <p className="font-semibold">{user.memberSince}</p>
            </div>
          </div>

          <button className="mt-4 px-4 py-2 rounded-lg border border-border text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted">
            Editar perfil
          </button>
        </div>

        <div className="space-y-4">
          <div className="bg-card border border-border rounded-2xl p-4 space-y-2 text-xs">
            <p className="text-muted-foreground">Plan actual</p>
            <p className="font-semibold text-foreground">{user.plan}</p>
            <p className="text-[11px] text-muted-foreground">
              Gestiona tus beneficios en la sección Premium.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-4 space-y-2 text-xs">
            <p className="text-muted-foreground">Créditos disponibles</p>
            <p className="font-semibold text-primary">{user.credits} CV</p>
            <button className="mt-1 w-full px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-[11px] font-semibold hover:shadow-md">
              Ver Mis Créditos
            </button>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-2xl p-5 flex items-center justify-between text-xs">
        <div>
          <p className="font-semibold text-foreground">Seguridad de la cuenta</p>
          <p className="text-[11px] text-muted-foreground">
            Mantén tu contraseña segura y actualizada regularmente.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 rounded-lg border border-border text-[11px] font-semibold text-muted-foreground hover:text-foreground hover:bg-muted">
            Cambiar contraseña
          </button>
          <button className="px-3 py-1.5 rounded-lg bg-destructive text-destructive-foreground text-[11px] font-semibold hover:shadow-md">
            Cerrar sesión
          </button>
        </div>
      </div>
    </section>
  );
}
