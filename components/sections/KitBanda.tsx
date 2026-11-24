import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import ProdutoCard from "@/components/ui/ProdutoCard";
import { img } from "@/lib/imagens";
import { ebooksAlemao, kitsProva, livro } from "@/lib/produtos";

/** Vitrine da Home: faixa escura com os kits A1–C2 e, abaixo, os e-books. */
export default function KitBanda() {
  return (
    <>
      <section className="relative overflow-hidden py-24 text-white md:py-32">
        <div className="bg-band absolute inset-0" />
        <div className="drift glow pointer-events-none absolute -right-[15%] top-[-30%] h-[70vmax] w-[70vmax] rounded-full opacity-60" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-lg">
            <Image src={img.kitsTodos} alt="Os seis Kits Prova sem Travar, do A1 ao C2" sizes="(min-width: 1024px) 520px, 90vw" className="h-auto w-full rotate-[-2deg] rounded-[1.75rem] shadow-panel" />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary-bright">Kit Prova sem Travar · Goethe e telc</p>
            <h2 className="text-[clamp(2.1rem,4.4vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
              Seu kit de prova, <span className="text-gradient-light">do A1 ao C2</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              Como funciona cada parte, cronograma semana a semana, roteiros para o Sprechen, modelos de Schreiben e simulados com gabarito. Escolha o seu nível:
            </p>
            <ul className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-6">
              {kitsProva.map((k) => (
                <li key={k.slug}>
                  <Link
                    href={`/loja/${k.slug}`}
                    className="flex aspect-square flex-col items-center justify-center rounded-2xl border border-white/15 bg-white/[0.07] font-display transition hover:-translate-y-1 hover:border-primary-bright hover:bg-primary-bright hover:text-primary-strong"
                  >
                    <span className="text-2xl font-bold">{k.selo!.replace("Niveau ", "")}</span>
                    {k.preco && <span className="text-[10px] font-semibold opacity-80">{k.preco}</span>}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/loja#kits" className="group mt-9 inline-flex items-center gap-3 rounded-full bg-cta py-4 pl-7 pr-5 font-semibold text-white shadow-cta transition hover:bg-cta-soft">
              Ver os kits
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/25 transition-transform group-hover:translate-x-1">
                <ArrowRight size={16} />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal className="max-w-2xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">E-books e livro</p>
              <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-primary-strong">
                Material para <span className="text-gradient">cada momento</span>
              </h2>
            </Reveal>
            <Link href="/loja" className="group inline-flex items-center gap-2 font-semibold text-cta">
              Ver tudo <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {[livro, ...ebooksAlemao].map((p, i) => (
              <Reveal as="li" key={p.slug} delay={(i % 5) * 0.06}>
                <ProdutoCard p={p} compacto />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
