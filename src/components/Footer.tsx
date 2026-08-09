"use client";

import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { DownloadCVButton } from "@/components/DownloadCVButton";
import { useLanguage } from "@/components/Providers";
import { identity, navigation } from "@/data/portfolio";
import { externalLinkProps } from "@/lib/utils";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${identity.whatsapp.replace(/\D/g, "")}`;
  return (
    <footer className="border-t border-white/10 py-10 light:border-slate-200">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="font-[var(--font-space)] text-lg font-semibold">
            {t(
              "Mouhamadou Falilou Sarr — Développeur Full Stack, DevOps et Cybersécurité",
              "Mouhamadou Falilou Sarr — Full Stack Developer, DevOps and Cybersecurity"
            )}
          </p>
          <p className="muted mt-2">{t("Conçu et développé avec passion au Sénégal.", "Designed and developed in Senegal.")}</p>
          <p className="muted mt-2 text-sm">© {year} Mouhamadou Falilou Sarr. {t("Tous droits réservés.", "All rights reserved.")}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 lg:justify-end">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-cyan light:text-slate-600">
              {t(
                item.label,
                ({
                  Accueil: "Home",
                  "À propos": "About",
                  Compétences: "Skills",
                  Réalisations: "Work",
                  Parcours: "Path",
                  Rapports: "Reports",
                  Services: "Services",
                  Contact: "Contact"
                } as Record<string, string>)[item.label] || item.label
              )}
            </a>
          ))}
          <a href={identity.github} {...externalLinkProps} aria-label="GitHub"><Github className="h-5 w-5" /></a>
          <a href={identity.linkedin} {...externalLinkProps} aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
          <a href={`mailto:${identity.email}`} aria-label="Email"><Mail className="h-5 w-5" /></a>
          <a href={whatsappUrl} {...externalLinkProps} aria-label="WhatsApp"><MessageCircle className="h-5 w-5" /></a>
          <DownloadCVButton variant="compact" />
        </div>
      </div>
    </footer>
  );
}
