import React from "react";
import styles from "./NavMenu.module.css"
import {Link} from "react-scroll";

const NavMenu = (props) => {
    const classLink = props.isScrollPage ? `${styles.link} ${styles.linkBlack}`: styles.link;
    const sections = ['MAIN', 'PROJECTS', 'SKILLS', 'COOPERATION', 'CONTACTS'];


    return (
        <div className={styles.navMenu}>
            {
                sections.map( (s, i) => <Link className={classLink}
                                              key={i}
                                              activeClass={styles.active}
                                              to={s.toLowerCase()}
                                              spy={true}  //invalid select link at scrolling
                                              smooth={true}
                                              offset={-150}
                                              duration= {1000}>{s}</Link>)
            }
        </div>
    )
};

export default NavMenu;