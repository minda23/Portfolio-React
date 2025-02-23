"use client";
import Image from "next/image";
import styles from "./page.module.css";
import MainSection from "./Components/MainSection";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";
import { useRef } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./Components/i18n";

export default function Home() {
  const aboutMe = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const education = useRef(null);
  const contact = useRef(null);
  const footer = useRef(null);

  return (
    <I18nextProvider i18n={i18n}>
      <div>
        <Navigation
          aboutMe={aboutMe}
          skills={skills}
          projects={projects}
          education={education}
          contact={contact}
          footer={footer}
        />
        <MainSection />
        <AboutMe scrollRef={aboutMe} />
        <Skills scrollRef={skills} />
        <Projects scrollRef={projects} />
        <Education scrollRef={education} />
        <Contact scrollRef={contact} />
        <Footer scrollRef={footer} />
      </div>
    </I18nextProvider>
  );
}
