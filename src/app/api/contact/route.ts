import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ message: "Veuillez corriger les champs du formulaire." }, { status: 400 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ message: "Message envoyé." });
  }

  const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;

  if (formspreeEndpoint) {
    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: parsed.data.fullName,
        email: parsed.data.email,
        company: parsed.data.company,
        subject: parsed.data.subject,
        message: parsed.data.message
      })
    });

    if (!response.ok) {
      return NextResponse.json({ message: "Le service d'envoi n'a pas accepté le message." }, { status: 502 });
    }
  }

  return NextResponse.json({
    message: formspreeEndpoint
      ? "Message envoyé avec succès."
      : "Message validé. Configurez FORMSPREE_ENDPOINT ou Resend pour activer l'envoi réel."
  });
}
