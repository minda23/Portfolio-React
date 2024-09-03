"use client";
import "./AboutMe.css";
import AboutMeCard from './AboutMeCard';








const AboutMe = () => {


    /*
    
   // domáca uloha je  zvlášť po sebe aby sa zobrazili tie štyri divka komponenty
   // čiže ak prejdeme terat tak nam vypiše že in in view a zobrazia sa všetky divka naraz
   // musime nejak nastaviť aby ak budeme na nej
   // a plus 
*/
    //html elements and styling
    return (
        <div id="description">



            <h3>Kto som?</h3>
            <div className='text_about'>


                <AboutMeCard text="Som technicky zameraný samouk s medzinárodnými skúsenosťami." />
                <AboutMeCard text="Hľadám príležitosť profesionálne rásť ako Front-end developer po rokoch individuálneho štúdia." />
                <AboutMeCard text="Som veľmi proaktívny a rád sa učím nové veci." />
                <AboutMeCard text="Vo voľnom čase rád cvičím kalisteniku a programujem weby." />
            </div>
        </div>
    );
}

export default AboutMe;
