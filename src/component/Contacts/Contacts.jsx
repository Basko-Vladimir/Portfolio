import React from "react";
import styles from "./Contacts.module.css";

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <div className={styles.contactsHeader}>
                    <span>Контакты</span>
                </div>
                <form  className={styles.form}>
                    <input type='text' className={styles.inputs} />
                    <input type='text' className={styles.inputs} />
                    <textarea className={styles.textArea} defaultValue='какой-то текст...'></textarea>
                </form>
                <input type='submit' value='Отправить' className={styles.submitBtn}/>
            </div>
        </div>
    )
};

export default Contacts;