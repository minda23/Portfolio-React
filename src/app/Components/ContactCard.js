import React from "react";



const ContactCard = (props) => {
    const { headings, text, icon, form_input,
    } = props;
    return (
        <div>

            <h6>{headings}</h6>
            <p>{text}</p>
            <i>{icon}</i>




        </div >
    )
}


export default ContactCard;
