"use client"
import React from "react"
import NavigationCard from "./NavigationCard"




const Navigation = (props) => {

    const { aboutMe, skills, projects, education, footer } = props;
    return (




        <div>

            <div>
                <nav id="navigation" >

                    <ul>

                        <NavigationCard name="O mne" clickref={aboutMe} />
                        <NavigationCard name="Schopnosti" clickref={skills} />
                        <NavigationCard name="Projekty" clickref={projects} />
                        <NavigationCard name="Vzdelanie" clickref={education} />
                        <NavigationCard name="Kontakt" clickref={footer} />

                    </ul>
                </nav>

                <div id="burger_menu">
                    <img title="obrazok" src="{burger}" alt="logo" width="50" />

                </div>
                <div id="cross">
                    <img title="obrazok" src="{cross}" alt="logo" width="50" />
                </div>
            </div>
        </div>
    )
}


export default Navigation