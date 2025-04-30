import { getTranslations } from "@/lib/i18n/server";
import ContactContent from "@/components/ContactContent";

export default async function Contact({ params }: { params: { locale: string } }) {
  const locale = params.locale as "en" | "de";
  const translations = await getTranslations(locale);

  return <ContactContent translations={translations} locale={locale} />;
}
