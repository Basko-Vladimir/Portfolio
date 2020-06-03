import React from "react";
import styles from "./Slogan.module.css";
import Button from "../common/Button/Button";
import {Fade} from "react-reveal";

const Slogan = () => {
    return(
        <div className={styles.slogan} id={'cooperation'}>
            <Fade bottom>
                <div className={styles.container}>
                    <Button btnName={'Hire me'}/>
                    <div className={styles.sloganText}>
                        <span className={styles.sloganText}>Looking for a job as a front-end developer (React, Redux)</span>
                    </div>
                </div>
            </Fade>
        </div>
    )
};

export default Slogan;