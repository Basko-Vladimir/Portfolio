import React from 'react';
import styles from './ResponseMessage.module.scss';

const ResponseMessage = (props) => {
    return <>
        {props.requestStatus === 200
            ? <div className={styles.success}>
                <p>Thank you for interest for me!</p>
                <p>I will contact with you as soon as I can</p>
            </div>
            : <div className={styles.error}>
                <p>Something went wrong, try it again!</p>
            </div>
        }
    </>

};

export default ResponseMessage;