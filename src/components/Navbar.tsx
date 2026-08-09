"use client";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { DownloadCVButton } from "@/components/DownloadCVButton";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/components/Providers";
import { ThemeToggle } from "@/components/ThemeToggle";
import { identity, navigation } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#accueil");
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const { t } = useLanguage();
  const sectionIds = useMemo(() => navigation.map((item) => item.href), []);
  const navHref = (href: string) => (pathname === "/" ? href : `/${href}`);
  const navLabel = (label: string) =>
    t(
      label,
      ({
        Accueil: "Home",
        "À propos": "About",
        Compétences: "Skills",
        Réalisations: "Work",
        Parcours: "Path",
        Rapports: "Reports",
        Services: "Services",
        Contact: "Contact"
      } as Record<string, string>)[label] || label
    );

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);

      const current = sectionIds.findLast((href) => {
        if (!href.startsWith("#")) return false;
        const element = document.querySelector(href);
        return element ? element.getBoundingClientRect().top <= 140 : false;
      });
      if (current) setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/78 backdrop-blur-xl light:border-slate-200 light:bg-white/80">
      <div className="h-1 bg-white/5">
        <div className="h-full bg-cyan transition-[width]" style={{ width: `${progress}%` }} />
      </div>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <a href="#accueil" className="min-w-0 truncate font-[var(--font-space)] text-sm font-bold tracking-normal sm:text-base" title="Portfolio de Falilou Sarr">
          <span className="hidden sm:inline">{t("Portfolio de Falilou Sarr", "Falilou Sarr Portfolio")}</span>
          <span className="sm:hidden">Portfolio</span>
        </a>
        <div className="hidden items-center gap-0.5 xl:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={navHref(item.href)}
              className={cn(
                "rounded-lg px-2.5 py-2 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white light:text-slate-700 light:hover:bg-slate-100",
                active === item.href && "bg-cyan/10 text-cyan"
              )}
            >
              {navLabel(item.label)}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-2 xl:flex">
          <LanguageToggle />
          <ThemeToggle />
          <DownloadCVButton variant="compact" />
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 xl:hidden light:border-slate-200"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? t("Fermer le menu", "Close menu") : t("Ouvrir le menu", "Open menu")}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-white/10 bg-ink/95 px-4 py-4 xl:hidden light:border-slate-200 light:bg-white">
          <div className="grid gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={navHref(item.href)}
                onClick={() => setOpen(false)}
                className={cn("rounded-lg px-3 py-2 text-sm", active === item.href && "bg-cyan/10 text-cyan")}
              >
                {navLabel(item.label)}
              </a>
            ))}
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
              <DownloadCVButton variant="compact" />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
