import React from "react";
import styles from "./Skills.module.css";
import SkillItem from "./SkillItem/SkiillItem";
import HeaderBlock from "../HeaderBlock/HeaderBlock";
import html from "../../images/htmlIcon.png";
import css from "../../images/cssIcon.png";
import js from "../../images/jsIcon.png";
import ts from "../../images/tsIcon.png";
import react from "../../images/reactIcon.png";
import redux from "../../images/reduxIcon.png";

const Skills = () => {
    return (
        <div className={styles.skills}>
            <div className={styles.wrapSkills}>
                <div className={styles.container}>
                    <HeaderBlock headerName={'Мои скиллы'}/>
                    <div className={styles.skillsBlock}>
                        <SkillItem icon={html} name={'HTML'}/>
                        <SkillItem icon={css} name={'CSS'}/>
                        <SkillItem icon={js} name={'JavaScript'}/>
                        <SkillItem icon={ts} name={'TypeScript'}/>
                        <SkillItem icon={react} name={'React'}/>
                        <SkillItem icon={redux} name={'Redux'}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Skills;