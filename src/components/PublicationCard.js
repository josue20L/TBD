"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";

function PublicationCard({ offer, onClick }) {
  const images = offer.photos?.length > 0
    ? offer.photos
    : ["/placeholder.svg?height=180&width=320&text=Crédito verde"];

  return (
    <div
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-xl border-primary border-2 bg-card shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
    >
      <div className="h-48 w-full relative">
        <Image
          src={images[0]}
          alt={offer.title || "Crédito verde"}
          fill
          className="object-cover"
        />

        <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs text-slate-700 shadow-sm border border-gray-200">
          <MapPin className="w-3 h-3 text-primary" />
          <span className="font-medium text-gray-700">{offer.location}</span>
        </div>

        <div className="absolute right-3 top-3 rounded-lg bg-white/90 px-3 py-1.5 text-sm font-semibold text-primary shadow-sm border border-primary/20">
          {offer.price?.toLocaleString()} CV
        </div>
      </div>

      <div className="p-4 flex flex-col h-full">
        <div className="flex-1">
          <div className="mb-3">
            <h3 className="text-lg font-semibold text-foreground mb-1 line-clamp-1">
              {offer.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {offer.description}
            </p>
          </div>

          {offer.category && (
            <div className="mb-3">
              <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded-full">
                {offer.category}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PublicationCard;
