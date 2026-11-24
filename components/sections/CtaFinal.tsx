import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { IconeWhats } from "@/components/ui/Icones";
import { img } from "@/lib/imagens";
import { links } from "@/lib/site";

export default function CtaFinal({ titulo = "Bora destravar o seu alemão?", texto = "Me conta seu nível e seu objetivo. A gente monta o melhor caminho para você." }: { titulo?: string; texto?: string }) {
  return (
    <section className="bg-white px-4 py-14 sm:px-8 sm:py-20 md:py-28">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border-2 sm:rounded-[2.5rem] border-primary-strong bg-vivid px-5 py-10 shadow-sticker sm:px-12 sm:py-14 md:py-20">
        <div className="relative grid items-center gap-10 md:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-primary-strong">{titulo}</h2>
            <p className="mt-4 max-w-lg text-lg text-primary-strong/80">{texto}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href={links.ctaPrincipal} className="group inline-flex items-center justify-center gap-3 rounded-full bg-cta py-4 pl-7 pr-5 font-semibold text-white shadow-cta transition hover:bg-cta-soft">
                Estude comigo
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white/25 transition-transform group-hover:translate-x-1">
                  <ArrowRight size={16} />
                </span>
              </Link>
              <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-strong bg-white px-6 py-4 font-semibold text-primary-strong transition hover:bg-primary-strong hover:text-white">
                <IconeWhats className="h-5 w-5" /> Chamar no WhatsApp
              </a>
            </div>
          </div>
          <div className="relative mx-auto -mb-20 hidden w-56 self-end md:block md:-mb-24 lg:w-64">
            <Image src={img.franAceno} alt="" sizes="256px" className="h-auto w-full drop-shadow-xl" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
