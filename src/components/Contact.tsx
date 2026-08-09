"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Github, Linkedin, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { DownloadCVButton } from "@/components/DownloadCVButton";
import { useLanguage } from "@/components/Providers";
import { Section } from "@/components/Section";
import { identity } from "@/data/portfolio";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import { externalLinkProps } from "@/lib/utils";

export function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<string | null>(null);
  const whatsappUrl = `https://wa.me/${identity.whatsapp.replace(/\D/g, "")}`;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { fullName: "", email: "", company: "", subject: "", message: "", website: "" }
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      const data = await response.json().catch(() => ({ message: "Erreur inattendue." }));
      if (!response.ok) {
        setStatus(data.message || "Le message n'a pas pu être envoyé.");
        return;
      }
      setStatus(data.message);
      reset();
    } catch {
      setStatus(t("Impossible d'envoyer le message pour le moment. Vous pouvez utiliser l'email ou WhatsApp.", "Unable to send the message right now. You can use email or WhatsApp."));
    }
  };

  return (
    <Section id="contact">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan">Contact</p>
          <h2 className="section-title">{t("Travaillons ensemble", "Let’s work together")}</h2>
          <p className="muted mt-5 leading-8">
            {t(
              "Vous avez un projet, une opportunité ou une idée à développer ? Je suis disponible pour échanger et étudier de nouvelles collaborations.",
              "Do you have a project, opportunity or idea to build? I am available to discuss and explore new collaborations."
            )}
          </p>
          <div className="mt-7 grid gap-3 text-sm">
            <a href={`mailto:${identity.email}`} className="inline-flex items-center gap-3"><Mail className="h-4 w-4 text-cyan" /> {identity.email}</a>
            <a href={identity.linkedin} {...externalLinkProps} className="inline-flex items-center gap-3"><Linkedin className="h-4 w-4 text-cyan" /> LinkedIn</a>
            <a href={identity.github} {...externalLinkProps} className="inline-flex items-center gap-3"><Github className="h-4 w-4 text-cyan" /> GitHub</a>
            <a href={whatsappUrl} {...externalLinkProps} className="inline-flex items-center gap-3"><MessageCircle className="h-4 w-4 text-cyan" /> {identity.whatsapp}</a>
            <span className="inline-flex items-center gap-3"><MapPin className="h-4 w-4 text-cyan" /> Sénégal</span>
          </div>
          <div className="mt-7">
            <DownloadCVButton variant="ghost" />
          </div>
        </div>
        <form
          className="glass rounded-lg p-5"
          onSubmit={handleSubmit(onSubmit, () => setStatus(t("Veuillez corriger les champs indiqués.", "Please fix the highlighted fields.")))}
          noValidate
        >
          <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("website")} aria-hidden="true" />
          <div className="grid gap-4 md:grid-cols-2">
            <Field label={t("Nom complet", "Full name")} error={errors.fullName?.message}>
              <input {...register("fullName")} className="input" />
            </Field>
            <Field label={t("Adresse email", "Email address")} error={errors.email?.message}>
              <input type="email" {...register("email")} className="input" />
            </Field>
            <Field label={t("Entreprise", "Company")} optional error={errors.company?.message}>
              <input {...register("company")} className="input" />
            </Field>
            <Field label={t("Sujet", "Subject")} error={errors.subject?.message}>
              <input {...register("subject")} className="input" />
            </Field>
          </div>
          <Field label="Message" error={errors.message?.message} className="mt-4">
            <textarea {...register("message")} rows={6} className="input resize-none" />
          </Field>
          {status ? <p className="mt-4 rounded-lg bg-cyan/10 p-3 text-sm text-cyan">{status}</p> : null}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-cyan px-5 py-3 text-sm font-semibold text-ink disabled:cursor-wait disabled:opacity-70"
          >
            <Send className="h-4 w-4" />
            {isSubmitting ? t("Envoi en cours...", "Sending...") : t("Envoyer le message", "Send message")}
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({
  label,
  optional,
  error,
  className,
  children
}: {
  label: string;
  optional?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const { t } = useLanguage();
  return (
    <label className={`block ${className || ""}`}>
      <span className="mb-2 block text-sm font-medium">
        {label} {optional ? <span className="text-slate-400">{t("(facultatif)", "(optional)")}</span> : null}
      </span>
      {children}
      {error ? <span className="mt-1 block text-sm text-red-300">{error}</span> : null}
    </label>
  );
}
