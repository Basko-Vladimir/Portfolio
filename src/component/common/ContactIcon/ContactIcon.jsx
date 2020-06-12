import React from 'react';
import styles from './ContactIcon.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function ContactIcon(props) {
    return <a href={props.link} target="_blank" rel="noreferrer noopener" className={styles.contactIcon}>
        <FontAwesomeIcon icon={props.iconType} />
    </a>
}

export default ContactIcon;
