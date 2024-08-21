import Image from "next/image";
import styles from "./page.module.css";
import MainSection from "./Components/MainSection"
import AboutMe from "./Components/AboutMe"
import Projects from "./Components/Projects"


export default function Home() {
  return (
    <div>
      <MainSection />
      <AboutMe />
      <Projects />
    </div>
  );
}



