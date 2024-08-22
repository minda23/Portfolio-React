import Image from "next/image";
import styles from "./page.module.css";
import MainSection from "./Components/MainSection"
import AboutMe from "./Components/AboutMe"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Education from "./Components/Education"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Navigation from "./Components/Navigation"


export default function Home() {
  return (
    <div>
      <Navigation />
      <MainSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}



