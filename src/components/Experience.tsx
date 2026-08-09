"use client";

import { useLanguage } from "@/components/Providers";
import { Section } from "@/components/Section";
import { experiences } from "@/data/portfolio";

export function Experience() {
  const { t } = useLanguage();
  const typeLabel = (type: string) =>
    t(
      type,
      ({
        "Projet personnel": "Personal project",
        "Projet académique": "Academic project",
        "Laboratoire technique": "Technical lab"
      } as Record<string, string>)[type] || type
    );

  return (
    <Section id="experience">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan">{t("Pratique", "Practice")}</p>
        <h2 className="section-title">{t("Expérience et projets techniques", "Experience and technical projects")}</h2>
        <p className="muted mt-4">
          {t(
            "Ces éléments sont présentés comme projets personnels, académiques ou laboratoires techniques selon leur nature.",
            "These items are presented as personal projects, academic projects or technical labs depending on their nature."
          )}
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {experiences.map((item) => (
          <article key={item.title} className="glass rounded-lg p-5">
            <span className="rounded-md bg-success/10 px-2.5 py-1 text-xs font-semibold text-success">{typeLabel(item.type)}</span>
            <h3 className="mt-4 font-[var(--font-space)] text-xl font-semibold">{item.title}</h3>
            <p className="muted mt-3 leading-7">{item.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.items.map((entry) => (
                <span key={entry} className="rounded-md border border-white/10 px-2 py-1 text-xs text-slate-300 light:border-slate-200 light:text-slate-600">
                  {entry}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
