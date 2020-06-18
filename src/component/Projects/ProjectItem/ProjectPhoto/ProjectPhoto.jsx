import React from 'react';
import styles from './ProjectPhoto.module.scss';
import Button from '../../../common/Button/Button';

const ProjectPhoto = (props) => {
    return (
        <div className={styles.projectPhoto}>
            <img src={props.url} alt={props.projectName} className={styles.photo}/>
            <div className={styles.btnWrap}>
                <a href={props.link} target="_blank" rel="noreferrer noopener">
                    <Button btnName={'See'}/>
                </a>
            </div>
        </div>
    )
};

export default ProjectPhoto;