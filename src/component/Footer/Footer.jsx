import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <span>Басько Владимир</span>
                <div className={styles.iconBlock}>
                    <img src="#" alt='icon'/>
                    <img src="#" alt='icon'/>
                    <img src="#" alt='icon'/>
                    <img src="#" alt='icon'/>
                </div>
                <span>&copy; 2020 Все права защищены</span>
            </div>
        </div>
    )
};

export default Footer;