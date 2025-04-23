import Link from 'next/link';
import { getTranslations } from '@/lib/getTranslations';

interface PageProps {
  params: { lang: string };
}

interface Project {
  id: string;
  title: Record<string, string>;
  description: Record<string, string>;
}

import { projects as projectsList } from '@/lib/projects';
export default async function ProjectsPage({ params }: PageProps) {
  const { lang } = params;
  const t = getTranslations(lang);
  const projects: Project[] = projectsList;

  return (
    <div>
      <h1 className="text-4xl font-bold">{t.projects.title}</h1>
      <p className="mt-4">{t.projects.description}</p>
      <ul className="mt-6 list-disc list-inside">
        {projects.map(project => (
          <li key={project.id} className="mt-2">
            <Link href={`/${lang}/projects/${project.id}`} className="text-primary hover:underline">
              {project.title[lang] || project.title.en}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}