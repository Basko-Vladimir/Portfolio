import React from "react";
import styles from "./Contacts.module.css";
import HeaderBlock from "../HeaderBlock/HeaderBlock";
import InfoItem from "./InfoItem/InfoItem";
import Button from "../Button/Button";

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <div className={styles.contactsBlock}>
                    <div className={styles.headerBlockWrap}>
                        <HeaderBlock headerName={'My contacts'}/>
                    </div>
                    <div className={styles.infoItemsWrap}>
                        <InfoItem header={'Location'} content={'Minsk, Belarus'}/>
                        <InfoItem header={'Email'} content={'1989bvg@gmail.com'}/>
                        <InfoItem header={'Phone'} content={'+375 44 565 97 51'}/>
                    </div>
                </div>
                <div className={styles.formBlock}>
                    <form className={styles.form}>
                        <input type='text' className={styles.inputs} placeholder={'E-mail'}/>
                        <input type='password' className={styles.inputs} placeholder={'Password'}/>
                        <textarea className={styles.textArea} placeholder={'Your message...'}/>
                        <div className={styles.btnWrap}>
                            <Button btnName={'Submit'}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Contacts;