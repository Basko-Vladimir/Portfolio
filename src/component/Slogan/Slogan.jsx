import React from "react";
import styles from "./Slogan.module.css";
import Button from "../Button/Button";

const Slogan = () => {
    return(
        <div className={styles.slogan} id={'cooperation'}>
            <div className={styles.container}>
                <Button btnName={'Hire me'}/>
                <div className={styles.sloganText}>
                    <span className={styles.sloganText}>Looking for a job front-end developer (React, Redux)</span>
                </div>
            </div>
        </div>
    )
};

export default Slogan;