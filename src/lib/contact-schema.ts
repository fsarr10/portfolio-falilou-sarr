import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Le nom complet doit contenir au moins 2 caractères."),
  email: z.string().email("Veuillez saisir une adresse email valide."),
  company: z.string().max(120, "Le nom de l'entreprise est trop long.").optional(),
  subject: z.string().min(3, "Le sujet doit contenir au moins 3 caractères."),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères."),
  website: z.string().max(0, "Votre message n'a pas pu être envoyé.")
});

export type ContactFormValues = z.infer<typeof contactSchema>;
