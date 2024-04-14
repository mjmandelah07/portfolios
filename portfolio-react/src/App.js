import React, { useEffect } from "react";
import WOW from "wowjs";
import "./App.css";

import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";


function App() {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <div className="" id="page-container">
      <NavBar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
