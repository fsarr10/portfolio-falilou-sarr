"use client";

import { useLanguage } from "@/components/Providers";
import { Section } from "@/components/Section";
import { ReportLibrary } from "@/components/ReportLibrary";
import { reports } from "@/data/portfolio";

export function Reports({ preview = false }: { preview?: boolean }) {
  const { t } = useLanguage();
  const visibleReports = preview ? reports.slice(0, 6) : reports;
  const reportsWithStatus = visibleReports.map((report) => ({
    ...report,
    exists: Boolean(report.file || report.externalUrl)
  }));

  return (
    <Section id="rapports">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan">{t("Documents", "Documents")}</p>
        <h2 className="section-title">{t("Rapports et documents PDF", "Reports and PDF documents")}</h2>
        <p className="muted mt-4">
          {preview
            ? t(
                "Quelques rapports récents. La page complète regroupe tous les documents PDF et Word.",
                "A short preview of recent reports. The full page contains every PDF document."
              )
            : t(
                "Tous les rapports disponibles, consultables en PDF ou téléchargeables selon le format.",
                "All available reports, readable online as PDF documents and downloadable."
              )}
        </p>
        <p className="mt-4 inline-flex rounded-lg border border-cyan/25 bg-cyan/10 px-3 py-1.5 text-sm font-semibold text-cyan">
          {t(`${reports.length} rapports disponibles`, `${reports.length} reports available`)}
        </p>
      </div>
      <ReportLibrary reports={reportsWithStatus} preview={preview} />
      {preview ? (
        <div className="mt-8 flex justify-center">
          <a
            href="/rapports"
            className="inline-flex items-center justify-center rounded-lg bg-cyan px-5 py-3 text-sm font-semibold text-ink transition hover:bg-cyan/90"
          >
            {t("Voir tous les rapports", "View all reports")}
          </a>
        </div>
      ) : null}
    </Section>
  );
}
