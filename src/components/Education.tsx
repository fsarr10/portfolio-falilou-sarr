"use client";

import { useLanguage } from "@/components/Providers";
import { Section } from "@/components/Section";
import { education } from "@/data/portfolio";

export function Education() {
  const { t } = useLanguage();

  const description = (title: string, fallback: string) =>
    t(
      fallback,
      title.includes("IDA")
        ? "Training focused on application design and development, programming, databases, web and mobile development, and information systems analysis."
        : title.includes("DevOps")
          ? "Training focused on system and network administration, cloud, automation, continuous deployment, containerization, monitoring, infrastructure hardening and cybersecurity."
          : "Planned next step to deepen software engineering, cloud, DevOps and cybersecurity."
    );

  return (
    <Section id="parcours">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan">{t("Parcours", "Path")}</p>
        <h2 className="section-title">{t("Formation et parcours", "Education and path")}</h2>
      </div>
      <div className="relative space-y-6 before:absolute before:left-4 before:top-2 before:h-full before:w-px before:bg-cyan/30">
        {education.map((item) => (
          <article key={item.title} className="relative pl-12">
            <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-cyan/40 bg-ink text-cyan light:bg-white" />
            <div className="glass rounded-lg p-5">
              <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-[var(--font-space)] text-xl font-semibold">{item.title}</h3>
                {item.period ? (
                  <span className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-cyan">
                    {t(item.period, item.period === "À planifier" ? "Planned" : item.period)}
                  </span>
                ) : null}
              </div>
              <p className="font-medium">{item.school}</p>
              {item.location ? <p className="muted text-sm">{item.location}</p> : null}
              <p className="muted mt-3 leading-7">{description(item.title, item.description)}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
