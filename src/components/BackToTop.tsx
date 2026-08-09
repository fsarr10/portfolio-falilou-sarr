"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <a href="#accueil" className="fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-cyan text-ink shadow-lg" aria-label="Retour en haut">
      <ArrowUp className="h-5 w-5" />
    </a>
  );
}
