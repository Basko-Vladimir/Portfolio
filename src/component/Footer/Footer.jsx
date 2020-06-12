import React from "react";
import styles from "./Footer.module.css";
import HeaderBlock from "../common/HeaderBlock/HeaderBlock";
import Fade from 'react-reveal/Fade';
import {faVk, faLinkedinIn, faTelegram, faGithub} from '@fortawesome/fontawesome-free-brands';
import ContactIcon from "../common/ContactIcon/ContactIcon";

const Footer = () => {
    const icons = [
        {icon: faLinkedinIn, link: 'https://www.linkedin.com/'},
        {icon:faTelegram, link: 'https://t-do.ru/@BaVlaG'},
        {icon:faGithub, link: 'https://github.com/Basko-Vladimir'},
        {icon:faVk, link: 'https://vk.com/id161148807'}
        ];
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <Fade duration={2000} >
                    <HeaderBlock headerName={'Basko Vladimir'}/>
                    <div className={styles.iconBlock}>
                        { icons.map( (icon, i) => <ContactIcon key={i} iconType={icon.icon} link={icon.link} /> ) }
                    </div>
                </Fade>
                <span className={styles.copyRights}>&copy; 2020 All copyrights reserved</span>
            </div>
        </div>
    )
};

export default Footer;