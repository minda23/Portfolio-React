import Image from "next/image";
import styles from "./page.module.css";
import MainSection from "./Components/MainSection"
import AboutMe from "./Components/AboutMe"


export default function Home() {
  return (
    <div>
      <MainSection />
      <AboutMe />
    </div>
  );
}



