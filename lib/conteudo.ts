// Conteúdo das páginas, tirado do Hotmart, Instagram e Linktree da Fran.
// Mantido aqui (e não no JSX) para facilitar trocar por CMS depois.

export const kitB1 = {
  nome: "Kit Prova sem Travar",
  subtitulo: "Guia para passar na prova de B1 do Goethe / telc",
  preco: "R$ 113,85",
  garantiaDias: 7,
  formato: "3 materiais em PDF",
  descricao:
    "Vai fazer a prova de B1 de alemão e quer chegar no dia com segurança? O Kit B1 sem Travar reúne em um só lugar a preparação para as duas provas mais procuradas: o Goethe-Zertifikat B1 e o telc Deutsch B1.",
  descricao2:
    "São materiais em PDF, feitos pela Lehrerin Fran, para você estudar no seu ritmo e treinar exatamente as partes que mais travam os alunos: a escrita (Schreiben) e a fala (Sprechen).",
  // "O que você vai encontrar" (página do Hotmart)
  conteudo: [
    { titulo: "Cada parte da prova, passo a passo", texto: "Explicação de cada parte da prova do Goethe e da telc." },
    { titulo: "Notas e pontuação mínima", texto: "Como funcionam as notas e quanto você precisa para passar." },
    { titulo: "Simulados de Schreiben", texto: "Para treinar a escrita do jeito que a prova cobra." },
    { titulo: "Simulados de Sprechen", texto: "Para treinar a fala e chegar sem travar na parte oral." },
    { titulo: "Goethe ou telc?", texto: "As diferenças entre as duas provas, para você escolher a melhor para você." },
  ],
  // Itens da arte oficial do kit
  checklist: ["Como funciona cada parte", "Cronograma semana a semana", "Roteiros para o Sprechen", "Modelos de Schreiben", "Simulados com gabarito"],
  paraQuem: ["Trabalho", "Ausbildung", "Estudos", "Visto"],
  paises: "Alemanha, Áustria ou Suíça",
};

// Os 4 pilares das aulas (LP oficial do Deutsch sem Travar).
export const pilares = [
  {
    titulo: "Aprenda do seu jeito",
    texto: "Quem aprende vendo, vê. Quem precisa de exemplo, tem exemplo. Você não precisa se encaixar no método: o método se encaixa em você.",
  },
  {
    titulo: "Alemão da sua rotina",
    texto: "Você treina o que vai usar de verdade: no mercado, no médico, no trabalho, nas repartições, na conversa com os vizinhos.",
  },
  {
    titulo: "Gramática que você enxerga",
    texto: "A gramática deixa de ser um monte de regras abstratas e aparece no seu cotidiano, onde faz sentido. Quando você vê, você lembra.",
  },
  {
    titulo: "Você não aprende sozinho",
    texto: "Grupos pequenos e professores acompanhando o seu avanço. Alguém para praticar quando a vida aí não te dá com quem falar.",
  },
];

/** "O jeito de sempre" x "Deutsch sem Travar" (LP oficial). */
export const comparativo = [
  { antes: "O mesmo método para todo mundo", depois: "Didática que se adapta ao seu jeito de aprender" },
  { antes: "Gramática abstrata, cheia de regras soltas", depois: "Gramática que aparece na sua rotina" },
  { antes: "Decoreba que você esquece na semana seguinte", depois: "Alemão que você usa, e por isso lembra" },
  { antes: "Apps e vídeos soltos, sem caminho", depois: "Um caminho claro para seguir" },
  { antes: "Você estuda sozinho e desanima", depois: "Você é acompanhado de perto e continua" },
  { antes: "Entende o básico, mas continua mudo no mercado e no médico", depois: "Aprende para falar no dia a dia, sem depender de ninguém" },
];

/** "Você vai falar alemão no seu dia a dia, mesmo que..." (LP oficial). */
export const mesmoQue = [
  "Você já tenha visto o idioma 40 mil vezes e nada fique na cabeça.",
  "A gramática pareça um monte de regras sem sentido.",
  "Morando aí, você quase nunca precise falar com ninguém.",
];

/** Público, nas palavras da Fran. */
export const publico = "Para brasileiros e falantes da língua portuguesa na Alemanha, Suíça, Áustria e Brasil.";

/** Trajetória da Fran (Catálogo 2026/2027 e mensagem da Fran sobre a Schuler). */
export const trajetoria = [
  { ano: "2016", titulo: "CEL, São Paulo", texto: "Primeiros passos no alemão pelo Centro de Estudos de Línguas" },
  { ano: "2020", titulo: "Goethe-Institut", texto: "Bolsa de estudos para estudar em Berlim" },
  { ano: "2023", titulo: "Schuler, Göppingen", texto: "Trabalhou na empresa Schuler como física" },
  { ano: "Hoje", titulo: "MundArt Idiomas", texto: "Deutsch sem Travar e pesquisa em Física na UNIFESP" },
];

/** Metodologia Camaleão (Catálogo 2026/2027, texto da própria Fran). */
export const metodologia = {
  lema: "Para cada aluno, uma forma de aprender",
  paragrafos: [
    "A Metodologia Camaleão foi desenvolvida por mim, Francielle Gonçalves, para adaptar o ensino do alemão à vida de cada aluno. Assim como o camaleão muda de cor conforme o ambiente, a didática muda conforme a pessoa: idade, profissão, objetivos e dificuldades.",
    "Ela nasceu de uma necessidade real. Muitos alunos diziam querer aprender alemão sem gramática, mas percebi que o problema não era a gramática, e sim a falta de adaptação. Inspirada em Paulo Freire, que defende um ensino a partir da realidade do aluno, criei um método que mantém a gramática como base, mas a aplica no cotidiano.",
    "Um aluno médico aprende com situações do hospital, e não do direito. Assim, o vocabulário volta à memória quando ele está no próprio contexto.",
  ],
  passos: [
    { titulo: "Identificar o perfil do aluno", texto: "Idade, profissão, objetivos, dificuldades e bloqueios." },
    { titulo: "Traçar um caminho concreto", texto: "A didática é escolhida para aquela pessoa." },
    { titulo: "Ensinar a gramática com ponte para o português", texto: "O que é a estrutura em alemão e o que ela seria na nossa língua." },
    { titulo: "Aplicar no nicho do aluno", texto: "Exemplos reais do cotidiano e da área de atuação." },
    { titulo: "Usar no dia a dia", texto: "Falar, ouvir e escrever em situações reais. Depois, observar e readaptar." },
  ],
  frase: "Alemão não é difícil, é novidade.",
};

/**
 * Depoimentos reais de alunos. A seção só aparece no site quando houver pelo menos um.
 * Formato: { nome: "Maria S.", contexto: "Aluna de B1, mora em Munique", texto: "..." }
 */
export const depoimentos: { nome: string; contexto: string; texto: string }[] = [];

/** Temas dos destaques do Instagram: o que aparece nas aulas e nos conteúdos. */
export const temas = ["Didática", "Vivências", "Cultura", "Musik", "Philosophie", "Tipps", "Gramática", "Prova B1", "Sprechen", "Schreiben"];

export const objetivos = ["Prova / certificado (A1 ao C2)", "Trabalho ou Ausbildung", "Morar ou tirar visto", "Viagem e cultura", "Outro"];
export const niveis = ["Nunca estudei", "Básico, entendo pouco", "Intermediário, entendo mas travo", "Avançado, quero mais confiança"];
export const urgencias = ["Alta, preciso falar agora", "Média, nos próximos meses", "Baixa, estou pesquisando"];

/** DDI do WhatsApp (mesma lista da LP). */
export const paises = [
  { id: "BR", nome: "Brasil", ddi: "55" },
  { id: "DE", nome: "Alemanha", ddi: "49" },
  { id: "AT", nome: "Áustria", ddi: "43" },
  { id: "CH", nome: "Suíça", ddi: "41" },
  { id: "PT", nome: "Portugal", ddi: "351" },
  { id: "BE", nome: "Bélgica", ddi: "32" },
  { id: "CA", nome: "Canadá", ddi: "1" },
  { id: "ES", nome: "Espanha", ddi: "34" },
  { id: "US", nome: "Estados Unidos", ddi: "1" },
  { id: "FR", nome: "França", ddi: "33" },
  { id: "NL", nome: "Holanda", ddi: "31" },
  { id: "IE", nome: "Irlanda", ddi: "353" },
  { id: "IT", nome: "Itália", ddi: "39" },
  { id: "JP", nome: "Japão", ddi: "81" },
  { id: "LU", nome: "Luxemburgo", ddi: "352" },
  { id: "GB", nome: "Reino Unido", ddi: "44" },
  { id: "XX", nome: "Outro país", ddi: "" },
];

export const faqKit = [
  {
    p: "Para qual prova o kit serve?",
    r: "Para as duas provas de B1 mais procuradas: o Goethe-Zertifikat B1 e o telc Deutsch B1. O kit também mostra as diferenças entre elas.",
  },
  {
    p: "Em que formato vem o material?",
    r: "São 3 materiais em PDF, entregues pela Hotmart logo após a compra, para você estudar no seu ritmo.",
  },
  {
    p: "E se eu não gostar?",
    r: "A compra tem garantia de 7 dias pela Hotmart: dentro desse prazo você pode pedir o reembolso.",
  },
  {
    p: "Para que eu preciso do B1?",
    r: "O B1 costuma ser pedido para trabalho, Ausbildung, estudos ou visto na Alemanha, Áustria ou Suíça.",
  },
  {
    p: "Quero ajuda além do material. É possível?",
    r: "Sim. Você pode estudar com a Fran em aulas com acompanhamento de perto: é só chamar no WhatsApp ou preencher o formulário da página de aulas.",
  },
];
