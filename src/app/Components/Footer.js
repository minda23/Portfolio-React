"use client";
import React from 'react';
import "./Footer.css";
import FooterCard from './FooterCard';
import FooterButton from './FooterButton';

const Footer = () => {
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
                    arrow={<FooterButton />}
                />
            </div>
        </div>
    );
};

export default Footer;
