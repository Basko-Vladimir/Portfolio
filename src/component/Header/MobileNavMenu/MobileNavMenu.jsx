import React from "react";
import styles from "./MobileNavMenu.module.css";
import lightMenu from "../../../images/lightMenu.png";
import darkMenu from "../../../images/darkMenu.png";

const MobileNavMenu = (props) => {

    let mobileMenu = props.isScrollPage ? lightMenu : darkMenu;
    return (
        <div className={styles.mobileNavMenu}>
            <img src={mobileMenu} alt="NavMenu"/>
        </div>
    )
};

export default MobileNavMenu;
