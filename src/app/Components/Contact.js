import React from 'react';
import ContactCard from './ContactCard';
import "./Contact.css";

const Education = () => {
    return (
        <div id='contact'>
            <div id="heading_contact">
                <h6>Kontaktujte ma</h6>
                <p>Ozvite sa</p>
            </div>
            <div className="headings_contact">
                <div>
                    <ContactCard headings="Ozvite sa" className="call_me" />
                    <div className="contact_item">
                        <ContactCard text="Meno: Lukáš Minda">
                            <i className="ikona_fa fa-solid fa-person"></i>
                        </ContactCard>
                        <ContactCard text="Humenné, Slovensko">
                            <i className="ikona_fa fa-solid fa-location-dot"></i>
                        </ContactCard>
                        <ContactCard text="Email: luki.minda@gmail.com">
                            <i className="ikona_fa fa-solid fa-envelope"></i>
                        </ContactCard>
                    </div>
                </div>
                <div className="kontajner">
                    <div>
                        <ContactCard text="Napíšte mi" className="write_me" />
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

export default Education;
