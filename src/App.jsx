import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Risk from "./components/Risk";
import Skills from "./components/Skills";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="risk">
        <Risk />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="roadmap">
        <Roadmap />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
};

export default App;
