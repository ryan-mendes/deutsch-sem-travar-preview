import type { Metadata } from "next";
import { Briefcase, GraduationCap, Plane, Plug, Sparkles } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import AulaForm from "@/components/forms/AulaForm";
import Reveal from "@/components/motion/Reveal";
import Pilares from "@/components/sections/Pilares";
import SectionTitle from "@/components/ui/SectionTitle";
import { IconeWhats } from "@/components/ui/Icones";
import { links, marca } from "@/lib/site";

export const metadata: Metadata = {
  title: `Aulas de alemão com a Fran | ${marca.nome}`,
  description: "Estude alemão com a professora Francielle Gonçalves: aulas no seu ritmo, com foco em falar no dia a dia e na prova de B1.",
};

const PASSOS = [
  { n: "1", titulo: "Me conta de você", texto: "Preencha o formulário com seu nível e seu objetivo, ou me chame direto no WhatsApp." },
  { n: "2", titulo: "A gente conversa", texto: "Pelo WhatsApp eu entendo o que você precisa e explico como funcionam as aulas." },
  { n: "3", titulo: "Você começa a falar", texto: "Aulas no seu ritmo, com o alemão do dia a dia e, se for o caso, foco na prova." },
];

const OBJETIVOS = [
  { Icon: GraduationCap, t: "Certificado B1", d: "Goethe ou telc" },
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
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-base font-semibold text-white transition hover:brightness-105"
            >
              <IconeWhats className="h-5 w-5" /> Prefere falar agora? Chame no WhatsApp
            </a>
          </>
        }
      >
        <div className="relative rounded-[2rem] border-2 border-primary-strong bg-white p-7 shadow-sticker md:p-9">
          <span className="absolute -top-4 left-8 rounded-full bg-primary-bright px-4 py-1 font-display text-sm font-semibold text-primary-strong">Hallo! 👋</span>
          <p className="mb-6 text-xl font-semibold tracking-tight text-primary-strong">Quero estudar com a Fran</p>
          <AulaForm />
        </div>
      </PageHero>

      <section className="bg-surface pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <SectionTitle
            eyebrow="Como começar"
            title={
              <>
                Três passos e você já está <span className="text-gradient">falando</span>
              </>
            }
          />
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {PASSOS.map((p, i) => (
              <Reveal as="li" key={p.n} delay={i * 0.08}>
                <div className="h-full rounded-[1.75rem] border border-ink/[0.07] bg-white p-7 shadow-card">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-primary-bright font-display text-xl font-bold text-primary-strong">{p.n}</span>
                  <h3 className="mt-6 text-xl font-semibold text-primary-strong">{p.titulo}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{p.texto}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <Pilares />

      <section className="relative overflow-hidden py-24 text-white md:py-32">
        <div className="bg-band absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
          <SectionTitle light eyebrow="Para quem é" title={<>Seja qual for o seu <span className="text-gradient-light">objetivo</span></>} />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {OBJETIVOS.map(({ Icon, t, d }, i) => (
              <Reveal as="li" key={t} delay={i * 0.06} y={20}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.06] p-6 transition hover:bg-white/10">
                  <Icon className="text-primary-bright" />
                  <p className="mt-5 font-display text-lg font-semibold leading-snug">{t}</p>
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
