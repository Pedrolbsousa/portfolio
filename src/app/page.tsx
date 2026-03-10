import AboutPage from "./components/about/page";
import ContatoPage from "./components/contato/page";
import ProjectGird from "./components/projects/ProjectGrid";
import ServicosPage from "./components/servicos/page";
import Image from "next/image";


export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#111111] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(95,76,255,0.18),transparent_35%),radial-gradient(circle_at_right,rgba(95,76,255,0.14),transparent_30%)]" />

      <div className="absolute inset-0 grid grid-cols-12 opacity-20">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-l border-white/10" />
        ))}
      </div>

      <header className="relative z-10 border-b border-white/10">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Image
            src="/logo_PEDROLIMADEV_BK.png"
            alt="Logo Pedro Lima Dev"
            width={220}
            height={82}
            className="h-auto w-[200px] md:w-[220px]"
            priority
          />

          <nav className="hidden items-center gap-10 text-sm uppercase tracking-[0.25em] text-white/70 md:flex">
            <a href="#projetos" className="transition hover:text-white">Projetos</a>
            <a href="#About" className="transition hover:text-white">Sobre</a>
            <a href="#servicos" className="transition hover:text-white">Serviços</a>
            <a href="#contato" className="transition hover:text-white">Contato</a>
          </nav>

          <a
            href="#contato"
            className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:border-[#5f4cff] hover:bg-[#5f4cff]"
          >
            Falar comigo
          </a>
        </div>
      </header>

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-[#7d6bff]">
            Designer • Front-end • Portfólio
          </p>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Desenvolvendo experiências
            <span className="block text-[#6c5cff]">digitais.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-white/70 md:text-lg">
            Sou desenvolvedor web full-stack, formado pela Kenzie Academy Brasil, com
            estudos em Sistemas da Informação, Design Gráfico e base técnica em informática.
            Tenho foco em criar aplicações modernas, intuitivas e eficientes com Next.js,
            React, TypeScript, Node.js e SQL.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="rounded-full bg-[#5f4cff] px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:scale-[1.02]"
            >
              Ver projetos
            </a>
            <a
              href="#sobre"
              className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Sobre mim
            </a>
          </div>

          <div className="mt-16 flex items-center gap-8 text-xs uppercase tracking-[0.25em] text-white/45">
            <span>UI Design</span>
            <span>Branding</span>
            <span>Websites</span>
          </div>
        </div>

        <div className="relative flex min-h-[540px] items-end justify-end lg:min-h-[720px]">
          <div className="absolute inset-y-0 right-0 w-[36%] bg-[#5f4cff]" />

          <div className="absolute left-0 top-10 h-24 w-24 rounded-full border border-white/15 bg-black/30 backdrop-blur-sm" />
          <div className="absolute bottom-10 left-10 h-14 w-14 border border-white/20" />
          <div className="absolute bottom-24 right-14 h-20 w-20 rounded-full border-[10px] border-white/80 border-t-transparent" />
          <div className="absolute bottom-28 left-1/2 h-0 w-0 -translate-x-1/2 border-l-[20px] border-r-[20px] border-t-[32px] border-l-transparent border-r-transparent border-t-white/90" />

          <div className="relative z-10 h-[520px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm lg:h-[680px]">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />

            <div className="relative z-10 h-[520px] w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl lg:h-[680px]">
              <Image
                src="/BG.png"
                alt="Plano de fundo"
                fill
                priority
                className="object-cover grayscale"
              />

              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute inset-0 flex items-end justify-center p-6 md:p-10">
                <Image
                  src="/Pedro Lima.png"
                  alt="Pedro Lima"
                  width={520}
                  height={640}
                  className="h-auto max-h-full w-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProjectGird />
      <AboutPage />
      <ServicosPage />
      <ContatoPage />
    </main>
  );
}