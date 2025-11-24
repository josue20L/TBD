"use client";

import MarketplaceLayout from "@/components/marketplace/MarketplaceLayout";
import MyCreditsDashboard from "@/components/my-credits/MyCreditsDashboard";
import PremiumPlans from "@/components/premium/PremiumPlans";
import AccountAuth from "@/components/account/AccountAuth";
import AccountProfile from "@/components/account/AccountProfile";
import SellerPublications from "@/components/seller/SellerPublications";
import { credits } from "@/lib/credits";
import { useState, useMemo } from "react";
import PublicationModal from "@/components/PublicationModal";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Todas las categorías");
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("marketplace"); // "marketplace" | "my-credits" | "premium" | "account" | "my-publications"
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // simulación sin backend

  const filteredCredits = useMemo(() => {
    return credits.filter((credit) => {
      const matchesSearch =
        !search ||
        credit.title.toLowerCase().includes(search.toLowerCase()) ||
        credit.description.toLowerCase().includes(search.toLowerCase());
      // Por ahora no filtramos por categoría real, solo respetamos la opción seleccionada visualmente
      return matchesSearch;
    });
  }, [search]);

  return (
    <main className="min-h-screen bg-background">
      {/* Header simple */}
      <header className="border-b border-border bg-card/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary" />
            <span className="font-semibold text-lg text-foreground">GreenMarket</span>
          </div>

          <div className="flex items-center gap-2">
            <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:shadow-md">
              Vender
            </button>
            <button
              className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:shadow-md"
              onClick={() => setActiveTab("account")}
            >
              Iniciar Sesión
            </button>
            <button
              className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:shadow-md"
              onClick={() => setActiveTab("account")}
            >
              Registrarse
            </button>
          </div>
        </div>
      </header>

      {/* Tabs simples */}
      <div className="border-b border-border bg-card/60">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-4 text-sm">
          <button
            className={`py-3 font-semibold border-b-2 transition-colors ${
              activeTab === "marketplace"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setActiveTab("marketplace")}
          >
            Marketplace
          </button>
          <button
            className={`py-3 font-semibold border-b-2 transition-colors ${
              activeTab === "my-credits"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setActiveTab("my-credits")}
          >
            Mis Créditos
          </button>
          <button
            className={`py-3 font-semibold border-b-2 transition-colors ${
              activeTab === "premium"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setActiveTab("premium")}
          >
            Premium
          </button>
          <button
            className={`py-3 font-semibold border-b-2 transition-colors ${
              activeTab === "my-publications"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setActiveTab("my-publications")}
          >
            Mis Publicaciones
          </button>
          <button
            className={`py-3 font-semibold border-b-2 transition-colors ${
              activeTab === "account"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setActiveTab("account")}
          >
            Mi Cuenta
          </button>
        </div>
      </div>

      {/* Contenido principal: cambia según la tab */}
      {activeTab === "marketplace" && (
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
      )}

      {activeTab === "my-credits" && <MyCreditsDashboard />}

      {activeTab === "premium" && <PremiumPlans />}

      {activeTab === "my-publications" && <SellerPublications />}

      {activeTab === "account" && (
        isLoggedIn ? (
          <AccountProfile />
        ) : (
          <AccountAuth onLoginSuccess={() => setIsLoggedIn(true)} />
        )
      )}
      <PublicationModal
        offer={selectedOffer}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}