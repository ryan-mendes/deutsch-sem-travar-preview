// Imagens da marca, salvas localmente (as URLs do Instagram expiram).
// Import estático: o Next calcula tamanho e respeita o basePath da prévia no GitHub Pages.
// Fotos profissionais e logo: LP oficial (lp.infocrescimento.com/franciellegoncalves).
// Capas dos kits e e-books: artes enviadas pela Fran.
import logo from "@/assets/img/logo.svg";
import franFoto from "@/assets/img/fran-foto.jpg";
import franIlustracao from "@/assets/img/fran-ilustracao.png";
import franHero from "@/assets/img/fran-hero.webp";
import franLivros from "@/assets/img/fran-livros.webp";
import franAceno from "@/assets/img/fran-aceno.webp";
import franBerlimTorre from "@/assets/img/fran-berlim-torre.webp";
import franBerlimRua from "@/assets/img/fran-berlim-rua.webp";
import franPalacio from "@/assets/img/fran-palacio.webp";
import franSelfie from "@/assets/img/fran-selfie.jpg";
import camaleao from "@/assets/img/camaleao.jpg";
import estudeComigo from "@/assets/img/estude-comigo.png";
import voceNaAlemanha from "@/assets/img/voce-na-alemanha.png";
import kitsTodos from "@/assets/img/kits-a1-c2.jpg";
import kitA1 from "@/assets/img/kit-a1-card.jpg";
import kitA2 from "@/assets/img/kit-a2-card.jpg";
import kitB1 from "@/assets/img/kit-b1.png";
import kitB2 from "@/assets/img/kit-b2-card.jpg";
import kitC1 from "@/assets/img/kit-c1-card.jpg";
import kitC2 from "@/assets/img/kit-c2-card.jpg";
import livroPersonalizado from "@/assets/img/livro-personalizado.jpg";
import viajeBrasil from "@/assets/img/viaje-brasil.jpg";
import fuhrerschein from "@/assets/img/fuhrerschein.jpg";
import preposicoes from "@/assets/img/preposicoes.jpg";
import declinacoes from "@/assets/img/declinacoes.jpg";
import enfermagem from "@/assets/img/enfermagem.jpg";
import ig01 from "@/assets/img/ig01.jpg";
import ig02 from "@/assets/img/ig02.jpg";
import ig03 from "@/assets/img/ig03.jpg";
import ig05 from "@/assets/img/ig05.jpg";
import ig06 from "@/assets/img/ig06.jpg";
import ig07 from "@/assets/img/ig07.jpg";
import ig09 from "@/assets/img/ig09.jpg";
import ig11 from "@/assets/img/ig11.jpg";

export const img = {
  logo,
  franFoto,
  franIlustracao,
  franHero,
  franLivros,
  franAceno,
  franBerlimTorre,
  franBerlimRua,
  franPalacio,
  franSelfie,
  camaleao,
  estudeComigo,
  voceNaAlemanha,
  aprendaComAFran: ig01,
  quemSouEu: ig02,
  kitsTodos,
  kits: { a1: kitA1, a2: kitA2, b1: kitB1, b2: kitB2, c1: kitC1, c2: kitC2 },
  livroPersonalizado,
  viajeBrasil,
  fuhrerschein,
  preposicoes,
  declinacoes,
  enfermagem,
};

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
