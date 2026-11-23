import type { Metadata } from "next";
// Títulos em fonte arredondada e brincalhona (próxima do logo e das artes do Instagram);
// texto corrido em Nunito, legível e amigável.
import { Fredoka, Nunito } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsFlutuante from "@/components/ui/WhatsFlutuante";
import { links, marca } from "@/lib/site";
import "./globals.css";

const texto = Nunito({ subsets: ["latin"], variable: "--font-brand", display: "swap" });
const titulo = Fredoka({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-titulo", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(marca.dominio),
  title: `${marca.nome} | Aulas de alemão com a Lehrerin Fran`,
  description:
    "Aprenda alemão vivendo o idioma no dia a dia com a professora e tradutora Francielle Gonçalves. Aulas, Kit Prova B1 (Goethe e telc), materiais gratuitos e comunidade.",
  openGraph: { type: "website", locale: "pt_BR", siteName: marca.nome },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: marca.nome,
  url: marca.dominio,
  founder: { "@type": "Person", name: marca.professora, jobTitle: "Professora e Tradutora de Alemão" },
  sameAs: [links.instagram, links.youtube],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${texto.variable} ${titulo.variable}`}>
      <body className="bg-white font-sans text-ink">
        <Header />
        {children}
        <Footer />
        <WhatsFlutuante />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
