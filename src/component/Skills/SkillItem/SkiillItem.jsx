import React from 'react';
import styles from '../Skills.module.scss';
import Fade from 'react-reveal/Fade';

const SkillItem = (props) => {
    return (
        <Fade right cascade>
            <div className={styles.skillItem}>
                <img src={props.url} alt="icon"/>
                <span>{props.title}</span>
            </div>
        </Fade>
    )
};

export default SkillItem