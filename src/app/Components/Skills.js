"use client"
import React from 'react';
import "./Skills.css";
import SkillsCard from './SkillsCard';
import { useTranslation } from 'react-i18next';

const Skills = (props) => {
    const { scrollRef } = props;
    const { t } = useTranslation();

    return (
        <div id="skills" ref={scrollRef}>
            <div id="skills_main">
                <div className='skill_text'>
                    <h4 style={{ marginBottom: "1rem" }}>Schopnosti a nástroje</h4>
                    <p style={{ marginBottom: "1rem" }}>Tieto technológie ovládam:</p>
                </div>
                <div id='skills_images'>
                    <SkillsCard image="images/html.svg" />
                    <SkillsCard image="images/css.svg" />
                    <SkillsCard image="images/javascript.svg" />
                    <SkillsCard image="images/jquery.svg" />
                    <SkillsCard image="images/gimp.svg" />
                    <SkillsCard image="images/sublime-text.svg" />
                </div>
            </div>
        </div>
    );
};



export default Skills