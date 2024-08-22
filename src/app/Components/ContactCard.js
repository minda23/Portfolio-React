import React from "react";

const ContactCard = ({
    heading,
    name,
    location,
    email,
    formTitle,
    onSubmit,
    headingClassName,
    contactItemClassName,
    formContainerClassName,
    inputClassName,
    textareaClassName,
    buttonClassName
}) => {
    return (
        <div className="headings_contact">
            <div>
                <h6 className={headingClassName}>{heading}</h6>
                <div className={contactItemClassName}>
                    <p><i className="ikona_fa fa-solid fa-person"></i>Meno: {name}</p>
                    <p><i className="ikona_fa fa-solid fa-location-dot"></i>{location}</p>
                    <p className="last_item" style={{ marginLeft: '1.8rem' }}><i className="ikona_fa fa-solid fa-envelope"></i>Email: {email}</p>
                </div>
            </div>
            <div className="kontajner">
                <div>
                    <h6 className="write_me">{formTitle}</h6>
                    <div className={formContainerClassName}>
                        <div id="form">
                            <form onSubmit={onSubmit}>
                                <div id="first_parts">
                                    <input type="text" id="name" name="name" placeholder="Meno" required className={inputClassName} />
                                    <input type="email" id="email" name="email" placeholder="Email" required className={inputClassName} />
                                </div>
                                <textarea id="message" name="message" rows="4" cols="50" placeholder="Napíšte mi správu" required className={textareaClassName}></textarea><br />
                                <input className={buttonClassName} type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
