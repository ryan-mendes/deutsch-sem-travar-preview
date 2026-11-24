"use client";

import Logo from "@/components/ui/Logo";
import { IconeWhats } from "@/components/ui/Icones";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { links, marca, nav } from "@/lib/site";

const isInternal = (href: string) => href.startsWith("/");

/** next/link para rotas internas (respeita o basePath da prévia); <a> para externas. */
function NavLink({ href, className, children, onClick }: { href: string; className?: string; children: React.ReactNode; onClick?: () => void }) {
  return isInternal(href) ? (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  ) : (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Comparação exata: "/planos" não pode ficar ativo em "/planos-empresa".
  const ativo = (href: string) => {
    const path = href.split("?")[0];
    if (!isInternal(path)) return false;
    return path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--ease-cine)] ${
        scrolled || open ? "bg-white/90 py-3 shadow-card backdrop-blur-xl" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-8">
        <Link href="/" aria-label={`${marca.nome}, página inicial`} className="shrink-0">
          <Logo className={`origin-left transition-transform duration-500 ${scrolled ? "scale-90" : ""}`} />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-6 whitespace-nowrap text-[15px] font-semibold text-ink/75">
            {nav.map((item) =>
              item.children ? (
                <li key={item.label} className="group relative">
                  <button
                    type="button"
                    aria-haspopup="true"
                    className={`flex items-center gap-1 py-1 transition-colors hover:text-primary-strong ${
                      item.children.some((c) => ativo(c.href)) ? "text-primary-strong" : ""
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
                  </button>
                  <div className="invisible absolute right-0 top-full pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="w-64 rounded-2xl border border-ink/[0.06] bg-white p-2 shadow-panel">
                      {item.children.map((c) => (
                        <li key={c.label}>
                          <NavLink
                            href={c.href}
                            className={`block rounded-xl px-4 py-2.5 transition hover:bg-tint hover:text-primary-strong ${
                              ativo(c.href) ? "bg-tint text-primary-strong" : "text-ink"
                            }`}
                          >
                            {c.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.label}>
                  <NavLink
                    href={item.href}
                    className={`relative py-1 transition-colors hover:text-primary-strong after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-primary-bright after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                      ativo(item.href) ? "text-primary-strong after:scale-x-100" : "after:scale-x-0"
                    }`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <NavLink
            href={links.ctaPrincipal}
            className="hidden whitespace-nowrap rounded-full bg-cta px-5 py-2.5 text-sm font-semibold text-white shadow-cta transition hover:bg-cta-soft sm:inline-block"
          >
            {links.ctaPrincipalTexto}
          </NavLink>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white text-ink lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Menu móvel"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mx-4 mt-3 max-h-[calc(100svh-6rem)] overflow-y-auto rounded-3xl border border-ink/5 bg-white p-4 shadow-2xl lg:hidden"
          >
            <ul className="space-y-0.5">
              {nav.map((item) =>
                item.children ? (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => setSubOpen((s) => !s)}
                      aria-expanded={subOpen}
                      className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-lg text-ink hover:bg-tint"
                    >
                      {item.label}
                      <ChevronDown size={18} className={`transition-transform ${subOpen ? "rotate-180" : ""}`} />
                    </button>
                    {subOpen && (
                      <ul className="mb-2 ml-3 border-l-2 border-tint pl-3">
                        {item.children.map((c) => (
                          <li key={c.label}>
                            <NavLink href={c.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-ink/80 hover:bg-tint">
                              {c.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.label}>
                    <NavLink
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-3 py-3 text-lg hover:bg-tint ${ativo(item.href) ? "bg-tint text-primary-strong" : "text-ink"}`}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
            <NavLink href={links.ctaPrincipal} className="mt-4 block rounded-full bg-cta py-3.5 text-center font-semibold text-white">
              {links.ctaPrincipalTexto}
            </NavLink>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-full border-2 border-[#25D366] py-3 font-semibold text-[#128c4a]"
            >
              <IconeWhats className="h-5 w-5" /> Falar no WhatsApp
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
