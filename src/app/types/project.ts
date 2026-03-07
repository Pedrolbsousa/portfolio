export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  slug: string;
  image: string;
  featured?: boolean;
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
};