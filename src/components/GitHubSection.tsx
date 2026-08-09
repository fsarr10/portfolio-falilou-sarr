"use client";

import { Github } from "lucide-react";
import { useLanguage } from "@/components/Providers";
import { Section } from "@/components/Section";
import { githubFallback } from "@/data/portfolio";
import { externalLinkProps } from "@/lib/utils";

export function GitHubSection() {
  const { t } = useLanguage();
  return (
    <Section id="github">
      <div className="glass flex flex-col justify-between gap-6 rounded-lg p-6 md:p-8 lg:flex-row lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan">GitHub</p>
          <h2 className="section-title">{t("Mon profil GitHub", "My GitHub profile")}</h2>
          <p className="muted mt-4 max-w-2xl">
            {t(
              "Retrouvez mes projets publics et mon activité de développement directement sur GitHub.",
              "Find my public projects and development activity directly on GitHub."
            )}
          </p>
        </div>
        <a
          href={githubFallback.url}
          {...externalLinkProps}
          className="inline-flex w-fit items-center gap-2 rounded-lg bg-cyan px-5 py-3 text-sm font-semibold text-ink"
        >
          <Github className="h-4 w-4" />
          {t("Voir mon GitHub", "View my GitHub")}
        </a>
      </div>
    </Section>
  );
}
