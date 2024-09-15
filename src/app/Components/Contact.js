"use client"
import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import InputCard from './InputCard';

import "./Contact.css";
import { FaPerson } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FaEnvelope } from "react-icons/fa";
import { useState } from 'react';

// debugovanie je veľmi užitočne , ako sa to spusti a zastavi sa to pri kode 17.
// keby som mal komplexnu kalkulaciu a robi niečo zložitejšie, môžem si to rozbiť na male časti, a 
// ked mam nejaku chybu bug , tak to potrebujem ked hľadam chybu v kóde.


const Contact = () => {
    const [name, setName] = useState("");// chceme aby sa nastavila funkcia setName ked sa niečo zmeni v textarea.
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        const subject = `Message from ${name}`;//predmet odoslania
        const body = `Dobrý den pán Lukáš Minda

${message}

${name}`;
        const mailtoUrl = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        console.log((mailtoUrl))// v podstate je to rychlejšie ak preskočume na tento riadok rovno vidíme ,
        // čo obsahuje variable const mailtoUrl , nemusime písať console.log() 
        // čo musime dať do toho browseru , aby nam otvorilo email 
        //ak dávame nejaky text do url adresy, tak niektore charaktery sa musia špecialne zmeniť.

        // Open the default mail client
        window.location.href = mailtoUrl;// my do toho url vsunujeme ten mail aby sa to otvorilo 
    };


    return (
        <div id='contact'>
            <div id="heading_contact">
                <h6>Kontaktujte ma</h6>
                <p>Ozvite sa</p>
            </div>
            <div className="headings_contact">
                <div>
                    <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                        <h6 style={{ fontSize: "1.3rem" }} className="call_me">Ozvite sa</h6>
                    </div>
                    <div className="contact_item">
                        <ContactInfo text="Meno: Lukáš Minda" icon={<FaPerson style={{ fontSize: '1rem', margin: '10px' }} />} />

                        <ContactInfo text="Humenné, Slovensko" icon={<CiLocationOn style={{ fontSize: '1rem', margin: '10px' }} />} />

                        <ContactInfo text="Email: luki.minda@gmail.com" icon={<FaEnvelope style={{ fontSize: '1rem', margin: '10px' }} />} />


                    </div>
                </div>

                <div className="kontajner">
                    <div>
                        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                            <h6 style={{ fontSize: "1.3rem" }} className="write_me">Napíšte mi</h6>
                        </div>
                        <div className="container">
                            <div id="form">
                                <ContactForm value={name} setValue={setName} />
                                <ContactForm value={email} setValue={setEmail} />
                                <ContactForm value={message} setValue={setMessage} />
                                <InputCard value={input} setValue={setInput} />
                            </div>
                            <input
                                type="button"
                                className="button"
                                value="Odeslat"
                                onClick={handleSubmit} // prop onclick berie funkciu handleSubmit, možeme tam dať changecolor alebo 
                            //change text. doesnt matter.
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Contact;
