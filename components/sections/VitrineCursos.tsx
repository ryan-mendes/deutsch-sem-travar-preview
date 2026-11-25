"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export type Slide = {
  id: string;
  aba: string;
  eyebrow: string;
  titulo: string;
  destaque: string;
  texto: string;
  imagem: StaticImageData;
  alt: string;
  itens?: string[];
  niveis?: { n: string; href: string; preco?: string }[];
  precoDe?: string;
  preco?: string;
  economia?: string;
  href: string;
  cta: string;
};

/**
 * Vitrine de cursos em uma única dobra: cada slide é um curso/kit.
 * Desliza com o dedo (scroll-snap), com as setas, com as abas ou com as setas do teclado.
 */
export default function VitrineCursos({ slides }: { slides: Slide[] }) {
  const trilho = useRef<HTMLDivElement>(null);
  const abas = useRef<HTMLDivElement>(null);
  const [ativo, setAtivo] = useState(0);

  const irPara = useCallback((i: number) => {
    const el = trilho.current;
    if (!el) return;
    const alvo = Math.max(0, Math.min(slides.length - 1, i));
    el.scrollTo({ left: alvo * el.clientWidth, behavior: "smooth" });
  }, [slides.length]);

  useEffect(() => {
    const el = trilho.current;
    if (!el) return;
    let raf = 0;
    const aoRolar = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setAtivo(Math.round(el.scrollLeft / el.clientWidth)));
    };
    el.addEventListener("scroll", aoRolar, { passive: true });
    return () => el.removeEventListener("scroll", aoRolar);
  }, []);

  // Mantém a aba ativa visível na faixa de abas (celular).
  useEffect(() => {
    // Rola só a faixa de abas. scrollIntoView rolaria também a seção (overflow-hidden ainda aceita rolagem
    // por código) e deslocaria a página para o lado, mostrando uma faixa branca.
    const faixa = abas.current;
    const aba = faixa?.children[ativo] as HTMLElement | undefined;
    if (!faixa || !aba || faixa.scrollWidth <= faixa.clientWidth) return;
    const dx = aba.getBoundingClientRect().left - faixa.getBoundingClientRect().left;
    faixa.scrollTo({ left: faixa.scrollLeft + dx - (faixa.clientWidth - aba.offsetWidth) / 2, behavior: "smooth" });
  }, [ativo]);

  return (
    <section className="relative overflow-clip py-16 text-white sm:py-24 md:py-28" aria-roledescription="carrossel" aria-label="Cursos e kits da Fran">
      <div className="bg-band absolute inset-0" />
      <div className="drift glow pointer-events-none absolute -right-[15%] top-[-30%] h-[70vmax] w-[70vmax] rounded-full opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary-bright sm:tracking-[0.25em]">Cursos e materiais</p>
            <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
              Deslize e escolha o seu <span className="text-gradient-light">curso</span>
            </h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button type="button" onClick={() => irPara(ativo - 1)} disabled={ativo === 0} aria-label="Curso anterior" className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/[0.06] transition hover:bg-white hover:text-primary-strong disabled:opacity-30 disabled:hover:bg-white/[0.06] disabled:hover:text-white">
              <ChevronLeft />
            </button>
            <button type="button" onClick={() => irPara(ativo + 1)} disabled={ativo === slides.length - 1} aria-label="Próximo curso" className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/[0.06] transition hover:bg-white hover:text-primary-strong disabled:opacity-30 disabled:hover:bg-white/[0.06] disabled:hover:text-white">
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Abas */}
        <div ref={abas} role="tablist" aria-label="Escolha o curso" className="-mx-4 mt-7 flex gap-2 overflow-x-auto px-4 pb-1 no-scrollbar sm:mx-0 sm:flex-wrap sm:px-0">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={ativo === i}
              aria-controls={`slide-${s.id}`}
              onClick={() => irPara(i)}
              className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition ${
                ativo === i ? "border-primary-bright bg-primary-bright text-primary-strong" : "border-white/20 bg-white/[0.06] text-white/85 hover:bg-white/[0.12]"
              }`}
            >
              {s.aba}
            </button>
          ))}
        </div>

        {/* Trilho */}
        <div
          ref={trilho}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") { e.preventDefault(); irPara(ativo + 1); }
            if (e.key === "ArrowLeft") { e.preventDefault(); irPara(ativo - 1); }
          }}
          className="mt-8 flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain no-scrollbar outline-none sm:mt-10"
        >
          {slides.map((s, i) => (
            <div
              key={s.id}
              id={`slide-${s.id}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${slides.length}: ${s.aba}`}
              className="grid w-full shrink-0 snap-start snap-always items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16"
            >
              <div className="relative mx-auto w-fit max-w-full">
                <Image src={s.imagem} alt={s.alt} sizes="(min-width: 1024px) 500px, 300px" className="h-auto max-h-[280px] w-auto max-w-full rounded-[1.5rem] shadow-panel sm:max-h-[440px] lg:max-h-[500px]" />
                {s.economia && (
                  <span className="absolute -right-2 -top-3 rotate-6 rounded-full bg-primary-bright px-4 py-2 font-display text-sm font-bold text-primary-strong shadow-sticker">
                    economize {s.economia}
                  </span>
                )}
              </div>

              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary-bright sm:tracking-[0.22em]">{s.eyebrow}</p>
                <h3 className="mt-3 text-[clamp(1.8rem,3.6vw,3rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
                  {s.titulo} <span className="text-gradient-light">{s.destaque}</span>
                </h3>
                <p className="mt-4 max-w-xl leading-relaxed text-white/75 sm:text-lg">{s.texto}</p>

                {s.niveis && (
                  <ul className="mt-6 grid max-w-xl grid-cols-3 gap-2.5 sm:grid-cols-6">
                    {s.niveis.map((n) => (
                      <li key={n.n}>
                        <Link href={n.href} className="flex aspect-square flex-col items-center justify-center rounded-2xl border border-white/15 bg-white/[0.07] font-display transition hover:-translate-y-1 hover:border-primary-bright hover:bg-primary-bright hover:text-primary-strong">
                          <span className="text-xl font-bold sm:text-2xl">{n.n}</span>
                          {n.preco && <span className="text-[10px] font-semibold opacity-80">{n.preco}</span>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {s.itens && (
                  <ol className="mt-6 grid max-w-xl gap-x-6 gap-y-2 sm:grid-cols-2">
                    {s.itens.map((t, k) => (
                      <li key={t} className="flex items-center gap-3 text-sm text-white/90 sm:text-base">
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/10 text-xs font-bold text-primary-bright">{k + 1}</span>
                        {t}
                      </li>
                    ))}
                  </ol>
                )}

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
                  {s.preco && (
                    <p>
                      {s.precoDe && <s className="mr-2 text-white/50">{s.precoDe}</s>}
                      <span className="font-display text-4xl font-semibold">{s.preco}</span>
                    </p>
                  )}
                  <Link href={s.href} className="group flex w-full items-center justify-between gap-3 rounded-full bg-cta py-4 pl-7 pr-5 font-semibold text-white shadow-cta transition hover:bg-cta-soft sm:inline-flex sm:w-auto sm:justify-start">
                    {s.cta}
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-white/25 transition-transform group-hover:translate-x-1">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pontos + setas no celular */}
        <div className="mt-8 flex items-center justify-between gap-4 sm:justify-center">
          <button type="button" onClick={() => irPara(ativo - 1)} disabled={ativo === 0} aria-label="Curso anterior" className="grid h-11 w-11 place-items-center rounded-full border border-white/20 disabled:opacity-30 sm:hidden">
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {slides.map((s, i) => (
              <button key={s.id} type="button" onClick={() => irPara(i)} aria-label={`Ir para ${s.aba}`} className={`h-2.5 rounded-full transition-all ${ativo === i ? "w-8 bg-primary-bright" : "w-2.5 bg-white/30 hover:bg-white/50"}`} />
            ))}
          </div>
          <button type="button" onClick={() => irPara(ativo + 1)} disabled={ativo === slides.length - 1} aria-label="Próximo curso" className="grid h-11 w-11 place-items-center rounded-full border border-white/20 disabled:opacity-30 sm:hidden">
            <ChevronRight size={20} />
          </button>
        </div>
        <p className="mt-6 text-center">
          <Link href="/loja" className="font-semibold text-white/85 underline-offset-4 hover:text-primary-bright hover:underline">
            Ver todos os kits e os 24 e-books
          </Link>
        </p>
      </div>
    </section>
  );
}
