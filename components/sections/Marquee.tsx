const PALAVRAS = ["Hallo", "Sprechen", "Schreiben", "Ausbildung", "Goethe B1", "telc B1", "Kultur", "Musik", "Alltag", "Tschüss", "Wie geht's?", "Deutsch sem Travar"];

/** Faixa contínua com palavras em alemão, no degradê do Linktree. */
export default function Marquee() {
  const lista = [...PALAVRAS, ...PALAVRAS];
  return (
    <div className="relative overflow-hidden border-y-2 border-primary-strong bg-vivid py-4" aria-hidden>
      <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-2xl font-semibold text-primary-strong md:text-3xl">
        {lista.map((p, i) => (
          <span key={i} className="flex items-center gap-10" lang="de">
            {p}
            <span className="text-cta">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
