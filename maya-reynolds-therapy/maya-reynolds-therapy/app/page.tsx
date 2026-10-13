import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import WhoIHelp from "@/components/WhoIHelp";
import Expertise from "@/components/Expertise";
import HowIWork from "@/components/HowIWork";
import Services from "@/components/Services";
import About from "@/components/About";
import Office from "@/components/Office";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Intro />
        <WhoIHelp />
        <Expertise />
        <HowIWork />
        <Services />
        <About />
        <Office />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
