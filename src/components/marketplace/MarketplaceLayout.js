"use client";

import SearchHeader from "@/components/SearchHeader";
import FiltersPanel from "@/components/FiltersPanel";
import PublicationCard from "@/components/PublicationCard";

export default function MarketplaceLayout({
  credits,
  selectedCategory,
  onCategoryChange,
  search,
  onSearch,
  onSelectOffer,
}) {
  return (
    <div className="w-full px-6 py-6 flex gap-6 items-start">
      <div className="w-[260px] flex-shrink-0">
        <FiltersPanel
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
        />
      </div>

      <div className="flex-1 space-y-4">
        <SearchHeader onSearch={onSearch} />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 gap-3">
          <div>
            <h1 className="text-lg font-semibold text-foreground">Todos los créditos</h1>
            <p className="text-xs text-muted-foreground">
              {credits.length} resultados
              {search ? ` para "${search}"` : ""}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-2">
          {credits.map((credit) => (
            <PublicationCard
              key={credit.id}
              offer={credit}
              onClick={() => onSelectOffer(credit)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
