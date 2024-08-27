import React from "react"



const ProjectSCard = (props) => {
    const { imagePath, linkSite, linkSource
    } = props;
    return (

        <div className="project" id="project1">

            <div className="image-container">
                <div id="overlay"></div>
                <img src={imagePath} alt=""></img>
            </div>
            <div className="text_project">
                <div className="text_project1">
                    <a href={linkSite}>Source</a>
                </div>
                <div className="text_project2">
                    <a href={linkSource}>Code</a>
                </div>

            </div>
        </div>

    )
}

export default ProjectSCard