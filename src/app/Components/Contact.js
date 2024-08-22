import React from 'react';
import ContactCard from './ContactCard';
import "./Contact.css"

const Education = () => {


    return (
        <div>
            <ContactCard
                heading="Ozvite sa"
                name="Lukáš Minda"
                location="Humenné, Slovensko"
                email="luki.minda@gmail.com"
                formTitle="Napíšte mi"
                headingClassName="custom-heading-class"
                contactItemClassName="custom-contact-item-class"
                formContainerClassName="custom-form-container-class"
                inputClassName="custom-input-class"
                textareaClassName="custom-textarea-class"
                buttonClassName="custom-button-class"
            />
        </div>
    );
};

export default Education;
