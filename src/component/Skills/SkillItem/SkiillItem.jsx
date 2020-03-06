import React from "react";
import styles from "./SkillItem.module.css"

const SkillItem = () => {
    return (
        <div className={styles.skillItem}>
            <img src='#' alt="iconSkill"/>
            <span>React</span>
            <span className={styles.descriptionSkill}>Подробное описание навыка</span>
        </div>
    )
};

export default SkillItem