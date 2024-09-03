import React from 'react';
import "./Skills.css"
import SkillsCard from './SkillsCard';


const Skills = () => {
    return (
        <div id="skills">
            <div id="skills_main">
                <div className='skill_text'>
                    <h4 style={{ marginBottom: "1rem" }}>schopnosti a nástroje</h4>
                    <p style={{ marginBottom: "1rem" }}>Tieto technológie ovládam:</p>
                </div>
                <div id='skills_images'>


                    <SkillsCard image="images/html.svg " />
                    <SkillsCard image="images/css.svg " />
                    <SkillsCard image="images/javascript.svg " />
                    <SkillsCard image="images/jquery.svg " />
                    <SkillsCard image="images/gimp.svg " />
                    <SkillsCard image="images/sublime-text.svg" />
                </div>

            </div>
        </div>
    )
}

export default Skills;

