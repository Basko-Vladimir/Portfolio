import React from 'react';
import styles from './Greeting.module.scss';
import {Roll} from 'react-reveal';


const Greeting = () => {
    return (
        <Roll left cascade delay={500}>
            <div className={styles.greeting}>
                <div>Hi, There!</div>
                <div>I am Basko Vladimir</div>
                <h1>Я front-end developer</h1>
            </div>
        </Roll>
    )
};

export default Greeting;