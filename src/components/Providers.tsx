"use client";

import { ThemeProvider } from "next-themes";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Locale } from "@/types/portfolio";

type LanguageContextValue = {
  locale: Locale;
  toggleLocale: () => void;
  t: (fr: string, en: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function Providers({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("fr");

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      toggleLocale: () => setLocale((current) => (current === "fr" ? "en" : "fr")),
      t: (fr: string, en: string) => (locale === "fr" ? fr : en)
    }),
    [locale]
  );

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
    </ThemeProvider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside Providers");
  }
  return context;
}
