import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Produto } from "@/lib/produtos";

/**
 * Card de produto da vitrine.
 * No celular vira uma linha (capa pequena ao lado do texto): a lista fica curta e a capa não estica além da resolução.
 * A partir de sm vira o card vertical com a capa grande.
 */
export default function ProdutoCard({ p, compacto = false }: { p: Produto; compacto?: boolean }) {
  const detalhe = p.paginas ? `${p.paginas} páginas` : p.nivel ?? p.formato;
  return (
    <Link
      href={`/loja/${p.slug}`}
      className="group flex h-full items-center gap-4 rounded-[1.4rem] border border-ink/[0.07] bg-white p-2.5 shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-card-hover sm:flex-col sm:items-stretch sm:gap-0 sm:rounded-[1.75rem] sm:p-3"
    >
      <div className={`relative aspect-square w-24 shrink-0 overflow-hidden rounded-2xl sm:w-full sm:rounded-[1.4rem] ${p.cor}`}>
        <Image
          src={p.imagem}
          alt={p.alt}
          sizes={compacto ? "(min-width: 1024px) 200px, (min-width: 640px) 30vw, 96px" : "(min-width: 1024px) 300px, (min-width: 640px) 45vw, 96px"}
          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
        />
        {(p.selo || p.paginas) && (
          <span className="absolute left-3 top-3 hidden rounded-full border-2 border-primary-strong bg-white px-3 py-1 text-xs font-bold text-primary-strong sm:inline-block">
            {p.selo ?? `${p.paginas} páginas`}
          </span>
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col py-1 pr-1 sm:px-2 sm:pb-2 sm:pt-4">
        <p className={`text-[10px] font-bold uppercase tracking-[0.14em] text-primary sm:text-[11px] ${compacto ? "sm:hidden" : ""}`}>
          <span className="sm:hidden">{p.selo && p.grupo !== "portugues" ? p.selo : detalhe}</span>
          <span className="hidden sm:inline">{p.formato}</span>
        </p>
        <h3 className={`mt-1 font-semibold leading-tight text-primary-strong ${compacto ? "text-base" : "text-base sm:text-xl"}`} lang={p.lang}>
          {p.nome}
        </h3>
        {!compacto && (
          <p className="mt-2 hidden flex-1 text-sm leading-relaxed text-muted sm:block" lang={p.lang}>
            {p.resumo}
          </p>
        )}
        <span className={`mt-2 flex items-center justify-between gap-2 font-semibold sm:mt-4 ${compacto ? "text-sm" : ""}`}>
          <span className={p.preco ? "font-display text-base text-primary-strong sm:text-lg" : "text-xs text-muted sm:text-sm"}>
            {p.precoDe && <s className="mr-1.5 font-sans text-xs font-semibold text-muted/80 sm:text-sm">{p.precoDe}</s>}
            {p.preco ?? (compacto ? <span className="sm:hidden">Ver detalhes</span> : "Ver detalhes")}
          </span>
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-tint text-cta transition group-hover:bg-cta group-hover:text-white sm:h-9 sm:w-9">
            <ArrowUpRight size={17} />
          </span>
        </span>
      </div>
    </Link>
  );
}
