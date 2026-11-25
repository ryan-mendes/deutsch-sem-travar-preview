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
import camaleaoSelo from "@/assets/img/camaleao-selo.png";
import estudeComigo from "@/assets/img/estude-comigo.png";
import voceNaAlemanha from "@/assets/img/voce-na-alemanha.png";
import kitsTodos from "@/assets/img/kits-a1-c2.jpg";
import livroPersonalizado from "@/assets/img/livro-personalizado.jpg";
import viajeBrasil from "@/assets/img/viaje-brasil.jpg";
// Capas recortadas do Catálogo de e-books 2026/2027 da Fran
import e_fuhrerschein from "@/assets/img/ebooks/fuhrerschein.jpg";
import e_ausbildung from "@/assets/img/ebooks/ausbildung.jpg";
import e_auPair from "@/assets/img/ebooks/au-pair.jpg";
import e_workingHoliday from "@/assets/img/ebooks/working-holiday.jpg";
import e_direitosTrabalho from "@/assets/img/ebooks/direitos-trabalho.jpg";
import e_finanzamtKrankenkasse from "@/assets/img/ebooks/finanzamt-krankenkasse.jpg";
import e_liebe from "@/assets/img/ebooks/liebe.jpg";
import e_enfermagem from "@/assets/img/ebooks/enfermagem.jpg";
import e_sprachbausteineB1 from "@/assets/img/ebooks/sprachbausteine-b1.jpg";
import e_apresentacaoB1 from "@/assets/img/ebooks/apresentacao-b1.jpg";
import e_schreibenSprechenB1 from "@/assets/img/ebooks/schreiben-sprechen-b1.jpg";
import e_sprachbausteineB2 from "@/assets/img/ebooks/sprachbausteine-b2.jpg";
import e_telcB2Beruf from "@/assets/img/ebooks/telc-b2-beruf.jpg";
import e_sprachbausteineB2Beruf from "@/assets/img/ebooks/sprachbausteine-b2-beruf.jpg";
import e_schreibenSprechenB2Beruf from "@/assets/img/ebooks/schreiben-sprechen-b2-beruf.jpg";
import e_gramatica from "@/assets/img/ebooks/gramatica.jpg";
import e_declinacoes from "@/assets/img/ebooks/declinacoes.jpg";
import e_preposicoes from "@/assets/img/ebooks/preposicoes.jpg";
import e_mapaFluencia from "@/assets/img/ebooks/mapa-fluencia.jpg";
import e_matematica from "@/assets/img/ebooks/matematica.jpg";
import e_recreio from "@/assets/img/ebooks/recreio.jpg";
import e_raetselheft from "@/assets/img/ebooks/raetselheft.jpg";
import e_petraCarlos from "@/assets/img/ebooks/petra-carlos.jpg";
import e_girias from "@/assets/img/ebooks/girias.jpg";
// Artes oficiais dos kits
import k_a1 from "@/assets/img/kits/a1.jpg";
import k_a2 from "@/assets/img/kits/a2.jpg";
import k_b1 from "@/assets/img/kits/b1.jpg";
import k_b2 from "@/assets/img/kits/b2.jpg";
import k_c1 from "@/assets/img/kits/c1.jpg";
import k_c2 from "@/assets/img/kits/c2.jpg";
import c_morar from "@/assets/img/kits/combo-morar.jpg";
import c_provaB1 from "@/assets/img/kits/combo-prova-b1.jpg";
import c_b2Beruf from "@/assets/img/kits/combo-b2-beruf.jpg";
import c_gramatica from "@/assets/img/kits/combo-gramatica.jpg";
import c_divertido from "@/assets/img/kits/combo-divertido.jpg";
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
  camaleaoSelo,
  estudeComigo,
  voceNaAlemanha,
  aprendaComAFran: ig01,
  quemSouEu: ig02,
  kitsTodos,
  livroPersonalizado,
  viajeBrasil,
};

export const capas = {
  "fuhrerschein": e_fuhrerschein,
  "ausbildung": e_ausbildung,
  "au-pair": e_auPair,
  "working-holiday": e_workingHoliday,
  "direitos-trabalho": e_direitosTrabalho,
  "finanzamt-krankenkasse": e_finanzamtKrankenkasse,
  "liebe": e_liebe,
  "enfermagem": e_enfermagem,
  "sprachbausteine-b1": e_sprachbausteineB1,
  "apresentacao-b1": e_apresentacaoB1,
  "schreiben-sprechen-b1": e_schreibenSprechenB1,
  "sprachbausteine-b2": e_sprachbausteineB2,
  "telc-b2-beruf": e_telcB2Beruf,
  "sprachbausteine-b2-beruf": e_sprachbausteineB2Beruf,
  "schreiben-sprechen-b2-beruf": e_schreibenSprechenB2Beruf,
  "gramatica": e_gramatica,
  "declinacoes": e_declinacoes,
  "preposicoes": e_preposicoes,
  "mapa-fluencia": e_mapaFluencia,
  "matematica": e_matematica,
  "recreio": e_recreio,
  "raetselheft": e_raetselheft,
  "petra-carlos": e_petraCarlos,
  "girias": e_girias,
};

export const capasKit = { a1: k_a1, a2: k_a2, b1: k_b1, b2: k_b2, c1: k_c1, c2: k_c2 };

export const capasCombo = {
  "morar": c_morar,
  "prova-b1": c_provaB1,
  "b2-beruf": c_b2Beruf,
  "gramatica": c_gramatica,
  "divertido": c_divertido,
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
