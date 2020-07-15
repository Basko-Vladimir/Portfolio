import React from 'react';
import styles from './ProjectDescription.module.scss';

const ProjectDescription = (props) => {
    return (
        <div className={styles.projectDescription}>
            <div className={styles.description}>
                <div className={styles.projectName}>{props.title}</div>
                <div className={styles.aboutProject}>{props.description}</div>
            </div>
        </div>
    )
};

export default ProjectDescription;