import React from "react";

const FooterCard = (props) => {
    const { text, arrow } = props;
    return (
        <div>
            {text}
            {arrow}
        </div>

    );
};

export default FooterCard;
