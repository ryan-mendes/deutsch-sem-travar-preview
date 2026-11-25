import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { metodologia } from "@/lib/conteudo";
import { img } from "@/lib/imagens";

/** Metodologia Camaleão: o que é (texto da Fran) e os 5 passos. */
export default function MetodologiaCamaleao() {
  return (
    <section id="metodologia" className="relative scroll-mt-24 overflow-hidden bg-white py-16 sm:py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <Reveal>
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="min-w-0 flex-1">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary sm:tracking-[0.25em]" lang="de">
                Unsere Methode
              </p>
              <h2 className="text-[clamp(2.1rem,4.4vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-primary-strong">
                Metodologia <span className="text-gradient">Camaleão</span>
              </h2>
              <p className="mt-3 font-display text-lg font-semibold text-primary sm:text-xl">{metodologia.lema}</p>
            </div>
            <Image src={img.camaleaoSelo} alt="Selo Metodologia Camaleão com a Fran" sizes="(min-width: 640px) 160px, 96px" className="wiggle h-auto w-24 shrink-0 sm:w-40 lg:hidden" />
          </div>
          <div className="mt-6 space-y-4 leading-relaxed text-muted sm:text-lg">
            {metodologia.paragrafos.map((t) => (
              <p key={t.slice(0, 20)}>{t}</p>
            ))}
          </div>
          <figure className="mt-8 rounded-[1.5rem] border-l-4 border-cta bg-tint/60 px-6 py-5">
            <blockquote className="font-display text-xl font-semibold text-primary-strong sm:text-2xl">“{metodologia.frase}”</blockquote>
            <figcaption className="mt-1 text-sm text-muted">Lehrerin Fran</figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <Image src={img.camaleaoSelo} alt="" sizes="220px" className="pointer-events-none absolute -right-4 -top-16 hidden w-52 rotate-6 lg:block" />
          <p className="mb-4 font-display text-lg font-semibold text-primary-strong lg:mt-28">Como funciona, em 5 passos</p>
          <ol className="space-y-3">
            {metodologia.passos.map((p, i) => {
              const ultimo = i === metodologia.passos.length - 1;
              return (
                <li
                  key={p.titulo}
                  className={`flex items-start gap-4 rounded-[1.25rem] border p-4 sm:p-5 ${ultimo ? "border-primary-strong bg-primary-strong text-white" : "border-primary-strong/15 bg-surface"}`}
                >
                  <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full font-display text-lg font-bold ${ultimo ? "bg-primary-bright text-primary-strong" : "bg-primary-strong text-white"}`}>{i + 1}</span>
                  <span>
                    <span className={`block font-semibold leading-snug ${ultimo ? "text-white" : "text-primary-strong"}`}>{p.titulo}</span>
                    <span className={`mt-0.5 block text-sm leading-relaxed sm:text-base ${ultimo ? "text-white/75" : "text-muted"}`}>{p.texto}</span>
                  </span>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
