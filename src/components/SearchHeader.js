
"use client";

import React, { useState } from "react";

function SearchHeader({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (onSearch) onSearch(query);
  }

  return (
    <div className="space-y-3 w-full">
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Buscar créditos verdes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-3 border border-border rounded-xl bg-card focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all font-semibold whitespace-nowrap"
        >
          Buscar
        </button>
      </form>
    </div>
  );
}

export default SearchHeader;

 