import React from "react";
import styles from "./MainInfo.module.css";
import flower from "../../images/flower.png";
import tablet from "../../images/tablet.png";
import pen from "../../images/pen.png";
import papers from "../../images/papers.png";
import red_marker from "../../images/red_marker.png";
import black_marker from "../../images/black_marker.png";
import paperclip from "../../images/paperclip.png";
import {Roll, Bounce} from "react-reveal";
import {faVk, faLinkedinIn, faTelegram, faGithub} from '@fortawesome/fontawesome-free-brands';
import ContactIcon from "../Footer/ContactIcon/ContactIcon";

const MainInfo = (props) => {
    const classMainInfo = props.isScrollPage ? `${styles.mainInfo} ${styles.mainInfoScroll}` : styles.mainInfo;
    const classFlower = props.isScrollPage ? `${styles.flower} ${styles.flowerScroll}` : styles.flower;
    const icons = [faLinkedinIn, faTelegram, faGithub, faVk];
    const images = [
        {url: flower, class: classFlower},
        {url: tablet, class: styles.tablet},
        {url: pen, class: styles.pen},
        {url: papers, class: styles.papers},
        {url: red_marker, class: styles.red_marker},
        {url: black_marker, class: styles.black_marker},
        {url: paperclip, class: styles.paperclip_1},
        {url: paperclip, class: styles.paperclip_2}
        ];
    return (
        <div className={classMainInfo} id={'main'}>
            { images.map( (image, i) => <img key={i} src={image.url} alt={image.class} className={image.class}/>)}
            <div className={styles.container}>
                <Roll left cascade delay={500}>
                    <div className={styles.greeting}>
                        <div>Hi, There!</div>
                        <div>I am Basko Vladimir</div>
                        <h1>Я front-end developer</h1>
                    </div>
                </Roll>
                <Bounce top delay={1500} duration={1000} >
                    <div className={styles.photoBlock}>
                        <div className={styles.rotate}>
                            <div className={styles.photo}> </div>
                            <div className={styles.backSide}>
                                <h2>Basko Vladimir</h2>
                                <p>Email: 1989bvg@gmail.com</p>
                                <p>Phone: +375 44 565 97 51</p>
                                <div className={styles.contactsIcon}>
                                    { icons.map( (icon, i) => <ContactIcon key={i} iconType={icon} /> ) }
                                </div>
                            </div>
                        </div>
                    </div>
                </Bounce>
            </div>
        </div>
    )
};

export default MainInfo;