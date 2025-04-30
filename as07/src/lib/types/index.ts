export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  date: string;
  link?: string;
  github?: string;
  tags: string[];
}
