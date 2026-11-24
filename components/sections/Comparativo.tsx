import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { comparativo, mesmoQue } from "@/lib/conteudo";
import { links } from "@/lib/site";

/** "Você vai falar alemão, mesmo que..." + "O jeito de sempre x Deutsch sem Travar" (textos da LP oficial). */
export default function Comparativo() {
  return (
    <section className="bg-surface py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionTitle
              eyebrow="Você vai falar alemão no seu dia a dia"
              title={
                <>
                  Mesmo <span className="text-gradient">que...</span>
                </>
              }
            />
            <ul className="mt-8 space-y-3">
              {mesmoQue.map((t, i) => (
                <Reveal as="li" key={t} delay={i * 0.08}>
                  <p className="rounded-2xl border-2 border-primary-strong bg-white px-5 py-4 text-base font-semibold sm:px-6 sm:py-5 sm:text-lg leading-snug text-primary-strong shadow-sticker">
                    ...{t.charAt(0).toLowerCase() + t.slice(1)}
                  </p>
                </Reveal>
              ))}
            </ul>
            <Link href={links.ctaPrincipal} className="group mt-8 flex w-full items-center justify-between gap-3 rounded-full sm:mt-9 sm:inline-flex sm:w-auto sm:justify-start bg-cta py-4 pl-7 pr-5 font-semibold text-white shadow-cta transition hover:bg-cta-soft">
              Sim! Quero destravar meu alemão
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/25 transition-transform group-hover:translate-x-1">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>

          <Reveal delay={0.1}>
            <h3 className="mb-5 font-display text-xl sm:mb-6 sm:text-2xl font-semibold text-primary-strong">Por que tudo que você já tentou não funcionou?</h3>
            <div className="overflow-hidden rounded-[1.75rem] border border-ink/[0.08] bg-white shadow-card">
              <div className="hidden grid-cols-2 text-xs font-bold uppercase tracking-[0.18em] sm:grid">
                <p className="bg-ink/[0.04] px-5 py-4 text-muted">O jeito de sempre</p>
                <p className="bg-primary-strong px-5 py-4 text-primary-bright">Deutsch sem Travar</p>
              </div>
              <ul className="divide-y divide-ink/[0.07]">
                {comparativo.map((c) => (
                  <li key={c.antes} className="grid sm:grid-cols-2">
                    <p className="flex gap-2.5 px-5 pb-1 pt-4 text-sm leading-snug text-muted line-through decoration-cta/40 sm:py-4 sm:no-underline">
                      <X size={16} className="mt-0.5 shrink-0 text-cta" />
                      {c.antes}
                    </p>
                    <p className="flex gap-2.5 px-5 pb-4 pt-1 text-[15px] font-semibold leading-snug text-primary-strong sm:bg-tint/60 sm:py-4 sm:text-sm">
                      <Check size={16} strokeWidth={3} className="mt-0.5 shrink-0 text-[#2fa84f]" />
                      {c.depois}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
