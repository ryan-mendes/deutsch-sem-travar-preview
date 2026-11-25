import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/motion/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import ProdutoCard from "@/components/ui/ProdutoCard";
import Bandeiras from "@/components/ui/Bandeiras";
import CtaFinal from "@/components/sections/CtaFinal";
import { combos, doGrupo, grupos, kitsProva, livro, portugues, TOTAL_EBOOKS, type Grupo } from "@/lib/produtos";
import { img } from "@/lib/imagens";
import { links, marca, whatsComTexto } from "@/lib/site";

export const metadata: Metadata = {
  title: `Kits e e-books de alemão | ${marca.nome}`,
  description: `Kits Prova sem Travar do A1 ao C2, kits com desconto e ${TOTAL_EBOOKS} e-books em PDF da Lehrerin Fran: provas, gramática, morar na Alemanha e alemão divertido.`,
};

const SECOES: { id: string; grupo: Grupo }[] = [
  { id: "provas", grupo: "prova" },
  { id: "morar", grupo: "morar" },
  { id: "gramatica", grupo: "gramatica" },
  { id: "divertido", grupo: "divertido" },
];

const ATALHOS = [
  ["#kits", "Kits de prova A1–C2"],
  ["#combos", "Kits com desconto"],
  ["#livro", "Livro personalizado"],
  ["#provas", "Provas"],
  ["#morar", "Morar na Alemanha"],
  ["#gramatica", "Gramática"],
  ["#divertido", "Alemão divertido"],
  ["#portugues", "Português sem Travar"],
];

const grade = "mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4";

export default function LojaPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Kits e e-books"
        eyebrow={`${TOTAL_EBOOKS} e-books · mais de 1000 páginas · em PDF`}
        title="Kits e e-books para destravar seu alemão"
        destaque={["destravar"]}
        description={
          <>
            <p>
              Cada material nasceu de uma dúvida real de aluno: provas, gramática, vida na Alemanha, trabalho, família e diversão. Explicação em português, com
              ponte para o alemão, como nas aulas da Fran.
            </p>
            <nav aria-label="Categorias" className="-mx-4 mt-6 overflow-x-auto px-4 no-scrollbar sm:mx-0 sm:px-0">
              <ul className="flex w-max gap-2 text-sm font-semibold sm:w-auto sm:flex-wrap">
                {ATALHOS.map(([h, t]) => (
                  <li key={h}>
                    <a href={h} className="inline-flex whitespace-nowrap rounded-full border border-primary-strong/15 bg-white px-4 py-2 text-primary-strong transition hover:border-primary-strong">
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        }
      >
        <Image src={img.kitsTodos} alt="Os seis Kits Prova sem Travar, do A1 ao C2" priority sizes="(min-width: 1024px) 480px, 90vw" className="mx-auto h-auto w-full max-w-[320px] rounded-[1.75rem] border-2 border-primary-strong shadow-sticker sm:max-w-md sm:rotate-2" />
      </PageHero>

      {/* Kits de prova A1–C2 */}
      <section id="kits" className="scroll-mt-28 bg-surface pb-16 sm:pb-24 md:pb-32">
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
          <ul className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {kitsProva.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={(i % 3) * 0.08}>
                <ProdutoCard p={p} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Kits com desconto */}
      <section id="combos" className="relative scroll-mt-28 overflow-hidden py-16 text-white sm:py-24 md:py-32">
        <div className="bg-band absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
          <SectionTitle
            light
            eyebrow="Sparpakete · kits com desconto"
            title={
              <>
                E-books combinados, <span className="text-gradient-light">preço especial</span>
              </>
            }
            description="Combinações por objetivo para você levar tudo de uma vez e pagar menos."
          />
          <ul className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {combos.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={(i % 3) * 0.08}>
                <ProdutoCard p={p} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Livro personalizado */}
      <section id="livro" className="scroll-mt-28 bg-white py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <Reveal className="grid items-center gap-8 overflow-hidden rounded-[2rem] border-2 border-primary-strong bg-[#f1ebff] p-5 shadow-sticker sm:gap-10 sm:rounded-[2.5rem] sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Image src={livro.imagem} alt={livro.alt} sizes="(min-width: 1024px) 420px, 90vw" className="mx-auto h-auto w-full max-w-[280px] rounded-[1.5rem] shadow-panel sm:max-w-sm sm:-rotate-2" />
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

      {/* E-books por categoria */}
      {SECOES.map(({ id, grupo }, s) => {
        const g = grupos[grupo];
        return (
          <section key={id} id={id} className={`scroll-mt-28 py-16 sm:py-24 ${s % 2 === 0 ? "bg-surface" : "bg-white"}`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-8">
              <SectionTitle eyebrow={g.de ?? "E-books"} title={g.nome} description={g.descricao} />
              <ul className={grade}>
                {doGrupo(grupo).map((p, i) => (
                  <Reveal as="li" key={p.slug} delay={(i % 4) * 0.06}>
                    <ProdutoCard p={p} />
                  </Reveal>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      {/* Como comprar */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-8">
          <SectionTitle center eyebrow="So funktioniert's" title={<>Como <span className="text-gradient">comprar</span></>} />
          <ol className="mt-10 grid gap-3 sm:grid-cols-3 sm:gap-5">
            {[
              "Escolha os e-books ou um kit",
              "Chame a Fran no WhatsApp ou no Instagram @deutschmitfran",
              "Receba o PDF para ler no celular, no computador ou imprimir",
            ].map((t, i) => (
              <li key={t} className="flex items-center gap-4 rounded-[1.5rem] border border-ink/[0.07] bg-surface p-5 sm:block">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary-bright font-display text-lg font-bold text-primary-strong">{i + 1}</span>
                <p className="font-semibold leading-snug text-primary-strong sm:mt-4">{t}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-center text-sm text-muted">Os kits com link da Hotmart são comprados direto por lá. Não sabe por onde começar? Conte seu nível e seu objetivo que a Fran indica o e-book certo.</p>
          <div className="mt-6 flex justify-center">
            <a
              href={whatsComTexto("Hallo, Fran! 😊 Quero ajuda para escolher um e-book. Meu nível é ... e meu objetivo é ...")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 font-semibold text-white transition hover:brightness-105 sm:w-auto"
            >
              <MessageCircle size={18} /> Me ajuda a escolher
            </a>
          </div>
        </div>
      </section>

      {/* Português sem Travar */}
      <section id="portugues" className="relative scroll-mt-28 overflow-hidden py-16 text-white sm:py-24 md:py-32">
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

      <CtaFinal titulo="Prefere aprender com a Fran ao vivo?" texto="Me conta seu nível e seu objetivo. A gente monta o melhor caminho para você, seja aula, kit ou e-book." />
    </main>
  );
}
