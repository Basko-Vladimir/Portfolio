import React from 'react';
import styles from './Slogan.module.scss';
import Button from '../common/Button/Button';
import {Link} from 'react-scroll';
import {Fade} from 'react-reveal';

const Slogan = () => {
    return (
        <div className={styles.slogan} id={'cooperation'}>
            <Fade bottom>
                <div className={styles.container}>
                    <Link to={'contacts'} smooth={true} offset={-120} duration={1000}>
                        <Button btnName={'Hire me'}/>
                    </Link>
                    <div className={styles.sloganText}>
                        <span className={styles.sloganText}>
                            Looking for a job as a front-end developer (React, Redux)
                        </span>
                    </div>
                </div>
            </Fade>
        </div>
    )
};

export default Slogan;