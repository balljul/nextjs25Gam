import { translations } from "./translations";

/**
 * Retrieves translations for a given locale, falling back to English if unavailable.
 * @param locale - The locale code (e.g., 'en', 'de').
 */
export async function getTranslations(locale: string = "en") {
  // Return translations if locale supported, otherwise default to English
  return translations[locale as "en" | "de"] ?? translations["en"];
}
