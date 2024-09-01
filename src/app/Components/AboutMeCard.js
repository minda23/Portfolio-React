import React from "react"
import { useState, useEffect, useRef } from 'react';



const AboutMeCard = (props) => {
    const [isInView, setIsInView] = useState(false);// mame nejaky state react premmennu.
    const myRef = useRef(null);// use ref je funkcia v reacte a vytvorime refenciu niaky vzťah s html elementom
    const myOpacity = isInView ? 1 : 0;
    // logic
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

    const { text } = props;
    const ItemAboutStyles = {
        opacity: myOpacity,
        transform: isInView ? 'translateX(0px)' : 'translateX(-100px)',
        transition: 'transform 0.5s ease-out',
    }
    return (

        <div className="item_about" id="item_about1" ref={myRef} style={ItemAboutStyles} > <p>{text} </p>
        </div>


    )
}

export default AboutMeCard