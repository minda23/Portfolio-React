"use client";
import React from 'react';
import "./Footer.css";
import FooterCard from './FooterCard';
import FooterButton from './FooterButton';
import { FaArrowAltCircleUp } from 'react-icons/fa';

const Footer = (props) => {
    const { scrollRef } = props;
    return (
        <div id='created_by' ref={scrollRef}>
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

                />
                <FooterButton Icon={FaArrowAltCircleUp} style={{ display: "flex", justifyContent: "right" }} />
            </div>
        </div>
    );
};

export default Footer;
