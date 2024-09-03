import React from "react"



const NavigationCard = (props) => {
    const { text, burger,


    } = props;
    return (

        <div>
            <nav id="navigation">

                <ul>
                    <li><a href="{text}">O mne</a></li>
                    <li><a href="{text}">Schopnosti</a></li>
                    <li><a href="{text}">Projekty</a></li>
                    <li><a href="{text}">Vzdelanie</a></li>
                    <li><a href="{text}">Kontakt</a></li>
                </ul>
            </nav>

            <div id="burger_menu">
                <img title="obrazok" src="{burger}" alt="logo" width="50" />

            </div>
            <div id="cross">
                <img title="obrazok" src="{cross}" alt="logo" width="50" />
            </div>
        </div>
    )
}

export default NavigationCard