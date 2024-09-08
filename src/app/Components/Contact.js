import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import "./Contact.css";
import { FaPerson } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <div id='contact'>
            <div id="heading_contact">
                <h6>Kontaktujte ma</h6>
                <p>Ozvite sa</p>
            </div>
            <div className="headings_contact">
                <div>
                    <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                        <h2 className="call_me">Ozvite sa</h2>
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
                            <h2 className="write_me">Napíšte mi</h2>
                        </div>
                        <div className="container">
                            <div id="form">
                                <form action="/sending.php" method="post">
                                    <div id="first_parts">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Meno"
                                            required
                                            className="contact_input"
                                        />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Email"
                                            required
                                            className="contact_input"
                                        />
                                    </div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        cols="50"
                                        placeholder="Napíšte mi správu"
                                        required
                                        className="contact_textarea"
                                    />
                                    <input
                                        type="submit"
                                        value="Submit"
                                        className="button"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
