import type { Metadata } from "next";
import Image from "next/image";
import { Briefcase, GraduationCap, Plane, Plug, Sparkles } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import AulaForm from "@/components/forms/AulaForm";
import Reveal from "@/components/motion/Reveal";
import Pilares from "@/components/sections/Pilares";
import SectionTitle from "@/components/ui/SectionTitle";
import { IconeWhats } from "@/components/ui/Icones";
import { img } from "@/lib/imagens";
import { links, marca } from "@/lib/site";

export const metadata: Metadata = {
  title: `Aulas de alemão com a Fran | ${marca.nome}`,
  description: "Estude alemão com a professora Francielle Gonçalves: aulas no seu ritmo, com foco em falar no dia a dia e na prova de B1.",
};

const PASSOS = [
  { n: "1", titulo: "Me conta de você", texto: "Preencha o formulário com seu nível e seu objetivo, ou me chame direto no WhatsApp." },
  { n: "2", titulo: "A gente conversa", texto: "Pelo WhatsApp eu entendo o que você precisa e explico como funcionam as aulas." },
  { n: "3", titulo: "Você começa a falar", texto: "Grupos pequenos e professores acompanhando o seu avanço, com o alemão do dia a dia e, se for o caso, foco na prova." },
];

const OBJETIVOS = [
  { Icon: GraduationCap, t: "Certificado", d: "Goethe ou telc, do A1 ao C2" },
  { Icon: Briefcase, t: "Trabalho e Ausbildung", d: "Alemão para a vida profissional" },
  { Icon: Plane, t: "Morar ou visto", d: "Alemanha, Áustria ou Suíça" },
  { Icon: Sparkles, t: "Cultura e viagem", d: "Música, filmes e vivências" },
  { Icon: Plug, t: "Destravar a fala", d: "Para quem entende, mas não fala" },
];

export default function EstudeComigoPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Aulas"
        eyebrow="Estude comigo"
        title="Aulas de alemão no seu ritmo, sem travar"
        destaque={["travar"]}
        description={
          <>
            <p>
              Eu sou a Fran, professora e tradutora de alemão com mais de 10.000 horas de ensino. Nas minhas aulas você aprende o alemão vivido no
              dia a dia, do jeito que funciona para você.
            </p>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-base sm:w-auto font-semibold text-white transition hover:brightness-105"
            >
              <IconeWhats className="h-5 w-5" /> Prefere falar agora? Chame no WhatsApp
            </a>
          </>
        }
      >
        <div className="relative rounded-[1.75rem] border-2 border-primary-strong bg-white px-4 pb-6 pt-7 shadow-sticker sm:rounded-[2rem] sm:p-7 md:p-9">
          <span className="absolute -top-4 left-8 rounded-full bg-primary-bright px-4 py-1 font-display text-sm font-semibold text-primary-strong">Hallo! 👋</span>
          <div className="mb-6 flex items-center gap-4">
            <Image src={img.franSelfie} alt="Fran sorrindo" sizes="64px" className="h-14 w-14 shrink-0 rounded-full border-2 sm:h-16 sm:w-16 border-primary-strong object-cover" />
            <div>
              <p className="text-lg font-semibold leading-tight tracking-tight text-primary-strong sm:text-xl">Quer destravar seu alemão com a Fran?</p>
              <p className="mt-1 text-sm text-muted">Faça seu cadastro e converse pelo WhatsApp para descobrir o melhor caminho para você.</p>
            </div>
          </div>
          <AulaForm />
        </div>
      </PageHero>

      <section className="bg-surface pb-16 sm:pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <SectionTitle
            eyebrow="Como começar"
            title={
              <>
                Três passos e você já está <span className="text-gradient">falando</span>
              </>
            }
          />
          <ol className="mt-8 grid gap-3 sm:mt-12 sm:gap-5 md:grid-cols-3">
            {PASSOS.map((p, i) => (
              <Reveal as="li" key={p.n} delay={i * 0.08}>
                <div className="flex h-full gap-4 rounded-[1.5rem] border border-ink/[0.07] bg-white p-5 shadow-card sm:block sm:rounded-[1.75rem] sm:p-7">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary-bright font-display text-lg font-bold text-primary-strong sm:h-12 sm:w-12 sm:text-xl">{p.n}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-strong sm:mt-6 sm:text-xl">{p.titulo}</h3>
                    <p className="mt-1 leading-relaxed text-muted sm:mt-2">{p.texto}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <Pilares />

      <section className="relative overflow-hidden py-16 text-white sm:py-24 md:py-32">
        <div className="bg-band absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
          <SectionTitle light eyebrow="Para quem é" title={<>Seja qual for o seu <span className="text-gradient-light">objetivo</span></>} />
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-5">
            {OBJETIVOS.map(({ Icon, t, d }, i) => (
              <Reveal as="li" key={t} delay={i * 0.06} y={20}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.06] p-4 transition sm:p-6 hover:bg-white/10">
                  <Icon className="text-primary-bright" />
                  <p className="mt-3 font-display text-base font-semibold leading-snug sm:mt-5 sm:text-lg">{t}</p>
                  <p className="mt-1 text-sm text-white/65">{d}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
