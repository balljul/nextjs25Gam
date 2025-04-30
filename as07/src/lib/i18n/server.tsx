import { translations } from "./translations";

export async function getTranslations(locale: "en" | "de" = "en") {
  return translations[locale];
}
