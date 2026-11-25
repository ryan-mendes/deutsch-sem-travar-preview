import VitrineCursos, { type Slide } from "@/components/sections/VitrineCursos";
import { img } from "@/lib/imagens";
import { combos, kitsProva, livro } from "@/lib/produtos";

/** Vitrine da Home: uma única dobra que desliza entre os cursos (kits de prova A1–C2, kits com desconto e livro). */
export default function KitBanda() {
  const slides: Slide[] = [
    {
      id: "provas",
      aba: "Kits de prova A1–C2",
      eyebrow: "Kit Prova sem Travar · Goethe e telc",
      titulo: "Seu kit de prova,",
      destaque: "do A1 ao C2",
      texto: "Como funciona cada parte, cronograma semana a semana, roteiros para o Sprechen, modelos de Schreiben e simulados com gabarito. Escolha o seu nível:",
      imagem: img.kitsTodos,
      alt: "Os seis Kits Prova sem Travar, do A1 ao C2",
      niveis: kitsProva.map((k) => ({ n: k.selo!.replace("Niveau ", ""), href: `/loja/${k.slug}`, preco: k.preco })),
      href: "/loja#kits",
      cta: "Ver os kits de prova",
    },
    ...combos.map((c) => ({
      id: c.slug,
      aba: c.nome.replace("Kit ", ""),
      eyebrow: `Kit com desconto · ${c.inclui?.length} e-books`,
      titulo: c.nome.split(" ").slice(0, -1).join(" "),
      destaque: c.nome.split(" ").slice(-1)[0],
      texto: c.resumo,
      imagem: c.imagem,
      alt: c.alt,
      itens: c.itens,
      precoDe: c.precoDe,
      preco: c.preco,
      economia: c.economia,
      href: `/loja/${c.slug}`,
      cta: "Quero este kit",
    })),
    {
      id: livro.slug,
      aba: "Livro personalizado",
      eyebrow: "Novidade · do A1 ao B1",
      titulo: "Um livro de alemão com a",
      destaque: "SUA cara!",
      texto: livro.descricao,
      imagem: livro.imagem,
      alt: livro.alt,
      itens: livro.itens,
      preco: livro.preco,
      href: `/loja/${livro.slug}`,
      cta: "Quero o meu livro",
    },
  ];
  return <VitrineCursos slides={slides} />;
}
