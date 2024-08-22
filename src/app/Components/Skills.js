import React from 'react';
import "./Skills.css"
import FooterCard from './FooterCard';


const Skills = () => {
    return (
        <div>

            <FooterCard text="Schopnosti a nástroje" />
            <FooterCard text1="Tieto technológie ovládam:" />
            <FooterCard image="images/html.svg " />
            <FooterCard image="images/css.svg " />
            <FooterCard image="images/javascript.svg " />
            <FooterCard image="images/jquery.svg " />
            <FooterCard image="images/gimp.svg " />
            <FooterCard image="images/sublime-text.svg" />
        </div>
    )
}

export default Skills;

