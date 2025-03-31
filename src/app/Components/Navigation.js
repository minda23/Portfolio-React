import React, { useState, useEffect } from "react";
import NavigationCard from "./NavigationCard";

const Navigation = (props) => {
    const { aboutMe, skills, projects, education, footer } = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false); // Initialize based on current window width

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        window.onclick("resize", handleResize);
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
                {/* Navigation Menu */}
                <nav id="navigation" className={isMenuOpen ? "menu open" : "menu"}>
                    <ul>
                        <NavigationCard name="O mne" clickref={aboutMe} />
                        <NavigationCard name="Schopnosti" clickref={skills} />
                        <NavigationCard name="Projekty" clickref={projects} />
                        <NavigationCard name="Vzdelanie" clickref={education} />
                        <NavigationCard name="Kontakt" clickref={footer} />
                    </ul>
                </nav>

                {/* Burger Menu Icon */}
                {isMobile && (
                    <div id="burger_menu" onClick={toggleMenu} style={{ display: isMenuOpen ? "none" : "block" }}>
                        <img title="obrazok" src="/images/hamburger.png" alt="logo" width="50" />
                    </div>
                )}

                {/* Cross Icon */}
                {isMobile && (
                    <div id="cross" onClick={toggleMenu} style={{ display: isMenuOpen ? "block" : "none" }}>
                        <img title="obrazok" src="/images/cross.svg" alt="logo" width="50" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navigation;