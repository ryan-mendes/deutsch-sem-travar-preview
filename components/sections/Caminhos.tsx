import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { img } from "@/lib/imagens";
import { links } from "@/lib/site";

type Caminho = { titulo: string; texto: string; selo: string; href: string; cta: string; imagem: StaticImageData; alt: string; externo?: boolean };

const CAMINHOS: Caminho[] = [
  {
    titulo: "Aulas com a Fran",
    texto: "Aulas individuais no seu ritmo, com foco em falar alemão no dia a dia.",
    selo: "Estude comigo",
    href: "/estude-comigo",
    cta: "Quero aulas",
    imagem: img.estudeComigo,
    alt: "Arte Deutsch sem Travar com a Fran estudando",
  },
  {
    titulo: "Kit Prova sem Travar",
    texto: "Tudo para a prova de B1 do Goethe e da telc em 3 materiais em PDF.",
    selo: "R$ 113,85",
    href: "/kit-b1",
    cta: "Ver o kit",
    imagem: img.kitB1,
    alt: "Capa do Kit Prova sem Travar: passe no B1 sem travar",
  },
  {
    titulo: "Comunidade Deutsch sem Travar",
    texto: "Grupo gratuito no WhatsApp para praticar e receber dicas.",
    selo: "Grátis",
    href: links.comunidade,
    cta: "Entrar no grupo",
    imagem: img.franIlustracao,
    alt: "Ilustração da Fran com o camaleão",
    externo: true,
  },
  {
    titulo: "Você na Alemanha",
    texto: "PDFs e materiais gratuitos para estudar e se preparar para a vida lá.",
    selo: "PDFs grátis",
    href: "/materiais",
    cta: "Baixar materiais",
    imagem: img.voceNaAlemanha,
    alt: "Arte Você na Alemanha com rua de cidade alemã",
  },
];

export default function Caminhos() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionTitle
          eyebrow="Por onde começar"
          title={
            <>
              Escolha o seu <span className="text-gradient">caminho</span>
            </>
          }
          description="Aulas, material para a prova, comunidade e conteúdo grátis: tudo que a Fran oferece, num lugar só."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CAMINHOS.map((c, i) => {
            const conteudo = (
              <>
                <div className="relative aspect-square overflow-hidden rounded-[1.4rem] bg-tint">
                  <Image src={c.imagem} alt={c.alt} sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full border-2 border-primary-strong bg-white px-3 py-1 text-xs font-bold text-primary-strong">{c.selo}</span>
                </div>
                <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                  <h3 className="text-xl font-semibold leading-tight text-primary-strong">{c.titulo}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{c.texto}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-cta">
                    {c.cta}
                    <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </>
            );
            const cls = "group flex h-full flex-col rounded-[1.75rem] border border-ink/[0.07] bg-white p-3 shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-card-hover";
            return (
              <Reveal as="li" key={c.titulo} delay={(i % 4) * 0.08}>
                {c.externo ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className={cls}>
                    {conteudo}
                  </a>
                ) : (
                  <Link href={c.href} className={cls}>
                    {conteudo}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
