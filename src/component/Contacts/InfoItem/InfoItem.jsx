import React from "react";
import styles from "./InfoItem.module.css";

const InfoItem = (props) => {
    return (
        <div className={styles.infoItem}>
            <h3>{props.header}</h3>
            <p>{props.content}</p>
        </div>

    )
};

export default InfoItem;