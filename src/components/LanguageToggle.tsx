"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/components/Providers";

export function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();
  return (
    <button
      type="button"
      onClick={toggleLocale}
      className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10 light:border-slate-200 light:text-slate-950"
      aria-label={locale === "fr" ? "Switch to English" : "Passer en français"}
      title={locale === "fr" ? "Switch to English" : "Passer en français"}
    >
      <Languages className="h-4 w-4" />
      {locale === "fr" ? "EN" : "FR"}
    </button>
  );
}
