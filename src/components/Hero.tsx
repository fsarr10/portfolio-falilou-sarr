"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import { DownloadCVButton } from "@/components/DownloadCVButton";
import { useLanguage } from "@/components/Providers";
import { identity } from "@/data/portfolio";
import { externalLinkProps } from "@/lib/utils";

const roles = ["Développeur Full Stack", "DevOps", "Cybersécurité"];

export function Hero() {
  const { t } = useLanguage();
  const whatsappUrl = `https://wa.me/${identity.whatsapp.replace(/\D/g, "")}`;
  const roleLabel = (role: string) =>
    t(role, ({ "Développeur Full Stack": "Full Stack Developer", DevOps: "DevOps", Cybersécurité: "Cybersecurity" } as Record<string, string>)[role] || role);
  return (
    <section id="accueil" className="section grid min-h-screen items-center gap-12 pt-28 sm:pt-32 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-cyan">
          {t("Bonjour, je suis", "Hello, I am")}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="font-[var(--font-space)] text-4xl font-bold tracking-normal text-white light:text-slate-950 sm:text-6xl xl:text-7xl"
        >
          {identity.name}
        </motion.h1>
        <div className="mt-6 flex min-h-12 flex-wrap gap-3">
          {roles.map((role, index) => (
            <motion.span
              key={role}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 + index * 0.08 }}
              className="rounded-lg border border-cyan/25 bg-cyan/10 px-4 py-2 font-[var(--font-space)] text-lg font-semibold text-cyan"
            >
              {roleLabel(role)}
            </motion.span>
          ))}
        </div>
        <p className="muted mt-7 max-w-2xl text-lg leading-8">
          {t(
            identity.heroIntro,
            "I turn ideas into modern, performant, secure web and mobile applications ready for production."
          )}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#realisations" className="inline-flex items-center justify-center rounded-lg bg-cyan px-5 py-3 text-sm font-semibold text-ink transition hover:bg-cyan/90">
            {t("Voir mes réalisations", "View my work")}
          </a>
          <DownloadCVButton variant="ghost" />
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold transition hover:bg-white/10 light:border-slate-200">
            {t("Me contacter", "Contact me")}
          </a>
        </div>
        <div className="mt-8 flex items-center gap-3">
          <a href={identity.github} {...externalLinkProps} aria-label="GitHub" className="glass rounded-lg p-3 transition hover:-translate-y-1">
            <Github className="h-5 w-5" />
          </a>
          <a href={identity.linkedin} {...externalLinkProps} aria-label="LinkedIn" className="glass rounded-lg p-3 transition hover:-translate-y-1">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href={`mailto:${identity.email}`} aria-label="Email" className="glass rounded-lg p-3 transition hover:-translate-y-1">
            <Mail className="h-5 w-5" />
          </a>
          <a href={whatsappUrl} {...externalLinkProps} aria-label="WhatsApp" className="glass rounded-lg p-3 transition hover:-translate-y-1">
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
        <p className="mt-6 inline-flex items-center gap-2 text-sm text-slate-300 light:text-slate-600">
          <MapPin className="h-4 w-4 text-success" />
          {t("Basé au Sénégal • Disponible pour de nouvelles opportunités", "Based in Senegal • Open to new opportunities")}
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.16 }}
        className="relative mx-auto aspect-[4/5] w-full max-w-sm sm:max-w-md"
      >
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-electric via-violet to-cyan opacity-55 blur-xl sm:blur-2xl" />
        <div className="glass relative h-full overflow-hidden rounded-2xl">
          <Image
            src={identity.photoPath}
            alt="Portrait professionnel de Mouhamadou Falilou Sarr"
            fill
            priority
            sizes="(min-width: 1024px) 420px, 90vw"
            className="object-cover object-[center_22%]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/88 via-ink/35 to-transparent p-6">
            <p className="font-[var(--font-space)] text-2xl font-semibold text-white">{identity.name}</p>
            <p className="mt-1 text-sm text-slate-200">
              {t(identity.title, "Full Stack Developer • DevOps • Cybersecurity")}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
