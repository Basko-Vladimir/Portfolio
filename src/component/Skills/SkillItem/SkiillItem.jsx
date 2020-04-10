import React from "react";
import styles from "../Skills.module.css";

const SkillItem = (props) => {
    return (
        <div className={styles.skillItem}>
            <img src={props.icon} alt="icon"/>
            <span>{props.name}</span>
        </div>
    )
};

export default SkillItem