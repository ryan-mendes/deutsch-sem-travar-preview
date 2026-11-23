import { MessageCircle, Sparkles, TrendingUp, Users } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { pilares } from "@/lib/conteudo";

const ICONES = [MessageCircle, Users, Sparkles, TrendingUp];

/** Split: título fixo à esquerda, cards à direita (um em destaque no degradê da marca). */
export default function Pilares() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">O jeito da Fran</p>
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-primary-strong">
            Alemão que você <span className="text-gradient">usa de verdade</span>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
            Nada de decorar regra solta. As aulas misturam gramática, cultura, música e situações reais, para você perder o medo de falar.
          </p>
        </Reveal>
        <ul className="grid gap-5 sm:grid-cols-2">
          {pilares.map((p, i) => {
            const Icon = ICONES[i % ICONES.length];
            const destaque = i === 1;
            return (
              <Reveal as="li" key={p.titulo} delay={(i % 2) * 0.08} className={i % 2 === 1 ? "sm:translate-y-10" : ""}>
                <div
                  className={`h-full rounded-[1.75rem] p-7 transition duration-500 hover:-translate-y-1 ${
                    destaque ? "border-2 border-primary-strong bg-vivid shadow-sticker" : "border border-ink/[0.07] bg-surface hover:shadow-card-hover"
                  }`}
                >
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl ${destaque ? "bg-white text-cta" : "bg-tint text-primary-strong"}`}>
                    <Icon size={22} />
                  </span>
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
