"use client";
import { useState } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { Project } from "@/lib/types";
import { translations } from "@/lib/i18n/translations";

export default function ProjectsContent({
  translations,
  locale,
  projects
}: {
  translations: typeof translations.en;
  locale: string;
  projects: Project[];
}) {
  const t = translations;
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Extract all unique tags
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  );

  // Apply sorting
  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  // Apply filtering
  const filteredProjects = selectedTags.length === 0
    ? sortedProjects
    : sortedProjects.filter(project =>
        selectedTags.some(tag => project.tags.includes(tag))
      );

  // Handle pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">{t.projects.title}</h1>

      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        {/* Sorting Controls */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">{t.projects.sort.label}:</span>
          <div className="flex gap-2">
            <button
              onClick={() => setSortOrder("newest")}
              className={`px-3 py-1 text-sm rounded ${
                sortOrder === "newest"
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-200 dark:bg-slate-700"
              }`}
            >
              {t.projects.sort.newest}
            </button>
            <button
              onClick={() => setSortOrder("oldest")}
              className={`px-3 py-1 text-sm rounded ${
                sortOrder === "oldest"
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-200 dark:bg-slate-700"
              }`}
            >
              {t.projects.sort.oldest}
            </button>
          </div>
        </div>

        {/* Tag Filtering */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium">{t.projects.filter.label}:</span>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setSelectedTags(prev =>
                    prev.includes(tag)
                      ? prev.filter(t => t !== tag)
                      : [...prev, tag]
                  );
                  setCurrentPage(1);
                }}
                className={`px-3 py-1 text-sm rounded ${
                  selectedTags.includes(tag)
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-200 dark:bg-slate-700"
                }`}
              >
                #{tag}
              </button>
            ))}
            {selectedTags.length > 0 && (
              <button
                onClick={() => {
                  setSelectedTags([]);
                  setCurrentPage(1);
                }}
                className="px-3 py-1 text-sm rounded bg-slate-200 dark:bg-slate-700"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {currentProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              translations={t}
              locale={locale}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 text-center">
          <p>No projects match your filters. Please try different criteria.</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded ${
                currentPage === 1
                  ? "bg-slate-200 dark:bg-slate-700 cursor-not-allowed"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              {t.projects.pagination.prev}
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded ${
                  currentPage === page
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded ${
                currentPage === totalPages
                  ? "bg-slate-200 dark:bg-slate-700 cursor-not-allowed"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              {t.projects.pagination.next}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
