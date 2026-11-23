// Bandeiras desenhadas em CSS: o emoji de bandeira não aparece no Windows (vira "DE AT CH").
type Pais = "de" | "at" | "ch" | "br";

function Bandeira({ pais }: { pais: Pais }) {
  const base = "inline-block h-3.5 w-5 overflow-hidden rounded-[3px] ring-1 ring-black/10";
  if (pais === "de")
    return <span title="Alemanha" className={base} style={{ background: "linear-gradient(#000 0 33.3%, #dd0000 33.3% 66.6%, #ffce00 66.6%)" }} />;
  if (pais === "at")
    return <span title="Áustria" className={base} style={{ background: "linear-gradient(#ed2939 0 33.3%, #fff 33.3% 66.6%, #ed2939 66.6%)" }} />;
  if (pais === "ch")
    return (
      <span title="Suíça" className={`${base} relative w-3.5 bg-[#d52b1e]`}>
        <span className="absolute left-1/2 top-1/2 h-[60%] w-[18%] -translate-x-1/2 -translate-y-1/2 bg-white" />
        <span className="absolute left-1/2 top-1/2 h-[18%] w-[60%] -translate-x-1/2 -translate-y-1/2 bg-white" />
      </span>
    );
  return (
    <span title="Brasil" className={`${base} relative bg-[#009c3b]`}>
      <span className="absolute inset-[18%_12%] rotate-0 bg-[#ffdf00] [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)]" />
      <span className="absolute left-1/2 top-1/2 h-[42%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#002776]" />
    </span>
  );
}

export default function Bandeiras({ paises = ["de", "at", "ch"], className = "" }: { paises?: Pais[]; className?: string }) {
  return (
    <span aria-label="Alemanha, Áustria e Suíça" className={`inline-flex items-center gap-1 ${className}`}>
      {paises.map((p) => (
        <Bandeira key={p} pais={p} />
      ))}
    </span>
  );
}
