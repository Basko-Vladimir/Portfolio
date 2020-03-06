import React from "react";
import styles from "./Skills.module.css";
import SkillItem from "./SkillItem/SkiillItem";

const Skills = () => {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <span className={styles.skillsHeader}>Скиллы</span>
                <div className={styles.skillsBlock}>
                    <SkillItem />
                    <SkillItem />
                    <SkillItem />
                </div>
            </div>
        </div>
    )
};

export default Skills;