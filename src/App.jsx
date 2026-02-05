import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import OMSCaseStudy from "./pages/OMSCaseStudy";
import Contact from "./sections/Contact";
import EngineeringPhilosophy from "./sections/EngineeringPhilosophy";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import SystemDesign from "./sections/SystemDesign";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <EngineeringPhilosophy />
//       <Experience />
//       <SystemDesign />
//       <Projects />
//       <Skills />
//       <Contact />
//       <Footer />
//     </>
//   );
// }

const Home = () => (
  <>
    <Hero />
    <EngineeringPhilosophy />
    <Experience />
    <SystemDesign />
    <Projects />
    <Skills />
    <Contact />
  </>
);

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oms-case-study" element={<OMSCaseStudy />} />
      </Routes>
    </>
  );
};

export default App;
