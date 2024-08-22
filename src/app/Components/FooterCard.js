import React from "react";

const FooterCard = (props) => {
    const { text, arrow } = props;
    return (
        <div>
            <div id="who_create">
                <p>© Copyright by {text}</p>
            </div>
            <div id="navrch">
                <i className={arrow}></i>
            </div>
        </div>
    );
};

export default FooterCard;
