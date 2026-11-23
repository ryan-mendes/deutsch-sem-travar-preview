/**
 * Wordmark provisório de "Deutsch sem Travar · com a Lehrerin Fran".
 * O logo original é uma arte desenhada (letras saltitantes); quando a Fran enviar o arquivo
 * em PNG/SVG, troque este componente por <Image>.
 */
export default function Logo({ className = "", compacto = false, claro = false }: { className?: string; compacto?: boolean; claro?: boolean }) {
  const base = claro ? "text-white" : "text-primary-strong";
  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span className={`font-display text-[1.35rem] font-bold tracking-[-0.02em] ${base}`}>
        <span className="inline-block -rotate-2">Deutsch</span>{" "}
        <span className="inline-block rotate-2 text-cta">sem</span>{" "}
        <span className="inline-block -rotate-1">Travar</span>
        <span aria-hidden className="ml-1.5 inline-flex translate-y-[-0.15em] gap-[3px] align-middle">
          <span className="h-2 w-2 rounded-full bg-ink ring-1 ring-white/60" />
          <span className="h-2 w-2 rounded-full bg-cta" />
          <span className="h-2 w-2 rounded-full bg-primary-bright" />
        </span>
      </span>
      {!compacto && (
        <span className={`mt-1 pl-0.5 text-[11px] font-semibold tracking-wide ${claro ? "text-white/70" : "text-muted"}`}>com a Lehrerin Fran</span>
      )}
    </span>
  );
}
