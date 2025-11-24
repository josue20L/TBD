"use client";

import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  showCloseButton = true,
}) {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    if (open && panelRef.current) {
      panelRef.current.focus();
    }
  }, [open]);

  if (!open) return null;
  if (typeof window === "undefined") return null;

  const content = (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50"
      onMouseDown={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        className="w-full max-w-md mx-4 rounded-xl bg-card border border-border shadow-xl outline-none"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between gap-4 border-b px-4 py-3">
            <div className="text-lg font-semibold">{title}</div>
            {showCloseButton && (
              <button
                type="button"
                aria-label="Cerrar"
                onClick={onClose}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                ✕
              </button>
            )}
          </div>
        )}

        <div className="px-4 py-4">{children}</div>

        {footer && <div className="border-t px-4 py-3">{footer}</div>}
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.body);
}

export default Modal;
