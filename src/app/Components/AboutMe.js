"use client"
import React from 'react';
import AboutMeCard from './AboutMeCard';
import "./AboutMe.css";
import { useTranslation } from 'react-i18next';

const AboutMe = (props) => {
    const { scrollRef } = props;
    const { t } = useTranslation();

    return (
        <div ref={scrollRef} id="about_me">
            <h3>{t('aboutMe.header')}</h3>
            <div className="text_about">
                <AboutMeCard text={t('aboutMe.card1')} />
                <AboutMeCard text={t('aboutMe.card2')} />
                <AboutMeCard text={t('aboutMe.card3')} />
                <AboutMeCard text={t('aboutMe.card4')} />
            </div>
        </div>
    );
};

export default AboutMe;
