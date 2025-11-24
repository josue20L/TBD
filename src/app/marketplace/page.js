"use client";

import MarketplaceLayout from "@/components/marketplace/MarketplaceLayout";
import { credits } from "@/lib/credits";
import { useMemo, useState } from "react";
import PublicationModal from "@/components/PublicationModal";

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState("Todas las categorías");
  const [search, setSearch] = useState("");
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCredits = useMemo(() => {
    return credits.filter((credit) => {
      const matchesSearch =
        !search ||
        credit.title.toLowerCase().includes(search.toLowerCase()) ||
        credit.description.toLowerCase().includes(search.toLowerCase());
      return matchesSearch;
    });
  }, [search]);

  return (
    <main className="min-h-screen bg-background">
      <MarketplaceLayout
        credits={filteredCredits}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        search={search}
        onSearch={setSearch}
        onSelectOffer={(offer) => {
          setSelectedOffer(offer);
          setIsModalOpen(true);
        }}
      />
      <PublicationModal
        offer={selectedOffer}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
