import React from 'react';
import styles from './ProjectDescription.module.scss';

const ProjectDescription = (props) => {
    return (
        <div className={styles.projectDescription}>
            <div className={styles.description}>
                <div className={styles.projectName}>{props.title}</div>
                <div className={styles.aboutProject}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequatur dolor magni modi quibusdam vel! Dolore?
                </div>
            </div>
        </div>
    )
};

export default ProjectDescription;