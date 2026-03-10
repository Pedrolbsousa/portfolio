import { services } from "@/data/projects";

export default function ServicosPage() {
  return (
    <main id="servicos" className="min-h-screen bg-[#0b0b0f] text-white">
      <section className="bg-[#f3f3f3] text-black">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#5f4cff]">
                Serviços
              </p>
              <h1 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
                O que eu posso
                <span className="block">construir para você.</span>
              </h1>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-black/65 md:text-base">
              Soluções digitais com foco em performance, experiência do usuário
              e organização visual. A proposta aqui é apresentar seus serviços
              de forma mais premium, semelhante à referência.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group flex flex-col items-center text-center"
              >
                <div className="mb-6 flex h-40 w-full items-center justify-center overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                  <div
                    className={`h-24 w-24 rounded-full border-2 ${
                      index % 3 === 0
                        ? "border-[#3f7f64]"
                        : index % 3 === 1
                          ? "border-[#5f4cff]"
                          : "border-[#b14d8c]"
                    }`}
                  />
                </div>

                <div className="w-full border-t border-black/10 pt-4">
                  <h2 className="text-base font-bold">{service.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-black/45">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#3f7f64]" />
            <span className="h-2 w-2 rounded-full bg-[#111111]" />
            <span className="h-2 w-2 rounded-full bg-[#5f4cff]" />
            <span className="h-2 w-2 rounded-full bg-[#111111]" />
            <span className="h-2 w-2 rounded-full bg-[#b14d8c]" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.75fr_0.75fr_1.5fr]">
          <article className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[#111111]">
            <div className="absolute left-6 top-6 text-xs font-semibold tracking-[0.3em] text-white/60">
              • 01
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-20 w-20 border-b-[28px] border-l-[20px] border-r-[20px] border-b-white border-l-transparent border-r-transparent opacity-90" />
            </div>

            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                Front-end
              </p>
              <h3 className="mt-3 text-3xl font-black leading-none">
                Interfaces modernas
              </h3>
            </div>
          </article>

          <article className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[#2a2a2f]">
            <div className="absolute right-6 top-6 text-xs font-semibold tracking-[0.3em] text-white/60">
              • 02
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-24 w-24 rounded-full border-[10px] border-white border-t-transparent" />
            </div>

            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                Back-end
              </p>
              <h3 className="mt-3 text-3xl font-black leading-none">
                APIs e integrações
              </h3>
            </div>
          </article>

          <article className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[#ececec] text-black">
            <div className="absolute left-6 top-6 text-xs font-semibold tracking-[0.3em] text-black/50">
              • 03
            </div>

            <div className="absolute inset-0">
              <div className="absolute inset-x-10 top-10 bottom-10 border-[10px] border-[#5f4cff]" />
            </div>

            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-xs uppercase tracking-[0.35em] text-black/40">
                Full-stack
              </p>
              <h3 className="mt-3 text-3xl font-black leading-none md:text-4xl">
                Soluções completas para produtos digitais
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-black/60">
                Do layout à integração com dados, a proposta é criar páginas,
                sistemas e experiências digitais com visual forte e estrutura
                sólida.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}