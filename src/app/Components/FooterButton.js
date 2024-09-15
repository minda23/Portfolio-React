import React from "react";
import { useState, useEffect } from 'react';

const FooterButton = (props) => {

    const [visible, setVisible] = useState("")


    useEffect(() => {
        function toggleVisible() {
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 300) {
                setVisible(true);
            }
            else if (scrolled <= 300) {
                setVisible(false);
            }
        }

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
                /* you can also use 'auto' behaviour 
                   in place of 'smooth' */
            });
        };

        window.addEventListener('scroll', toggleVisible);

        return () => {
            window.removeEventListener('scroll', toggleVisible);
        };
    }, []);

    const { arrow } = props;
    return (
        <div>
            <FaArrowAltCircleUp onClick={scrollToTop} style={{ fontSize: "4rem", marginTop: "-3rem", display: visible ? 'inline' : 'none' }} />
        </div>
    );
};


export default FooterButton;