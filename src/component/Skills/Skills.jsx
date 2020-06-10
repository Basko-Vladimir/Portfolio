import React from "react";
import styles from "./Skills.module.css";
import SkillItem from "./SkillItem/SkiillItem";
import html from "../../images/htmlIcon.png";
import css from "../../images/cssIcon.png";
import js from "../../images/jsIcon.png";
import ts from "../../images/tsIcon.png";
import react from "../../images/reactIcon.png";
import redux from "../../images/reduxIcon.png";

const Skills = () => {
    const skills = [
        {title:'HTML', url: html},
        {title:'CSS', url: css},
        {title:'HTML', url: js},
        {title:'JavaScript', url: ts},
        {title:'TypeScript', url: react},
        {title:'React', url: redux}
    ];
    return (
        <div className={styles.skills} id={'skills'}>
            <div className={styles.container}>
                <div className={styles.skillsBlock}>
                    <div className={styles.wrapSkills}> </div>
                    { skills.map( (s, i) => <SkillItem key={i} url={s.url} title={s.title} />)}
                </div>
            </div>
        </div>
    )
};

export default Skills;