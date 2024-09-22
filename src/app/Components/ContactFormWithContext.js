"use client"
import React from "react";
import { useState, useEffect, useRef, useContext } from 'react';
import FormContext from "./FormContext";


// use context hook sa zdieľa ked chceme posuvať komponent bez propsu čiže je to čistejšie 
// ak máma zložitu appku s 10 komponentami
//


const ContactCard = () => {
    const [isInView, setIsInView] = useState(0);
    const [name, setName] = useContext(FormContext);
    const myRef = useRef(null);
    const myOpacity = isInView ? 1 : 0;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    console.log(entries)
                    setIsInView(true);
                    observer.disconnect(); // Stop observing once the element is in view
                }
            },
            {
                threshold: [0.5],

                // ked budem 10 percent vnutri vypiše is in view
            }
        );

        if (myRef.current) {
            console.log(myRef.current)
            observer.observe(myRef.current);
        }

        return () => {
            if (myRef.current) {
                observer.unobserve(myRef.current);
            }
        };
    }, []);




    const ItemAboutStyles = {
        opacity: myOpacity,
        transform: isInView ? 'translateX(0px)' : 'translateX(-100px)',
        transition: 'transform 0.5s ease-out',
    }
    return (

        <div ref={myRef} style={ItemAboutStyles}>
            <textarea onChange={e => setName(e.target.value)} id="message" name="message" rows="1" cols="50" placeholder="Napišťe mi správu" required></textarea>



        </div >



        /* treba pridať ten gombik a ked sa stlači ale klikne sa na mailto čiže ked kliknem tak v tom
          mailto sa to uloži že budu tie veci skopirovane v tom mail to vlastne čo uživateľ napisal 
          na stránke */ // budem musieť presne špicifovať ako sa tie udaje tam dostanu.
    )
}



export default ContactCard;






