import React from "react";
import styles from "./Projects.module.css";
import HeaderBlock from "../common/HeaderBlock/HeaderBlock";
import SliderBox from "../common/SliderBox/SliderBox";

const Projects = () => {

    return (
        <div className={styles.projects} id={'projects'}>
            <div className={styles.container}>
                <HeaderBlock headerName={'My projects'}/>
                <div className={styles.projectsBlock}>
                    <SliderBox />
                </div>
            </div>
        </div>
    )
};

export default Projects;