import React from "react"



const EducationCard = (props) => {
    const { texth5, course, coursetext, coursetext1, coursetext2, school, schooltext, ContainerID = "Education_desription",
        heading = "heading_education",
        education = "education",
        two_sections = "two_sections",
        course_education = "course_education",
        academy = "academy",
        school_education = "school_education",
        school1 = "school",

    } = props;
    return (
        <div id="education_description">
            <div className="headings_education">
                <h5 className="education">{texth5}</h5>
            </div>
            <div className="two_sections">
                <div className="course_education" id="course">
                    <h6>{course}</h6>
                    <p className="academy">{coursetext}</p>
                    <p>{coursetext1}</p>
                    <p>{coursetext2}</p>
                </div>
                <div className="school_education" id="course1">
                    <h6>{school}</h6>
                    <p className="school">{schooltext}</p>



                </div>
            </div>
        </div >
    )
}

export default EducationCard