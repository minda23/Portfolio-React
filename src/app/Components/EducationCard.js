import React from "react"



const EducationCard = (props) => {
    const { h5, course, text,
    } = props;
    return (
        <div>
            <h5>{h5}</h5>
            <h6>{course}</h6>
            <p style={{ marginBottom: "1rem" }}>{text}</p>

        </div >
    )
}

export default EducationCard