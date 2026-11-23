import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { IconeInstagram, IconeWhats, IconeYoutube } from "@/components/ui/Icones";
import { links, marca, nav } from "@/lib/site";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-band text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo claro />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            {marca.professora}, professora e tradutora de alemão. Ajudo você a falar alemão vivendo o idioma no dia a dia.
          </p>
          <div className="mt-6 flex gap-2">
            {[
              { href: links.instagram, label: "Instagram", Icon: IconeInstagram },
              { href: links.youtube, label: "YouTube", Icon: IconeYoutube },
              { href: links.whatsapp, label: "WhatsApp", Icon: IconeWhats },
            ].map(({ href, label, Icon }) => (
              <a key={label} href={href} {...ext} aria-label={label} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-primary-bright hover:text-primary-strong">
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Páginas">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary-bright">Navegue</p>
          <ul className="space-y-2.5 text-sm">
            {nav.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-white/75 transition hover:text-primary-bright">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Conteúdo gratuito">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary-bright">Grátis</p>
          <ul className="space-y-2.5 text-sm">
            <li><a href={links.comunidade} {...ext} className="text-white/75 hover:text-primary-bright">Comunidade Deutsch sem Travar</a></li>
            <li><a href={links.materiais} {...ext} className="text-white/75 hover:text-primary-bright">Você na Alemanha: PDFs</a></li>
            <li><a href={links.youtube} {...ext} className="text-white/75 hover:text-primary-bright">Aulas no YouTube</a></li>
            <li><a href={links.portugues} {...ext} lang="de" className="text-white/75 hover:text-primary-bright">Brasilianisches Portugiesisch</a></li>
          </ul>
        </nav>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary-bright">Fale com a Fran</p>
          <a href={links.whatsapp} {...ext} className="block text-2xl font-semibold tabular-nums tracking-tight hover:text-primary-bright">
            +55 11 98074-0722
          </a>
          <p className="mt-1 text-xs text-white/60">WhatsApp · aulas online</p>
          <a href={links.instagram} {...ext} className="mt-5 inline-block font-semibold text-white/85 hover:text-primary-bright">
            {marca.instagramHandle}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {marca.nome} · {marca.professora}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
