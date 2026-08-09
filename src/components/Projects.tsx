"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/components/Providers";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Projects() {
  const { t } = useLanguage();
  const filters = useMemo(() => ["Tous", ...Array.from(new Set(projects.map((project) => project.filter)))], []);
  const [active, setActive] = useState(filters[0]);
  const visibleProjects = active === "Tous" ? projects : projects.filter((project) => project.filter === active);

  return (
    <Section id="realisations">
      <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan">Portfolio</p>
          <h2 className="section-title">{t("Mes réalisations", "Selected work")}</h2>
          <p className="muted mt-4 max-w-2xl">
            {t(
              "Captures locales, liens externes sécurisés et projets faciles à modifier dans le fichier de données.",
              "Local screenshots, secure external links and projects that are easy to update from the data file."
            )}
          </p>
        </div>
        <div className="flex flex-wrap gap-2" aria-label="Filtrer les projets">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={cn(
                "rounded-lg border border-white/10 px-3 py-2 text-sm transition light:border-slate-200",
                active === filter ? "bg-cyan text-ink" : "bg-white/5 hover:bg-white/10"
              )}
            >
              {filter === "Tous" ? t("Tous", "All") : filter}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {visibleProjects.length > 0 ? (
          visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)
        ) : (
          <div className="glass rounded-lg p-6 lg:col-span-3">
            <p className="font-semibold">{t("Aucun projet dans cette catégorie pour le moment.", "No project in this category yet.")}</p>
            <p className="muted mt-2 text-sm">
              {t(
                "Les filtres affichent uniquement les catégories présentes dans les projets réels.",
                "Filters only show categories currently used by real projects."
              )}
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}
