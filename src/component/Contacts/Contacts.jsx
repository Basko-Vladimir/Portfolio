import React from "react";
import styles from "./Contacts.module.css";
import MyContacts from './MyContacts/MyContacts';
import FormBlock from './FormBlock/FormBlock';

const Contacts = () => {
    return (
        <div className={styles.contacts} id={'contacts'}>
            <div className={styles.container}>
                <MyContacts/>
                <FormBlock/>
            </div>
        </div>
    )
};

export default Contacts;