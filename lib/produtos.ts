// Catálogo da Fran. Cada item vira uma página em /loja/<slug>.
// Fontes: Catálogo de e-books 2026/2027 (páginas, nível, preço e tópicos), artes oficiais dos kits
// e as páginas da Hotmart (Kit B1, Kit Gramática, Kit Morar na Alemanha).
// Compra: pela Hotmart quando há link; nos outros, pelo WhatsApp, como o catálogo orienta.
import type { StaticImageData } from "next/image";
import { capas, capasCombo, capasKit, img } from "./imagens";
import { links } from "./site";

export type Compra = { tipo: "hotmart"; href: string } | { tipo: "whats"; texto: string };

export type Grupo = "kit" | "combo" | "morar" | "prova" | "gramatica" | "divertido" | "livro" | "portugues";

export type Produto = {
  slug: string;
  grupo: Grupo;
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
  /** Tom do fundo do card na vitrine */
  cor: string;
  selo?: string;
  nivel?: string;
  paginas?: number;
  formato: string;
  preco?: string;
  /** Preço cheio, para os kits com desconto */
  precoDe?: string;
  economia?: string;
  garantiaDias?: number;
  itens: string[];
  paraQuem?: string[];
  /** Kits com desconto: slugs dos e-books incluídos */
  inclui?: string[];
  compra: Compra;
  /** Conteúdo em alemão (página para falantes de alemão) */
  lang?: "de";
};

/** Nome e descrição de cada grupo (vitrine, abas e "Para quem é"). */
export const grupos: Record<Grupo, { nome: string; de?: string; descricao: string; paraQuem: string[] }> = {
  kit: { nome: "Kits de prova", de: "Goethe · telc", descricao: "Um kit para cada nível, do A1 ao C2, para a prova do Goethe e da telc.", paraQuem: ["Quem vai fazer a prova do Goethe ou da telc"] },
  combo: { nome: "Kits com desconto", de: "Sparpakete", descricao: "E-books combinados por objetivo, com preço especial.", paraQuem: ["Quem quer o material completo de um objetivo, pagando menos"] },
  morar: { nome: "Morar e trabalhar na Alemanha", de: "Leben & Arbeiten in Deutschland", descricao: "Para quem vai, quer ir ou já mora lá.", paraQuem: ["Quem vai para a Alemanha", "Quem quer ir", "Quem já mora lá"] },
  prova: { nome: "Provas de proficiência", de: "Prüfungsvorbereitung", descricao: "Goethe e telc, do B1 ao B2 Beruf.", paraQuem: ["Quem vai fazer a prova", "Quem precisa do certificado para trabalho, estudo ou visto"] },
  gramatica: { nome: "Gramática e base", de: "Grammatik & Grundlagen", descricao: "Para destravar de vez a estrutura do alemão.", paraQuem: ["Quem trava na gramática", "Quem quer uma base sólida"] },
  divertido: { nome: "Alemão divertido", de: "Deutsch mit Spaß", descricao: "Aprender brincando, lendo e rindo.", paraQuem: ["Crianças, adolescentes e adultos", "Professores e famílias", "Quem quer praticar sem cara de aula"] },
  livro: { nome: "Livro personalizado", descricao: "Um livro de alemão escrito com a sua história.", paraQuem: [] },
  portugues: { nome: "Português sem Travar", de: "für Deutschsprachige", descricao: "Material para quem fala alemão e aprende português.", paraQuem: [] },
};

const whats = (nome: string): Compra => ({ tipo: "whats", texto: `Hallo, Fran! 😊 Quero o ${nome}. Como faço para comprar?` });

/* ── Kits de prova A1–C2 (artes oficiais) ── */
const NIVEIS = [
  { n: "A1", nome: "Iniciante", para: ["Primeiro certificado", "Visto de reagrupamento familiar", "Integração na Alemanha"] },
  { n: "A2", nome: "Básico", para: ["Rotina na Alemanha", "Próximo passo depois do A1", "Integração e trabalho"] },
  { n: "B1", nome: "Intermediário", para: ["Trabalho", "Ausbildung", "Estudos", "Visto"] },
  { n: "B2", nome: "Intermediário superior", para: ["Trabalho qualificado", "Reconhecimento profissional", "Estudos"] },
  { n: "C1", nome: "Avançado", para: ["Universidade", "Carreira", "Fluência no dia a dia"] },
  { n: "C2", nome: "Proficiente", para: ["Domínio completo do idioma", "Carreira acadêmica", "Ensino e tradução"] },
] as const;

const CHECKLIST_KIT = ["Como funciona cada parte", "Cronograma semana a semana", "Roteiros para o Sprechen", "Modelos de Schreiben", "Simulados com gabarito"];

export const kitsProva: Produto[] = NIVEIS.map(({ n, nome, para }) => {
  const k = n.toLowerCase() as keyof typeof capasKit;
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
    imagem: capasKit[k],
    alt: `Capa do Kit Prova sem Travar, nível ${n} ${nome}`,
    cor: "bg-[#2f6fd6]",
    selo: `Niveau ${n}`,
    nivel: `${n} · ${nome}`,
    formato: b1 ? "3 materiais em PDF" : "Kit em PDF",
    preco: b1 ? "R$ 113,85" : undefined,
    garantiaDias: b1 ? 7 : undefined,
    itens: CHECKLIST_KIT,
    paraQuem: [...para],
    compra: b1 ? { tipo: "hotmart", href: links.kitB1Checkout } : whats(`Kit Prova sem Travar ${n}`),
  };
});

/* ── E-books do catálogo 2026/2027 ── */
type E = { slug: string; capa: keyof typeof capas; grupo: Grupo; nome: string; sub: string; paginas: number; nivel: string; preco: string; itens: string[]; descricao: string; cor: string };

const EBOOKS: E[] = [
  // Morar e trabalhar na Alemanha
  { slug: "fuhrerschein-sem-travar", capa: "fuhrerschein", grupo: "morar", nome: "Führerschein sem travar!", sub: "Preparatório Klasse B", paginas: 39, nivel: "A2–B1", preco: "R$ 57", cor: "bg-[#2a5aa8]",
    itens: ["A teoria da carteira de motorista Classe B explicada em português", "Vocabulário do trânsito alemão–português", "Perguntas para treinar, com gabarito"],
    descricao: "A teoria da carteira de motorista Classe B na Alemanha explicada em português, com o vocabulário do trânsito e perguntas para treinar." },
  { slug: "ausbildung-sem-travar", capa: "ausbildung", grupo: "morar", nome: "Ausbildung sem travar", sub: "Guia completo", paginas: 36, nivel: "A2–B1", preco: "R$ 57", cor: "bg-[#1f6b5c]",
    itens: ["Como funciona a formação profissional alemã", "Do primeiro passo ao contrato, com o alemão de cada etapa", "Ideal para quem quer estudar e trabalhar na Alemanha"],
    descricao: "Como funciona a Ausbildung, a formação profissional alemã: do primeiro passo ao contrato, com o alemão de cada etapa." },
  { slug: "au-pair-na-alemanha", capa: "au-pair", grupo: "morar", nome: "Au-pair na Alemanha", sub: "Guia completo", paginas: 30, nivel: "A1–A2", preco: "R$ 42", cor: "bg-[#1d4f8a]",
    itens: ["Como funciona o programa de au-pair", "Preparação, família anfitriã e dia a dia", "Alemão útil para a rotina com crianças"],
    descricao: "Tudo sobre o programa de au-pair na Alemanha: preparação, família anfitriã, dia a dia e o alemão útil para a rotina com crianças." },
  { slug: "working-holiday-na-alemanha", capa: "working-holiday", grupo: "morar", nome: "Working Holiday na Alemanha", sub: "Edição 2026", paginas: 38, nivel: "A1–B1", preco: "R$ 47", cor: "bg-[#1b3f6b]",
    itens: ["Regras, documentos e dinheiro para o visto", "Onde trabalhar, temporadas e o que pode e não pode", "Os caminhos para ficar depois: Ausbildung, estudo, Chancenkarte"],
    descricao: "Regras, documentos e dinheiro para o visto de Working Holiday, onde trabalhar e os caminhos para ficar depois." },
  { slug: "seus-direitos-no-trabalho", capa: "direitos-trabalho", grupo: "morar", nome: "Seus direitos no trabalho", sub: "na Alemanha · 2026", paginas: 27, nivel: "A2–B2", preco: "R$ 42", cor: "bg-[#3b2a7a]",
    itens: ["Contrato, salário, férias, doença e demissão", "Gravidez, maternidade e seguro-desemprego", "Cartas-modelo e o alemão de cada situação"],
    descricao: "Contrato, salário, férias, doença, demissão, maternidade e seguro-desemprego na Alemanha, com cartas-modelo e o alemão de cada situação." },
  { slug: "finanzamt-e-krankenkasse", capa: "finanzamt-krankenkasse", grupo: "morar", nome: "Finanzamt & Krankenkasse", sub: "sem travar · 2026", paginas: 29, nivel: "A2–B2", preco: "R$ 42", cor: "bg-[#1f5c4a]",
    itens: ["Contracheque, classes fiscais e declaração no ELSTER", "Plano de saúde público e privado, troca de Kasse", "Valores de 2026, mudanças de 2027 e cartas-modelo"],
    descricao: "Impostos e plano de saúde na Alemanha sem travar: contracheque, classes fiscais, ELSTER, Krankenkasse pública e privada, com valores de 2026." },
  { slug: "liebe-sem-travar", capa: "liebe", grupo: "morar", nome: "Liebe sem travar!", sub: "carinho, relações e casamento", paginas: 28, nivel: "A1–B1", preco: "R$ 42", cor: "bg-[#6b2440]",
    itens: ["Apelidos carinhosos para casal, filhos e família", "Como funcionam os relacionamentos na Alemanha", "Casar: documentos de brasileiros, visto, nome e bens"],
    descricao: "Carinho, relações e casamento em alemão: apelidos carinhosos, como funcionam os relacionamentos na Alemanha e os documentos para casar." },
  { slug: "alemao-para-enfermagem", capa: "enfermagem", grupo: "morar", nome: "Alemão para Enfermagem", sub: "alemão profissional", paginas: 49, nivel: "B1–B2", preco: "R$ 67", cor: "bg-[#1f5f63]",
    itens: ["O alemão do dia a dia no hospital", "Vocabulário, diálogos e situações reais", "Para quem trabalha ou vai trabalhar na Alemanha"],
    descricao: "O alemão do dia a dia no hospital, com vocabulário, diálogos e situações reais, para quem trabalha ou vai trabalhar com enfermagem na Alemanha." },
  // Provas de proficiência
  { slug: "sprachbausteine-telc-b1", capa: "sprachbausteine-b1", grupo: "prova", nome: "Sprachbausteine sem travar", sub: "telc B1 · 100 Übungen", paginas: 119, nivel: "B1", preco: "R$ 87", cor: "bg-[#e9e3f5]",
    itens: ["100 exercícios originais de Sprachbausteine", "Estratégias e Grammatik-Check", "Gabarito e placar de progresso"],
    descricao: "100 exercícios originais de Sprachbausteine para o telc B1, com estratégias, Grammatik-Check e placar de progresso." },
  { slug: "apresentacao-goethe-b1", capa: "apresentacao-b1", grupo: "prova", nome: "Apresentação sem travar", sub: "Goethe B1 · Sprechen Teil 2 e 3", paginas: 47, nivel: "B1", preco: "R$ 52", cor: "bg-[#7a1f4f]",
    itens: ["A apresentação da prova passo a passo", "Redemittel e apresentações-modelo", "Temas para treinar com gabarito"],
    descricao: "A apresentação do Goethe B1 (Sprechen Teil 2 e 3) passo a passo, com Redemittel, apresentações-modelo e temas para treinar." },
  { slug: "schreiben-sprechen-telc-b1", capa: "schreiben-sprechen-b1", grupo: "prova", nome: "Schreiben & Sprechen sem travar!", sub: "telc B1 · Zertifikat Deutsch", paginas: 34, nivel: "B1", preco: "R$ 57", cor: "bg-[#1f4f4a]",
    itens: ["E-mail informal e semiformal com modelos comentados", "12 simulados de escrita e 8 provas orais completas", "Banco de temas frequentes e checklist"],
    descricao: "Escrita e fala do telc B1: e-mails com modelos comentados, 12 simulados de escrita e 8 provas orais completas." },
  { slug: "sprachbausteine-telc-b2", capa: "sprachbausteine-b2", grupo: "prova", nome: "Sprachbausteine sem travar", sub: "telc B2 · 100 Übungen", paginas: 119, nivel: "B2", preco: "R$ 87", cor: "bg-[#e3efe9]",
    itens: ["100 exercícios originais no nível B2", "Estratégias para cada tipo de lacuna", "Gabarito e placar de progresso"],
    descricao: "100 exercícios originais de Sprachbausteine no nível B2, com estratégias para cada tipo de lacuna e placar de progresso." },
  { slug: "telc-b2-beruf-sem-travar", capa: "telc-b2-beruf", grupo: "prova", nome: "telc B2 Beruf sem travar!", sub: "preparatório telc Deutsch B2+ Beruf", paginas: 46, nivel: "B2", preco: "R$ 87", cor: "bg-[#1f3f4f]",
    itens: ["Todas as partes da prova, com estratégia de tempo", "Textos-modelo, Redemittel e Übungen originais", "Plano de 4 semanas e gabarito"],
    descricao: "Preparatório para o telc Deutsch B2+ Beruf: todas as partes da prova com estratégia de tempo, textos-modelo e um plano de 4 semanas." },
  { slug: "sprachbausteine-telc-b2-beruf", capa: "sprachbausteine-b2-beruf", grupo: "prova", nome: "Sprachbausteine sem travar!", sub: "Treinamento telc B2+ Beruf", paginas: 29, nivel: "B2", preco: "R$ 52", cor: "bg-[#3f4a1f]",
    itens: ["16 Übungen, 160 itens no formato da prova", "Cartas e textos do mundo do trabalho", "Gabarito com a regra de cada resposta"],
    descricao: "Treinamento de Sprachbausteine para o telc B2+ Beruf: 160 itens no formato da prova, com cartas e textos do mundo do trabalho." },
  { slug: "schreiben-sprechen-telc-b2-beruf", capa: "schreiben-sprechen-b2-beruf", grupo: "prova", nome: "Schreiben & Sprechen sem travar!", sub: "temas telc B2+ Beruf", paginas: 32, nivel: "B2", preco: "R$ 57", cor: "bg-[#4f2a1f]",
    itens: ["7 tipos de carta e 12 temas de escrita", "12 apresentações, 8 discussões e 9 negociações", "Redemittel por função e autocorreção"],
    descricao: "Escrita e fala do telc B2+ Beruf: 7 tipos de carta, 12 temas de escrita, apresentações, discussões e negociações." },
  // Gramática e base
  { slug: "gramatica-sem-travar", capa: "gramatica", grupo: "gramatica", nome: "Gramática sem travar", sub: "A1–C1", paginas: 71, nivel: "A1–C1", preco: "R$ 67", cor: "bg-[#1f2f4f]",
    itens: ["44 temas de gramática, do A1 ao C1", "Regra, 3 exercícios e fala em cada tema", "10 textos para treinar a fala e gabarito completo"],
    descricao: "44 temas de gramática do A1 ao C1, cada um com regra, 3 exercícios e fala, mais 10 textos para treinar e gabarito completo." },
  { slug: "destravando-as-declinacoes", capa: "declinacoes", grupo: "gramatica", nome: "Destravando as Declinações", sub: "casos e artigos", paginas: 34, nivel: "A1–B1", preco: "R$ 42", cor: "bg-[#7a2440]",
    itens: ["Nominativ, Akkusativ, Dativ e Genitiv com cores", "Os macetes da Fran para nunca mais travar", "Exercícios com gabarito"],
    descricao: "Os quatro casos do alemão com uma cor para cada um e os macetes da Fran para nunca mais travar nos artigos." },
  { slug: "destravando-as-preposicoes", capa: "preposicoes", grupo: "gramatica", nome: "Destravando as Preposições", sub: "com caso e sem medo", paginas: 35, nivel: "A1–B1", preco: "R$ 42", cor: "bg-[#5b3aa6]",
    itens: ["Preposições com Akkusativ, Dativ e as Wechselpräpositionen", "Explicação com ponte para o português", "Exercícios com gabarito"],
    descricao: "Preposições com Akkusativ, Dativ e as Wechselpräpositionen, explicadas com ponte para o português." },
  { slug: "o-mapa-da-fluencia", capa: "mapa-fluencia", grupo: "gramatica", nome: "O Mapa da Fluência", sub: "o caminho do A1 ao B1", paginas: 32, nivel: "A1–B1", preco: "R$ 32", cor: "bg-[#2a3a8a]",
    itens: ["Como sair do zero e chegar à fluência", "Rotina de estudo e metas por nível", "Missões práticas para destravar a fala"],
    descricao: "O caminho do A1 ao B1: como sair do zero, rotina de estudo, metas por nível e missões práticas para destravar a fala." },
  { slug: "destravando-a-matematica", capa: "matematica", grupo: "gramatica", nome: "Destravando a Matemática", sub: "(e a Física) em alemão", paginas: 34, nivel: "A2–B2", preco: "R$ 42", cor: "bg-[#1f4f5c]",
    itens: ["Fórmulas, símbolos e operações em alemão", "A história e o significado das fórmulas", "Para estudantes, Ausbildung e Studium"],
    descricao: "Fórmulas, símbolos e operações de matemática e física em alemão, para estudantes, Ausbildung e Studium." },
  // Alemão divertido
  { slug: "recreio-em-alemao", capa: "recreio", grupo: "divertido", nome: "Recreio em alemão!", sub: "Das große Spielebuch", paginas: 40, nivel: "A1–B1", preco: "R$ 42", cor: "bg-[#1f5c3a]",
    itens: ["Mais de 30 jogos de recreio, papel, tabuleiro e fala", "Bingo, memória e tabuleiro prontos para imprimir", "Para crianças, adolescentes e adultos, presencial e online"],
    descricao: "Mais de 30 jogos em alemão, com bingo, memória e tabuleiro prontos para imprimir, para todas as idades." },
  { slug: "das-grosse-raetselheft", capa: "raetselheft", grupo: "divertido", nome: "Das große Rätselheft", sub: "auf Deutsch · Nr. 1", paginas: 47, nivel: "A1–B1", preco: "R$ 32", cor: "bg-[#f3eadb]",
    itens: ["30 passatempos em alemão", "Tema: Alemanha, Áustria e Suíça", "Gabarito completo"],
    descricao: "30 passatempos em alemão sobre a Alemanha, a Áustria e a Suíça, com gabarito completo." },
  { slug: "petra-e-carlos", capa: "petra-carlos", grupo: "divertido", nome: "Petra & Carlos", sub: "HQ em alemão", paginas: 62, nivel: "A2+–B1", preco: "R$ 47", cor: "bg-[#2a2a6b]",
    itens: ["Uma história em quadrinhos original em alemão", "Atividades de leitura e vocabulário", "Arte criada pela Fran"],
    descricao: "Uma história em quadrinhos original em alemão, com arte criada pela Fran e atividades de leitura e vocabulário." },
  { slug: "destrave-as-suas-girias", capa: "girias", grupo: "divertido", nome: "Destrave as suas gírias", sub: "em alemão", paginas: 28, nivel: "A2–B2", preco: "R$ 32", cor: "bg-[#1f4f6b]",
    itens: ["Gírias, abreviações de WhatsApp e interjeições", "Expressões idiomáticas com equivalentes brasileiros", "Para entender os alemães de verdade"],
    descricao: "Gírias, abreviações de WhatsApp, interjeições e expressões idiomáticas alemãs com os equivalentes brasileiros." },
];

export const ebooks: Produto[] = EBOOKS.map((e) => ({
  slug: e.slug,
  grupo: e.grupo,
  categoria: `${grupos[e.grupo].nome} · ${e.nivel}`,
  nome: e.nome,
  titulo: e.nome.replace(/!$/, ""),
  destaque: e.nome.split(" ").slice(-1).map((w) => w.replace(/[!&]/g, "")),
  resumo: e.sub,
  descricao: e.descricao,
  imagem: capas[e.capa],
  alt: `Capa do e-book ${e.nome}`,
  cor: e.cor,
  nivel: e.nivel,
  paginas: e.paginas,
  formato: "E-book em PDF",
  preco: e.preco,
  itens: e.itens,
  compra: whats(`e-book ${e.nome}`),
}));

/* ── Kits com desconto (Sparpakete) ── */
type K = { slug: string; capa: keyof typeof capasCombo; nome: string; sub: string; de: string; por: string; economia: string; inclui: string[]; compra?: Compra; paraQuem: string[] };
const COMBOS: K[] = [
  { slug: "kit-morar-na-alemanha", capa: "morar", nome: "Kit Morar na Alemanha", sub: "Para quem vai, quer ir ou já mora lá", de: "R$ 329", por: "R$ 147", economia: "R$ 182",
    inclui: ["fuhrerschein-sem-travar", "ausbildung-sem-travar", "au-pair-na-alemanha", "working-holiday-na-alemanha", "seus-direitos-no-trabalho", "finanzamt-e-krankenkasse", "liebe-sem-travar"],
    compra: { tipo: "hotmart", href: "https://go.hotmart.com/K108641274D" }, paraQuem: ["Quem vai se mudar", "Quem já mora na Alemanha", "Au-pair, Ausbildung e Working Holiday"] },
  { slug: "kit-prova-b1-ebooks", capa: "prova-b1", nome: "Kit Prova B1", sub: "Goethe e telc · tudo para passar no B1", de: "R$ 196", por: "R$ 127", economia: "R$ 69",
    inclui: ["sprachbausteine-telc-b1", "apresentacao-goethe-b1", "schreiben-sprechen-telc-b1"], paraQuem: ["Quem vai fazer o Goethe B1 ou o telc B1"] },
  { slug: "kit-prova-b2-beruf", capa: "b2-beruf", nome: "Kit Prova B2 Beruf", sub: "Preparação completa para o telc B2 Beruf", de: "R$ 283", por: "R$ 167", economia: "R$ 116",
    inclui: ["sprachbausteine-telc-b2", "telc-b2-beruf-sem-travar", "sprachbausteine-telc-b2-beruf", "schreiben-sprechen-telc-b2-beruf"], paraQuem: ["Quem vai fazer o telc B2 Beruf", "Reconhecimento profissional"] },
  { slug: "kit-gramatica-sem-travar", capa: "gramatica", nome: "Kit Gramática sem travar", sub: "Para destravar de vez a estrutura do alemão", de: "R$ 183", por: "R$ 97", economia: "R$ 86",
    inclui: ["gramatica-sem-travar", "destravando-as-declinacoes", "destravando-as-preposicoes", "o-mapa-da-fluencia"],
    compra: { tipo: "hotmart", href: "https://go.hotmart.com/R108645896C" }, paraQuem: ["Quem trava na gramática", "Do A1 ao C1"] },
  { slug: "kit-alemao-divertido", capa: "divertido", nome: "Kit Alemão divertido", sub: "Aprender brincando, lendo e rindo", de: "R$ 153", por: "R$ 77", economia: "R$ 76",
    inclui: ["recreio-em-alemao", "das-grosse-raetselheft", "petra-e-carlos", "destrave-as-suas-girias"], paraQuem: ["Crianças, adolescentes e adultos", "Professores e famílias"] },
];

export const combos: Produto[] = COMBOS.map((k) => ({
  slug: k.slug,
  grupo: "combo",
  categoria: `Kit com desconto · ${k.inclui.length} e-books`,
  nome: k.nome,
  titulo: k.nome,
  destaque: k.nome.split(" ").slice(-2),
  resumo: k.sub,
  descricao: `${k.sub}. ${k.inclui.length} e-books em PDF num só kit: de ${k.de} por ${k.por}, você economiza ${k.economia}.`,
  imagem: capasCombo[k.capa],
  alt: `Arte do ${k.nome}`,
  cor: "bg-[#1f3a8a]",
  selo: `${k.inclui.length} e-books`,
  formato: `${k.inclui.length} e-books em PDF`,
  preco: k.por,
  precoDe: k.de,
  economia: k.economia,
  itens: k.inclui.map((s) => EBOOKS.find((e) => e.slug === s)!.nome),
  inclui: k.inclui,
  paraQuem: k.paraQuem,
  compra: k.compra ?? whats(k.nome),
}));

/* ── Livro personalizado e Português sem Travar ── */
export const livro: Produto = {
  slug: "livro-personalizado",
  grupo: "livro",
  categoria: "Novidade · do A1 ao B1",
  nome: "Livro de alemão personalizado",
  titulo: "Um livro de alemão com a sua cara",
  destaque: ["sua", "cara"],
  resumo: "Você conta da sua vida e a Fran transforma em lições de alemão.",
  descricao: "Você me conta da sua vida, e eu transformo isso em lições de alemão. Seu alemão, sua história: se é sobre você, você não esquece!",
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
};

export const portugues: Produto[] = [
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

export const produtos: Produto[] = [...kitsProva, ...combos, livro, ...ebooks, ...portugues];

export const doGrupo = (g: Grupo) => produtos.filter((p) => p.grupo === g);
export const produtoPorSlug = (slug: string) => produtos.find((p) => p.slug === slug);

/** Kits com desconto que incluem este e-book. */
export const combosCom = (slug: string) => combos.filter((c) => c.inclui?.includes(slug));

/** Até 3 sugestões: mesmo grupo primeiro, depois outros (sem repetir kits de prova). */
export function relacionados(p: Produto) {
  if (p.grupo === "combo") return combos.filter((c) => c.slug !== p.slug).slice(0, 3);
  const mesmos = produtos.filter((x) => x.slug !== p.slug && x.grupo === p.grupo);
  const outros = produtos.filter((x) => x.slug !== p.slug && x.grupo !== p.grupo && x.grupo !== "kit");
  return [...mesmos, ...outros].slice(0, 3);
}

export const TOTAL_EBOOKS = EBOOKS.length;
