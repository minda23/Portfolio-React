import React from "react"



const AboutMeCard = (props) => {
    const { text, text1, images, skills_main = "skills_main",
        skillsID = "skills",
        skills_text = "skills_text",
        skills_imagesID = "skills_images"
    } = props;
    return (

        <div id="skills">
            <div id="skills_main">
                <div className="skills_text">
                    <h4>{text}</h4>
                    <p>{text1}</p>
                </div>
                <div id="skills_images">
                    <img src="{image}" alt="HTML" />
                    <img src="{image}" alt="CSS" />
                    <img src="{image}" alt="JavaScript" />
                    <img src="{image}" alt="jQuery" />
                    <img src="{image}" alt="GIMP" />
                    <img src="{image}" alt="Sublime Text" />
                </div>
            </div>
        </div>
    )
}

export default AboutMeCard