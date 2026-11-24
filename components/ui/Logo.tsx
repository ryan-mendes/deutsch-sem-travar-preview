import Image from "next/image";
import { img } from "@/lib/imagens";

/**
 * Logo oficial "Deutsch sem Travar · com a Lehrerin Fran" (SVG da LP da Fran).
 * A arte tem letras brancas e amarelas, feita para fundo escuro. Em fundo claro ela fica num selo azul-marinho,
 * do mesmo jeito que as artes oficiais colocam o logo dentro de um selo.
 */
export default function Logo({ className = "", claro = false }: { className?: string; claro?: boolean }) {
  if (claro) {
    return <Image src={img.logo} alt="Deutsch sem Travar, com a Lehrerin Fran" className={`h-auto w-36 ${className}`} />;
  }
  return (
    <span className={`inline-flex rounded-2xl bg-primary-strong px-3 py-2 shadow-card ${className}`}>
      <Image src={img.logo} alt="Deutsch sem Travar, com a Lehrerin Fran" priority className="h-11 w-auto" />
    </span>
  );
}
