import React from "react"



const SkillsCard = (props) => {
    const { image } = props;
    return (


        <img src={image} style={{ maxWidth: 100 }} alt="HTML" />



    )
}

export default SkillsCard


