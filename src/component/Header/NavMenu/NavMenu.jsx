import React from "react";
import styles from "./NavMenu.module.css"
const NavMenu = () => {
    return (
        <div className={styles.navMenu}>
            <a href="#" className={styles.link}>ГЛАВНАЯ</a>
            <a href="#" className={styles.link}>СКИЛЛЫ</a>
            <a href="#" className={styles.link}>ПРОЕКТЫ</a>
            <a href="#" className={styles.link}>СОТРУДНИЧЕСТВО</a>
            <a href="#" className={styles.link}>КОНТАКТЫ</a>
        </div>
    )
};

export default NavMenu;