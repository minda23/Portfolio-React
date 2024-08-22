import React from 'react';
import "./Footer.css"
import FooterCard from './FooterCard';


const Footer = () => {


    return (
        <div className='headings_contact'>

            <FooterCard text="© Copyright by Lukáš Minda" />
            <FooterCard arrow="fa-solid fa-arrow-up" />
        </div>
    );
};

export default Footer;
