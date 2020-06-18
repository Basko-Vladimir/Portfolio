import React from 'react';
import styles from './ProjectItem.module.scss';
import ProjectPhoto from './ProjectPhoto/ProjectPhoto';
import ProjectDescription from './ProjectDescription/ProjectDecription';

const ProjectItem = (props) => {
    return (
        <div className={styles.projectsItem}>
            <ProjectPhoto url={props.url} projectName={props.projectName} link={props.link}/>
            <ProjectDescription title={props.title}/>
        </div>
    )
};

export default ProjectItem;