"use client"
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import InputCard from './InputCard';
import "./Contact.css";
import { FaPerson } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
    const { t } = useTranslation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        const subject = `Message from ${name}`;
        const body = `Dobrý den pán Lukáš Minda\n\n${message}\n\n${name}`;
        const mailtoUrl = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        console.log(mailtoUrl);
        window.location.href = mailtoUrl;
    };

    return (
        <div id='contact'>
            <div id="heading_contact">
                <h6>{t('contact.heading')}</h6>
                <p>{t('contact.subheading')}</p>
            </div>
            <div className="headings_contact">
                <div>
                    <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                        <h6 style={{ fontSize: "1.3rem" }} className="call_me">
                            {t('contact.callMe')}
                        </h6>
                    </div>
                    <div className="contact_item">
                        <ContactInfo
                            text={t('contact.infoName')}
                            icon={<FaPerson style={{ fontSize: '1rem', margin: '10px' }} />}
                        />
                        <ContactInfo
                            text={t('contact.infoLocation')}
                            icon={<CiLocationOn style={{ fontSize: '1rem', margin: '10px' }} />}
                        />
                        <ContactInfo
                            text={t('contact.infoEmail')}
                            icon={<FaEnvelope style={{ fontSize: '1rem', margin: '10px' }} />}
                        />
                    </div>
                </div>
                <div className="kontajner">
                    <div>
                        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                            <h6 style={{ fontSize: "1.3rem" }} className="write_me">
                                {t('contact.writeMe')}
                            </h6>
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
                                value={t('contact.submit')}
                                onClick={handleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
