import Link from "next/link";
import { links } from "@/lib/site";

// Também evita o erro "no direct app page entry found for /_not-found" no build estático.
export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-[80svh] items-center overflow-hidden bg-white pt-28">
      <div className="glow pointer-events-none absolute -right-[15%] -top-[30%] -z-10 h-[65vmax] w-[65vmax] rounded-full" />
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-8">
        <p className="text-gradient text-8xl font-semibold tracking-tight md:text-9xl">404</p>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-ink md:text-4xl">Página não encontrada</h1>
        <p className="mt-4 text-muted">O endereço pode ter mudado com o novo site. Que tal começar pela página inicial?</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-full bg-cta px-7 py-4 font-semibold text-white transition hover:bg-cta-soft">
            Ir para o início
          </Link>
          <Link href={links.ctaPrincipal} className="rounded-full border border-primary/30 px-7 py-4 font-semibold text-primary hover:bg-tint">
            {links.ctaPrincipalTexto}
          </Link>
        </div>
      </div>
    </main>
  );
}
