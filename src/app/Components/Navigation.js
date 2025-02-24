import React, { useState, useEffect } from "react";
import NavigationCard from "./NavigationCard";

const Navigation = (props) => {
    const { aboutMe, skills, projects, education, footer } = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Add event listener to handle window resize
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        window.addEventListener("resize", handleResize);

        // Initial check
        handleResize();

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
                {/* Burger Menu Icon */}
                {isMobile && (
                    <div id="burger_menu" onClick={toggleMenu} style={{ display: isMenuOpen ? "none" : "block" }}>
                        &#9776; {/* This is a simple burger icon */}
                    </div>
                )}

                {/* Navigation Menu */}
                {isMobile && isMenuOpen && (
                    <nav id="navigation" className="menu open">
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
        </div>
    )
}

export default Navigation;
