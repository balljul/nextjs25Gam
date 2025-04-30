import { getTranslations } from "@/lib/i18n/server";
import ProjectDetailContent from "@/components/ProjectDetailContent";
import { projects } from "@/lib/utils/data";
import { notFound } from "next/navigation";

export default async function ProjectDetail({
  params
}: {
  params: { locale: string; id: string }
}) {
  const locale = params.locale as "en" | "de";
  const translations = await getTranslations(locale);
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailContent
    translations={translations}
    locale={locale}
    project={project}
  />;
}
