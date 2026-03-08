const contactLinks = {
  github: "https://github.com/Pedrolbsousa",
  email: "mailto:pedro.l.b.sousa@gmail.com",
  linkedin: "https://www.linkedin.com/in/pedro-lima-a425b158/",
  whatsapp:
    "https://wa.me/5561993960268?text=Ol%C3%A1%20Pedro,%20vim%20pelo%20seu%20portf%C3%B3lio%20e%20quero%20falar%20sobre%20um%20projeto.",
};

const directOptions = [
  {
    title: "WhatsApp direto",
    value: "Conversar agora",
    href: contactLinks.whatsapp,
    description:
      "Canal mais rápido para falar comigo sobre projetos, freelas, melhorias em sites ou novas ideias.",
  },
  {
    title: "Email profissional",
    value: "pedro.l.b.sousa@gmail.com",
    href: contactLinks.email,
    description:
      "Ideal para propostas mais detalhadas, orçamentos, documentos e contatos profissionais.",
  },
  {
    title: "GitHub",
    value: "github.com/Pedrolbsousa",
    href: contactLinks.github,
    description:
      "Veja meus projetos, estrutura de código, repositórios e parte da minha evolução como desenvolvedor.",
  },
  {
    title: "LinkedIn",
    value: "Pedro Lima",
    href: contactLinks.linkedin,
    description:
      "Conecte-se comigo para networking, oportunidades profissionais e acompanhar minha trajetória.",
  },
];

export default function ContatoPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#161616] text-white">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[42vh] w-[36%] bg-[#222222]" />
        <div className="absolute left-[36%] top-0 h-[42vh] w-[38%] bg-[#5f4cff]" />
        <div className="absolute right-0 top-0 h-[42vh] w-[26%] bg-[#4b39ff]" />
        <div className="absolute bottom-0 left-0 h-[58vh] w-[22%] bg-[#202020]" />
        <div className="absolute bottom-0 left-[22%] h-[58vh] w-[28%] bg-[#1b1b1b]" />
        <div className="absolute bottom-0 left-[50%] h-[58vh] w-[50%] bg-[#f2f2f2]" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:120px_120px] opacity-30" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-16 lg:px-10">
        <div className="relative w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#050505] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
          <div className="grid min-h-[760px] grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-8 md:p-12 lg:p-16">
              <p className="text-xs uppercase tracking-[0.4em] text-[#7d6bff]">
                Contato
              </p>

              <h1 className="mt-6 text-4xl font-black leading-none tracking-tight md:text-6xl">
                Vamos tirar
                <span className="block text-[#ffffff]">sua ideia do papel.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
                Estou disponível para conversar sobre sites, landing pages,
                interfaces modernas, aplicações web e melhorias em projetos já
                existentes. Escolha o canal que for melhor para você.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={contactLinks.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#5f4cff] px-7 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:scale-[1.02] hover:bg-[#6e5cff]"
                >
                  Falar via WhatsApp
                </a>

                <a
                  href={contactLinks.email}
                  className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white/85 transition hover:border-white/40 hover:text-white"
                >
                  Enviar email
                </a>
              </div>

              <div className="mt-14 h-px w-full bg-white/10" />

              <div className="mt-12 grid gap-8 md:grid-cols-2">
                {directOptions.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group block border-b border-white/10 pb-6 transition hover:border-[#5f4cff]"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                      {item.title}
                    </p>

                    <p className="mt-3 text-xl font-bold text-white transition group-hover:text-[#7d6bff]">
                      {item.value}
                    </p>

                    <p className="mt-3 max-w-md text-sm leading-7 text-white/55">
                      {item.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            <div className="relative flex items-end justify-center overflow-hidden border-t border-white/10 lg:border-l lg:border-t-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),transparent_55%)]" />
              <div className="absolute left-10 top-10 h-24 w-24 rounded-full border border-white/10" />
              <div className="absolute bottom-10 left-10 h-16 w-16 border border-white/10" />
              <div className="absolute right-12 top-16 h-20 w-20 rounded-full border-[10px] border-white/60 border-t-transparent" />

              <div className="relative z-10 flex h-full w-full flex-col justify-between p-8 md:p-10">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/35">
                      Contato rápido
                    </p>
                    <p className="mt-3 text-2xl font-black md:text-3xl">
                      Pedro Lima
                    </p>
                    <p className="mt-2 text-sm text-white/45">
                      Desenvolvedor Full-Stack
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                      Disponível para
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/60">
                      Freelance
                      <br />
                      Landing Pages
                      <br />
                      Sites e sistemas web
                    </p>
                  </div>
                </div>

                <div className="my-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/35">
                    Fale direto comigo no WhatsApp
                  </p>

                  <h2 className="mt-5 text-3xl font-black leading-tight md:text-4xl">
                    Respondo mais rápido
                    <span className="block text-[#7d6bff]">por mensagem.</span>
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-white/60">
                    Se quiser agilizar o contato, me chame no WhatsApp para
                    falar sobre orçamento, prazo, estrutura do projeto ou
                    melhorias no seu site.
                  </p>

                  <a
                    href={contactLinks.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:border-[#5f4cff] hover:bg-[#5f4cff]"
                  >
                    Chamar no WhatsApp
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.25em] text-white/35">
                  <span>GitHub</span>
                  <span>Email</span>
                  <span>LinkedIn</span>
                  <span>WhatsApp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}