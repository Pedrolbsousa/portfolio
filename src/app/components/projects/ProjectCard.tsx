type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
};

export function ProjectCard({ title, category, description }: ProjectCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 p-6">
      <p className="text-sm text-white/60">{category}</p>
      <h3 className="mt-2 text-3xl font-bold">{title}</h3>
      <p className="mt-4 text-white/70">{description}</p>
    </article>
  );
}