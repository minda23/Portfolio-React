import React from 'react';
import "./Footer.css"
import FooterCard from './FooterCard';
import { FaArrowAltCircleUp } from "react-icons/fa";


const Footer = () => {


    return (
        <div id='created_by'>
            <div id='who_create'>

                <FooterCard text="© Copyright by Lukáš Minda" />

                <FooterCard style={{ display: "flex", justifyContent: "right" }} />
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: "-2.2rem" }}>
                    <FaArrowAltCircleUp style={{ fontSize: '4.5rem' }} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
