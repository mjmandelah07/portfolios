import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Portfolio from "../sections/Portfolio";
import About from "../sections/About";
import Counter from "../sections/Counter";
import Discuss from "../sections/Discuss";
import Footer from "../sections/Footer";

export default function HomePage() {
    return (
      <>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Counter />
        <Discuss />
        <Footer />
      </>
    );
}
