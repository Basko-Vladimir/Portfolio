import React from 'react';
import styles from './ContactIcon.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function ContactIcon(props) {
    return <FontAwesomeIcon icon={props.iconType} className={styles.contactIcon}/>
}

export default ContactIcon;
