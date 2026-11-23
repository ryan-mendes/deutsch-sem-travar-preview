// Validação pura dos formulários: roda no servidor (Server Actions) e na prévia estática
// (GitHub Pages, lib/acoes.demo.ts). Não importe nada de servidor aqui.

export const onlyDigits = (s: string) => s.replace(/\D/g, "");
/** WhatsApp do Brasil ou de fora (alunos na Alemanha, Áustria, Suíça): 10 a 15 dígitos. */
export const whatsValido = (s: string) => {
  const d = onlyDigits(s);
  return d.length >= 10 && d.length <= 15;
};

export type FormState<C extends string> = { ok: boolean; message: string; errors?: Partial<Record<C, string>> };
type Resultado<C extends string, D> = { errors: Partial<Record<C, string>>; dados: D };
export const temErros = (e: object) => Object.keys(e).length > 0;

const UTM = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "src"];
const utm = (fd: FormData) => Object.fromEntries(UTM.map((k) => [k, fd.get(k) || null]));

/* ── Interesse em aulas ── */
export type CampoAula = "nome" | "whatsapp" | "nivel" | "objetivo" | "mensagem";
export type AulaState = FormState<CampoAula>;

export function validarAula(fd: FormData): Resultado<CampoAula, Record<string, unknown>> {
  const v = (k: CampoAula) => String(fd.get(k) ?? "").trim();
  const errors: Partial<Record<CampoAula, string>> = {};
  if (v("nome").length < 2) errors.nome = "Como você se chama?";
  if (!whatsValido(v("whatsapp"))) errors.whatsapp = "Informe seu WhatsApp com DDD (ou código do país).";
  if (!v("nivel")) errors.nivel = "Escolha seu nível atual.";
  if (!v("objetivo")) errors.objetivo = "Escolha seu objetivo.";
  return {
    errors,
    dados: {
      nome: v("nome"),
      whatsapp: onlyDigits(v("whatsapp")),
      nivel: v("nivel"),
      objetivo: v("objetivo"),
      mensagem: v("mensagem") || null,
      utm: utm(fd),
    },
  };
}

/** Mensagem pronta para o aluno continuar a conversa no WhatsApp da Fran. */
export function textoWhatsAula(fd: FormData) {
  const v = (k: string) => String(fd.get(k) ?? "").trim();
  const linhas = [
    `Hallo, Fran! 😊 Sou ${v("nome")} e quero estudar alemão com você.`,
    `Nível: ${v("nivel")}`,
    `Objetivo: ${v("objetivo")}`,
  ];
  if (v("mensagem")) linhas.push(v("mensagem"));
  return linhas.join("\n");
}

export const MENSAGENS = {
  aula: "Recebi seus dados! Para agilizar, continue a conversa comigo no WhatsApp.",
  erro: "Não foi possível enviar agora. Tente de novo ou fale direto no WhatsApp.",
  confira: "Confira os campos destacados.",
  demo: " (Prévia: nenhum dado foi enviado.)",
};
