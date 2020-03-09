import React from "react";
import styles from "./Skills.module.css";
import SkillItem from "./SkillItem/SkiillItem";

const Skills = () => {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <div  className={styles.skillsHeader}>
                    <span>Мои скиллы</span>
                </div>
                <div className={styles.skillsBlock}>
                    <SkillItem/>
                    <SkillItem/>
                    <SkillItem/>
                </div>
            </div>
        </div>
    )
};

export default Skills;