import React from "react";
import styles from "../Skills.module.css";
import Fade from "react-reveal/Fade";

const SkillItem = (props) => {
    return (
        <Fade right cascade>
        <div className={styles.skillItem}>
            <img src={props.icon} alt="icon"/>
            <span>{props.name}</span>
        </div>
        </Fade>
    )
};

export default SkillItem