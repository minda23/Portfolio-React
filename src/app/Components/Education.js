import React from 'react'
import "./Education.css"
import EducationCard from "./EducationCard"
// props su parametre v reacte pre komponenty
// chceme dať jeden prop tomu AboutMeCard 


const Education = () => {

    return (
        <div>
            <div id="education_description">
                <div>
                    <EducationCard texth5="Vzdelanie" />
                </div>
                <div>
                    <div className="course_education" id="course">
                        <EducationCard course="WEB DEVELOPER ACADEMY" coursetext="SmartyAcademy | Mar 2024 - Máj 2024" coursetext1="Vytvoril som responzívnu webovú stránku v HTML a následne
							som do nej integroval JavaScript a jQuery" coursetext2="Úspešne som zvládol 64 testov a dosiahol certifikát" />

                    </div>
                    <div className="school_education" id="course1">
                        <EducationCard school="TECHNICKÉ LÝCEUM" schooltext="Stredná odborná škola technická v Humennom | Sep 2013 – Jún 2017
							Ukončil som štúdium maturitnou skúškou
							Programoval som v HTML, CSS, PHP a Joomla
							Pracoval som s grafickými programami Blender, Gimp, Inscape a
								strojárskym programom Solid Edge (3D CAD software)
                        " />



                    </div>
                </div>
            </div>
        </div>
    )

}




export default Education