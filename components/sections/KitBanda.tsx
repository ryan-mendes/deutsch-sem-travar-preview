import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { img } from "@/lib/imagens";
import { kitB1 } from "@/lib/conteudo";
import { links } from "@/lib/site";

/** Faixa escura de destaque do Kit B1 (usada na Home). */
export default function KitBanda() {
  return (
    <section className="relative overflow-hidden py-24 text-white md:py-32">
      <div className="bg-band absolute inset-0" />
      <div className="drift glow pointer-events-none absolute -right-[15%] top-[-30%] h-[70vmax] w-[70vmax] rounded-full opacity-60" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-md">
          <Image src={img.kitB1} alt="Arte do Kit Prova sem Travar: passe no B1 sem travar, Goethe + telc" sizes="(min-width: 1024px) 440px, 90vw" className="h-auto w-full rotate-[-3deg] rounded-[1.75rem] shadow-panel" />
          <span className="absolute -right-3 -top-5 rotate-12 rounded-full bg-primary-bright px-5 py-3 text-center font-display text-sm font-semibold leading-tight text-primary-strong shadow-sticker">
            3 PDFs
            <br />
            Goethe + telc
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary-bright">Kit Prova sem Travar</p>
          <h2 className="text-[clamp(2.1rem,4.4vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
            Passe no B1 <span className="text-gradient-light">sem travar!</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
            Preparação para o Goethe-Zertifikat B1 e o telc Deutsch B1, com foco nas partes que mais travam: Schreiben e Sprechen.
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {kitB1.checklist.map((c) => (
              <li key={c} className="flex items-center gap-3 text-white/90">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-primary-bright text-primary-strong">
                  <Check size={15} strokeWidth={3} />
                </span>
                {c}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <div>
              <p className="text-sm text-white/60">Investimento</p>
              <p className="font-display text-4xl font-semibold">{kitB1.preco}</p>
            </div>
            <a href={links.kitB1Checkout} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 rounded-full bg-cta py-4 pl-7 pr-5 font-semibold text-white shadow-cta transition hover:bg-cta-soft">
              Quero o kit
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/25 transition-transform group-hover:translate-x-1">
                <ArrowRight size={16} />
              </span>
            </a>
            <Link href="/kit-b1" className="font-semibold text-white/85 underline-offset-4 hover:text-primary-bright hover:underline">
              Ver tudo o que vem no kit
            </Link>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-white/60">
            <ShieldCheck size={16} className="text-primary-bright" /> Garantia de {kitB1.garantiaDias} dias pela Hotmart
          </p>
        </Reveal>
      </div>
    </section>
  );
}
