"use client";

import { useState } from "react";

export default function AccountAuth({ onLoginSuccess }) {
  const [mode, setMode] = useState("register"); // "login" | "register"

  const isLogin = mode === "login";

  return (
    <section className="max-w-2xl mx-auto px-6 py-10">
      {/* Tabs internas Iniciar Sesión / Registrarse */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-full bg-muted p-1">
          <button
            type="button"
            onClick={() => setMode("login")}
            className={`px-6 py-2 text-xs font-semibold rounded-full transition-colors ${
              isLogin
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Iniciar Sesión
          </button>
          <button
            type="button"
            onClick={() => setMode("register")}
            className={`px-6 py-2 text-xs font-semibold rounded-full transition-colors ${
              !isLogin
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Registrarse
          </button>
        </div>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-6">
        {/* Encabezado */}
        <div className="space-y-1">
          <h2 className="text-base font-semibold text-foreground">
            {isLogin ? "Inicia sesión" : "Crea tu cuenta"}
          </h2>
          <p className="text-xs text-muted-foreground">
            {isLogin
              ? "Accede a tu cuenta para gestionar tus créditos verdes y publicaciones."
              : "Únete a GreenMarket y comienza a comprar y vender créditos verdes."}
          </p>
        </div>

        <form className="space-y-4 text-xs">
          {!isLogin && (
            <div className="space-y-1">
              <label className="font-medium text-muted-foreground">Nombre completo</label>
              <input
                type="text"
                placeholder="Juan Pérez"
                className="w-full px-3 py-2 rounded-lg border border-border bg-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-xs"
              />
            </div>
          )}

          <div className="space-y-1">
            <label className="font-medium text-muted-foreground">Correo electrónico</label>
            <input
              type="email"
              placeholder="tu@email.com"
              className="w-full px-3 py-2 rounded-lg border border-border bg-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-xs"
            />
          </div>

          <div className="space-y-1">
            <label className="font-medium text-muted-foreground">Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 rounded-lg border border-border bg-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-xs"
            />
          </div>

          <button
            type="button"
            className="w-full mt-2 py-2.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:shadow-md"
            onClick={() => {
              if (onLoginSuccess) onLoginSuccess();
            }}
          >
            {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
          </button>
        </form>

        {!isLogin && (
          <p className="text-[11px] text-center text-muted-foreground">
            Al registrarte, recibirás <span className="font-semibold text-primary">100 Créditos Verdes</span> de bienvenida.
          </p>
        )}
      </div>
    </section>
  );
}
