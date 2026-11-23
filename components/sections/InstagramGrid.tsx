import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { IconeInstagram, IconeYoutube } from "@/components/ui/Icones";
import { posts } from "@/lib/imagens";
import { links, marca } from "@/lib/site";

export default function InstagramGrid() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle
            eyebrow="Dicas toda semana"
            title={
              <>
                Aprenda também no <span className="text-gradient">Instagram</span>
              </>
            }
            description="Vídeos curtos com expressões, gramática sem drama e a vida na Alemanha."
          />
          <div className="flex flex-wrap gap-3">
            <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary-strong px-5 py-3 font-semibold text-white transition hover:bg-primary">
              <IconeInstagram className="h-5 w-5" /> {marca.instagramHandle}
            </a>
            <a href={links.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-primary-strong bg-white px-5 py-3 font-semibold text-primary-strong transition hover:bg-tint">
              <IconeYoutube className="h-5 w-5 text-[#FF0000]" /> YouTube
            </a>
          </div>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
          {posts.map((p, i) => (
            <Reveal as="li" key={p.href} delay={(i % 6) * 0.05} y={24}>
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="group relative block aspect-[9/14] overflow-hidden rounded-2xl bg-tint shadow-card">
                <Image src={p.src} alt={p.alt} sizes="(min-width: 1024px) 200px, (min-width: 768px) 30vw, 45vw" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-deep/85 to-transparent p-3 pt-10 text-sm font-semibold leading-snug text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                  {p.legenda}
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
