import { Project } from "../types";

// Additional project for team management
export const projects: Project[] = [
  {
    id: "4",
    title: "Software Development Team Lead",
    description: "Leading a team of developers on various projects since 2024.",
    longDescription: "Since the beginning of 2024, I've been managing a team of up to 4 developers, overseeing project planning, code reviews, and ensuring timely delivery of high-quality software solutions.",
    image: "/images/team-lead.jpg",
    technologies: ["Project Management", "Code Review", "Agile Methodology", "Team Leadership"],
    date: "2024-01-01",
    github: "https://github.com/balljul",
    tags: ["leadership", "management", "team"]
  },
  {
    id: "1",
    title: "Laravel & Livewire Application",
    description: "Full-stack application with modern design and robust database architecture.",
    longDescription: "A comprehensive web application built for Great Big Value GmbH using Laravel and Livewire. The project included Figma design, database architecture, and deployment with Docker Compose.",
    image: "/images/laravel-app.jpg",
    technologies: ["Laravel", "Livewire", "PHP", "MySQL", "Docker", "Figma"],
    date: "2023-08-15",
    github: "https://github.com/balljul",
    tags: ["backend", "frontend", "full-stack", "laravel"]
  },
  {
    id: "2",
    title: "WordPress Client Websites",
    description: "Custom WordPress sites built for Pixelpoint's clients.",
    longDescription: "Developed and designed customer websites using WordPress during my internship at Pixelpoint multimedia werbe GmbH. Implemented custom designs created in Adobe XD.",
    image: "/images/wordpress-sites.jpg",
    technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript", "Adobe XD"],
    date: "2023-07-15",
    github: "https://github.com/balljul",
    tags: ["wordpress", "frontend", "design"]
  },
  {
    id: "3",
    title: "Google Apps Script Tools",
    description: "Custom automation tools built with Google Apps Script.",
    longDescription: "Developed automation tools for Great Big Value GmbH using Google Apps Script to optimize internal processes and data management.",
    image: "/images/apps-script.jpg",
    technologies: ["Google Apps Script", "JavaScript", "Google Workspace"],
    date: "2022-10-15",
    github: "https://github.com/balljul",
    tags: ["automation", "javascript", "google"]
  }
];
