import { links } from "@/lib/site";
import { IconeWhats } from "@/components/ui/Icones";

/** Botão fixo de WhatsApp (canal principal da Fran). */
export default function WhatsFlutuante() {
  return (
    <a
      href={links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Fran no WhatsApp"
      className="whats-flutuante fixed bottom-5 right-4 z-40 grid h-14 w-14 sm:right-5 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_-10px_rgba(37,211,102,0.8)] transition hover:scale-105"
    >
      <IconeWhats className="h-7 w-7" />
    </a>
  );
}
