import { ArrowRight } from "lucide-react";
import type { Produto } from "@/lib/produtos";
import { whatsComTexto } from "@/lib/site";
import { IconeWhats } from "./Icones";

/** Botão de compra: checkout da Hotmart quando existe, senão WhatsApp com a mensagem pronta. */
export default function BotaoCompra({ p, className = "" }: { p: Produto; className?: string }) {
  if (p.compra.tipo === "hotmart") {
    return (
      <a
        href={p.compra.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex items-center gap-3 rounded-full bg-cta py-4 pl-7 pr-5 font-semibold text-white shadow-cta transition hover:bg-cta-soft ${className}`}
      >
        {p.grupo === "kit" ? `Quero o kit ${p.selo?.replace("Niveau ", "")}` : p.grupo === "combo" ? "Comprar" : "Quero o material"}
        <span className="grid h-8 w-8 place-items-center rounded-full bg-white/25 transition-transform group-hover:translate-x-1">
          <ArrowRight size={16} />
        </span>
      </a>
    );
  }
  return (
    <a
      href={whatsComTexto(p.compra.texto)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-4 font-semibold text-white shadow-card transition hover:brightness-105 ${className}`}
    >
      <IconeWhats className="h-5 w-5" />
      {p.lang === "de" ? "Per WhatsApp anfragen" : "Quero pelo WhatsApp"}
    </a>
  );
}
