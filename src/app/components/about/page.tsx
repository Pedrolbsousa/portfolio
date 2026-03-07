import {
  FaReact,
  FaWordpress,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaNodeJs,
  FaPenNib,
  FaPalette,
} from "react-icons/fa";

import {
  SiJavascript,
  SiDjango,
  SiTypescript,
  SiPostgresql,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "NextJS", icon: SiNextdotjs },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "React JS", icon: FaReact },
  { name: "Wordpress", icon: FaWordpress },
  { name: "Javascript", icon: SiJavascript },
  { name: "Html5", icon: FaHtml5 },
  { name: "Css3", icon: FaCss3Alt },
  { name: "Github", icon: FaGithub },
  { name: "Django", icon: SiDjango },
  { name: "Node JS", icon: FaNodeJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Redux", icon: SiRedux },
  { name: "Adobe Photoshop", icon: FaPenNib },
  { name: "Adobe Illustrator", icon: FaPalette },
];

const loopSkills = [...skills, ...skills];

export default function AboutPage() {
  return (
    <main id="About"className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#7d6bff]">
              Sobre mim
            </p>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Tecnologia, design e soluções digitais.
            </h1>
          </div>

          <div>
            <p className="text-base leading-8 text-white/75 md:text-lg">
              Sou apaixonado por tecnologia, design e criação de soluções
              digitais. Minha formação em Desenvolvimento Web Full-Stack,
              junto aos estudos em Sistemas da Informação, Design Gráfico e
              minha vivência em suporte de TI, me ajudam a enxergar projetos
              de forma mais completa — da estrutura técnica à experiência
              final do usuário. Tenho foco em desenvolvimento com NextJS,
              Tailwind, React, TypeScript, JavaScript, Node.js e SQL, sempre
              buscando construir aplicações modernas, eficientes e intuitivas.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.4em] text-[#7d6bff]">
              Skills
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Minhas Skills
            </h2>
          </div>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black to-transparent" />

            <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-12">
              {loopSkills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={`${skill.name}-${index}`}
                    className="flex min-w-[120px] flex-col items-center justify-center gap-4"
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-4xl text-white transition hover:border-[#7d6bff] hover:text-[#7d6bff]">
                      <Icon />
                    </div>

                    <span className="text-center text-sm font-medium text-white/85">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}