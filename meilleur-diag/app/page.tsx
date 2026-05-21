import Image from "next/image";
import Stats from "./components/sections/Stats";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import WhyUs from "./components/sections/WhyUs";
import HowItWorks from "./components/sections/HowItWorks";
import CTA from "./components/sections/CTA";
import CTAYellow from "./components/CTAYellow";
import Highlight from "./components/sections/Highlight";
import DevisFormMulti from "./components/sections/DevisFormMulti";

export default function Home() {
  return (
    <main>
        <Hero />
        <Stats />
        <DevisFormMulti/>
        <Highlight/>
        <Services />
        <WhyUs />
        <HowItWorks />
        <CTA />
        <CTAYellow/>
    </main>
  );
}
