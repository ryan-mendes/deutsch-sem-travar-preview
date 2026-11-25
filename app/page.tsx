import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Comparativo from "@/components/sections/Comparativo";
import Caminhos from "@/components/sections/Caminhos";
import SobrePreview from "@/components/sections/SobrePreview";
import KitBanda from "@/components/sections/KitBanda";
import MetodologiaCamaleao from "@/components/sections/MetodologiaCamaleao";
import Depoimentos from "@/components/sections/Depoimentos";
import InstagramGrid from "@/components/sections/InstagramGrid";
import CtaFinal from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Comparativo />
      <MetodologiaCamaleao />
      <Caminhos />
      <KitBanda />
      <Depoimentos />
      <SobrePreview />
      <InstagramGrid />
      <CtaFinal />
    </main>
  );
}
