"use client";

import { Download, Eye, FileText, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useLanguage } from "@/components/Providers";
import { externalLinkProps } from "@/lib/utils";
import type { Report } from "@/types/portfolio";

type ReportWithStatus = Report & {
  exists: boolean;
};

export function ReportLibrary({
  reports,
  preview
}: {
  reports: ReportWithStatus[];
  preview: boolean;
}) {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tous");

  const categories = useMemo(
    () => ["Tous", ...Array.from(new Set(reports.map((report) => report.category)))],
    [reports]
  );

  const filteredReports = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return reports.filter((report) => {
      const matchesCategory = activeCategory === "Tous" || report.category === activeCategory;
      const matchesQuery =
        !normalizedQuery ||
        report.title.toLowerCase().includes(normalizedQuery) ||
        report.description.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query, reports]);

  return (
    <>
      {!preview ? (
        <div className="glass mb-8 rounded-lg p-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <label className="relative block w-full lg:max-w-md">
              <span className="sr-only">Rechercher un rapport</span>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t("Rechercher un rapport...", "Search reports...")}
                className="input pl-10"
              />
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={
                    activeCategory === category
                      ? "rounded-lg bg-cyan px-3 py-2 text-sm font-semibold text-ink"
                      : "rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm transition hover:bg-white/10 light:border-slate-200"
                  }
                >
                  {category === "Tous" ? t("Tous", "All") : t(category, category === "Rapport PDF" ? "PDF report" : category)}
                </button>
              ))}
            </div>
          </div>
          <p className="muted mt-3 text-sm">
            {t(
              `${filteredReports.length} rapport${filteredReports.length > 1 ? "s" : ""} affiché${filteredReports.length > 1 ? "s" : ""}.`,
              `${filteredReports.length} report${filteredReports.length > 1 ? "s" : ""} shown.`
            )}
          </p>
        </div>
      ) : null}

      {filteredReports.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredReports.map((report) => (
            <article
              key={report.slug}
              className="glass flex min-h-60 flex-col rounded-lg p-5 transition hover:-translate-y-1 hover:border-cyan/35"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-cyan/25 bg-cyan/10 text-cyan">
                  <FileText className="h-5 w-5" />
                </div>
                <span className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-semibold text-cyan">
                  {report.format || report.category}
                </span>
              </div>
              <h3 className="font-[var(--font-space)] text-lg font-semibold leading-snug">
                {report.title}
              </h3>
              <p className="muted mt-3 flex-1 text-sm leading-6">{report.description}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {report.externalUrl ? (
                  <a
                    href={report.externalUrl}
                    {...externalLinkProps}
                    className="inline-flex items-center gap-2 rounded-lg bg-cyan px-3 py-2 text-sm font-semibold text-ink"
                  >
                    <Eye className="h-4 w-4" />
                  {t("Ouvrir", "Open")}
                  </a>
                ) : report.exists && report.file ? (
                  <>
                    {report.format === "PDF" ? (
                      <a
                        href={report.file}
                        {...externalLinkProps}
                        className="inline-flex items-center gap-2 rounded-lg bg-cyan px-3 py-2 text-sm font-semibold text-ink"
                      >
                        <Eye className="h-4 w-4" />
                        {t("Consulter", "Read")}
                      </a>
                    ) : null}
                    <a
                      href={report.file}
                      download
                      className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm font-semibold transition hover:bg-white/10 light:border-slate-200"
                    >
                      <Download className="h-4 w-4" />
                      {t("Télécharger", "Download")}
                    </a>
                  </>
                ) : (
                  <span className="rounded-lg border border-dashed border-white/15 px-3 py-2 text-sm text-slate-300 light:border-slate-300 light:text-slate-600">
                    {t("Fichier indisponible", "File unavailable")}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="glass rounded-lg p-6 text-center">
          <p className="font-semibold">{t("Aucun rapport trouvé", "No report found")}</p>
          <p className="muted mt-2 text-sm">{t("Essayez un autre mot-clé ou réinitialisez le filtre.", "Try another keyword or reset the filter.")}</p>
        </div>
      )}
    </>
  );
}
