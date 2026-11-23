// Dados da marca e da navegação, extraídos do Linktree, Instagram e Hotmart da Fran.

export const marca = {
  nome: "Deutsch sem Travar",
  assinatura: "com a Lehrerin Fran",
  professora: "Francielle Gonçalves",
  apelido: "Fran",
  slogan: "Aprenda alemão vivendo o idioma no dia a dia",
  // Domínio ainda não definido: troque quando a Fran tiver o dela.
  dominio: "https://deutschmitfran.com.br",
  instagramHandle: "@deutschmitfran",
};

const WHATS_NUM = "5511980740722";
const WHATS_MSG = "Hallo, Fran! 😊\nWie geht es Ihnen? ";

export const links = {
  whatsapp: `https://wa.me/${WHATS_NUM}?text=${encodeURIComponent(WHATS_MSG)}`,
  whatsappNumero: WHATS_NUM,
  kitB1Pagina: "https://hotmart.com/pt-br/marketplace/produtos/kit-prova-sem-travar-guia-para-passar-na-prova-de-b1-do-goethe-telc/C108474192S",
  kitB1Checkout: "https://pay.hotmart.com/C108474192S?off=7ysxqz8l",
  comunidade: "https://chat.whatsapp.com/EL5QPL5gnbYK7YnHhKuL8T",
  materiais: "https://drive.google.com/drive/folders/1-H985HoGFupKBiRBV3dxBRYpA5YpyeN6",
  youtube: "https://youtube.com/@deutschmitfran",
  instagram: "https://www.instagram.com/deutschmitfran/",
  linktree: "https://linktr.ee/deutschmitfran",
  portugues: "https://hotmart.com/pt-br/marketplace/produtos/brasilianisches-portugiesisch-2-ebooks-im-paket-a2b1/S108459913W",
  // CTA principal do site
  ctaPrincipal: "/estude-comigo",
  ctaPrincipalTexto: "Estude comigo",
};

/** Monta um link de WhatsApp com mensagem pronta. */
export function whatsComTexto(texto: string) {
  return `https://wa.me/${WHATS_NUM}?text=${encodeURIComponent(texto)}`;
}

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const nav: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Aulas", href: "/estude-comigo" },
  { label: "Kit Prova B1", href: "/kit-b1" },
  { label: "Materiais grátis", href: "/materiais" },
  { label: "Sobre a Fran", href: "/sobre" },
];

export const redes = [
  { label: "Instagram", href: links.instagram },
  { label: "YouTube", href: links.youtube },
  { label: "Comunidade no WhatsApp", href: links.comunidade },
];
