import React from 'react';
import "./Navigation.css";



const NavigationCard = (props) => {



    const { name, clickref } = props;

    const handleOnClick = () => {
        if (clickref == null) return;//  "guardian clause" nechcem tuto funkciu uskutočniť bez toho aby bola podmienka 
        // pravdivá;
        clickref.current.scrollIntoView();
    }

    return (

        <li onClick={handleOnClick}>{name}</li> // kvoli javascriptu dávame špecialne zazvorky ako hodnotu atributu.

    )
}

export default NavigationCard;

