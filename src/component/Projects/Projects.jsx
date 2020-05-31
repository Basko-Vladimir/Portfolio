import React from "react";
import styles from "./Projects.module.css";
import ProjectItem from "./ProjectItem/ProjectItem";
import HeaderBlock from "../HeaderBlock/HeaderBlock";
import socNet from "../../images/socialNetwork.png";
import counter from "../../images/Counter.png";
import portfolio from "../../images/portfolio.png";

const Projects = () => {
    return (
        <div className={styles.projects} id={'projects'}>
            <div className={styles.container}>
                <HeaderBlock headerName={'My projects'}/>
                <div className={styles.projectsBlock}>
                    <ProjectItem link={socNet} projectName={'Social Network'}/>
                    <ProjectItem link={counter} projectName={'Counter'}/>
                    <ProjectItem link={portfolio} projectName={'Portfolio'}/>
                </div>
            </div>
        </div>
    )
};

export default Projects;