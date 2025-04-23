export interface Project {
  id: string;
  title: Record<string, string>;
  description: Record<string, string>;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: { en: 'Weather App', de: 'Wetter App' },
    description: {
      en: 'A weather forecasting application.',
      de: 'Eine Wettervorhersage-Anwendung.',
    },
  },
  {
    id: 'project-2',
    title: { en: 'ToDo List', de: 'Aufgabenliste' },
    description: {
      en: 'A simple todo list app.',
      de: 'Eine einfache Aufgabenlisten-App.',
    },
  },
  {
    id: 'future-arduino',
    title: { en: 'Future Arduino Project', de: 'Future Arduino Project' },
    description: { en: 'Coming soon.', de: 'Kommt bald.' },
  },
  {
    id: 'future-glsl',
    title: { en: 'Future GLSL Project', de: 'Future GLSL Project' },
    description: { en: 'Coming soon.', de: 'Kommt bald.' },
  },
  {
    id: 'future-unity2d',
    title: { en: 'Future Unity 2D Game', de: 'Future Unity 2D Game' },
    description: { en: 'Coming soon.', de: 'Kommt bald.' },
  },
];