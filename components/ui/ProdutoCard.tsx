import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Produto } from "@/lib/produtos";

/** Card de produto da vitrine: capa, selo, nome, resumo e preço (quando conhecido). */
export default function ProdutoCard({ p, compacto = false }: { p: Produto; compacto?: boolean }) {
  return (
    <Link
      href={`/loja/${p.slug}`}
      className="group flex h-full flex-col rounded-[1.75rem] border border-ink/[0.07] bg-white p-3 shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <div className={`relative aspect-square overflow-hidden rounded-[1.4rem] ${p.cor}`}>
        <Image
          src={p.imagem}
          alt={p.alt}
          sizes={compacto ? "(min-width: 1024px) 200px, 45vw" : "(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"}
          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
        />
        {(p.selo || p.paginas) && (
          <span className="absolute left-3 top-3 rounded-full border-2 border-primary-strong bg-white px-3 py-1 text-xs font-bold text-primary-strong">
            {p.selo ?? `${p.paginas} páginas`}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
        {!compacto && <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary">{p.formato}</p>}
        <h3 className={`mt-1 font-semibold leading-tight text-primary-strong ${compacto ? "text-base" : "text-xl"}`} lang={p.lang}>
          {p.nome}
        </h3>
        {!compacto && (
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted" lang={p.lang}>
            {p.resumo}
          </p>
        )}
        <span className={`mt-4 flex items-center justify-between gap-2 font-semibold ${compacto ? "text-sm" : ""}`}>
          <span className={p.preco ? "font-display text-lg text-primary-strong" : "text-sm text-muted"}>{p.preco ?? "Ver detalhes"}</span>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-tint text-cta transition group-hover:bg-cta group-hover:text-white">
            <ArrowUpRight size={18} />
          </span>
        </span>
      </div>
    </Link>
  );
}
