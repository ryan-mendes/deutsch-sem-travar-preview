"use server";

import { encaminharLead } from "@/lib/leads";
import { MENSAGENS, ehRobo, temErros, validarAula, type AulaState } from "@/lib/validacao";

export async function enviarAula(_prev: AulaState, fd: FormData): Promise<AulaState> {
  if (ehRobo(fd)) return { ok: true, message: MENSAGENS.aula };
  const { errors, dados } = validarAula(fd);
  if (temErros(errors)) return { ok: false, message: MENSAGENS.confira, errors };
  try {
    await encaminharLead("aula", dados);
  } catch (err) {
    console.error("[lead:aula] falha", err);
    return { ok: false, message: MENSAGENS.erro };
  }
  return { ok: true, message: MENSAGENS.aula };
}
