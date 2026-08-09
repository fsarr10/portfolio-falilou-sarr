import type { LucideIcon } from "lucide-react";

export type Locale = "fr" | "en";

export type Project = {
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  image: string;
  liveUrl: string;
  githubUrl?: string;
  category: string;
  filter: "Full Stack" | "Web" | "Mobile" | "DevOps" | "Cybersécurité";
  technologies: string[];
  featured: boolean;
  alt: string;
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type EducationItem = {
  title: string;
  school: string;
  location?: string;
  period?: string;
  description: string;
  type: "formation" | "future";
};

export type ExperienceItem = {
  title: string;
  type: "Projet personnel" | "Projet académique" | "Laboratoire technique";
  description: string;
  items: string[];
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Report = {
  title: string;
  slug: string;
  description: string;
  file?: string;
  externalUrl?: string;
  category: string;
  format?: "PDF" | "DOCX" | "DOC";
};
