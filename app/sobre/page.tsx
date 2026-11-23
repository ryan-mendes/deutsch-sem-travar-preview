import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/motion/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Bandeiras from "@/components/ui/Bandeiras";
import InstagramGrid from "@/components/sections/InstagramGrid";
import CtaFinal from "@/components/sections/CtaFinal";
import { temas } from "@/lib/conteudo";
import { img } from "@/lib/imagens";
import { marca } from "@/lib/site";

export const metadata: Metadata = {
  title: `Sobre a Fran | ${marca.nome}`,
  description: "Conheça Francielle Gonçalves, a Lehrerin Fran: professora e tradutora de alemão com mais de 10.000 horas de ensino.",
};

// Somente dados verificáveis (bio do Instagram e perfil na Hotmart).
const NUMEROS = [
  { valor: "+10.000", rotulo: "horas de ensino" },
  { valor: "12 mil", rotulo: "seguidores no Instagram" },
  { valor: "3 anos", rotulo: "criando materiais na Hotmart" },
];

export default function SobrePage() {
  return (
    <main>
      <PageHero
        breadcrumb="Sobre a Fran"
        eyebrow="Lehrerin Fran"
        title="Oi, eu sou a Fran"
        destaque={["Fran"]}
        description={
          <>
            <p>
              <strong className="text-ink">{marca.professora}</strong>, professora e tradutora de alemão. Ajudo você a falar alemão vivendo o idioma no
              dia a dia.
            </p>
            <p className="mt-4 flex items-center gap-2 text-base">
              <Bandeiras paises={["br"]} /> für <Bandeiras />
            </p>
          </>
        }
      >
        <div className="relative mx-auto w-full max-w-sm">
          <div className="aspect-square overflow-hidden rounded-full border-4 border-white bg-vivid shadow-panel">
            <Image src={img.franFoto} alt="Retrato da Fran sorrindo, de óculos e colar de globos" priority sizes="384px" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -right-2 w-28 rotate-6 overflow-hidden rounded-full border-4 border-white shadow-panel sm:w-32">
            <Image src={img.franIlustracao} alt="" sizes="128px" className="h-auto w-full" />
          </div>
        </div>
      </PageHero>

      <section className="bg-surface pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">Meu jeito de ensinar</p>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-primary-strong">
              Pra cada aluno, <span className="text-gradient">uma forma de falar</span>
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Minha abordagem é interativa e focada na comunicação e na imersão. Quero que o alemão faça sentido para você e entre na sua rotina, e não
                fique preso no caderno.
              </p>
              <p>
                Observando as dificuldades mais comuns de quem aprende alemão, criei materiais e aulas que juntam o ensino da língua com cultura,
                música e vivências reais, respeitando o ritmo e o estilo de cada aluno.
              </p>
              <p>
                Foi assim que nasceu o <strong className="text-ink">Deutsch sem Travar</strong>: para você perder o medo de errar e começar a falar.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-5">
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {NUMEROS.map((n) => (
                <div key={n.rotulo} className="rounded-3xl border border-ink/[0.07] bg-white p-6 shadow-card">
                  <p className="font-display text-4xl font-semibold text-primary-strong">{n.valor}</p>
                  <p className="mt-1 text-muted">{n.rotulo}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-sm">
            <Image src={img.aprendaComAFran} alt="Fran sorrindo entre flores: Aprenda alemão com a Fran" sizes="384px" className="h-auto w-full -rotate-2 rounded-[2rem] border-4 border-white shadow-panel" />
          </Reveal>
          <div>
            <SectionTitle
              eyebrow="O que aparece nas aulas"
              title={
                <>
                  Gramática, sim. Mas também <span className="text-gradient">cultura e vida real</span>
                </>
              }
              description="Os temas que eu mais trago para as aulas e para o Instagram:"
            />
            <ul className="mt-8 flex flex-wrap gap-2">
              {temas.map((t, i) => (
                <li
                  key={t}
                  className={`rounded-full px-4 py-2 font-display font-semibold ${
                    i % 3 === 0 ? "bg-primary-bright text-primary-strong" : i % 3 === 1 ? "bg-tint text-primary-strong" : "border border-primary-strong/20 text-primary-strong"
                  }`}
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <InstagramGrid />
      <CtaFinal />
    </main>
  );
}
