import React from 'react';
import styles from './Preloader.module.scss';
import preloader from '../../../images/preloader.gif';

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <div> </div>
            <p className={styles.loading}>
                <img src={preloader} alt={'Loading'}/>
                <p>Loading...</p>
            </p>
        </div>
    )
};

export default Preloader;