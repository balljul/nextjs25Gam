"use client";
import { createContext, useContext, ReactNode } from "react";
import { translations as allTranslations } from "./translations";

type Language = "en" | "de";
type Translations = typeof allTranslations.en;

interface I18nContextType {
  locale: Language;
  t: Translations;
}

const I18nContext = createContext<I18nContextType>({
  locale: "en",
  t: allTranslations.en,
});

export function I18nProvider({
  children,
  locale,
  translations
}: {
  children: ReactNode;
  locale: Language;
  translations: Translations;
}) {
  return (
    <I18nContext.Provider value={{ locale, t: translations }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
