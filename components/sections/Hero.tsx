"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Heart } from "lucide-react";
import { img } from "@/lib/imagens";
import { links } from "@/lib/site";
import Bandeiras from "@/components/ui/Bandeiras";

const TITULO: { w: string; d?: boolean }[] = [
  { w: "Fale" },
  { w: "alemão" },
  { w: "sem", d: true },
  { w: "travar,", d: true },
  { w: "vivendo" },
  { w: "o" },
  { w: "idioma" },
  { w: "no" },
  { w: "dia" },
  { w: "a" },
  { w: "dia." },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yArte = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "14%"]);
  const yTexto = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const opTexto = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0.2]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-surface pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="drift glow absolute -right-[20%] -top-[25%] h-[80vmax] w-[80vmax] rounded-full" />
        <div className="drift glow-coral absolute -left-[25%] bottom-[-40%] h-[60vmax] w-[60vmax] rounded-full" style={{ animationDelay: "-6s" }} />
      </div>
      <div className="veil pointer-events-none absolute inset-0 z-40 bg-surface" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div style={{ y: yTexto, opacity: opTexto }}>
          <p className="fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-primary-strong/10 bg-white px-4 py-1.5 text-xs font-bold text-primary-strong shadow-card" style={{ "--d": "0.3s" } as React.CSSProperties}>
            <Bandeiras /> Professora e tradutora de alemão
          </p>
          <h1 className="text-[clamp(2.6rem,6vw,5.1rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-primary-strong">
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
          <p className="fade-up mt-7 max-w-xl text-lg leading-relaxed text-muted" style={{ "--d": "1s" } as React.CSSProperties}>
            Oi, eu sou a <strong className="text-ink">Fran</strong>, a Lehrerin Fran. Ajudo brasileiros a falar alemão com segurança, do primeiro <em lang="de">Hallo</em> até a prova de B1.
          </p>
          <div className="fade-up mt-9 flex flex-wrap gap-3" style={{ "--d": "1.15s" } as React.CSSProperties}>
            <Link
              href={links.ctaPrincipal}
              className="group inline-flex items-center gap-3 rounded-full bg-cta py-4 pl-7 pr-5 font-semibold text-white shadow-cta transition hover:bg-cta-soft"
            >
              Estude comigo
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/25 transition-transform group-hover:translate-x-1">
                <ArrowRight size={16} />
              </span>
            </Link>
            <Link
              href="/kit-b1"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary-strong bg-white px-7 py-4 font-semibold text-primary-strong transition hover:bg-primary-strong hover:text-white"
            >
              Kit Prova B1
            </Link>
          </div>
          <ul className="fade-up mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted" style={{ "--d": "1.3s" } as React.CSSProperties}>
            <li>
              <strong className="font-display text-2xl font-semibold text-primary-strong">+10.000</strong> horas de ensino
            </li>
            <li>
              <strong className="font-display text-2xl font-semibold text-primary-strong">12 mil</strong> seguidores no Instagram
            </li>
          </ul>
        </motion.div>

        <motion.div style={{ y: yArte }} className="fade-up relative mx-auto w-full max-w-[460px]" >
          <div className="relative aspect-square">
            <div className="absolute inset-[6%] rounded-full bg-vivid" />
            <Image
              src={img.franIlustracao}
              alt="Ilustração da Fran de braços cruzados com o camaleão no ombro"
              priority
              sizes="(min-width: 1024px) 460px, 90vw"
              className="relative h-full w-full rounded-full object-cover"
            />
          </div>
          <span className="bob absolute -left-2 top-[12%] rotate-[-8deg] rounded-2xl border-2 border-primary-strong bg-white px-4 py-2 font-display text-lg font-semibold text-primary-strong shadow-sticker sm:-left-8">
            Hallo! 👋
          </span>
          <span className="bob absolute -right-1 bottom-[18%] rotate-[6deg] rounded-2xl border-2 border-primary-strong bg-primary-bright px-4 py-2 font-display text-base font-semibold text-primary-strong shadow-sticker sm:-right-6" style={{ animationDelay: "-2.5s" }}>
            B1 bestanden ✓
          </span>
          <span className="wiggle absolute bottom-[4%] left-[10%] grid h-12 w-12 place-items-center rounded-full bg-coral text-white shadow-card">
            <Heart size={20} fill="currentColor" />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
