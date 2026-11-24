"use client";

import { useEffect, useState } from "react";
import type { Produto } from "@/lib/produtos";
import BotaoCompra from "./BotaoCompra";

/**
 * Barra fixa de compra, só no celular: aparece quando o botão do topo sai da tela.
 * O botão flutuante do WhatsApp sobe junto (regra em globals.css) para não ficar por cima.
 */
export default function BarraCompra({ p }: { p: Produto }) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const atualizar = () => {
      const fim = document.documentElement.scrollHeight - window.innerHeight - 700;
      setOn(window.scrollY > 560 && window.scrollY < fim);
    };
    atualizar();
    window.addEventListener("scroll", atualizar, { passive: true });
    return () => window.removeEventListener("scroll", atualizar);
  }, []);

  return (
    <div
      data-barra={on ? "on" : "off"}
      aria-hidden={!on}
      className={`barra-compra fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-white/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_30px_-18px_rgba(19,28,69,0.45)] backdrop-blur-xl transition-transform duration-300 sm:hidden ${
        on ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-semibold text-muted" lang={p.lang}>
            {p.nome}
          </p>
          <p className="font-display text-lg font-semibold leading-tight text-primary-strong">{p.preco ?? (p.lang === "de" ? "Per WhatsApp" : "Pelo WhatsApp")}</p>
        </div>
        <BotaoCompra p={p} className="shrink-0 !px-5 !py-3 text-sm [&>span]:hidden" />
      </div>
    </div>
  );
}
