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
export type CampoAula = "nome" | "email" | "whatsapp" | "nivel" | "urgencia" | "objetivo" | "mensagem";
export type AulaState = FormState<CampoAula>;

const emailValido = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);

/** Número completo com DDI. No Brasil exige DDD + número (10 ou 11 dígitos). */
function whatsCompleto(pais: string, ddi: string, numero: string) {
  const d = onlyDigits(numero);
  if (pais === "BR") return d.length === 10 || d.length === 11 ? "55" + d : null;
  if (pais === "XX" || !ddi) return whatsValido(d) ? d : null;
  return d.length >= 6 && d.length <= 13 ? ddi + d.replace(/^0+/, "") : null;
}

export function validarAula(fd: FormData): Resultado<CampoAula, Record<string, unknown>> {
  const v = (k: string) => String(fd.get(k) ?? "").trim();
  const errors: Partial<Record<CampoAula, string>> = {};
  if (v("nome").split(/\s+/).filter((p) => p.length > 1).length < 2) errors.nome = "Informe seu nome completo.";
  if (!emailValido(v("email"))) errors.email = "Informe um e-mail válido.";
  const whats = whatsCompleto(v("pais") || "BR", v("ddi"), v("whatsapp"));
  if (!whats) errors.whatsapp = v("pais") === "XX" ? "Informe o número com o código do país." : "Informe seu WhatsApp com DDD.";
  if (!v("nivel")) errors.nivel = "Conte como está seu alemão hoje.";
  if (!v("urgencia")) errors.urgencia = "Escolha a sua urgência.";
  if (!v("objetivo")) errors.objetivo = "Escolha seu objetivo.";
  if (v("mensagem").length > 1000) errors.mensagem = "Use até 1000 caracteres.";
  return {
    errors,
    dados: {
      nome: v("nome"),
      email: v("email").toLowerCase(),
      whatsapp: whats,
      pais: v("pais") || "BR",
      nivel: v("nivel"),
      urgencia: v("urgencia"),
      objetivo: v("objetivo"),
      mensagem: v("mensagem") || null,
      utm: utm(fd),
    },
  };
}

/** Campo invisível anti-robô: pessoas não preenchem, robôs sim. */
export const ehRobo = (fd: FormData) => String(fd.get("website") ?? "").trim() !== "";

/** Mensagem pronta para o aluno continuar a conversa no WhatsApp da Fran. */
export function textoWhatsAula(fd: FormData) {
  const v = (k: string) => String(fd.get(k) ?? "").trim();
  const linhas = [
    `Hallo, Fran! 😊 Sou ${v("nome")} e quero destravar meu alemão.`,
    `Nível: ${v("nivel")}`,
    `Urgência: ${v("urgencia")}`,
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
