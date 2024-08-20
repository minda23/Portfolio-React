"use client";
import React, { useState, useEffect } from 'react';
import "./MainSection.css";


const MainSection = () => {
    const fullTitle = "JUNIOR FRONTEND DEVELOPER & CODER";
    const [title, setTitle] = useState("");
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (counter < fullTitle.length) {// mame možnosť vratit v tej podmienke do useeffectu
            const timer = setInterval(() => { // set interval by mal v sebe dve funkcie a potom ten set title by bola jedna 
                // set counter by bola druha
                setTitle(prev => prev + fullTitle[counter]);
                setCounter(prev => prev + 1);

            }, 100);

            return () => clearInterval(timer);//
        }
    }, [counter, fullTitle]);// toto je druhy parameter array na ktore mame reagovať ked sa zmeni dajme tomu
    // counter alebo niečo sa zmeni vo fulltittle tak to chcem spustiť v tom useeeffecte.


    return (
        <div id="Main">
            <div className="Main">
                <div className="text_introduction" id="text_introduction">
                    <h1>Lukáš Minda</h1>
                    <h2 id="heading">{title}</h2>
                    <div className="icons" id="icons">
                        <a href="https://github.com/minda23" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/luk%C3%A1%C5%A1-minda-b4a756119/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="mailto:someone@example.com">
                            <i className="fa fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>

            <a href="#description" className="arrow arrow-first arrow_stop" id="arrow_scroll"></a>
        </div>
    );
};

export default MainSection;
