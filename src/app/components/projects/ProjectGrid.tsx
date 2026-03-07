import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          category={project.category}
          description={project.description}
        />
      ))}
    </div>
  );
}