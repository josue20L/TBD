"use client";

import Modal from "./Modal";

function CreditDetailModal({ open, onClose, credit }) {
  if (!credit) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={credit.title}
    >
      <div className="space-y-3 text-sm">
        <p className="text-muted-foreground">{credit.description}</p>
        <p className="text-xs text-muted-foreground">Ubicación: {credit.location}</p>
        <p className="text-sm font-semibold text-primary">{credit.price} CV</p>
      </div>
    </Modal>
  );
}

export default CreditDetailModal;
