import React from "react";
import styles from "./Slogan.module.css";

const Slogan = () => {
    return(
        <div className={styles.slogan}>
            <div className={styles.container}>
                <span className={styles.sloganText}>Рассматриваю варианты удаленной работы</span>
                <div className={styles.hireMeBtn}>
                    <span>Нанять меня</span>
                </div>
            </div>
        </div>
    )
};

export default Slogan;