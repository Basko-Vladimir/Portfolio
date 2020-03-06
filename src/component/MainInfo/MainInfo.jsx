import React from "react";
import styles from "./MainInfo.module.css";

const MainInfo = () => {
    return (
        <div className={styles.mainInfo}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Привет!</span>
                    <span>Меня зовут Басько Владимир</span>
                    <span>Я front-end разработчик</span>
                </div>
                <div className={styles.photo}>
                    <img src="#" alt="photo"/>
                </div>
            </div>
        </div>
    )
};

export default MainInfo;