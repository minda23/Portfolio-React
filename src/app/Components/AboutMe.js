import React from 'react'
import "./AboutMe.css"
import "./AboutMeCard"
import AboutMeCard from './AboutMeCard'
// props su parametre v reacte pre komponenty
// chceme dať jeden prop tomu AboutMeCard 


const AboutMe = () => {
    return (

        <div id="description">
            <h3>Kto som ?</h3>
            <div className='text_about'>
                <AboutMeCard text="Som technicky zameraný samouk s medzinárodnými skúsenosťami." />
                <AboutMeCard text="Hľadám príležitosť profesionálne rásť ako Front-end developer po rokoch individuálneho štúdia." />
                <AboutMeCard text="Som veľmi proaktívny a rád sa učím nové veci." />
                <AboutMeCard text="Vo voľnom čase rád cvičím kalisteniku a programujem weby." />

            </div>
        </div>



    )



}

export default AboutMe