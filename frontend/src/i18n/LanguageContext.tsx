"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import te, { Translations } from "./translations/te";
import en from "./translations/en";

type Language = "te" | "en";

const translations: Record<Language, Translations> = { te, en };

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "te",
  setLang: () => {},
  t: te,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("te");

  // Hydrate from localStorage once mounted (client-only)
  useEffect(() => {
    const stored = localStorage.getItem("dds-language") as Language | null;
    if (stored === "en" || stored === "te") {
      setLangState(stored);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("dds-language", newLang);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
