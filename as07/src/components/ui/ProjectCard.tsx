"use client";

import Link from "next/link";
import { Project } from "@/lib/types";
import { useI18n } from "@/lib/i18n/context";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useI18n();

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 w-full bg-slate-200">
        {/* Placeholder for image */}
        <div className="absolute inset-0 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900 text-indigo-500">
          <span className="text-lg font-semibold">{project.title}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-indigo-600">{project.title}</h3>
        <p className="text-sm mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="bg-indigo-100 dark:bg-indigo-900 text-xs px-2 py-1 rounded">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="bg-indigo-100 dark:bg-indigo-900 text-xs px-2 py-1 rounded">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-indigo-500">{new Date(project.date).toLocaleDateString()}</span>
          <Link
            href={`/projects/${project.id}`}
            className="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700 transition-colors"
          >
            {t.projects.viewDetails}
          </Link>
        </div>
      </div>
    </div>
  );
}
