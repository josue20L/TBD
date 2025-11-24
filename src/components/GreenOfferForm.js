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
    }
  );

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-sm">
      <div>
        <label className="block text-xs font-medium text-muted-foreground mb-1">Título</label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          placeholder="Nombre del proyecto"
          required
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-muted-foreground mb-1">Descripción</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary min-h-[100px]"
          placeholder="Describe el proyecto y su impacto climático"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1">Ubicación</label>
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            placeholder="Ciudad, país"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1">Precio (CV)</label>
          <input
            name="price"
            type="number"
            min="0"
            value={form.price}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-muted-foreground mb-1">Categoría</label>
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          placeholder="Bosques, Energía renovable, etc."
        />
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:shadow-md"
        >
          Guardar crédito
        </button>
      </div>
    </form>
  );
}

export default GreenOfferForm;
