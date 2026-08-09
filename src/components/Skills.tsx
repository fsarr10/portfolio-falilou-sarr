"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/Providers";
import { Section } from "@/components/Section";
import { skills } from "@/data/portfolio";

export function Skills() {
  const { t } = useLanguage();
  return (
    <Section id="competences">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan">Stack</p>
        <h2 className="section-title">{t("Compétences techniques", "Technical skills")}</h2>
        <p className="muted mt-4">
          {t(
            "Une vision complète du produit : interface, API, données, infrastructure, automatisation et sécurité.",
            "A full product view: interface, APIs, data, infrastructure, automation and security."
          )}
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((category) => (
          <div key={category.title} className="glass rounded-lg p-5">
            <h3 className="mb-4 font-[var(--font-space)] text-xl font-semibold">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(index * 0.018, 0.22) }}
                  className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200 light:border-slate-200 light:bg-slate-50 light:text-slate-700"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
