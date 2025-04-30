"use client";

import { useParams } from "next/navigation";
import { projects } from "@/lib/utils/data";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";

export default function ProjectDetail() {
  const params = useParams();
  const { t } = useI18n();

  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-3xl font-bold mb-4 text-indigo-600">Project Not Found</h1>
        <p className="mb-8">The project you're looking for doesn't exist.</p>
        <Link
          href="/projects"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
        >
          {t.projects.back}
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link
        href="/projects"
        className="inline-flex items-center text-indigo-600 mb-6 hover:text-indigo-800 transition-colors"
      >
        ← {t.projects.back}
      </Link>

      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
        <div className="relative h-64 w-full bg-slate-200">
          {/* Placeholder for image */}
          <div className="absolute inset-0 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900 text-indigo-500">
            <span className="text-lg font-semibold">{project.title}</span>
          </div>
        </div>

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2 text-indigo-600">{project.title}</h1>
          <p className="text-sm text-indigo-500 mb-4">
            {new Date(project.date).toLocaleDateString()}
          </p>

          <h2 className="text-xl font-semibold mb-2 text-indigo-500">{t.projects.description}</h2>
          <p className="mb-6">{project.longDescription || project.description}</p>

          <h2 className="text-xl font-semibold mb-2 text-indigo-500">{t.projects.technologies}</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-indigo-100 dark:bg-indigo-900 px-3 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>

          <h2 className="text-xl font-semibold mb-2 text-indigo-500">{t.projects.tags}</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span key={index} className="bg-indigo-200 dark:bg-indigo-800 px-3 py-1 rounded">
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-8">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 text-white px-4 py-2 rounded hover:bg-slate-900 transition-colors"
              >
                {t.projects.viewGithub}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
