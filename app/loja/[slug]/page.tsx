import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpenCheck, Check, ClipboardList, Mic, PenLine, Scale, ShieldCheck } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/motion/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Bandeiras from "@/components/ui/Bandeiras";
import BotaoCompra from "@/components/ui/BotaoCompra";
import ProdutoCard from "@/components/ui/ProdutoCard";
import BarraCompra from "@/components/ui/BarraCompra";
import CtaFinal from "@/components/sections/CtaFinal";
import { faqKit, kitB1 } from "@/lib/conteudo";
import { combosCom, grupos, kitsProva, produtoPorSlug, produtos, relacionados } from "@/lib/produtos";
import { marca } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return produtos.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = produtoPorSlug((await params).slug);
  if (!p) return {};
  return { title: `${p.nome} | ${marca.nome}`, description: `${p.resumo} ${p.descricao}`.slice(0, 160) };
}

const ICONES_B1 = [ClipboardList, Scale, PenLine, Mic, BookOpenCheck];

export default async function ProdutoPage({ params }: Props) {
  const p = produtoPorSlug((await params).slug);
  if (!p) notFound();
  const ehKit = p.grupo === "kit";
  const ehB1 = p.slug === "kit-prova-b1";
  const de = p.lang === "de";
  const ehCombo = p.grupo === "combo";
  const incluidos = (p.inclui ?? []).map((s) => produtoPorSlug(s)!);
  const kitsQueIncluem = combosCom(p.slug);
  const paraQuem = p.paraQuem?.length ? p.paraQuem : grupos[p.grupo].paraQuem;

  const faqJsonLd = ehB1
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqKit.map((f) => ({ "@type": "Question", name: f.p, acceptedAnswer: { "@type": "Answer", text: f.r } })),
      }
    : null;

  return (
    <main>
      <PageHero
        breadcrumb={p.nome}
        eyebrow={p.categoria}
        title={p.titulo}
        destaque={p.destaque}
        description={
          <>
            <p lang={p.lang}>{p.descricao}</p>
            {ehKit && (
              <nav aria-label="Outros níveis" className="mt-6 flex flex-wrap gap-2">
                {kitsProva.map((k) => {
                  const n = k.selo!.replace("Niveau ", "");
                  const ativo = k.slug === p.slug;
                  return (
                    <Link
                      key={k.slug}
                      href={`/loja/${k.slug}`}
                      aria-current={ativo ? "page" : undefined}
                      className={`grid h-11 w-11 place-items-center rounded-full border-2 font-display text-sm font-bold transition ${
                        ativo ? "border-primary-strong bg-primary-strong text-white" : "border-primary-strong/20 bg-white text-primary-strong hover:border-primary-strong"
                      }`}
                    >
                      {n}
                    </Link>
                  );
                })}
              </nav>
            )}
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
              <BotaoCompra p={p} className="w-full justify-center sm:w-auto" />
              {p.garantiaDias ? (
                <p className="flex items-center gap-2 text-sm">
                  <ShieldCheck size={18} className="text-primary" /> Garantia de {p.garantiaDias} dias
                </p>
              ) : null}
            </div>
          </>
        }
      >
        <div className="relative mx-auto mb-4 w-full max-w-[300px] sm:mb-0 sm:max-w-md">
          <Image
            src={p.imagem}
            alt={p.alt}
            priority
            sizes="(min-width: 1024px) 440px, 90vw"
            className="h-auto w-full sm:rotate-2 rounded-[1.75rem] border-2 border-primary-strong shadow-sticker"
          />
          <div className="absolute -bottom-6 -left-3 rounded-2xl border-2 border-primary-strong bg-white px-4 py-2.5 shadow-sticker sm:-left-4 sm:px-5 sm:py-3">
            {p.preco ? (
              <>
                <p className="text-xs font-semibold text-muted">{p.precoDe ? <>de <s>{p.precoDe}</s> por</> : p.grupo === "livro" ? "Livro + cronograma" : p.paginas ? `E-book · ${p.paginas} páginas` : "Pagamento único"}</p>
                <p className="font-display text-2xl font-semibold text-primary-strong sm:text-3xl">{p.preco}</p>
              </>
            ) : (
              <>
                <p className="text-xs font-semibold text-muted">{p.paginas ? "E-book em PDF" : "Formato"}</p>
                <p className="font-display text-xl font-semibold text-primary-strong sm:text-2xl">{p.paginas ? `${p.paginas} páginas` : p.nivel ?? p.formato}</p>
              </>
            )}
          </div>
        </div>
      </PageHero>

      <section className="bg-surface pb-16 sm:pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-14 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] sm:tracking-[0.25em] text-primary">{de ? "Inhalt" : "O que vem no material"}</p>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-primary-strong" lang={p.lang}>
              {de ? (
                <>
                  Alles für Ihre Reise, <span className="marca-texto">in einem Guide</span>
                </>
              ) : ehKit ? (
                <>
                  Tudo para a sua prova <span className="marca-texto">num só kit</span>
                </>
              ) : ehCombo ? (
                <>
                  {incluidos.length} e-books, <span className="marca-texto">um preço só</span>
                </>
              ) : (
                <>
                  Direto ao ponto, <span className="marca-texto">sem decoreba</span>
                </>
              )}
            </h2>
            <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 [&>*:last-child:nth-child(odd)]:col-span-2 sm:[&>*:last-child:nth-child(odd)]:col-span-1">
              {[
                ["Formato", p.formato],
                p.nivel ? ["Nível", p.nivel] : null,
                p.paginas ? ["Páginas", String(p.paginas)] : null,
                ["Preço", p.preco ?? "Pelo WhatsApp"],
                p.economia ? ["Você economiza", p.economia] : null,
              ]
                .filter((x): x is string[] => Boolean(x))
                .map(([k, v]) => (
                  <div key={k} className="rounded-2xl border border-ink/[0.07] bg-white p-4 shadow-card">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted">{k}</dt>
                    <dd className="mt-1 font-display text-lg font-semibold leading-snug text-primary-strong">{v}</dd>
                  </div>
                ))}
            </dl>
          </Reveal>
          <Reveal delay={0.1}>
            {ehCombo ? (
              <ul className="overflow-hidden rounded-[1.75rem] border-2 border-primary-strong bg-white shadow-sticker">
                <li className="flex items-center justify-between bg-primary-strong px-6 py-3 text-sm font-bold uppercase tracking-wider text-white">
                  <span>O que vem no kit</span>
                  <span className="text-primary-bright">{incluidos.length} e-books</span>
                </li>
                {incluidos.map((e) => (
                  <li key={e.slug} className="border-t border-dashed border-ink/10 first:border-0">
                    <Link href={`/loja/${e.slug}`} className="group flex items-center gap-4 px-4 py-3 transition hover:bg-tint/50 sm:px-5">
                      <Image src={e.imagem} alt="" sizes="56px" className="h-16 w-12 shrink-0 rounded-md object-cover object-top shadow-card" />
                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold leading-snug text-primary-strong">{e.nome}</span>
                        <span className="block text-sm text-muted">{e.resumo}{e.paginas ? ` · ${e.paginas} páginas` : ""}</span>
                      </span>
                      <span className="hidden text-sm font-semibold text-muted line-through sm:block">{e.preco}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
            <div className="overflow-hidden rounded-[1.75rem] border-2 border-primary-strong bg-white shadow-sticker">
              <div className="flex items-center justify-between bg-primary-strong px-6 py-3 text-sm font-bold uppercase tracking-wider text-white">
                <span lang="de">{ehKit ? "Prüfung · Antwortbogen" : "Checkliste"}</span>
                <span className="text-primary-bright">{ehKit ? p.selo?.replace("Niveau ", "") : "✓"}</span>
              </div>
              <ul className="divide-y divide-dashed divide-ink/10" lang={p.lang}>
                {p.itens.map((c) => (
                  <li key={c} className="flex items-center gap-3 px-5 py-3.5 text-base text-ink sm:gap-4 sm:px-6 sm:py-4 sm:text-lg">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-[#2fa84f] text-white">
                      <Check size={17} strokeWidth={3} />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            )}
          </Reveal>
        </div>
      </section>

      {kitsQueIncluem.length > 0 && (
        <section className="bg-surface pb-16 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            {kitsQueIncluem.map((k) => (
              <Link
                key={k.slug}
                href={`/loja/${k.slug}`}
                className="group grid items-center gap-5 rounded-[1.75rem] border-2 border-primary-strong bg-vivid p-5 shadow-sticker transition hover:-translate-y-1 sm:grid-cols-[auto_1fr_auto] sm:p-6"
              >
                <Image src={k.imagem} alt="" sizes="120px" className="hidden h-28 w-24 rounded-xl object-cover object-top sm:block" />
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-primary-strong/70">Economize no kit com desconto</span>
                  <span className="mt-1 block font-display text-2xl font-semibold text-primary-strong">Este e-book também está no {k.nome}</span>
                  <span className="mt-1 block text-primary-strong/80">
                    {k.inclui?.length} e-books de <s>{k.precoDe}</s> por <strong>{k.preco}</strong>: você economiza {k.economia}.
                  </span>
                </span>
                <span className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-strong px-6 py-3.5 font-semibold text-white transition group-hover:bg-primary">
                  Ver o kit <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {ehB1 && (
        <section className="bg-white py-16 sm:py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <SectionTitle
              eyebrow="O que você vai encontrar"
              title={
                <>
                  Treine com <span className="text-gradient">estratégia</span>
                </>
              }
              description={kitB1.descricao2}
            />
            <ul className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {kitB1.conteudo.map((c, i) => {
                const Icon = ICONES_B1[i % ICONES_B1.length];
                return (
                  <Reveal as="li" key={c.titulo} delay={(i % 3) * 0.08}>
                    <div className="flex h-full gap-4 rounded-[1.5rem] border border-ink/[0.07] bg-surface p-5 transition duration-500 hover:-translate-y-1 hover:shadow-card-hover sm:block sm:rounded-[1.75rem] sm:p-7">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-tint text-primary-strong sm:h-12 sm:w-12">
                        <Icon size={22} />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold leading-snug text-primary-strong sm:mt-6 sm:text-xl">{c.titulo}</h3>
                        <p className="mt-1 leading-relaxed text-muted sm:mt-2">{c.texto}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      <section className="relative overflow-hidden py-24 text-white md:py-32">
        <div className="bg-band absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div lang={p.lang}>
            <SectionTitle
              light
              eyebrow={de ? "Für wen?" : "Para quem é"}
              title={
                de ? (
                  <>
                    Ideal für Ihre <span className="text-gradient-light">Brasilienreise</span>
                  </>
                ) : (
                  <>
                    Feito para <span className="text-gradient-light">você</span>
                  </>
                )
              }
            />
            <ul className="mt-8 flex flex-wrap gap-3">
              {paraQuem.map((t) => (
                <li key={t} className="rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 font-display text-base font-semibold sm:px-5 sm:py-2.5 sm:text-lg">
                  {t}
                </li>
              ))}
            </ul>
            {ehKit && (
              <p className="mt-6 flex items-center gap-3 text-white/75">
                <Bandeiras /> Goethe-Institut e telc, na Alemanha, Áustria ou Suíça.
              </p>
            )}
          </div>
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] bg-white p-6 text-ink shadow-panel sm:p-8 md:p-10">
              <p className="font-display text-sm font-semibold uppercase tracking-wider text-cta" lang={p.lang}>
                {p.nome}
              </p>
              <p className="mt-2 text-muted" lang={p.lang}>
                {p.resumo}
              </p>
              {p.preco ? (
                <p className="mt-6 font-display text-5xl font-bold text-primary-strong">
                  {p.precoDe && <s className="mr-2 align-middle font-sans text-xl font-semibold text-muted">{p.precoDe}</s>}
                  {p.preco}
                </p>
              ) : (
                <p className="mt-6 text-lg text-ink">
                  {de ? "Preis und Zugang direkt mit der Fran per WhatsApp." : "Preço e acesso direto com a Fran, pelo WhatsApp."}
                </p>
              )}
              <p className="mt-1 text-sm text-muted">
                {p.formato}
                {p.compra.tipo === "hotmart" ? " · acesso pela Hotmart" : ""}
              </p>
              <div className="mt-8">
                <BotaoCompra p={p} className="w-full justify-center sm:w-auto" />
              </div>
              {p.garantiaDias ? (
                <p className="mt-5 flex items-center gap-2 text-sm text-muted">
                  <ShieldCheck size={16} className="text-primary" /> Garantia de {p.garantiaDias} dias: não gostou, pede o reembolso.
                </p>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>

      {ehB1 && (
        <section className="bg-white py-16 sm:py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-8">
            <SectionTitle center eyebrow="Dúvidas" title={<>Perguntas <span className="text-gradient">frequentes</span></>} />
            <div className="mt-12 space-y-3">
              {faqKit.map((f) => (
                <details key={f.p} className="group rounded-2xl border border-ink/[0.08] bg-surface px-6 py-5 open:bg-white open:shadow-card">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-primary-strong">
                    {f.p}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-tint text-xl transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted">{f.r}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-surface py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle eyebrow="Veja também" title={ehCombo ? <>Outros kits com <span className="text-gradient">desconto</span></> : <>Outros materiais da <span className="text-gradient">Fran</span></>} />
            <Link href="/loja" className="font-semibold text-cta hover:underline">
              Ver todos os kits e e-books
            </Link>
          </div>
          <ul className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {relacionados(p).map((r) => (
              <li key={r.slug}>
                <ProdutoCard p={r} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BarraCompra p={p} />
      <CtaFinal titulo="Quer ajuda além do material?" texto="Estude com a Fran com acompanhamento de perto e chegue no seu objetivo sem travar." />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
    </main>
  );
}
