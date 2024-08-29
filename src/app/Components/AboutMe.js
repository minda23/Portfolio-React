"use client";
import React, { useState, useEffect, useRef } from 'react';
import "./AboutMe.css";
import AboutMeCard from './AboutMeCard';








const AboutMe = () => {
    const [isInView, setIsInView] = useState(false);// mame nejaky state react premmennu.
    const myRef = useRef(null);// use ref je funkcia v reacte a vytvorime refenciu niaky vzťah s html elementom
    const myOpacity = isInView ? 1 : 0;
    // logic
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsInView(true);
                    observer.disconnect(); // Stop observing once the element is in view
                }
            },
            {
                threshold: 0.1, // Adjust this as needed, 0.1 means 10% of the element needs to be in view
            }
        );

        if (myRef.current) {
            observer.observe(myRef.current);
        }

        return () => {
            if (myRef.current) {
                observer.unobserve(myRef.current);
            }
        };
    }, []);

    // domáca uloha je  zvlášť po sebe aby sa zobrazili tie štyri divka komponenty
    // a plus 








    //html elements and styling
    return (
        <div id="description">
            {isInView ? "is in view" : "is not in view."}


            <h3>Kto som?</h3>
            <div className='text_about' ref={myRef} style={{
                opacity: myOpacity,
                transform: isInView ? 'translateX(0px)' : 'translateX(-100px)',
                transition: 'transform 0.5s ease-out',
            }} >

                <AboutMeCard text="Som technicky zameraný samouk s medzinárodnými skúsenosťami." />
                <AboutMeCard text="Hľadám príležitosť profesionálne rásť ako Front-end developer po rokoch individuálneho štúdia." />
                <AboutMeCard text="Som veľmi proaktívny a rád sa učím nové veci." />
                <AboutMeCard text="Vo voľnom čase rád cvičím kalisteniku a programujem weby." />
            </div>
        </div>
    );
}

export default AboutMe;
