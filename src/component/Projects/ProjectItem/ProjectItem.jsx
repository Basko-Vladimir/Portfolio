import React from "react";
import styles from "./ProjectItem.module.css";
import Button from "../../Button/Button";

const ProjectItem = (props) => {
    return (
        <div className={styles.projectsItem}>
            <div className={styles.wrapPhoto}>
                <img src={props.link} alt="Social Network" className={styles.photoProject}/>
                <Button btnName={'Смотреть'}/>
            </div>
            <div className={styles.projectDescription}>
                <div className={styles.descriptionBlock}>
                    <div className={styles.projectName}>{props.projectName}</div>
                    <div className={styles.aboutProject}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Consequatur dolor magni modi quibusdam vel! Dolore? </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectItem;