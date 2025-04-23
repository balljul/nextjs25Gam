import en from '@/locales/en.json';
import de from '@/locales/de.json';

export const translations = { en, de };

export function getTranslations(lang: string) {
  return translations[lang as 'en' | 'de'] || translations.en;
}