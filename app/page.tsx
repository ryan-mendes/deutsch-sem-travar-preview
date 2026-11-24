import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Comparativo from "@/components/sections/Comparativo";
import Caminhos from "@/components/sections/Caminhos";
import SobrePreview from "@/components/sections/SobrePreview";
import KitBanda from "@/components/sections/KitBanda";
import Pilares from "@/components/sections/Pilares";
import InstagramGrid from "@/components/sections/InstagramGrid";
import CtaFinal from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Comparativo />
      <Pilares />
      <Caminhos />
      <KitBanda />
      <SobrePreview />
      <InstagramGrid />
      <CtaFinal />
    </main>
  );
}
