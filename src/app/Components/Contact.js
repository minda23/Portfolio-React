"use client"
import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import "./Contact.css";
import { FaPerson } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FaEnvelope } from "react-icons/fa";
import { useState } from 'react';




const Contact = () => {
    const [name, setName] = useState("");// chceme aby sa nastavila funkcia setName ked sa niečo zmeni v textarea.
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [button, setButton] = useState("");






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
                        <ContactInfo text="Meno: Lukáš Minda" icon={<FaPerson />} />

                        <ContactInfo text="Humenné, Slovensko" icon={<CiLocationOn />} />

                        <ContactInfo text="Email: luki.minda@gmail.com" icon={<FaEnvelope />} />


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
                                <ContactForm value={button} setValue={setButton} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
