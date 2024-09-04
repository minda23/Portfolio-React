import React from "react";

const FooterCard = (props) => {
    const { text, arrow } = props;
    return (
        <div>
            <p>{text}</p>
            <i>{arrow}</i>
        </div>

    );
};

export default FooterCard;
