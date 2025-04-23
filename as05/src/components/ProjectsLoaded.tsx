'use client';

import { useEffect, useState } from 'react';
import { Project } from '@/lib/types';

export default function ProjectsLoader() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const baseUrl = `${window.location.origin}`;
        const apiUrl = `${baseUrl}/api/projects`;

        console.log(`Fetching projects from: ${apiUrl}`);

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const projectsWithDates = data.map((project: any) => ({
          ...project,
          createdAt: new Date(project.createdAt)
        }));

        setProjects(projectsWithDates);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-lg border border-red-300">
        <p className="text-red-700">Error: {error}</p>
        <p className="text-sm text-red-600 mt-2">
          There was a problem fetching the projects data.
        </p>
      </div>
    );
  }

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-medium">Projects from API</h3>

      {loading ? (
        <div className="space-y-3">
          <div className="h-24 bg-indigo-50 animate-pulse rounded-lg"></div>
          <div className="h-24 bg-indigo-50 animate-pulse rounded-lg"></div>
          <div className="h-24 bg-indigo-50 animate-pulse rounded-lg"></div>
        </div>
      ) : (
        <div className="space-y-4">
          {projects.map(project => (
            <div key={project.id} className="bg-white p-4 rounded-md shadow border">
              <div className="flex justify-between items-start">
                <h4 className="text-lg font-medium">{project.name}</h4>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              <p className="text-gray-600 mt-1">{project.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                Created: {project.createdAt.toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
        <p className="text-sm text-indigo-700">
          <strong>Note:</strong> This component dynamically builds the API URL using <code>window.location.origin</code>.
          It will work correctly on any deployment without hardcoding localhost or domain names.
        </p>
      </div>
    </div>
  );
}
