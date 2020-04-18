import React from "react";
import styles from "./Header.module.css";
import NavMenu from "./NavMenu/NavMenu";
import MobileNavMenu from "./MobileNavMenu/MobileNavMenu";

const Header = (props) => {
    let classHeader = props.isScrollPage ? `${styles.header} ${styles.headerBlack}` : styles.header;
    return (
        <div className={classHeader}>
            <div className={styles.container}>
                <MobileNavMenu {...props}/>
                <NavMenu {...props}/>
            </div>
        </div>
    )
};

export default Header;