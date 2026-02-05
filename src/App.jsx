import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";
import EngineeringPhilosophy from "./sections/EngineeringPhilosophy";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import SystemDesign from "./sections/SystemDesign";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <EngineeringPhilosophy />
      <Experience />
      <SystemDesign />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
