import React from "react";
import styles from "./SkillItem.module.css"


const SkillItem = (props) => {
    return (
        <div className={styles.skillItem}>
            <img src={props.icon} alt="icon"/>
            <span>{props.name}</span>
            {/*<span className={styles.descriptionSkill}>*/}
            {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur*/}
            {/*    dolores </span>*/}
        </div>
    )
};

export default SkillItem