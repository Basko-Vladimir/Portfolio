import React from 'react';
import styles from './MainInfo.module.scss';
import flower from '../../images/flower.png';
import tablet from '../../images/tablet.png';
import pen from '../../images/pen.png';
import papers from '../../images/papers.png';
import red_marker from '../../images/red_marker.png';
import black_marker from '../../images/black_marker.png';
import paperclip from '../../images/paperclip.png';
import Greeting from './Greeting/Greeting';
import PhotoBlock from './PhotoBlock/PhotoBlock';

const MainInfo = () => {
    const images = [
        {url: flower, class: styles.flower},
        {url: tablet, class: styles.tablet},
        {url: pen, class: styles.pen},
        {url: papers, class: styles.papers},
        {url: red_marker, class: styles.red_marker},
        {url: black_marker, class: styles.black_marker},
        {url: paperclip, class: styles.paperclip_1},
        {url: paperclip, class: styles.paperclip_2}
    ];

    return (
        <div className={styles.mainInfo} id={'main'}>
            {images.map((image, i) => <img key={i}
                                           src={image.url}
                                           alt={image.class}
                                           className={image.class}/>)}
            <div className={styles.container}>
                <Greeting/>
                <PhotoBlock/>
            </div>
        </div>
    )
};

export default MainInfo;