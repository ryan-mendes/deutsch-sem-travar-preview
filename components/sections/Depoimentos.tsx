import { Quote } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { depoimentos } from "@/lib/conteudo";

/** Depoimentos reais de alunos. Não renderiza nada enquanto a lista em lib/conteudo.ts estiver vazia. */
export default function Depoimentos() {
  if (depoimentos.length === 0) return null;
  return (
    <section className="bg-surface py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionTitle eyebrow="Depoimentos" title={<>Quem estudou com a Fran <span className="text-gradient">conta</span></>} />
        <ul className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 no-scrollbar sm:mx-0 sm:mt-12 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {depoimentos.map((d, i) => (
            <Reveal as="li" key={d.nome + i} delay={(i % 3) * 0.08} className="w-[85%] shrink-0 snap-start sm:w-auto">
              <figure className="flex h-full flex-col rounded-[1.75rem] border border-ink/[0.07] bg-white p-6 shadow-card">
                <Quote className="text-primary-bright" size={28} />
                <blockquote className="mt-4 flex-1 leading-relaxed text-ink">{d.texto}</blockquote>
                <figcaption className="mt-5">
                  <span className="block font-semibold text-primary-strong">{d.nome}</span>
                  <span className="block text-sm text-muted">{d.contexto}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
