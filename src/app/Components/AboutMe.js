"use client"
import React from 'react';
import AboutMeCard from './AboutMeCard';
import "./AboutMe.css";

const AboutMe = (props) => {
    const { scrollRef } = props;

    return (
        <div ref={scrollRef} id="about_me">
            <h3>O mne</h3>
            <div className="text_about">
                <AboutMeCard text="Som technicky zameraný samouk s medzinárodnými skúsenosťami." />
                <AboutMeCard text="Hľadám príležitosť profesionálne rásť ako Front-end developer po rokoch individuálneho štúdia." />
                <AboutMeCard text="Som veľmi proaktívny a rád sa učím nové veci." />
                <AboutMeCard text="Vo voľnom čase rád cvičím kalisteniku a programujem weby." />
            </div>
        </div>
    );
};

export default AboutMe;
