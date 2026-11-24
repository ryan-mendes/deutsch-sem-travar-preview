import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/motion/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import ProdutoCard from "@/components/ui/ProdutoCard";
import Bandeiras from "@/components/ui/Bandeiras";
import CtaFinal from "@/components/sections/CtaFinal";
import { ebooksAlemao, kitsProva, livro, portugues } from "@/lib/produtos";
import { img } from "@/lib/imagens";
import { links, marca } from "@/lib/site";

export const metadata: Metadata = {
  title: `Kits e e-books de alemão | ${marca.nome}`,
  description: "Kits Prova sem Travar do A1 ao C2 (Goethe e telc), e-books de gramática, Führerschein, enfermagem e o livro de alemão personalizado da Lehrerin Fran.",
};

export default function LojaPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Kits e e-books"
        eyebrow="Materiais da Lehrerin Fran"
        title="Kits e e-books para destravar seu alemão"
        destaque={["destravar"]}
        description={
          <>
            <p>Material feito pela Fran com a Didática Camaleão: prova do A1 ao C2, gramática sem decoreba, alemão para a vida na Alemanha e um livro escrito com a sua história.</p>
            <ul className="mt-6 flex flex-wrap gap-2 text-sm font-semibold">
              {[
                ["#kits", "Kits de prova"],
                ["#livro", "Livro personalizado"],
                ["#ebooks", "E-books"],
                ["#portugues", "Português sem Travar"],
              ].map(([h, t]) => (
                <li key={h}>
                  <a href={h} className="inline-flex rounded-full border border-primary-strong/15 bg-white px-4 py-2 text-primary-strong transition hover:border-primary-strong">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </>
        }
      >
        <Image src={img.kitsTodos} alt="Os seis Kits Prova sem Travar, do A1 ao C2" priority sizes="(min-width: 1024px) 480px, 90vw" className="mx-auto h-auto w-full max-w-md rotate-2 rounded-[1.75rem] border-2 border-primary-strong shadow-sticker" />
      </PageHero>

      <section id="kits" className="scroll-mt-28 bg-surface pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <SectionTitle
            eyebrow="Kit Prova sem Travar · Goethe e telc"
            title={
              <>
                Escolha o seu <span className="text-gradient">nível</span>
              </>
            }
            description="Como funciona cada parte, cronograma semana a semana, roteiros para o Sprechen, modelos de Schreiben e simulados com gabarito."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {kitsProva.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={(i % 3) * 0.08}>
                <ProdutoCard p={p} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="livro" className="scroll-mt-28 bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <Reveal className="grid items-center gap-10 overflow-hidden rounded-[2.5rem] border-2 border-primary-strong bg-[#f1ebff] p-6 shadow-sticker sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Image src={livro.imagem} alt={livro.alt} sizes="(min-width: 1024px) 420px, 90vw" className="mx-auto h-auto w-full max-w-sm -rotate-2 rounded-[1.5rem] shadow-panel" />
            <div>
              <p className="inline-flex rounded-full bg-[#6c3fb5] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white">Novidade</p>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-[#3b1f6e]">
                Um livro de alemão com a <span className="text-[#6c3fb5]">SUA cara!</span>
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#3b1f6e]/80">{livro.descricao}</p>
              <ul className="mt-6 grid gap-3">
                {livro.itens.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[#3b1f6e]">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-[#6c3fb5] text-white">
                      <Check size={15} strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <p>
                  <span className="block text-sm text-[#3b1f6e]/70">Livro + cronograma</span>
                  <span className="font-display text-4xl font-bold text-[#3b1f6e]">{livro.preco}</span>
                </p>
                <Link href={`/loja/${livro.slug}`} className="group inline-flex items-center gap-3 rounded-full bg-[#6c3fb5] py-4 pl-7 pr-5 font-semibold text-white shadow-card transition hover:bg-[#5a31a0]">
                  Quero o meu livro
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white/25 transition-transform group-hover:translate-x-1">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="ebooks" className="scroll-mt-28 bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <SectionTitle
            eyebrow="E-books em PDF"
            title={
              <>
                Gramática e vida real, <span className="text-gradient">sem travar</span>
              </>
            }
            description="Guias curtos e diretos, com ponte para o português, exercícios e gabarito."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ebooksAlemao.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={(i % 4) * 0.08}>
                <ProdutoCard p={p} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="portugues" className="relative scroll-mt-28 overflow-hidden py-24 text-white md:py-32">
        <div className="bg-band absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div lang="de">
            <SectionTitle
              light
              eyebrow="Português sem Travar · für Deutschsprachige"
              title={
                <>
                  Sie lernen <span className="text-gradient-light">Portugiesisch?</span>
                </>
              }
              description="Die Fran hat auch Material für Deutschsprachige: Reiseführer für Brasilien und E-Books für brasilianisches Portugiesisch."
            />
            <p className="mt-6 flex items-center gap-3 text-white/75">
              <Bandeiras paises={["br"]} /> Brasilianisches Portugiesisch, auf Deutsch erklärt.
            </p>
            <a href={links.portugues} target="_blank" rel="noopener noreferrer" className="group mt-8 flex items-center justify-between gap-6 rounded-[1.75rem] border border-white/15 bg-white/[0.07] p-6 transition hover:bg-white/[0.12]">
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-primary-bright">Hotmart · A2–B1</span>
                <span className="mt-1 block font-display text-xl font-semibold">Brasilianisches Portugiesisch – 2 E-Books im Paket</span>
              </span>
              <ArrowUpRight className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
          <ul className="mx-auto w-full max-w-sm">
            {portugues.map((p) => (
              <li key={p.slug}>
                <ProdutoCard p={p} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaFinal titulo="Não sabe qual material escolher?" texto="Me conta seu nível e seu objetivo que eu indico o melhor caminho, seja aula, kit ou e-book." />
    </main>
  );
}
