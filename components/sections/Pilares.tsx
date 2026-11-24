import Image from "next/image";
import { Eye, Footprints, ShoppingBasket, Users } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { pilares } from "@/lib/conteudo";
import { img } from "@/lib/imagens";

const ICONES = [Footprints, ShoppingBasket, Eye, Users];

/** Didática Camaleão: título fixo à esquerda com o mascote, os 4 pilares à direita. */
export default function Pilares() {
  return (
    <section className="bg-white py-16 sm:py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:gap-14 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] sm:tracking-[0.25em] text-primary">Didática Camaleão</p>
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-primary-strong">
            O alemão que <span className="text-gradient">se adapta a você</span>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
            Como o camaleão, o ensino muda para se encaixar em você, e não o contrário. É a base do Deutsch sem Travar.
          </p>
          <div className="mt-8 inline-flex items-center gap-4 rounded-3xl bg-primary-strong p-3 pr-6 shadow-card">
            <Image src={img.camaleao} alt="Mascote da Metodologia Camaleão com a Fran" sizes="96px" className="h-20 w-20 rounded-2xl object-cover" />
            <p className="font-display text-lg font-semibold leading-tight text-white">
              Metodologia
              <br />
              <span className="text-primary-bright">Camaleão</span>
            </p>
          </div>
        </Reveal>
        <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 no-scrollbar scroll-px-4 sm:mx-0 sm:grid sm:overflow-visible sm:px-0 sm:pb-0 sm:grid-cols-2 sm:gap-5">
          {pilares.map((p, i) => {
            const Icon = ICONES[i % ICONES.length];
            const destaque = i === 1;
            return (
              <Reveal as="li" key={p.titulo} delay={(i % 2) * 0.08} className={`w-[80%] shrink-0 snap-start sm:w-auto ${i % 2 === 1 ? "sm:translate-y-10" : ""}`}>
                <div
                  className={`h-full rounded-[1.75rem] p-6 transition sm:p-7 duration-500 hover:-translate-y-1 ${
                    destaque ? "border-2 border-primary-strong bg-vivid shadow-sticker" : "border border-ink/[0.07] bg-surface hover:shadow-card-hover"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`grid h-12 w-12 place-items-center rounded-2xl ${destaque ? "bg-white text-cta" : "bg-tint text-primary-strong"}`}>
                      <Icon size={22} />
                    </span>
                    <span className="font-display text-sm font-bold text-primary-strong/40">Pilar 0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-snug text-primary-strong">{p.titulo}</h3>
                  <p className={`mt-3 leading-relaxed ${destaque ? "text-primary-strong/80" : "text-muted"}`}>{p.texto}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
