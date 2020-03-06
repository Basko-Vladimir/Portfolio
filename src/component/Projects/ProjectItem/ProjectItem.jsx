import React from "react";
import styles from "./ProjectItem.module.css";

const ProjectItem = () => {
    return (
        <div className={styles.projectsItem}>
            <div className={styles.photoProject}>
                <div className={styles.projectShowBtn}>
                    <span>Смотреть</span>
                </div>
            </div>
            <div className={styles.projectDescription}>
                <div className={styles.descriptionBlock}>
                    <div className={styles.projectName}>Название проекта</div>
                    <div className={styles.aboutProject}>Краткое описание</div>
                </div>
            </div>
        </div>
    )
};

export default ProjectItem;