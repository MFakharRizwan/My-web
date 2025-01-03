import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Navbar from "./components/Navbar";
import Hero from "./components/Home";
import Projects from "./components/projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/contact";


function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
