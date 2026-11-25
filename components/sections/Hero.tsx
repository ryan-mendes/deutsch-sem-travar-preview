"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { img } from "@/lib/imagens";
import { links } from "@/lib/site";
import Bandeiras from "@/components/ui/Bandeiras";

// Título da LP oficial do Deutsch sem Travar.
const TITULO: { w: string; d?: boolean }[] = [
  { w: "Você" },
  { w: "não" },
  { w: "é" },
  { w: "ruim" },
  { w: "em" },
  { w: "alemão." },
  { w: "Só" },
  { w: "nunca" },
  { w: "aprendeu" },
  { w: "do", d: true },
  { w: "seu", d: true },
  { w: "jeito.", d: true },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yFoto = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "10%"]);
  const yTexto = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const opTexto = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0.2]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-surface pt-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="drift glow absolute -right-[20%] -top-[25%] h-[80vmax] w-[80vmax] rounded-full" />
        <div className="drift glow-coral absolute -left-[25%] bottom-[-40%] h-[60vmax] w-[60vmax] rounded-full" style={{ animationDelay: "-6s" }} />
      </div>
      <div className="veil pointer-events-none absolute inset-0 z-40 bg-surface" />

      <div className="mx-auto grid max-w-7xl items-end gap-6 px-4 sm:gap-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div style={{ y: yTexto, opacity: opTexto }} className="pb-4 lg:pb-24">
          <p className="fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-primary-strong/10 bg-white px-4 py-1.5 text-xs font-bold text-primary-strong shadow-card" style={{ "--d": "0.3s" } as React.CSSProperties}>
            <Bandeiras paises={["de", "ch", "at", "br"]} /> Alemão do dia a dia com a Lehrerin Fran
          </p>
          <h1 className="text-[clamp(2.15rem,5.4vw,4.6rem)] font-semibold leading-[1.04] tracking-[-0.02em] text-primary-strong">
            {TITULO.map(({ w, d }, i) => (
              <span key={i}>
                <span className="word-mask">
                  <span style={{ "--i": i } as React.CSSProperties} className={d ? "text-gradient pr-[0.04em]" : undefined}>
                    {w}
                  </span>
                </span>{" "}
              </span>
            ))}
          </h1>
          <p className="fade-up mt-6 max-w-xl text-base leading-relaxed sm:mt-7 sm:text-lg text-muted" style={{ "--d": "1s" } as React.CSSProperties}>
            Para brasileiros e falantes da língua portuguesa na Alemanha, Suíça, Áustria e Brasil: o <strong className="text-ink">Deutsch sem Travar</strong> ensina o alemão do seu dia a dia, adaptado a como você aprende.
          </p>
          <div className="fade-up mt-8 grid gap-3 sm:mt-9 sm:flex sm:flex-wrap" style={{ "--d": "1.15s" } as React.CSSProperties}>
            <Link
              href={links.ctaPrincipal}
              className="group inline-flex items-center justify-between gap-3 rounded-full bg-cta py-4 pl-7 pr-5 sm:justify-start font-semibold text-white shadow-cta transition hover:bg-cta-soft"
            >
              Quero destravar meu alemão
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/25 transition-transform group-hover:translate-x-1">
                <ArrowRight size={16} />
              </span>
            </Link>
            <Link
              href="/loja"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-strong bg-white px-7 py-4 font-semibold text-primary-strong transition hover:bg-primary-strong hover:text-white"
            >
              Kits e e-books
            </Link>
          </div>
          <ul className="fade-up mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted sm:mt-10" style={{ "--d": "1.3s" } as React.CSSProperties}>
            <li>
              <strong className="font-display text-2xl font-semibold text-primary-strong">+10.000</strong> horas de ensino
            </li>
            <li>
              <strong className="font-display text-2xl font-semibold text-primary-strong">24</strong> e-books em PDF
            </li>
          </ul>
        </motion.div>

        <motion.div style={{ y: yFoto }} className="fade-up relative mx-auto w-full max-w-[300px] self-end sm:max-w-[420px] lg:max-w-[480px]">
          <div className="absolute inset-x-[4%] bottom-0 top-[18%] rounded-t-[999px] bg-vivid" />
          <Image
            src={img.franHero}
            alt="Francielle Gonçalves sorrindo, abraçada a livros"
            priority
            sizes="(min-width: 1024px) 480px, 90vw"
            className="relative h-auto w-full"
          />
          <span className="bob absolute -left-4 top-[24%] rotate-[-8deg] rounded-2xl border-2 border-primary-strong bg-white px-3 py-1.5 font-display text-base sm:-left-6 sm:px-4 sm:py-2 sm:text-lg font-semibold text-primary-strong shadow-sticker sm:-left-6">
            Hallo! 👋
          </span>
          <span className="bob absolute -right-4 top-[52%] rotate-[6deg] rounded-2xl border-2 border-primary-strong bg-primary-bright px-3 py-1.5 font-display text-sm sm:-right-4 sm:px-4 sm:py-2 sm:text-base font-semibold text-primary-strong shadow-sticker sm:-right-4" style={{ animationDelay: "-2.5s" }}>
            Metodologia Camaleão 🦎
          </span>
        </motion.div>
      </div>
    </section>
  );
}
