"use client";

import { startTransition, useActionState, useEffect, useRef, useState } from "react";
import { CheckCircle2, Mail, User } from "lucide-react";
import { enviarAula } from "@/lib/acoes";
import { textoWhatsAula, type AulaState } from "@/lib/validacao";
import { niveis, objetivos, paises, urgencias } from "@/lib/conteudo";
import { whatsComTexto } from "@/lib/site";
import { Select, SubmitButton, Textarea, maskCelular } from "@/components/ui/Field";
import { IconeWhats } from "@/components/ui/Icones";

const UTM = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "src"];

const campo =
  "w-full rounded-xl border bg-white py-3.5 text-ink outline-none transition placeholder:text-muted/60 focus:border-primary focus:ring-4 focus:ring-primary-soft/20";

function Erro({ id, msg }: { id: string; msg?: string }) {
  return msg ? (
    <p id={id} className="mt-1 text-xs text-cta">
      {msg}
    </p>
  ) : null;
}

/** Grupo de opções em cartões (rádio). */
function Opcoes({ name, legenda, opcoes, erro, colunas }: { name: string; legenda: string; opcoes: string[]; erro?: string; colunas: string }) {
  const errId = `${name}-err`;
  return (
    <fieldset className="sm:col-span-2" aria-describedby={erro ? errId : undefined}>
      <legend className="mb-2 text-sm font-semibold text-ink">{legenda}</legend>
      <div className={`grid gap-2 ${colunas}`}>
        {opcoes.map((o) => (
          <label
            key={o}
            className={`relative flex cursor-pointer items-center gap-3 rounded-xl border bg-white px-3.5 py-3 text-sm font-semibold leading-snug text-ink transition hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-tint has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-primary-soft/30 ${
              erro ? "border-cta/60" : "border-ink/10"
            }`}
          >
            <input type="radio" name={name} value={o} className="peer sr-only" />
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 border-ink/25 transition peer-checked:border-primary peer-checked:bg-primary peer-checked:[box-shadow:inset_0_0_0_3px_white]" />
            {o}
          </label>
        ))}
      </div>
      <Erro id={errId} msg={erro} />
    </fieldset>
  );
}

export default function AulaForm() {
  const [state, action, pending] = useActionState<AulaState, FormData>(enviarAula, { ok: false, message: "" });
  const [utm, setUtm] = useState<Record<string, string>>({});
  const [pais, setPais] = useState("BR");
  const [fone, setFone] = useState("");
  const ultimo = useRef<FormData | null>(null);
  const e = state.errors ?? {};
  const ddi = paises.find((p) => p.id === pais)?.ddi ?? "";

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    setUtm(Object.fromEntries(UTM.map((k) => [k, p.get(k) ?? ""])));
  }, []);

  if (state.ok) {
    const href = whatsComTexto(ultimo.current ? textoWhatsAula(ultimo.current) : "Hallo, Fran! 😊 Quero destravar meu alemão.");
    return (
      <div role="status" className="flex flex-col items-center gap-5 py-8 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-tint text-primary-strong">
          <CheckCircle2 size={34} />
        </span>
        <p className="max-w-xs text-ink">{state.message}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-semibold text-white transition hover:brightness-105"
        >
          <IconeWhats className="h-5 w-5" /> Continuar no WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      // Envio pelo onSubmit (e não pela prop action) para o React não limpar os campos quando há erro.
      onSubmit={(ev) => {
        ev.preventDefault();
        const fd = new FormData(ev.currentTarget);
        ultimo.current = fd;
        startTransition(() => action(fd));
      }}
      noValidate
      className="grid gap-4 sm:grid-cols-2"
    >
      {UTM.map((k) => (
        <input key={k} type="hidden" name={k} value={utm[k] ?? ""} />
      ))}
      <input type="hidden" name="ddi" value={ddi} />
      {/* Anti-robô: escondido de pessoas e leitores de tela */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Site
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="au-nome" className="mb-1.5 block text-sm font-semibold text-ink">
          Nome completo
        </label>
        <div className="relative">
          <User size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
          <input
            id="au-nome"
            name="nome"
            autoComplete="name"
            aria-invalid={Boolean(e.nome)}
            aria-describedby={e.nome ? "au-nome-err" : undefined}
            className={`${campo} pl-11 pr-4 ${e.nome ? "border-cta" : "border-ink/10"}`}
          />
        </div>
        <Erro id="au-nome-err" msg={e.nome} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="au-email" className="mb-1.5 block text-sm font-semibold text-ink">
          E-mail
        </label>
        <div className="relative">
          <Mail size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
          <input
            id="au-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            aria-invalid={Boolean(e.email)}
            aria-describedby={e.email ? "au-email-err" : undefined}
            className={`${campo} pl-11 pr-4 ${e.email ? "border-cta" : "border-ink/10"}`}
          />
        </div>
        <Erro id="au-email-err" msg={e.email} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="au-whats" className="mb-1.5 block text-sm font-semibold text-ink">
          WhatsApp
        </label>
        <div className="flex gap-2">
          <select
            name="pais"
            aria-label="País do WhatsApp"
            value={pais}
            onChange={(ev) => {
              setPais(ev.target.value);
              setFone("");
            }}
            className={`${campo.replace("w-full ", "")} w-[6.75rem] shrink-0 appearance-none border-ink/10 bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='12'%20height='8'%3E%3Cpath%20d='M1%201l5%205%205-5'%20stroke='%2354595f'%20stroke-width='2'%20fill='none'/%3E%3C/svg%3E")] bg-[length:10px] bg-[right_0.75rem_center] bg-no-repeat pl-3 pr-7 text-sm font-semibold`}
          >
            {paises.map((p) => (
              <option key={p.id} value={p.id}>
                {p.id === "XX" ? "Outro" : `${p.id} +${p.ddi}`}
              </option>
            ))}
          </select>
          <input
            id="au-whats"
            name="whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            placeholder={pais === "BR" ? "(11) 9 8765-4321" : pais === "XX" ? "+ código do país e número" : "Número sem o código do país"}
            value={fone}
            onChange={(ev) => setFone(pais === "BR" ? maskCelular(ev.target.value) : ev.target.value)}
            aria-invalid={Boolean(e.whatsapp)}
            aria-describedby={e.whatsapp ? "au-whats-err" : undefined}
            className={`${campo} min-w-0 flex-1 px-4 ${e.whatsapp ? "border-cta" : "border-ink/10"}`}
          />
        </div>
        <Erro id="au-whats-err" msg={e.whatsapp} />
      </div>

      <Opcoes name="nivel" legenda="Como está seu alemão hoje?" opcoes={niveis} erro={e.nivel} colunas="sm:grid-cols-2" />
      <Opcoes name="urgencia" legenda="Qual a sua urgência?" opcoes={urgencias} erro={e.urgencia} colunas="sm:grid-cols-3" />

      <Select id="au-obj" name="objetivo" label="Seu objetivo" options={objetivos} error={e.objetivo} className="sm:col-span-2" />
      <Textarea id="au-msg" name="mensagem" label="Quer contar mais? (opcional)" rows={3} maxLength={1000} error={e.mensagem} className="sm:col-span-2" />

      <div className="mt-1 sm:col-span-2">
        <SubmitButton pending={pending}>Eu quero destravar meu alemão</SubmitButton>
        {state.message && (
          <p role="alert" className="mt-2 text-center text-sm text-cta">
            {state.message}
          </p>
        )}
        <p className="mt-3 text-center text-xs text-muted">Sem compromisso: é uma conversa pelo WhatsApp para entender o seu momento.</p>
      </div>
    </form>
  );
}
