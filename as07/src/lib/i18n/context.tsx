"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { translations } from "./translations";

type Language = "en" | "de";
type Translations = typeof translations.en;

interface I18nContextType {
  language: Language;
  t: Translations;
  changeLanguage: (lang: Language) => void;
}

const defaultContext: I18nContextType = {
  language: "en",
  t: translations.en,
  changeLanguage: () => {},
};

const I18nContext = createContext<I18nContextType>(defaultContext);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [t, setT] = useState<Translations>(translations.en);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    setT(translations[lang]);
  };

  return (
    <I18nContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
