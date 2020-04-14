import React from "react";
import styles from "./MainInfo.module.css";
import flower from "../../images/flower.png";
import tablet from "../../images/tablet.png";
import pen from "../../images/pen.png";
import papers from "../../images/papers.png";
import red_marker from "../../images/red_marker.png";
import black_marker from "../../images/black_marker.png";
import paperclip from "../../images/paperclip.png";

const MainInfo = (props) => {
    let classMainInfo = props.isScrollPage ? `${styles.mainInfo} ${styles.mainInfoScroll}` : styles.mainInfo;
    let classFlower = props.isScrollPage ? `${styles.flower} ${styles.flowerScroll}` : styles.flower;
    return (
        <div className={classMainInfo} >
            <img src={flower} alt='flower' className={classFlower}/>
            <img src={tablet} alt='tablet' className={styles.tablet}/>
            <img src={pen} alt='pen' className={styles.pen}/>
            <img src={papers} alt='papers' className={styles.papers}/>
            <img src={red_marker} alt='red_marker' className={styles.red_marker}/>
            <img src={black_marker} alt='black_marker' className={styles.black_marker}/>
            <img src={paperclip} alt='paperclip' className={styles.paperclip_1}/>
            <img src={paperclip} alt='paperclip' className={styles.paperclip_2}/>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <div>Привет!</div>
                    <div>Я Басько Владимир</div>
                    <h1>Я front-end разработчик</h1>
                </div>
                <div className={styles.photo}> </div>
            </div>
        </div>
    )
};

export default MainInfo;