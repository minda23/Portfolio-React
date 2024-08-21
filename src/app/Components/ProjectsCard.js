import React from "react"



const ProjectSCard = (props) => {
    const { imagePath, linkSite, linkSource, containerId = "project",
        projects = "projects",
        project = "project",
        project_con = "project1",
        overlayId = "overlay",
        textClass = "text_project",
        textClass1 = "text_project1",
        textClass2 = "text_project2" } = props;
    return (
        <div id="projects">

            <div id="part_project">
                <div className="project" id="project1">

                    <div class="image-container">
                        <div id="overlay"></div>
                        <img src={imagePath} alt=""></img>
                    </div>
                    <div className="text_project">
                        <div className="text_project1">
                            <div>
                                <a href={linkSite}>Source</a>
                            </div>
                            <div className="text_project2">
                                <a href={linkSource}>Code</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSCard