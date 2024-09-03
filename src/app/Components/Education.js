import React from 'react'
import "./Education.css"
import EducationCard from "./EducationCard"
// props su parametre v reacte pre komponenty
// chceme dať jeden prop tomu AboutMeCard 


const Education = () => {

    return (


        <div id="education_description">
            <div className="headings_education">
                <div>
                    <h5 style={{ marginBottom: "7rem" }}>Vzdelanie</h5>
                </div>
            </div>
            <div className="two_sections">
                <div className="course_education" id="course">
                    <EducationCard course="WEB DEVELOPER ACADEMY"></EducationCard>
                    <div className='academy'>
                        <EducationCard text="SmartyAcademy | Mar 2024 - Máj 2024"></EducationCard>
                    </div>
                    <EducationCard text="Vytvoril som responzívnu webovú stránku v HTML a následne
                                    som do nej integroval JavaScript a jQuery"></EducationCard>
                    <EducationCard text="Úspešne som zvládol 64 testov a dosiahol certifikát"></EducationCard>



                </div>
                <div className="school_education" id="course1">
                    <div>
                        <h5 style={{ fontSize: "1.8rem" }}>Technické lyceum</h5>
                    </div>
                    <div className="school">
                        <EducationCard text="Stredná odborná škola technická v Humennom | Sep 2013 – Jún 2017"></EducationCard>
                    </div>
                    <EducationCard text="Ukončil som štúdium maturitnou skúškou"></EducationCard>
                    <EducationCard text="Programoval som v HTML, CSS, PHP a Joomla"></EducationCard>
                    <EducationCard text="Pracoval som s grafickými programami Blender, Gimp, Inscape a"></EducationCard>
                    <EducationCard text="strojárskym programom Solid Edge (3D CAD software)"></EducationCard>



                </div>
            </div>

        </div>



    )
}



export default Education


