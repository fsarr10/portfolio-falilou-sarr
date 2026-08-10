import {
  AppWindow,
  CloudCog,
  Code2,
  Database,
  GitBranch,
  Globe2,
  LockKeyhole,
  Network,
  Rocket,
  ServerCog,
  ShieldCheck,
  Smartphone
} from "lucide-react";
import type { EducationItem, ExperienceItem, Project, Report, ServiceItem, SkillCategory } from "@/types/portfolio";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://falilou-sarr.vercel.app";

export const identity = {
  name: "Mouhamadou Falilou Sarr",
  title: "Développeur Full Stack • DevOps • Cybersécurité",
  location: "Sénégal",
  availability:
    "Disponible pour des collaborations, missions freelance, stages, emplois, projets innovants et opportunités professionnelles.",
  shortIntro:
    "Je suis développeur Full Stack et DevOps basé au Sénégal. Je conçois des applications web et mobiles modernes, performantes et sécurisées, de la création de l'interface jusqu'au déploiement en production.",
  heroIntro:
    "Je transforme des idées en applications web et mobiles modernes, performantes, sécurisées et prêtes pour la production.",
  email: "sarrfallou267@gmail.com",
  linkedin: "https://www.linkedin.com/in/fallou-sarr-a74310239",
  whatsapp: "+221 765893128",
  github: "https://github.com/fsarr10",
  cvPath: "/documents/CV-Falilou-Sarr.pdf",
  photoPath: "/images/photo.webp",
  photoPlaceholder: "[AJOUTER MA PHOTO]"
};

export const navigation = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Compétences", href: "#competences" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Parcours", href: "#parcours" },
  { label: "Rapports", href: "#rapports" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" }
];

export const aboutCards = [
  "Développement Full Stack",
  "Applications web et mobiles",
  "Déploiement et automatisation",
  "Administration système et cloud",
  "Réseaux et cybersécurité",
  "Solutions adaptées au contexte local"
];

export const skills: SkillCategory[] = [
  {
    title: "Front-end",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "React Native", "Expo"]
  },
  {
    title: "Back-end",
    items: ["Node.js", "Express.js", "PHP", "Laravel", "Python", "Flask", "API REST", "JWT", "Socket.IO"]
  },
  {
    title: "Bases de données",
    items: ["MySQL", "PostgreSQL", "Supabase", "Sequelize", "Prisma"]
  },
  {
    title: "DevOps et cloud",
    items: [
      "Linux",
      "Ubuntu",
      "Docker",
      "Git",
      "GitHub",
      "GitHub Actions",
      "CI/CD",
      "Nginx",
      "Apache",
      "PM2",
      "Vercel",
      "OpenStack",
      "Administration de serveurs",
      "Variables d'environnement",
      "Déploiement d'applications"
    ]
  },
  {
    title: "Réseaux et cybersécurité",
    items: [
      "TCP/IP",
      "Pare-feu",
      "iptables",
      "VPN",
      "OpenVPN",
      "WireGuard",
      "pfSense",
      "SSH",
      "LDAP",
      "FreeRADIUS",
      "Wireshark",
      "Tests de sécurité",
      "Sécurisation des API",
      "Permissions et accès"
    ]
  },
  {
    title: "Outils",
    items: ["Visual Studio Code", "Postman", "GitHub", "Figma", "VirtualBox", "GNS3"]
  }
];

export const projects: Project[] = [
  {
    title: "Casamance Legacy Academy",
    slug: "casamance-legacy-academy",
    description:
      "Plateforme web moderne consacrée à la Casamance Legacy Academy, à ses activités, ses programmes et son univers.",
    longDescription:
      "Interface responsive, accessible et optimisée pour présenter l'académie sur tous les écrans.",
    image: "/projects/casamance-legacy-academy.webp",
    liveUrl: "https://casamance-legacy-academy.vercel.app/",
    githubUrl: "[AJOUTER LES LIENS DES DÉPÔTS GITHUB]",
    category: "Site institutionnel / Éducation / Académie",
    filter: "Web",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion"],
    featured: true,
    alt: "Capture d'écran de la page d'accueil Casamance Legacy Academy"
  },
  {
    title: "Senegram",
    slug: "senegram",
    description:
      "Plateforme sociale moderne permettant de connecter des utilisateurs autour de publications et d'interactions sociales.",
    longDescription:
      "Le projet met en avant une expérience responsive, des données dynamiques et des parcours sociaux.",
    image: "/projects/senegram.webp",
    liveUrl: "https://senegram-six.vercel.app/",
    githubUrl: "[AJOUTER LES LIENS DES DÉPÔTS GITHUB]",
    category: "Réseau social / Application Full Stack",
    filter: "Full Stack",
    technologies: [],
    featured: true,
    alt: "Capture d'écran de la page d'accueil Senegram"
  },
  {
    title: "SenGaming",
    slug: "sengaming",
    description:
      "Plateforme dédiée à la communauté gaming et esport sénégalaise, pensée pour rassembler joueurs, équipes et organisateurs.",
    longDescription:
      "SenGaming centralise l'actualité, les communautés et les activités liées au jeu vidéo au Sénégal.",
    image: "/projects/sengaming.webp",
    liveUrl: "https://www.sengaming.xyz/",
    githubUrl: "[AJOUTER LES LIENS DES DÉPÔTS GITHUB]",
    category: "Gaming / Esport / Plateforme communautaire",
    filter: "Full Stack",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Socket.IO", "Axios", "Firebase", "Framer Motion"],
    featured: true,
    alt: "Capture d'écran de la page d'accueil SenGaming"
  }
];

export const education: EducationItem[] = [
  {
    title: "Licence en Informatique - Développement d'Applications (IDA)",
    school: "Université Numérique Cheikh Hamidou Kane - UNCHK",
    location: "Sénégal",
    type: "formation",
    description:
      "Formation consacrée à la conception et au développement d'applications, à la programmation, aux bases de données, au développement web et mobile ainsi qu'à l'analyse des systèmes informatiques."
  },
  {
    title: "Licence en DevOps et Cybersécurité",
    school: "École centrale des logiciels libres et de télécommunications (EC2LT)",
    location: "Sénégal",
    type: "formation",
    description:
      "Formation orientée vers l'administration système et réseau, le cloud, l'automatisation, le déploiement continu, la conteneurisation, la supervision, la sécurisation des infrastructures et la cybersécurité."
  },
  {
    title: "Projet de poursuite d'études en Master",
    school: "Prochaine étape académique",
    period: "À planifier",
    type: "future",
    description:
      "Poursuite envisagée afin d'approfondir l'ingénierie logicielle, le cloud, le DevOps et la cybersécurité."
  }
];

export const experiences: ExperienceItem[] = [
  {
    title: "Applications web et mobiles",
    type: "Projet personnel",
    description: "Conception d'interfaces, intégration d'API et développement d'expériences responsive.",
    items: ["Applications web modernes", "React Native et Expo", "Expérience utilisateur", "Optimisation front-end"]
  },
  {
    title: "API et données sécurisées",
    type: "Projet académique",
    description: "Création de services applicatifs structurés avec authentification et contrôle des accès.",
    items: ["API REST", "JWT", "MySQL et PostgreSQL", "Permissions et sécurité applicative"]
  },
  {
    title: "Déploiement et automatisation",
    type: "Laboratoire technique",
    description: "Préparation d'environnements Linux, services web et processus de livraison.",
    items: ["Docker", "CI/CD", "Nginx", "Apache", "PM2", "Variables d'environnement"]
  },
  {
    title: "Infrastructure, réseau et sécurité",
    type: "Laboratoire technique",
    description: "Expérimentation sur l'administration système, le cloud privé et la sécurité réseau.",
    items: ["OpenStack", "OpenVPN", "WireGuard", "LDAP", "FreeRADIUS", "Wireshark", "pfSense"]
  }
];

export const services: ServiceItem[] = [
  { title: "Sites vitrines professionnels", description: "Sites rapides, responsives et faciles à maintenir.", icon: Globe2 },
  { title: "Applications web Full Stack", description: "Interfaces, API, authentification et données dynamiques.", icon: Code2 },
  { title: "Applications mobiles", description: "Applications React Native et Expo adaptées aux usages terrain.", icon: Smartphone },
  { title: "API REST", description: "Création et intégration d'API structurées, validées et documentables.", icon: GitBranch },
  { title: "Bases de données", description: "Modélisation, requêtes, connexions et bonnes pratiques de données.", icon: Database },
  { title: "Déploiement serveur", description: "Configuration Linux, Nginx, Apache, PM2 et Vercel.", icon: ServerCog },
  { title: "Docker et CI/CD", description: "Conteneurisation et pipelines de livraison plus fiables.", icon: CloudCog },
  { title: "Sécurisation", description: "Durcissement d'applications, API, accès et environnements.", icon: ShieldCheck },
  { title: "Assistance DevOps", description: "Maintenance, optimisation, automatisation et administration Linux.", icon: Rocket }
];

export const reports: Report[] = [
  {
    title: "Examen Architecture sécurisée",
    slug: "examen-architecture-securisee",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/examen-architecture-securisee.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport admin réseaux Linux",
    slug: "rapport-admin-reseaux-linux",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-admin-reseaux-linux.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport Apache Python",
    slug: "rapport-apache-python",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-apache-python.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport Asterisk et LDAP",
    slug: "rapport-asterisk-et-ldap",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-asterisk-et-ldap.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport Asterisk",
    slug: "rapport-asterisk",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-asterisk.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport attaque par force brute",
    slug: "rapport-attaque-par-force-brute",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-attaque-par-force-brute.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport automatisation",
    slug: "rapport-automatisation",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-automatisation.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport complet sécurité",
    slug: "rapport-complet-securite",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-complet-securite.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport Consolidation HTTP et programmation Python",
    slug: "rapport-consolidation-de-la-connaissance-du-protocole-http-et-de-la-programmation-python",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-consolidation-de-la-connaissance-du-protocole-http-et-de-la-programmation-python.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport crypto et sécurité des LAN",
    slug: "rapport-crypto-et-securite-des-lan",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-crypto-et-securite-des-lan.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport cryptographie",
    slug: "rapport-crypto",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-crypto.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport découverte métier DevOps",
    slug: "rapport-decouverte-metier-devops",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-decouverte-metier-devops.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport étude de l'environnement de travail",
    slug: "rapport-etude-de-l-environnement-de-travail-et-de-remise-a-niveau",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-etude-de-l-environnement-de-travail-et-de-remise-a-niveau.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport examen modélisation BD",
    slug: "rapport-examen-modelisation-bd",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-examen-modelisation-bd.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport Flask",
    slug: "rapport-flask",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-flask.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport général Service Annuaire et Authentification",
    slug: "rapport-general-service-annuaire-et-authentification",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-general-service-annuaire-et-authentification.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport général HTTP et programmation Python",
    slug: "rapport-generale-consolidation-de-la-connaissance-du-protocole-http-et-de-la-programmation-python",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-generale-consolidation-de-la-connaissance-du-protocole-http-et-de-la-programmation-python.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport gestion des droits utilisateurs et groupes",
    slug: "rapport-gestion-des-droits-des-utilisateurs-et-des-groupes",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-gestion-des-droits-des-utilisateurs-et-des-groupes.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport Infrastructures sécurisées (1)",
    slug: "rapport-infrastructures-securisees-1",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-infrastructures-securisees-1.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport Infrastructures sécurisées",
    slug: "rapport-infrastructures-securisees",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-infrastructures-securisees.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport intégration continue",
    slug: "rapport-integration-continu",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-integration-continu.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport partage de ressources",
    slug: "rapport-partage-de-ressources",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-partage-de-ressources.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport pentesting",
    slug: "rapport-pentensting",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-pentensting.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport PHP et MySQL",
    slug: "rapport-php-et-mysql",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-php-et-mysql.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport programmation des infrastructures",
    slug: "rapport-programmation-des-infrastructure",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-programmation-des-infrastructure.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport Python API",
    slug: "rapport-python-api",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-python-api.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport réseau de campus",
    slug: "rapport-reseau-de-campus",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-reseau-de-campus.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport réseau opérateur",
    slug: "rapport-reseau-operateur",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-reseau-operateur.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport service de messagerie",
    slug: "rapport-service-de-messagerie",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-service-de-messagerie.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport Téléphonie IP",
    slug: "rapport-telephonie-ip",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-telephonie-ip.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport TinyCA",
    slug: "rapport-tinyca",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-tinyca.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Rapport virtualisation",
    slug: "rapport-virtualisation",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/rapport-virtualisation.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "Réagir face à une cyberattaque",
    slug: "reagir-face-a-une-cyber-attaque",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/reagir-face-a-une-cyber-attaque.pdf",
    category: "Rapport PDF",
    format: "PDF"
  },
  {
    title: "WireGuard et OpenVPN",
    slug: "wireguard-et-openvpn",
    description: "Rapport PDF consultable en ligne et téléchargeable.",
    file: "/reports/wireguard-et-openvpn.pdf",
    category: "Rapport PDF",
    format: "PDF"
  }
];

export const githubFallback = {
  username: "fsarr10",
  url: "https://github.com/fsarr10",
  note: "Les données GitHub dynamiques peuvent être temporairement indisponibles en cas de limite API."
};

export const focusIcons = [AppWindow, ServerCog, ShieldCheck, Network, LockKeyhole, CloudCog];
