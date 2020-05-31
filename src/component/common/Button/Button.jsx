import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
    return (
        <div className={styles.projectShowBtn}>
            <span>{props.btnName}</span>
        </div>
    )
};

export default Button;