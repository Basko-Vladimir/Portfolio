import React from "react";
import styles from "./Header.module.css";
import NavMenu from "./NavMenu/NavMenu";

const Header = (props) => {
    let classHeader = props.isScrollPage ? `${styles.header} ${styles.headerBlack}` : styles.header;
    return (
        <div className={classHeader}>
            <div className={styles.container}>
               <NavMenu {...props}/>
            </div>
        </div>
    )
};

export default Header;