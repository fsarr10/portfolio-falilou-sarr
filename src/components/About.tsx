"use client";

import { DownloadCVButton } from "@/components/DownloadCVButton";
import { useLanguage } from "@/components/Providers";
import { Section } from "@/components/Section";
import { aboutCards, focusIcons } from "@/data/portfolio";

export function About() {
  const { t } = useLanguage();
  const cardLabel = (label: string) =>
    t(
      label,
      ({
        "Développement Full Stack": "Full Stack development",
        "Applications web et mobiles": "Web and mobile applications",
        "Déploiement et automatisation": "Deployment and automation",
        "Administration système et cloud": "System administration and cloud",
        "Réseaux et cybersécurité": "Networking and cybersecurity",
        "Solutions adaptées au contexte local": "Solutions adapted to local contexts"
      } as Record<string, string>)[label] || label
    );

  return (
    <Section id="apropos">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan">{t("Profil", "Profile")}</p>
          <h2 className="section-title">{t("À propos de moi", "About me")}</h2>
          <div className="muted mt-6 space-y-5 leading-8">
            <p>
              {t(
                "Je suis Mouhamadou Falilou Sarr, développeur Full Stack et DevOps passionné par la création de solutions numériques utiles, modernes et adaptées aux réalités africaines.",
                "I am Mouhamadou Falilou Sarr, a Full Stack and DevOps developer passionate about building useful, modern digital solutions adapted to African realities."
              )}
            </p>
            <p>
              {t(
                "J'interviens sur l'ensemble du cycle de développement d'un produit : conception, développement front-end, création d'API, gestion de bases de données, sécurité, déploiement, automatisation et maintenance.",
                "I work across the full product lifecycle: design, front-end development, API creation, database management, security, deployment, automation and maintenance."
              )}
            </p>
            <p>
              {t(
                "Ma formation en développement d'applications, DevOps et cybersécurité me permet de construire une application, préparer son infrastructure, automatiser son déploiement et contribuer à sa sécurisation.",
                "My background in application development, DevOps and cybersecurity allows me to build applications, prepare infrastructure, automate deployment and contribute to securing production systems."
              )}
            </p>
          </div>
          <div className="mt-7">
            <DownloadCVButton variant="primary" />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {aboutCards.map((card, index) => {
            const Icon = focusIcons[index];
            return (
              <div key={card} className="glass rounded-lg p-5">
                <Icon className="mb-5 h-6 w-6 text-cyan" />
                <h3 className="font-semibold">{cardLabel(card)}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
