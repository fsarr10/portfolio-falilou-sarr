import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { identity, siteUrl } from "@/data/portfolio";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });

const title = "Mouhamadou Falilou Sarr | Développeur Full Stack, DevOps et Cybersécurité";
const description =
  "Portfolio de Mouhamadou Falilou Sarr, développeur Full Stack et DevOps basé au Sénégal, spécialisé dans les applications web et mobiles, le cloud, l'automatisation et la cybersécurité.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Mouhamadou Falilou Sarr",
    "Développeur Full Stack Sénégal",
    "DevOps Sénégal",
    "Cybersécurité",
    "Next.js",
    "React",
    "Portfolio développeur"
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Portfolio Mouhamadou Falilou Sarr",
    locale: "fr_SN",
    type: "website",
    images: [{ url: "/images/og-falilou-sarr.svg", width: 1200, height: 630, alt: title }]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-falilou-sarr.svg"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: identity.name,
      jobTitle: identity.title,
      url: siteUrl,
      address: { "@type": "PostalAddress", addressCountry: "SN" },
      sameAs: [identity.github]
    },
    {
      "@type": "WebSite",
      name: "Portfolio Mouhamadou Falilou Sarr",
      url: siteUrl,
      inLanguage: "fr"
    }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
        <Script id="portfolio-jsonld" type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </Script>
      </body>
    </html>
  );
}
