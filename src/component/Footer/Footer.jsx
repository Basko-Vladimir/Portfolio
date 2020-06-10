import React from "react";
import styles from "./Footer.module.css";
import HeaderBlock from "../common/HeaderBlock/HeaderBlock";
import Fade from 'react-reveal/Fade';
import {faVk, faLinkedinIn, faTelegram, faGithub} from '@fortawesome/fontawesome-free-brands';
import ContactIcon from "./ContactIcon/ContactIcon";

const Footer = () => {
    const icons = [faLinkedinIn, faTelegram, faGithub, faVk];
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <Fade duration={2000} >
                    <HeaderBlock headerName={'Basko Vladimir'}/>
                    <div className={styles.iconBlock}>
                        { icons.map( (icon, i) => <ContactIcon key={i} iconType={icon} /> ) }
                    </div>
                </Fade>
                <span className={styles.copyRights}>&copy; 2020 All copyrights reserved</span>
            </div>
        </div>
    )
};

export default Footer;