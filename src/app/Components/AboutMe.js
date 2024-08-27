"use client";
import React, { useState, useEffect } from 'react';
import "./AboutMe.css";
import AboutMeCard from './AboutMeCard';







const AboutMe = () => {
    const [sectionStyles, setSectionStyles] = useState();
    // logic
    useEffect(() => {
        const sections = [
            { id: 'item_about1', triggerHeight: 70 },
            { id: 'item_about2', triggerHeight: 300 },
            { id: 'item_about3', triggerHeight: 500 },
            { id: 'item_about4', triggerHeight: 750 }
        ];

        const handleScroll = () => {
            const scrollPositionY = window.scrollY;



            sections.forEach(section => {
                const element = document.getElementById(section.id);
                if (scrollPositionY >= section.triggerHeight) {
                    setSectionStyles(prevStyles => ({
                        ...prevStyles,
                        [section.id]: {
                            opacity: 1,
                            transform: "translateX(0%)"
                        }
                    }));
                }
            });

            // ...


        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div id="description">
            <h3>Kto som?</h3>
            <div className='text_about'>
                <AboutMeCard text="Som technicky zameraný samouk s medzinárodnými skúsenosťami." />
                <AboutMeCard text="Hľadám príležitosť profesionálne rásť ako Front-end developer po rokoch individuálneho štúdia." />
                <AboutMeCard text="Som veľmi proaktívny a rád sa učím nové veci." />
                <AboutMeCard text="Vo voľnom čase rád cvičím kalisteniku a programujem weby." />
            </div>
        </div>
    );
}

export default AboutMe;
