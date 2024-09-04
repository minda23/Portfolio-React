import React from 'react';
import "./Footer.css"
import FooterCard from './FooterCard';


const Footer = () => {


    return (
        <div id='created_by'>
            <div id='who_create'>

                <FooterCard text="© Copyright by Lukáš Minda" />

                <FooterCard style={{ display: "flex", justifyContent: "right" }} arrow="fa-solid fa-arrow-up" />
            </div>
        </div>
    );
};

export default Footer;
