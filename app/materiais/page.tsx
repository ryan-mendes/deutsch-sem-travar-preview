import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/motion/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import EmbedFrame from "@/components/ui/EmbedFrame";
import CtaFinal from "@/components/sections/CtaFinal";
import { IconeInstagram, IconeWhats, IconeYoutube } from "@/components/ui/Icones";
import { img } from "@/lib/imagens";
import { links, marca } from "@/lib/site";

export const metadata: Metadata = {
  title: `Materiais grátis de alemão | ${marca.nome}`,
  description: "PDFs gratuitos Você na Alemanha, comunidade no WhatsApp, aulas no YouTube e dicas no Instagram da Lehrerin Fran.",
};

const PASTA_ID = "1-H985HoGFupKBiRBV3dxBRYpA5YpyeN6";
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

const CANAIS = [
  {
    Icon: IconeWhats,
    cor: "bg-[#25D366]",
    titulo: "Comunidade Deutsch sem Travar",
    texto: "Grupo gratuito no WhatsApp para praticar, tirar dúvidas e receber dicas da Fran.",
    cta: "Entrar no grupo",
    href: links.comunidade,
  },
  {
    Icon: IconeYoutube,
    cor: "bg-[#FF0000]",
    titulo: "YouTube",
    texto: "Se inscreva no canal para aprender alemão com vídeos da Fran.",
    cta: "Ver o canal",
    href: links.youtube,
  },
  {
    Icon: IconeInstagram,
    cor: "bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5]",
    titulo: "Instagram",
    texto: "Expressões, gramática e a vida na Alemanha em vídeos curtos.",
    cta: marca.instagramHandle,
    href: links.instagram,
  },
];

export default function MateriaisPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Materiais grátis"
        eyebrow="Conteúdo gratuito"
        title="Materiais grátis para estudar alemão"
        destaque={["grátis"]}
        description="PDFs, comunidade e vídeos para você praticar todos os dias, sem pagar nada."
      >
        <a href={links.materiais} {...ext} className="group relative mx-auto block max-w-md">
          <Image src={img.voceNaAlemanha} alt="Arte Você na Alemanha" priority sizes="(min-width: 1024px) 440px, 90vw" className="h-auto w-full -rotate-2 rounded-[1.75rem] border-2 border-primary-strong shadow-sticker transition group-hover:rotate-0" />
          <span className="absolute -bottom-5 right-6 inline-flex items-center gap-2 rounded-full bg-cta px-5 py-3 font-semibold text-white shadow-cta">
            <Download size={18} /> Baixar PDFs
          </span>
        </a>
      </PageHero>

      <section className="bg-surface pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="min-w-0">
            <SectionTitle
              eyebrow="Você na Alemanha"
              title={
                <>
                  PDFs e materiais <span className="text-gradient">da Fran</span>
                </>
              }
              description="A pasta “Deutsch mit Fran: Dicas e Materiais” fica no Google Drive. Abra, escolha o material e baixe quando quiser."
            />
            <a href={links.materiais} {...ext} className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-strong px-6 py-3.5 font-semibold text-white transition hover:bg-primary">
              Abrir a pasta no Drive <ArrowUpRight size={18} />
            </a>
          </div>
          <Reveal className="min-w-0">
            <EmbedFrame src={`https://drive.google.com/embeddedfolderview?id=${PASTA_ID}#list`} title="Pasta de materiais da Fran no Google Drive" label="drive.google.com · Deutsch mit Fran" height={420} />
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <SectionTitle eyebrow="Pratique todo dia" title={<>Onde mais aprender com a <span className="text-gradient">Fran</span></>} />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {CANAIS.map(({ Icon, cor, titulo, texto, cta, href }, i) => (
              <Reveal as="li" key={titulo} delay={i * 0.08}>
                <a href={href} {...ext} className="group flex h-full flex-col rounded-[1.75rem] border border-ink/[0.07] bg-surface p-7 transition duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-card-hover">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl text-white ${cor}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-primary-strong">{titulo}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-muted">{texto}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-cta">
                    {cta} <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-16">
            <a href={links.portugues} {...ext} lang="de" className="group flex flex-col items-start justify-between gap-6 rounded-[1.75rem] border-2 border-dashed border-primary-strong/25 p-7 transition hover:border-primary-strong/50 md:flex-row md:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Für Deutschsprachige</p>
                <p className="mt-2 font-display text-2xl font-semibold text-primary-strong">Brasilianisches Portugiesisch – 2 E-Books im Paket (A2–B1)</p>
                <p className="mt-1 text-muted">Sie lernen Portugiesisch? Die Fran hat auch Material für Sie.</p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-cta">
                Zum E-Book <ArrowUpRight size={18} />
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      <CtaFinal titulo="Quer ir além do material grátis?" />
    </main>
  );
}
