"use client";

import { startTransition, useActionState, useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { enviarAula } from "@/lib/acoes";
import { textoWhatsAula, type AulaState } from "@/lib/validacao";
import { niveis, objetivos } from "@/lib/conteudo";
import { whatsComTexto } from "@/lib/site";
import { Input, Select, SubmitButton, Textarea } from "@/components/ui/Field";
import { IconeWhats } from "@/components/ui/Icones";

const UTM = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "src"];

export default function AulaForm() {
  const [state, action, pending] = useActionState<AulaState, FormData>(enviarAula, { ok: false, message: "" });
  const [utm, setUtm] = useState<Record<string, string>>({});
  const ultimo = useRef<FormData | null>(null);
  const e = state.errors ?? {};

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    setUtm(Object.fromEntries(UTM.map((k) => [k, p.get(k) ?? ""])));
  }, []);

  if (state.ok) {
    const href = whatsComTexto(ultimo.current ? textoWhatsAula(ultimo.current) : "Hallo, Fran! 😊 Quero estudar alemão com você.");
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
      noValidate className="grid gap-3 sm:grid-cols-2">
      {UTM.map((k) => (
        <input key={k} type="hidden" name={k} value={utm[k] ?? ""} />
      ))}
      <Input id="au-nome" name="nome" label="Seu nome" autoComplete="given-name" error={e.nome} />
      <Input id="au-whats" name="whatsapp" type="tel" inputMode="tel" label="WhatsApp" placeholder="(11) 90000-0000" autoComplete="tel" error={e.whatsapp} />
      <Select id="au-nivel" name="nivel" label="Seu nível hoje" options={niveis} error={e.nivel} />
      <Select id="au-obj" name="objetivo" label="Seu objetivo" options={objetivos} error={e.objetivo} />
      <Textarea id="au-msg" name="mensagem" label="Quer contar mais? (opcional)" rows={3} error={e.mensagem} className="sm:col-span-2" />
      <div className="mt-2 sm:col-span-2">
        <SubmitButton pending={pending}>Quero estudar com a Fran</SubmitButton>
        {state.message && (
          <p role="alert" className="mt-2 text-center text-sm text-cta">
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
