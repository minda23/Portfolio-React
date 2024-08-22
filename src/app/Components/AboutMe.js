"use client";
import React, { useState, useEffect } from 'react';
import "./AboutMe.css"
import "./AboutMeCard"
import AboutMeCard from './AboutMeCard'

// props su parametre v reacte pre komponenty
// chceme dať jeden prop tomu AboutMeCard 


const AboutMe = () => {
    const [section, setsection] = useState("");
    const [Height, setHeight] = useState(0);

    useEffect(() => {
        let animationTriggered = false;
        let scrollDirectionDown = false;

        let sections = [
            { id: 'item_about1', Height: 70 },
            { id: 'item_about2', Height: 300 },
            { id: 'item_about3', Height: 500 },
            { id: 'item_about4', Height: 750 }
        ];

        window.addEventListener('scroll', function () {
            let scrollPositionY = window.scrollY;

            sections.forEach(function (section) {
                let element = document.getElementById(section.id);
                if (scrollPositionY >= section.Height) {
                    element.style.opacity = 1;
                    element.style.transform = "translateX(0%)";
                }
            });
        });
    })



    return (

        <div id="description">
            <h3>Kto som ?</h3>
            <div className='text_about'>
                <AboutMeCard text="Som technicky zameraný samouk s medzinárodnými skúsenosťami.{section}" />
                <AboutMeCard text="Hľadám príležitosť profesionálne rásť ako Front-end developer po rokoch individuálneho štúdia.{section}" />
                <AboutMeCard text="Som veľmi proaktívny a rád sa učím nové veci.{section}" />
                <AboutMeCard text="Vo voľnom čase rád cvičím kalisteniku a programujem weby.{section}" />

            </div>
        </div>



    );
};

export default AboutMe