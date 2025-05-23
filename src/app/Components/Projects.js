import React from 'react'
import "./Project.css"
import ProjectsCard from "./ProjectsCard"



const Projects = (props) => {

    const { scrollRef } = props;

    return (
        <div id="projects" ref={scrollRef}>
            <div id='part_project'>

                <ProjectsCard imagePath="images/portfolio.png" linkSite="https://portfolio-react-orpin-three.vercel.app/" linkSource="https://github.com/minda23/Portfolio-React" />
                <ProjectsCard imagePath="images/shop_app.png" linkSite="https://shopping-list-sigma-rosy.vercel.app/" linkSource="https://github.com/minda23/shoppingList" />
                <ProjectsCard imagePath="images/todoapp.png" linkSite="https://todo-app-minda.netlify.app" linkSource="https://github.com/minda23/Moje-projekty/blob/main/task-manager.zip" />
                <ProjectsCard imagePath="images/notification.png" linkSite="https://notificationappminda.netlify.app" linkSource="https://github.com/minda23/Moje-projekty/blob/main/notifications-page-main-minda.zip" />
                <ProjectsCard imagePath="images/expens_app.png" linkSite="https://expenses-chart-component-lukas.netlify.app" linkSource="https://github.com/minda23/Moje-projekty/blob/main/expensens-page-component.zip" />
                <ProjectsCard imagePath="images/generator_app.png" linkSite="https://generator-advice-minda.netlify.app" linkSource="https://github.com/minda23/Moje-projekty/blob/main/advice-generator-app-main.zip" />
                <ProjectsCard imagePath="images/currency_converter.png" linkSite="https://currency-converter-minda1.netlify.app" linkSource="https://github.com/minda23/Moje-projekty/blob/main/currency_convertor.zip" />
                <ProjectsCard imagePath="images/morsecodetranslate.png" linkSite="https://morsecodet-translate.netlify.app" linkSource="https://github.com/minda23/Moje-projekty/blob/main/morsecode_translator.zip" />
                <ProjectsCard imagePath="images/pomodoro.png" linkSite="https://pomodoro-app-minda.netlify.app/" linkSource="https://github.com/minda23/pomodoroApp" />
                <ProjectsCard imagePath="images/passw_generator.png" linkSite="https://passowordgeneratorminda.netlify.app/" linkSource="https://github.com/minda23/Moje-projekty/blob/main/password-generator-app.zip" />
                <ProjectsCard imagePath="images/interactive_website.png" linkSite="https://interactive-minda-app.netlify.app" linkSource="https://github.com/minda23/Moje-projekty/blob/main/minda_interactive.zip" />
                <ProjectsCard imagePath="images/quiz-app.png" linkSite="https://frontendquiz23minda.netlify.app/" linkSource="https://github.com/minda23/Frontend-quiz" />
                <ProjectsCard imagePath="images/blog-preview.png" linkSite="https://blog-preview-minda.netlify.app" linkSource="https://github.com/minda23/Moje-projekty/blob/main/blog-preview-card-main-minda-lukas.zip" />
                <ProjectsCard imagePath="images/spotify.png" linkSite="https://spotify-clone-tau-orpin.vercel.app/" linkSource="https://github.com/minda23/spotify-clone" />
                <ProjectsCard imagePath="images/identify-card.png" linkSite="https://identify-card-minda.netlify.app/" linkSource="https://github.com/minda23/Moje-projekty/blob/main/identify-card.zip" />
                <ProjectsCard imagePath="images/blogimage.png" linkSite="https://blog-app-lake-xi.vercel.app//" linkSource="https://github.com/minda23/blog-app" />
            </div>
        </div>

    )



}

export default Projects