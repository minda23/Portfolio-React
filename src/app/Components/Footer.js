"use client"
import React from 'react';
import "./Footer.css"
import FooterCard from './FooterCard';
import { useState, useEffect } from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";


const Footer = () => {

    const [arrowUp, setArrowup] = useState("");

    useEffect(() => {

    })

    return (
        <div id='created_by'>
            <div id='who_create'>

                <FooterCard
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",  // Center align items vertically
                        flexWrap: "wrap",
                        position: "relative"   // Use relative positioning
                    }}
                    text={
                        <div style={{ flex: 1, textAlign: 'center' }}>  {/* Center the text */}
                            © Copyright by Lukáš Minda
                        </div>
                    }
                    arrow={
                        <div style={{ position: "absolute", right: "0" }}>  {/* Position the arrow to the right */}
                            <FaArrowAltCircleUp style={{ fontSize: "4rem", marginTop: "-3rem" }} />
                        </div>
                    }
                />

            </div>
        </div>

    );
};

export default Footer;
