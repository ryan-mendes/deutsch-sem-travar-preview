import type { Metadata } from "next";
import Link from "next/link";

// Endereço antigo do Kit B1. No servidor o next.config.ts já redireciona (308);
// na prévia estática (GitHub Pages) não há redirect, então esta página faz o meta refresh.
const DESTINO = "/loja/kit-prova-b1";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = { title: "Kit Prova sem Travar B1", robots: { index: false } };

export default function KitB1Antigo() {
  return (
    <main className="mx-auto max-w-xl px-4 pb-24 pt-40 text-center">
      <meta httpEquiv="refresh" content={`0; url=${BASE}${DESTINO}/`} />
      <p className="text-muted">
        O Kit B1 mudou de endereço.{" "}
        <Link href={DESTINO} className="font-semibold text-cta underline">
          Abrir a página do kit
        </Link>
      </p>
    </main>
  );
}
