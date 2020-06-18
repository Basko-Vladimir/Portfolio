import React from 'react';
import styles from './PhotoBlock.module.scss';
import ContactIcon from '../../common/ContactIcon/ContactIcon';
import {Bounce} from 'react-reveal';
import {faGithub, faLinkedinIn, faTelegram, faVk} from '@fortawesome/fontawesome-free-brands';

const PhotoBlock = () => {
    const icons = [
        {icon: faLinkedinIn, link: 'https://www.linkedin.com/'},
        {icon: faTelegram, link: 'https://t-do.ru/@BaVlaG'},
        {icon: faGithub, link: 'https://github.com/Basko-Vladimir'},
        {icon: faVk, link: 'https://vk.com/id161148807'}
    ];

    return (
        <Bounce top delay={1500} duration={1000}>
            <div className={styles.photoBlock}>
                <div className={styles.rotate}>
                    <div className={styles.photo}> </div>
                    <div className={styles.backSide}>
                        <h2>Basko Vladimir</h2>
                        <p>Email: 1989bvg@gmail.com</p>
                        <p>Phone: +375 44 565 97 51</p>
                        <div className={styles.contactsIcon}>
                            {icons.map((icon, i) => <ContactIcon key={i} iconType={icon.icon} link={icon.link}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </Bounce>
    )
};

export default PhotoBlock;