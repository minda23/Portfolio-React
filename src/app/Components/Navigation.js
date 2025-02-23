"use client"
import React, { useState, useEffect } from "react";
import NavigationCard from "./NavigationCard";
import { useTranslation } from "react-i18next";

const Navigation = (props) => {
    const { aboutMe, skills, projects, education, footer } = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
        if (isMobile) {
            setIsMenuOpen(!isMenuOpen);
        }
    };

    return (
        <div>
            <div>

                <nav id="navigation" className={isMenuOpen ? "menu open" : "menu"}>
                    <ul>
                        <NavigationCard name={t('nav.aboutMe')} clickref={aboutMe} />
                        <NavigationCard name={t('nav.skills')} clickref={skills} />
                        <NavigationCard name={t('nav.projects')} clickref={projects} />
                        <NavigationCard name={t('nav.education')} clickref={education} />
                        <NavigationCard name={t('nav.contact')} clickref={footer} />
                    </ul>
                </nav>

                <LanguageToggle />


                {isMobile && (
                    <div
                        id="burger_menu"
                        onClick={toggleMenu}
                        style={{ display: isMenuOpen ? "none" : "block" }}
                    >
                        <img
                            title="obrazok"
                            src="/images/hamburger.png"
                            alt="logo"
                            width="50"
                        />
                    </div>
                )}


                {isMobile && (
                    <div
                        id="cross"
                        onClick={toggleMenu}
                        style={{ display: isMenuOpen ? "block" : "none" }}
                    >
                        <img
                            title="obrazok"
                            src="/images/cross.svg"
                            alt="logo"
                            width="50"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navigation;
