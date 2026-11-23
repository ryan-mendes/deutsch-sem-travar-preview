import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, Check, ClipboardList, FileText, Mic, PenLine, Scale, ShieldCheck } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/motion/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Bandeiras from "@/components/ui/Bandeiras";
import CtaFinal from "@/components/sections/CtaFinal";
import { faqKit, kitB1 } from "@/lib/conteudo";
import { img } from "@/lib/imagens";
import { links, marca } from "@/lib/site";

export const metadata: Metadata = {
  title: `Kit Prova sem Travar: B1 Goethe e telc | ${marca.nome}`,
  description: "Guia para passar na prova de B1 do Goethe e da telc: 3 materiais em PDF com simulados de Schreiben e Sprechen. R$ 113,85, garantia de 7 dias.",
};

const ICONES = [ClipboardList, Scale, PenLine, Mic, BookOpenCheck];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqKit.map((f) => ({ "@type": "Question", name: f.p, acceptedAnswer: { "@type": "Answer", text: f.r } })),
};

function BotaoComprar() {
  return (
    <a
      href={links.kitB1Checkout}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 rounded-full bg-cta py-4 pl-7 pr-5 font-semibold text-white shadow-cta transition hover:bg-cta-soft"
    >
      Quero o Kit B1
      <span className="grid h-8 w-8 place-items-center rounded-full bg-white/25 transition-transform group-hover:translate-x-1">
        <ArrowRight size={16} />
      </span>
    </a>
  );
}

export default function KitB1Page() {
  return (
    <main>
      <PageHero
        breadcrumb="Kit Prova B1"
        eyebrow="Goethe-Zertifikat B1 · telc Deutsch B1"
        title="Passe no B1 sem travar"
        destaque={["sem", "travar"]}
        description={
          <>
            <p>{kitB1.descricao}</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
              <BotaoComprar />
              <p className="flex items-center gap-2 text-sm">
                <ShieldCheck size={18} className="text-primary" /> Garantia de {kitB1.garantiaDias} dias
              </p>
            </div>
          </>
        }
      >
        <div className="relative mx-auto max-w-md">
          <Image src={img.kitB1} alt="Arte do Kit Prova sem Travar com checklist da prova" priority sizes="(min-width: 1024px) 440px, 90vw" className="h-auto w-full rotate-2 rounded-[1.75rem] border-2 border-primary-strong shadow-sticker" />
          <div className="absolute -bottom-6 -left-4 rounded-2xl border-2 border-primary-strong bg-white px-5 py-3 shadow-sticker">
            <p className="text-xs font-semibold text-muted">Pagamento único</p>
            <p className="font-display text-3xl font-semibold text-primary-strong">{kitB1.preco}</p>
          </div>
        </div>
      </PageHero>

      <section className="bg-surface pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <SectionTitle
            eyebrow="O que você vai encontrar"
            title={
              <>
                Treine com <span className="text-gradient">estratégia</span>
              </>
            }
            description={kitB1.descricao2}
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {kitB1.conteudo.map((c, i) => {
              const Icon = ICONES[i % ICONES.length];
              return (
                <Reveal as="li" key={c.titulo} delay={(i % 3) * 0.08}>
                  <div className="h-full rounded-[1.75rem] border border-ink/[0.07] bg-white p-7 shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-card-hover">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-tint text-primary-strong">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-6 text-xl font-semibold text-primary-strong">{c.titulo}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{c.texto}</p>
                  </div>
                </Reveal>
              );
            })}
            <Reveal as="li" delay={0.16}>
              <div className="flex h-full flex-col justify-between rounded-[1.75rem] border-2 border-primary-strong bg-vivid p-7 shadow-sticker">
                <FileText className="text-primary-strong" size={28} />
                <div>
                  <p className="mt-6 font-display text-4xl font-bold text-primary-strong">3 PDFs</p>
                  <p className="mt-1 font-semibold text-primary-strong/80">para estudar no seu ritmo, onde quiser</p>
                </div>
              </div>
            </Reveal>
          </ul>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">Prüfung · Antwortbogen</p>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-primary-strong">
              Tudo para a sua prova <span className="marca-texto">num só kit</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">Entenda o que os avaliadores esperam e chegue no dia com segurança.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-[1.75rem] border-2 border-primary-strong bg-white shadow-sticker">
              <div className="flex items-center justify-between bg-primary-strong px-6 py-3 text-sm font-bold uppercase tracking-wider text-white">
                <span lang="de">Prüfung · Antwortbogen</span>
                <span className="text-primary-bright">B1</span>
              </div>
              <ul className="divide-y divide-dashed divide-ink/10">
                {kitB1.checklist.map((c) => (
                  <li key={c} className="flex items-center gap-4 px-6 py-4 text-lg text-ink">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-[#2fa84f] text-white">
                      <Check size={17} strokeWidth={3} />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 text-white md:py-32">
        <div className="bg-band absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionTitle light eyebrow="Para quem é" title={<>Ideal para quem precisa do <span className="text-gradient-light">B1</span></>} />
            <ul className="mt-8 flex flex-wrap gap-3">
              {kitB1.paraQuem.map((p) => (
                <li key={p} className="rounded-full border border-white/15 bg-white/[0.07] px-5 py-2.5 font-display text-lg font-semibold">
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-3 text-white/75">
              <Bandeiras /> na {kitB1.paises}.
            </p>
          </div>
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] bg-white p-8 text-ink shadow-panel md:p-10">
              <p className="font-display text-sm font-semibold uppercase tracking-wider text-cta">{kitB1.nome}</p>
              <p className="mt-2 text-muted">{kitB1.subtitulo}</p>
              <p className="mt-6 font-display text-5xl font-bold text-primary-strong">{kitB1.preco}</p>
              <p className="mt-1 text-sm text-muted">{kitB1.formato} · acesso pela Hotmart</p>
              <div className="mt-8">
                <BotaoComprar />
              </div>
              <p className="mt-5 flex items-center gap-2 text-sm text-muted">
                <ShieldCheck size={16} className="text-primary" /> Garantia de {kitB1.garantiaDias} dias: não gostou, pede o reembolso.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-8">
          <SectionTitle center eyebrow="Dúvidas" title={<>Perguntas <span className="text-gradient">frequentes</span></>} />
          <div className="mt-12 space-y-3">
            {faqKit.map((f) => (
              <details key={f.p} className="group rounded-2xl border border-ink/[0.08] bg-surface px-6 py-5 open:bg-white open:shadow-card">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-primary-strong">
                  {f.p}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-tint text-xl transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-muted">{f.r}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            Ainda com dúvida?{" "}
            <Link href="/estude-comigo" className="font-semibold text-cta hover:underline">
              Fale com a Fran
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaFinal titulo="Quer ajuda além do material?" texto="Estude com a Fran em aulas no seu ritmo e chegue na prova sem travar." />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </main>
  );
}
