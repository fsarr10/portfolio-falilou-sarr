"use client";

import { useLanguage } from "@/components/Providers";
import { Section } from "@/components/Section";
import { services } from "@/data/portfolio";

export function Services() {
  const { t } = useLanguage();
  return (
    <Section id="services">
      <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan">Services</p>
          <h2 className="section-title">{t("Ce que je peux réaliser", "What I can build")}</h2>
        </div>
        <a href="#contact" className="inline-flex w-fit items-center justify-center rounded-lg bg-cyan px-5 py-3 text-sm font-semibold text-ink">
          {t("Discutons de votre projet", "Let’s discuss your project")}
        </a>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="glass rounded-lg p-5">
            <service.icon className="mb-5 h-6 w-6 text-cyan" />
            <h3 className="font-[var(--font-space)] text-lg font-semibold">{service.title}</h3>
            <p className="muted mt-3 text-sm leading-6">{service.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
