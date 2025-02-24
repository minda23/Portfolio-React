import React, { useState, useEffect } from "react";
import NavigationCard from "./NavigationCard";

const Navigation = (props) => {
    const { aboutMe, skills, projects, education, footer } = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    useEffect(() => {
        const handleResize = () => {
            const mobileCheck = window.innerWidth <= 600;
            setIsMobile(mobileCheck);

            if (!mobileCheck) {
                setIsMenuOpen(true);
            }
        };

        setIsMenuOpen(!isMobile);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isMobile]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>

            {isMobile && (
                <div
                    id="burger_menu"
                    onClick={toggleMenu}
                    style={{ cursor: "pointer", margin: "1rem" }}
                >
                    <span>☰</span>
                </div>
            )}


            {(!isMobile || (isMobile && isMenuOpen)) && (
                <nav id="navigation" className={isMobile ? "menu mobile" : "menu desktop"}>
                    <ul>
                        <NavigationCard name="O mne" clickref={aboutMe} />
                        <NavigationCard name="Schopnosti" clickref={skills} />
                        <NavigationCard name="Projekty" clickref={projects} />
                        <NavigationCard name="Vzdelanie" clickref={education} />
                        <NavigationCard name="Kontakt" clickref={footer} />
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default Navigation;
