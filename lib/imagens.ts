// Imagens da marca, salvas localmente (as URLs do Instagram expiram).
// Import estático: o Next calcula tamanho e respeita o basePath da prévia no GitHub Pages.
import franFoto from "@/assets/img/fran-foto.jpg";
import franIlustracao from "@/assets/img/fran-ilustracao.png";
import estudeComigo from "@/assets/img/estude-comigo.png";
import kitB1 from "@/assets/img/kit-b1.png";
import voceNaAlemanha from "@/assets/img/voce-na-alemanha.png";
import ig01 from "@/assets/img/ig01.jpg";
import ig02 from "@/assets/img/ig02.jpg";
import ig03 from "@/assets/img/ig03.jpg";
import ig05 from "@/assets/img/ig05.jpg";
import ig06 from "@/assets/img/ig06.jpg";
import ig07 from "@/assets/img/ig07.jpg";
import ig09 from "@/assets/img/ig09.jpg";
import ig11 from "@/assets/img/ig11.jpg";

export const img = { franFoto, franIlustracao, estudeComigo, kitB1, voceNaAlemanha, aprendaComAFran: ig01, quemSouEu: ig02 };

const IG = "https://www.instagram.com/deutschmitfran";

/** Posts reais do Instagram (vitrine na Home). */
export const posts = [
  { src: ig09, alt: "Fran sorrindo com bandeiras: Aprenda a se apresentar em alemão", href: `${IG}/reel/DffIsE9Rp1I/`, legenda: "Aprenda a se apresentar em alemão" },
  { src: ig07, alt: "Fran explicando: in ou auf? Vou ao banheiro, o que dizer?", href: `${IG}/reel/Df3LwOnBQ_R/`, legenda: "in ou auf?" },
  { src: ig11, alt: "Arte amarela com mosca: moscar em alemão é pennen", href: `${IG}/p/DfSt0bjmolE/`, legenda: "Moscar = pennen" },
  { src: ig05, alt: "Fran na mesa de estudos: tomar uma decisão em alemão", href: `${IG}/reel/Df95rd_gYfR/`, legenda: "Tomar uma decisão" },
  { src: ig06, alt: "Fran no parque de Sanssouci: sem preocupações", href: `${IG}/reel/Df475O4Mu1N/`, legenda: "Sanssouci" },
  { src: ig03, alt: "Ilustração: pra cada aluno, uma forma de falar", href: `${IG}/p/C27yq2yrzpL/`, legenda: "Pra cada aluno, uma forma de falar" },
];
