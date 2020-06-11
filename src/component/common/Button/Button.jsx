import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
    return (
        <button type={'submit'} className={styles.projectShowBtn}>
            <span>{props.btnName}</span>
        </button>
    )
};

export default Button;