import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/motion/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Bandeiras from "@/components/ui/Bandeiras";
import InstagramGrid from "@/components/sections/InstagramGrid";
import CtaFinal from "@/components/sections/CtaFinal";
import { temas, trajetoria } from "@/lib/conteudo";
import { img } from "@/lib/imagens";
import { marca } from "@/lib/site";

export const metadata: Metadata = {
  title: `Sobre a Fran | ${marca.nome}`,
  description: "Conheça Francielle Gonçalves, a Lehrerin Fran: física pela UNIFESP, ex-bolsista do Instituto Goethe e criadora da Didática Camaleão.",
};

// Somente dados verificáveis (bio do Instagram, perfil na Hotmart e LP oficial).
const NUMEROS = [
  { valor: "+10.000", rotulo: "horas de ensino" },
  { valor: "12 mil", rotulo: "seguidores no Instagram" },
  { valor: "3 anos", rotulo: "criando materiais na Hotmart" },
];

const GALERIA = [
  { src: img.franBerlimTorre, alt: "Fran apontando para a Torre de TV de Berlim" },
  { src: img.franPalacio, alt: "Fran estudando com o caderno num palácio na Alemanha" },
  { src: img.franBerlimRua, alt: "Fran numa rua de Berlim, com a Torre de TV ao fundo" },
  { src: img.franFoto, alt: "Retrato da Fran sorrindo, de óculos e colar de globos" },
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
              <strong className="text-ink">{marca.professora}</strong>, a professora que ensina alemão do seu jeito. Física pela UNIFESP, ex-bolsista
              do Instituto Goethe e criadora da Didática Camaleão.
            </p>
            <p className="mt-4 flex items-center gap-2 text-base">
              <Bandeiras paises={["br"]} /> für <Bandeiras />
            </p>
          </>
        }
      >
        <div className="relative mx-auto w-full max-w-[300px] sm:max-w-sm">
          <div className="aspect-[4/5] sm:-rotate-2 overflow-hidden rounded-[2rem] border-4 border-white bg-vivid shadow-panel">
            <Image src={img.franLivros} alt="Francielle sentada no tapete, sorrindo, cercada de livros em alemão" priority sizes="384px" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-4 right-2 w-24 rotate-6 sm:-right-2 sm:w-32 overflow-hidden rounded-full border-4 border-white shadow-panel">
            <Image src={img.franSelfie} alt="Selfie da Fran rindo, com flores no cabelo" sizes="128px" className="h-auto w-full" />
          </div>
        </div>
      </PageHero>

      <section className="bg-surface pb-16 sm:pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] sm:tracking-[0.25em] text-primary">Minha história</p>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-primary-strong">
              Da Favela Naval <span className="text-gradient">até a Alemanha</span>
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Vim da Favela Naval, em Diadema. Me formei em Física pela UNIFESP, fui bolsista do Instituto Goethe e aluna do Centro de Línguas, e
                passei 6 meses na Schuler, na Alemanha, como estagiária em física e programadora.
              </p>
              <p>
                Dando aulas, percebi que cada aluno aprende de um jeito: o que funciona para o João não funciona para a Maria. Percebi também que muita
                gente desanima na Alemanha porque a gramática parece abstrata e não há com quem praticar.
              </p>
              <p>
                Dessa descoberta nasceu a <strong className="text-ink">Didática Camaleão</strong>: o ensino muda para se encaixar em você.
              </p>
              <p>
                Foi assim que nasceu o <strong className="text-ink">Deutsch sem Travar</strong>: para você perder o medo de errar e começar a falar.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-5">
            <ul className="grid grid-cols-3 gap-2 sm:gap-3">
              {trajetoria.map((t) => (
                <li key={t.titulo} className="rounded-2xl border-2 border-primary-strong bg-primary-bright px-3 py-3 shadow-sticker sm:px-4">
                  <p className="font-display text-sm font-bold leading-tight sm:text-lg text-primary-strong">{t.titulo}</p>
                  <p className="mt-0.5 text-xs font-semibold text-primary-strong/75 sm:text-sm">{t.texto}</p>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:grid-cols-1">
              {NUMEROS.map((n) => (
                <div key={n.rotulo} className="rounded-2xl border border-ink/[0.07] bg-white p-3 shadow-card sm:rounded-3xl sm:p-6">
                  <p className="font-display text-xl font-semibold sm:text-4xl text-primary-strong">{n.valor}</p>
                  <p className="mt-1 text-xs leading-snug text-muted sm:text-base">{n.rotulo}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pt-16 sm:pt-24 md:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <SectionTitle eyebrow="Vivências" title={<>A Alemanha que eu <span className="text-gradient">levo para as aulas</span></>} />
          <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {GALERIA.map((g, i) => (
              <Reveal as="li" key={g.alt} delay={i * 0.06} className={i % 2 ? "md:translate-y-8" : ""}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] shadow-card">
                  <Image src={g.src} alt={g.alt} fill sizes="(min-width: 768px) 25vw, 45vw" className="object-cover" />
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-sm">
            <Image src={img.aprendaComAFran} alt="Fran sorrindo entre flores: Aprenda alemão com a Fran" sizes="384px" className="h-auto w-full sm:-rotate-2 rounded-[2rem] border-4 border-white shadow-panel" />
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
