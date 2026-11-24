// Catálogo de kits, e-books e livros da Fran. Cada item vira uma página em /loja/<slug>.
// Fonte: artes oficiais enviadas pela Fran e a página do Kit B1 na Hotmart.
// Preço e link de compra só aparecem quando são conhecidos. Nos outros, a compra é pelo WhatsApp.
import type { StaticImageData } from "next/image";
import { img } from "./imagens";
import { links } from "./site";

export type Compra = { tipo: "hotmart"; href: string } | { tipo: "whats"; texto: string };

export type Produto = {
  slug: string;
  grupo: "kit" | "ebook" | "livro" | "portugues";
  /** Rótulo curto em cima do título (eyebrow) */
  categoria: string;
  nome: string;
  /** Título grande da página */
  titulo: string;
  destaque: string[];
  /** Linha curta para cards */
  resumo: string;
  descricao: string;
  imagem: StaticImageData;
  alt: string;
  /** Tom do card na vitrine */
  cor: string;
  selo?: string;
  nivel?: string;
  paginas?: number;
  formato: string;
  preco?: string;
  garantiaDias?: number;
  itens: string[];
  paraQuem: string[];
  compra: Compra;
  /** Conteúdo em alemão (página para falantes de alemão) */
  lang?: "de";
};

const NIVEIS = [
  { n: "A1", nome: "Iniciante", para: ["Primeiro certificado", "Visto de reagrupamento familiar", "Integração na Alemanha"] },
  { n: "A2", nome: "Básico", para: ["Rotina na Alemanha", "Próximo passo depois do A1", "Integração e trabalho"] },
  { n: "B1", nome: "Intermediário", para: ["Trabalho", "Ausbildung", "Estudos", "Visto"] },
  { n: "B2", nome: "Intermediário superior", para: ["Trabalho qualificado", "Reconhecimento profissional", "Estudos"] },
  { n: "C1", nome: "Avançado", para: ["Universidade", "Carreira", "Fluência no dia a dia"] },
  { n: "C2", nome: "Proficiente", para: ["Domínio completo do idioma", "Carreira acadêmica", "Ensino e tradução"] },
] as const;

const CHECKLIST_KIT = ["Como funciona cada parte", "Cronograma semana a semana", "Roteiros para o Sprechen", "Modelos de Schreiben", "Simulados com gabarito"];

const kits: Produto[] = NIVEIS.map(({ n, nome, para }) => {
  const k = n.toLowerCase() as keyof typeof img.kits;
  const b1 = n === "B1";
  return {
    slug: `kit-prova-${k}`,
    grupo: "kit",
    categoria: `Goethe · telc · Niveau ${n}`,
    nome: `Kit Prova sem Travar ${n}`,
    titulo: `Passe no ${n} sem travar`,
    destaque: ["sem", "travar"],
    resumo: `Guia para passar na prova de ${n} do Goethe / telc.`,
    descricao: b1
      ? "Vai fazer a prova de B1 de alemão e quer chegar no dia com segurança? O Kit B1 sem Travar reúne em um só lugar a preparação para as duas provas mais procuradas: o Goethe-Zertifikat B1 e o telc Deutsch B1."
      : `Guia em PDF para a prova de ${n} (${nome.toLowerCase()}) do Goethe e da telc: entenda cada parte, siga um cronograma semana a semana e treine Sprechen e Schreiben com simulados e gabarito.`,
    imagem: img.kits[k],
    alt: `Capa do Kit Prova sem Travar, nível ${n} ${nome}`,
    cor: "bg-[#2f6fd6]",
    selo: `Niveau ${n}`,
    nivel: `${n} · ${nome}`,
    formato: b1 ? "3 materiais em PDF" : "Kit em PDF",
    preco: b1 ? "R$ 113,85" : undefined,
    garantiaDias: b1 ? 7 : undefined,
    itens: CHECKLIST_KIT,
    paraQuem: [...para],
    compra: b1 ? { tipo: "hotmart", href: links.kitB1Checkout } : { tipo: "whats", texto: `Hallo, Fran! 😊 Quero o Kit Prova sem Travar ${n}. Como faço para comprar?` },
  };
});

const ebooks: Produto[] = [
  {
    slug: "livro-personalizado",
    grupo: "livro",
    categoria: "Novidade · do A1 ao B1",
    nome: "Livro de alemão personalizado",
    titulo: "Um livro de alemão com a sua cara",
    destaque: ["sua", "cara"],
    resumo: "Você conta da sua vida e a Fran transforma em lições de alemão.",
    descricao:
      "Você me conta da sua vida, e eu transformo isso em lições de alemão. Seu alemão, sua história: se é sobre você, você não esquece!",
    imagem: img.livroPersonalizado,
    alt: "Arte do livro de alemão personalizado com o caderno Mein Lernplan",
    cor: "bg-[#6c3fb5]",
    selo: "Novidade",
    nivel: "A1 ao B1",
    formato: "Livro + cronograma de estudos",
    preco: "R$ 150",
    itens: [
      "Lições com a sua rotina, o seu trabalho e os seus objetivos",
      "Frases que você usa de verdade: médico, trabalho, mercado",
      "Cronograma de estudos pronto para imprimir",
      "Do A1 ao B1, com metas (Ziele) para sair do ciclo",
    ],
    paraQuem: ["Quem já tentou de tudo e nada ficou", "Quem mora ou vai morar fora", "Quem quer estudar no próprio ritmo"],
    compra: { tipo: "whats", texto: "Hallo, Fran! 😊 Quero o meu livro de alemão personalizado." },
  },
  {
    slug: "fuhrerschein-sem-travar",
    grupo: "ebook",
    categoria: "Führerschein Klasse B · Alemanha",
    nome: "Führerschein sem travar!",
    titulo: "Führerschein sem travar",
    destaque: ["sem", "travar"],
    resumo: "Preparatório completo para a carteira de motorista na Alemanha.",
    descricao:
      "Preparatório completo, Theorie + Praxis, para tirar a carteira de motorista (Klasse B) na Alemanha: do passo a passo e dos custos até os comandos do examinador na prova prática.",
    imagem: img.fuhrerschein,
    alt: "Capa do e-book Führerschein sem travar",
    cor: "bg-[#1e3260]",
    paginas: 39,
    formato: "E-book em PDF",
    itens: ["Passo a passo e custos da carteira na Alemanha", "Theorie: regras, placas e 24 Testfragen", "Praxis: manobras e comandos do examinador", "+100 termos DE-PT e troca da CNH"],
    paraQuem: ["Quem vai tirar a carteira na Alemanha", "Quem quer trocar a CNH", "Quem vai fazer a prova em alemão"],
    compra: { tipo: "whats", texto: "Hallo, Fran! 😊 Quero o e-book Führerschein sem travar." },
  },
  {
    slug: "destravando-as-preposicoes",
    grupo: "ebook",
    categoria: "Die Präpositionen · Schritt für Schritt",
    nome: "Destravando as Preposições!",
    titulo: "Destravando as Preposições",
    destaque: ["Preposições"],
    resumo: "Akkusativ, Dativ, Genitiv e tempo, com ponte para o português.",
    descricao: "Akkusativ, Dativ, Genitiv e preposições de tempo explicadas passo a passo, sempre com a ponte para o português.",
    imagem: img.preposicoes,
    alt: "Capa do e-book Destravando as Preposições",
    cor: "bg-[#5b3aa6]",
    nivel: "A1 ao B2",
    paginas: 35,
    formato: "E-book em PDF",
    itens: ["Ponte com o português, passo a passo", "Wo? ou Wohin? sem confusão", "Tempo: um, am, im, seit, vor...", "20 exercícios, tradução e gabarito"],
    paraQuem: ["Quem trava no Wo? e Wohin?", "Quem estuda para prova", "Do A1 ao B2"],
    compra: { tipo: "whats", texto: "Hallo, Fran! 😊 Quero o e-book Destravando as Preposições." },
  },
  {
    slug: "destravando-as-declinacoes",
    grupo: "ebook",
    categoria: "Nominativ · Akkusativ · Dativ · Genitiv",
    nome: "Destravando as Declinações!",
    titulo: "Destravando as Declinações",
    destaque: ["Declinações"],
    resumo: "Guia de macetes, tabelas e exercícios para os 4 casos.",
    descricao: "Guia de macetes, tabelas e exercícios para entender de vez os quatro casos do alemão, com uma cor para cada caso e ponte com o português.",
    imagem: img.declinacoes,
    alt: "Capa do e-book Destravando as Declinações",
    cor: "bg-[#7a2440]",
    nivel: "A1 ao B2",
    paginas: 34,
    formato: "E-book em PDF",
    itens: ["Uma cor para cada caso + ponte com o português", "Verbos de Akkusativ e de Dativ", "Todas as preposições e tabelas", "12 macetes + exercícios com gabarito"],
    paraQuem: ["Quem se perde em der, den, dem, des", "Quem estuda para prova", "Do A1 ao B2"],
    compra: { tipo: "whats", texto: "Hallo, Fran! 😊 Quero o e-book Destravando as Declinações." },
  },
  {
    slug: "alemao-para-enfermagem",
    grupo: "ebook",
    categoria: "Deutsch für Pflegekräfte",
    nome: "Alemão para Enfermagem!",
    titulo: "Alemão para Enfermagem",
    destaque: ["Enfermagem"],
    resumo: "Para quem vai cuidar de pessoas na Alemanha.",
    descricao: "Para quem vai cuidar de pessoas na Alemanha: 20 situações reais do hospital, passagem de plantão, escrita e vocabulário da área.",
    imagem: img.enfermagem,
    alt: "Capa do e-book Alemão para Enfermagem",
    cor: "bg-[#1f5f63]",
    nivel: "B1 ao B2",
    paginas: 49,
    formato: "E-book em PDF",
    itens: ["20 situações reais com diálogo", "Passar plantão (Übergabe) sem travar", "Relatório de enfermagem e e-mails", "Vocabulário, siglas e gabarito"],
    paraQuem: ["Profissionais de enfermagem", "Pflegekräfte em reconhecimento", "Quem vai trabalhar em hospital na Alemanha"],
    compra: { tipo: "whats", texto: "Hallo, Fran! 😊 Quero o e-book Alemão para Enfermagem." },
  },
  {
    slug: "viaje-pelo-brasil-sem-travar",
    grupo: "portugues",
    categoria: "Português sem Travar · Reiseführer",
    nome: "Viaje pelo Brasil sem travar!",
    titulo: "Viaje pelo Brasil sem travar",
    destaque: ["sem", "travar"],
    resumo: "Reiseführer: 22 destinos, tudo explicado em alemão.",
    descricao:
      "Reiseführer für Brasilien, komplett auf Deutsch erklärt: Reiseziele, Gesundheit, Sicherheit und Portugiesisch für unterwegs. Von Fortaleza bis zum Amazonas.",
    imagem: img.viajeBrasil,
    alt: "Capa do guia Viaje pelo Brasil sem travar",
    cor: "bg-[#173a6b]",
    selo: "22 Ziele",
    formato: "Guia em PDF, em alemão",
    itens: ["22 Reiseziele, von Fortaleza bis zum Amazonas", "Einreise & Visum (Stand November 2026)", "Versicherung: Pflicht oder nicht?", "Sprachführer: 40 Sätze für die Reise"],
    paraQuem: ["Deutschsprachige, die Brasilien bereisen", "Partner und Familie von Brasilianern", "Wer Portugiesisch lernt"],
    compra: { tipo: "whats", texto: "Hallo, Fran! 😊 Ich interessiere mich für den Reiseführer „Viaje pelo Brasil sem travar“." },
    lang: "de",
  },
];

export const produtos: Produto[] = [...kits, ...ebooks];

export const kitsProva = kits;
export const ebooksAlemao = ebooks.filter((p) => p.grupo === "ebook");
export const livro = ebooks.find((p) => p.grupo === "livro")!;
export const portugues = ebooks.filter((p) => p.grupo === "portugues");

export const produtoPorSlug = (slug: string) => produtos.find((p) => p.slug === slug);

/** Até 3 produtos do mesmo grupo (ou da vitrine geral) para "Veja também". */
export function relacionados(p: Produto) {
  const mesmos = produtos.filter((x) => x.slug !== p.slug && x.grupo === p.grupo);
  const outros = produtos.filter((x) => x.slug !== p.slug && x.grupo !== p.grupo && x.grupo !== "kit");
  return [...mesmos, ...outros].slice(0, 3);
}

export const precoTexto = (p: Produto) => p.preco ?? "Consulte pelo WhatsApp";
