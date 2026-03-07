type ProjectCardProps = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  featured?: boolean;
  shape?: "circle" | "square" | "ring";
};

function ProjectShape({ type = "circle" }: { type?: "circle" | "square" | "ring" }) {
  if (type === "circle") {
    return <div className="h-24 w-24 rounded-full border border-white/30" />;
  }

  if (type === "square") {
    return <div className="h-24 w-24 border border-white/30" />;
  }

  return (
    <div className="h-24 w-24 rounded-full border-[10px] border-white/80 border-t-transparent" />
  );
}

export default function ProjectCard({
  id,
  title,
  subtitle,
  description,
  featured = false,
  shape = "circle",
}: ProjectCardProps) {
  return (
    <article
      className={`flex flex-row flex-wrap items-center justify-around ${
        featured ? "bg-[#5f4cff]" : "bg-transparent"
      }`}
    >
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/55">{subtitle}</p>
        <h3 className="mt-2 text-xl font-bold uppercase text-white/80">{title}</h3>
      </div>

      <span className="text-2xl font-semibold text-white/75">{id}</span>

      <div className="flex items-center justify-center">
        <ProjectShape type={shape} />
      </div>

      <div>
        <p className="max-w-4xl text-xl uppercase tracking-[0.1500000em] text-white/45">
          {description}
        </p>

        <a
          href="#"
          className="mt-4 inline-flex items-center rounded-full border border-white/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-white/10"
        >
          Ver case →
        </a>
      </div>
    </article>
  );
}