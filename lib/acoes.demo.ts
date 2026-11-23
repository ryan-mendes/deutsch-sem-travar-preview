// Versão de demonstração das ações (prévia estática): valida igual ao servidor,
// mostra sucesso, mas não envia dados para lugar nenhum.
import { MENSAGENS, temErros, validarAula, type AulaState } from "./validacao";

const espera = () => new Promise((r) => setTimeout(r, 700));

export async function enviarAula(_prev: AulaState, fd: FormData): Promise<AulaState> {
  const { errors } = validarAula(fd);
  if (temErros(errors)) return { ok: false, message: MENSAGENS.confira, errors };
  await espera();
  return { ok: true, message: MENSAGENS.aula + MENSAGENS.demo };
}
