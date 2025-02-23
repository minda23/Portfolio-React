"use client"
import React, { useState, useEffect } from "react";
import NavigationCard from "./NavigationCard";

const Navigation = (props) => {
    const { aboutMe, skills, projects, education, footer } = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

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
                        <NavigationCard name="About Me" clickref={aboutMe} />
                        <NavigationCard name="Skills" clickref={skills} />
                        <NavigationCard name="Projects" clickref={projects} />
                        <NavigationCard name="Education" clickref={education} />
                        <NavigationCard name="Contact" clickref={footer} />
                    </ul>
                </nav>

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
