import React from "react";
import styles from "./Projects.module.css";
import ProjectItem from "./ProjectItem/ProjectItem";

const Projects = () => {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <div className={styles.projectsHeader}>
                    <span>Мои проекты</span>
                </div>
                <div className={styles.projectsBlock}>
                    <ProjectItem />
                    <ProjectItem />
                </div>
            </div>
        </div>
    )
};

export default Projects;