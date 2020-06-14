import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
    const buttonClass = props.isDisabled ? `${styles.projectShowBtn} ${styles.disabledButton}`: styles.projectShowBtn;
    return (
        <button type={'submit'}
                className={buttonClass}
                onClick={props.onClickFunction}
                disabled={props.isDisabled}>
            <span>{props.btnName}</span>
        </button>
    )
};

export default Button;