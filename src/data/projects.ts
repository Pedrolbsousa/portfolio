import type { Project } from "@/app/types/project";

export const projects: Project[] = [
  {
    id: "01",
    title: "Memory Flow",
    category: "UI Concept",
    description: "Landing page com direção visual forte, contraste alto e composição editorial moderna.",
    slug: "memory-flow",
    image: "/images/projects/project-1.jpg",
    featured: true,
  },
  {
    id: "02",
    title: "Power Grid",
    category: "Brand System",
    description: "Sistema visual com blocos modulares, tipografia marcante e presença de marca.",
    slug: "power-grid",
    image: "/images/projects/project-2.jpg",
  },
  {
    id: "03",
    title: "Ride Pulse",
    category: "Creative Site",
    description: "Experiência digital com foco em impacto visual, ritmo e navegação imersiva.",
    slug: "ride-pulse",
    image: "/images/projects/project-3.jpg",
  },
  {
    id: "04",
    title: "Appreciate",
    category: "Portfolio Mock",
    description: "Conceito visual para apresentar cases, identidade digital e projetos em destaque.",
    slug: "appreciate",
    image: "/images/projects/project-4.jpg",
  },
];