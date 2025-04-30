import { getTranslations } from "@/lib/i18n/server";
import AboutContent from "@/components/AboutContent";

export default async function About({ params }: { params: { locale: string } }) {
  const locale = params.locale as "en" | "de";
  const translations = await getTranslations(locale);

  return <AboutContent translations={translations} locale={locale} />;
}
