import type { Metadata } from "next";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Reports } from "@/components/Reports";

export const metadata: Metadata = {
  title: "Rapports | Mouhamadou Falilou Sarr",
  description: "Rapports académiques et techniques de Mouhamadou Falilou Sarr en PDF et documents Word."
};

export default function ReportsPage() {
  return (
    <>
      <a href="#rapports" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-cyan focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink">
        Aller aux rapports
      </a>
      <Navbar />
      <main className="pt-20">
        <Reports />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
