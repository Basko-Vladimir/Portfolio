import React from "react";
import styles from "./Footer.module.css";
import gh from "../../images/github.png";
import gh_W from "../../images/github_W.png";
import telegram from "../../images/telegram.png";
import telegram_W from "../../images/telegram_W.png";
import linkedin from "../../images/in.png";
import linkedin_W from "../../images/in_W.png";
import vk from "../../images/vk.png";
import vk_W from "../../images/vk_W.png";
import Icon from "./Icon/Icon";
import HeaderBlock from "../HeaderBlock/HeaderBlock";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <HeaderBlock headerName={'Basko Vladimir'}/>
                <div className={styles.iconBlock}>
                    <Icon link={gh} linkHover={gh_W} alt={'Githun'}/>
                    <Icon link={telegram} linkHover={telegram_W} alt={'Telegram'}/>
                    <Icon link={linkedin} linkHover={linkedin_W} alt={'Linkedin'}/>
                    <Icon link={vk} linkHover={vk_W} alt={'VK'}/>
                </div>
                <span className={styles.copyRights}>&copy; 2020 All copyrights reserved</span>
            </div>
        </div>
    )
};

export default Footer;