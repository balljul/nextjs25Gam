import { getTranslations } from "@/lib/i18n/server";
import ProjectsContent from "@/components/ProjectsContent";
import { projects } from "@/lib/utils/data";

export default async function Projects({ params }: { params: { locale: string } }) {
  const locale = params.locale as "en" | "de";
  const translations = await getTranslations(locale);

  return <ProjectsContent translations={translations} locale={locale} projects={projects} />;
}
