"use client";

import Modal from "./Modal";

function PublicationModal({ offer, open, onClose }) {
  if (!open || !offer) return null;

  return (
    <Modal open={open} onClose={onClose} title={offer.title}>
      <div className="space-y-4 text-sm">
        <p className="text-muted-foreground">{offer.description}</p>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-card border border-border">
            <p className="text-muted-foreground">Ubicación</p>
            <p className="font-semibold">{offer.location}</p>
          </div>
          <div className="p-3 rounded-lg bg-card border border-border">
            <p className="text-muted-foreground">Precio</p>
            <p className="font-semibold text-primary">{offer.price} CV</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default PublicationModal;
