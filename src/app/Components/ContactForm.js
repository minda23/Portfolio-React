"use client"
import React from "react";
import { useState, useEffect, useRef } from 'react';



const ContactCard = (props) => {
    const [isInView, setIsInView] = useState(0);
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



    const { Form
    } = props;
    const ItemAboutStyles = {
        opacity: myOpacity,
        transform: isInView ? 'translateX(0px)' : 'translateX(-100px)',
        transition: 'transform 0.5s ease-out',
    }
    return (
        <div ref={myRef} style={ItemAboutStyles}>

            <Form>{Form}</Form>



        </div >
    )
}


export default ContactCard;






