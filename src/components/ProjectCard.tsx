"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/components/Providers";
import type { Project } from "@/types/portfolio";
import { externalLinkProps } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();
  const hasLive = project.liveUrl !== "#";
  const hasGithub = project.githubUrl && !project.githubUrl.startsWith("[");
  const image = (
    <Image src={project.image} alt={project.alt} width={1440} height={900} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
  );

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] transition hover:-translate-y-1 hover:border-cyan/35 light:border-slate-200 light:bg-white">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        {hasLive ? (
          <a href={project.liveUrl} {...externalLinkProps} aria-label={`Voir ${project.title}`}>
            {image}
          </a>
        ) : (
          image
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-cyan/10 px-2.5 py-1 text-xs font-semibold text-cyan">{project.filter}</span>
          <span className="text-xs text-slate-400">{project.category}</span>
        </div>
        <h3 className="font-[var(--font-space)] text-xl font-semibold">{project.title}</h3>
        <p className="muted mt-3 text-sm leading-6">{project.description}</p>
        {project.technologies.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-md border border-white/10 px-2 py-1 text-xs text-slate-300 light:border-slate-200 light:text-slate-600">
                {tech}
              </span>
            ))}
          </div>
        ) : null}
        <div className="mt-5 flex flex-wrap gap-3 pt-2">
          {hasLive ? (
            <a href={project.liveUrl} {...externalLinkProps} className="inline-flex items-center gap-2 rounded-lg bg-cyan px-3 py-2 text-sm font-semibold text-ink">
              <ExternalLink className="h-4 w-4" />
              {t("Voir le site", "View site")}
            </a>
          ) : null}
          {hasGithub ? (
            <a href={project.githubUrl} {...externalLinkProps} className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm font-semibold">
              <Github className="h-4 w-4" />
              {t("Voir le code", "View code")}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
