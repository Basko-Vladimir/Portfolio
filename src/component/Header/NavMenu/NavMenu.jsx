import React from "react";
import styles from "./NavMenu.module.css"

const NavMenu = (props) => {
    let classLink = props.isScrollPage ? `${styles.link} ${styles.linkBlack}`: styles.link;
    return (
        <div className={styles.navMenu}>
            <a href="#" className={classLink}>ГЛАВНАЯ</a>
            <a href="#" className={classLink}>СКИЛЛЫ</a>
            <a href="#" className={classLink}>ПРОЕКТЫ</a>
            <a href="#" className={classLink}>СОТРУДНИЧЕСТВО</a>
            <a href="#" className={classLink}>КОНТАКТЫ</a>
        </div>
    )
};

export default NavMenu;