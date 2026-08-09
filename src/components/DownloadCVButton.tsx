"use client";

import { Download, FileText } from "lucide-react";
import { useLanguage } from "@/components/Providers";
import { identity } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function DownloadCVButton({ variant = "primary" }: { variant?: "primary" | "ghost" | "compact" }) {
  const { t } = useLanguage();
  return (
    <a
      href={identity.cvPath}
      target="_blank"
      rel="noopener noreferrer"
      download
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition",
        variant === "primary" && "bg-cyan text-ink hover:bg-cyan/90",
        variant === "ghost" && "border border-white/15 bg-white/5 text-white hover:bg-white/10 light:border-slate-200 light:text-slate-950",
        variant === "compact" && "border border-cyan/30 bg-cyan/10 text-cyan hover:bg-cyan/15"
      )}
    >
      {variant === "compact" ? <FileText className="h-4 w-4" /> : <Download className="h-4 w-4" />}
      {t("Télécharger mon CV", "Download my resume")}
    </a>
  );
}
