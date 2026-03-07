import ProjectCard from "./ProjectCard";

const fakeProjects = [
  {
    id: "01",
    title: "Memory Flow",
    subtitle: "UI Concept",
    description: "Landing page com direção visual forte, foco em contraste e narrativa visual.",
    featured: true,
    shape: "circle" as const,
  },
  {
    id: "02",
    title: "Power Grid",
    subtitle: "Brand System",
    description: "Sistema visual com blocos modulares, editorial moderno e presença de marca.",
    shape: "square" as const,
  },
  {
    id: "03",
    title: "Ride Pulse",
    subtitle: "Creative Site",
    description: "Experiência digital com composições ousadas e destaque para tipografia.",
    shape: "circle" as const,
  },
  {
    id: "04",
    title: "Appreciate",
    subtitle: "Portfolio Mock",
    description: "Conceito visual para apresentar projetos, cases e identidade digital.",
    shape: "ring" as const,
  },
];

export default function ProjectGrid() {
  return (
    <section id="projetos" className="relative z-10 mx-auto max-w-7xl px-6 pb-20 lg:px-10">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[#7d6bff]">
            Projetos em destaque
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">
            Selected work.
          </h2>
        </div>

        <p className="max-w-xl text-sm leading-7 text-white/60 md:text-base">
          Uma seção com cards inspirados na referência: blocos altos, visual editorial,
          contraste forte e espaço para substituir os projetos fake pelos reais depois.
        </p>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40">
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6 text-xs uppercase tracking-[0.3em] text-white/70 md:px-8">
          <span>Next</span>
          <span>Projetos</span>
        </div>

        <div className="flex flex-wrap gap-6 px-6 py-6 text-xs uppercase tracking-[0.25em] text-white/45 md:px-8">
          <span className="text-white">Quiet</span>
          <span>SoundLink</span>
          <span>Comfort</span>
          <span>Accessories</span>
        </div>

        <div>
          {fakeProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="flex items-center justify-end gap-4 px-6 py-6 text-xs uppercase tracking-[0.25em] text-white/45 md:px-8">
          <span>Prev</span>
          <span className="text-white">1</span>
          <span>2</span>
          <span>3</span>
          <span className="text-white">Next</span>
        </div>
      </div>
    </section>
  );
}