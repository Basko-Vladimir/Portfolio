import React from "react";
import styles from "./Menu.module.css";
import {Link} from "react-scroll";

const Menu = (props) => {
    const sections = ['MAIN', 'PROJECTS', 'SKILLS', 'COOPERATION', 'CONTACTS'];
    const classLink = props.isScrollPage ? `${styles.link} ${styles.linkBlack}`: styles.link;
    return (
        <>
            {sections.map((s, i) => <Link className={classLink}
                                          key={i}
                                          activeClass={styles.active}
                                          to={s.toLowerCase()}
                                          spy={true}  //invalid select link at scrolling
                                          smooth={true}
                                          offset={-150}
                                          duration={1000}>{s}</Link>)
            }
        </>
    )
};

export default Menu;