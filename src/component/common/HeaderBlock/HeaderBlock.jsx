import React from "react";
import styles from "./HeaderBlock.module.css";

const HeaderBlock =  (props) => {
    return (
        <div  className={styles.headerBlock}>
            <span>{props.headerName}</span>
        </div>
    )
};

export default HeaderBlock;
