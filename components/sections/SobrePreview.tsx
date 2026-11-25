import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { img } from "@/lib/imagens";
import { temas } from "@/lib/conteudo";

export default function SobrePreview() {
  return (
    <section className="relative overflow-hidden bg-surface py-16 sm:py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:gap-14 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-[300px] sm:max-w-md">
          <div className="relative aspect-[4/5] sm:-rotate-2 overflow-hidden rounded-[2rem] border-4 border-white shadow-panel">
            <Image src={img.franLivros} alt="Francielle sentada no tapete, sorrindo, cercada de livros em alemão" sizes="(min-width: 1024px) 440px, 90vw" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-3 w-28 rotate-6 sm:-bottom-8 overflow-hidden rounded-2xl border-4 border-white shadow-panel sm:-right-10 sm:w-44">
            <Image src={img.franBerlimTorre} alt="Fran apontando para a Torre de TV de Berlim" sizes="176px" className="h-auto w-full" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] sm:tracking-[0.25em] text-primary">Quem sou eu</p>
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-primary-strong">
            Francielle Gonçalves, a <span className="marca-texto">Lehrerin Fran</span>
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Professora de alemão, física pela UNIFESP e fundadora da MundArt Idiomas e do Deutsch sem Travar. Bolsista do Goethe-Institut em Berlim, trabalhou
              na Schuler como física, em Göppingen. Saí da Favela Naval, em Diadema, e cheguei até a Alemanha.
            </p>
            <p>Dando aulas, percebi que cada aluno aprende de um jeito. Dessa descoberta nasceu a Metodologia Camaleão: o ensino muda para se encaixar em você.</p>
          </div>
          <ul className="mt-7 flex flex-wrap gap-2">
            {temas.slice(0, 7).map((t) => (
              <li key={t} className="rounded-full border border-primary-strong/15 bg-white px-3.5 py-1.5 text-sm font-semibold text-primary-strong">
                {t}
              </li>
            ))}
          </ul>
          <Link href="/sobre" className="group mt-9 inline-flex items-center gap-2 font-semibold text-cta">
            Conhecer a história da Fran
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
