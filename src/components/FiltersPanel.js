"use client";

import { useState } from "react";

const DEFAULT_CATEGORIES = [
  "Todas las categorías",
  "Bosques",
  "Energía renovable",
  "Agricultura regenerativa",
  "Transporte limpio",
  "Residuos y reciclaje",
];

function FiltersPanel({ categories = DEFAULT_CATEGORIES, selectedCategory, onCategoryChange }) {
  const [open, setOpen] = useState(true);

  function handleSelect(category) {
    if (onCategoryChange) onCategoryChange(category);
  }

  return (
    <aside className="bg-card border border-border rounded-2xl p-4 h-fit min-w-[240px]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-foreground">Filtrar por categoría</h2>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          {open ? "Ocultar" : "Mostrar"}
        </button>
      </div>

      {open && (
        <ul className="space-y-1 text-sm">
          {categories.map((category) => {
            const active = selectedCategory === category || (!selectedCategory && category === categories[0]);
            return (
              <li key={category}>
                <button
                  type="button"
                  onClick={() => handleSelect(category)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                    active
                      ? "bg-primary/10 text-primary border border-primary/40"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <span>{category}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </aside>
  );
}

export default FiltersPanel;
