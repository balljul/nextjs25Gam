import Link from 'next/link';
import { getTranslations } from '@/lib/getTranslations';
import { projects as projectsList } from '@/lib/projects';

interface PageProps {
  params: { lang: string; id: string };
}

interface Project {
  id: string;
  title: Record<string, string>;
  description: Record<string, string>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { lang, id } = params;
  const t = getTranslations(lang);
  const project: Project | undefined = projectsList.find(p => p.id === id);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold">{project.title[lang] || project.title.en}</h1>
      <p className="mt-4">{project.description[lang] || project.description.en}</p>
      <Link href={`/${lang}/projects`} className="block mt-6 text-primary hover:underline">
        {t.project.back}
      </Link>
    </div>
  );
}