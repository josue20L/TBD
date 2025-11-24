"use client";

import { useState } from "react";

function GreenOfferForm({ initialValue, onSubmit }) {
  const [form, setForm] = useState(
    initialValue || {
      title: "",
      description: "",
      location: "",
      price: 0,
      category: "",
      condition: "new", // new | like_new | good | fair | used
      highlight: false,
      promo7Days: false,
    }
  );

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleToggle(name) {
    setForm((prev) => ({ ...prev, [name]: !prev[name] }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
  }

  const titleMax = 100;
  const descriptionMax = 1000;

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-sm">
      {/* Fotos del proyecto (dummy, sin upload real) */}
      <div className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground">Fotos del proyecto *</p>
        <p className="text-[11px] text-muted-foreground">
          Agrega hasta 10 fotos del proyecto. La primera será la principal.
        </p>
        <div className="mt-2 flex items-center gap-3">
          <button
            type="button"
            className="w-28 h-24 border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center text-[11px] text-muted-foreground bg-background/60"
          >
            <span className="text-lg">↑</span>
            Subir foto
          </button>
          <p className="text-[11px] text-muted-foreground">
            (Demo) Aquí iría el cargador real de imágenes. Por ahora es solo un placeholder visual.
          </p>
        </div>
      </div>

      {/* Título */}
      <div className="space-y-1">
        <label className="block text-xs font-medium text-muted-foreground">Título *</label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          placeholder="Ej: Proyecto de Reforestación Andina - 10,000 créditos disponibles"
          maxLength={titleMax}
          required
        />
        <p className="text-[11px] text-muted-foreground text-right">
          {form.title.length}/{titleMax} caracteres
        </p>
      </div>

      {/* Categoría */}
      <div className="space-y-1">
        <label className="block text-xs font-medium text-muted-foreground">Categoría *</label>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-xs"
          required
        >
          <option value="">Selecciona una categoría</option>
          <option value="Reforestación">Reforestación</option>
          <option value="Energía renovable">Energía renovable</option>
          <option value="Conservación">Conservación</option>
          <option value="Agricultura sostenible">Agricultura sostenible</option>
          <option value="Transporte limpio">Transporte limpio</option>
          <option value="Otros">Otros</option>
        </select>
      </div>

      {/* Precio + condición */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="block text-xs font-medium text-muted-foreground">Precio por crédito *</label>
          <div className="flex items-center gap-2">
            <input
              name="price"
              type="number"
              min="0"
              value={form.price}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              required
            />
            <span className="text-[11px] text-muted-foreground">CV</span>
          </div>
          <p className="text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-md px-2 py-1 mt-1">
            Sugerencia: Proyectos similares se publican entre 200–500 CV por crédito.
          </p>
        </div>

        <div className="space-y-1">
          <label className="block text-xs font-medium text-muted-foreground">Condición del proyecto *</label>
          <div className="flex flex-wrap gap-2 text-[11px]">
            {[
              { id: "new", label: "Nuevo" },
              { id: "like_new", label: "Como nuevo" },
              { id: "good", label: "Bueno" },
              { id: "fair", label: "Regular" },
              { id: "used", label: "Usado" },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setForm((prev) => ({ ...prev, condition: opt.id }))}
                className={`px-3 py-1.5 rounded-full border text-xs font-semibold transition-colors ${
                  form.condition === opt.id
                    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                    : "bg-card text-muted-foreground border-border hover:text-foreground"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Descripción */}
      <div className="space-y-1">
        <label className="block text-xs font-medium text-muted-foreground">Descripción *</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary min-h-[120px]"
          placeholder="Describe el proyecto, metodología, impacto climático, certificaciones, periodo del proyecto, etc."
          maxLength={descriptionMax}
          required
        />
        <p className="text-[11px] text-muted-foreground text-right">
          {form.description.length}/{descriptionMax} caracteres
        </p>
      </div>

      {/* Ubicación */}
      <div className="space-y-1">
        <label className="block text-xs font-medium text-muted-foreground">Ubicación *</label>
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          placeholder="Ej: Región Andina, Perú"
          required
        />
      </div>

      {/* Opciones adicionales (dummy) */}
      <div className="mt-2 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 space-y-3">
        <p className="text-xs font-semibold text-emerald-800">Opciones adicionales</p>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px]">
          <div>
            <p className="font-medium text-emerald-900">Destacar publicación</p>
            <p className="text-emerald-800/80">
              Aparece en primeras posiciones (+50 CV).
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleToggle("highlight")}
            className={`px-3 py-1.5 rounded-full border text-xs font-semibold transition-colors ${
              form.highlight
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100"
            }`}
          >
            {form.highlight ? "Agregado" : "Agregar"}
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px]">
          <div>
            <p className="font-medium text-emerald-900">Promoción por 7 días</p>
            <p className="text-emerald-800/80">
              Mayor visibilidad en el marketplace (+100 CV).
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleToggle("promo7Days")}
            className={`px-3 py-1.5 rounded-full border text-xs font-semibold transition-colors ${
              form.promo7Days
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100"
            }`}
          >
            {form.promo7Days ? "Agregado" : "Agregar"}
          </button>
        </div>
      </div>

      {/* Botones finales */}
      <div className="flex flex-col sm:flex-row justify-end gap-2 pt-3">
        <button
          type="button"
          className="px-4 py-2 rounded-lg border border-border text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 shadow-sm"
        >
          Publicar proyecto
        </button>
      </div>
    </form>
  );
}

export default GreenOfferForm;
