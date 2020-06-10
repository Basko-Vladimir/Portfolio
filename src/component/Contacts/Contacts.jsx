import React from "react";
import styles from "./Contacts.module.css";
import HeaderBlock from "../common/HeaderBlock/HeaderBlock";
import InfoItem from "./InfoItem/InfoItem";
import Button from "../common/Button/Button";
import {Bounce} from "react-reveal";

const Contacts = () => {
    const infoItems = [
        {header: 'Location', content: 'Minsk, Belarus'},
        {header: 'Email', content: '1989bvg@gmail.com'},
        {header: 'Phone', content: '+375 44 565 97 51'},
    ];

    return (
        <div className={styles.contacts} id={'contacts'}>
            <div className={styles.container}>
                <Bounce left duration={2000}>
                    <div className={styles.contactsBlock}>
                        <div className={styles.headerBlockWrap}>
                            <HeaderBlock headerName={'My contacts'}/>
                        </div>
                        <div className={styles.infoItemsWrap}>
                            { infoItems.map ( (item, i) => <InfoItem key={i} header={item.header} content={item.content} />)}
                        </div>
                    </div>
                </Bounce>
                <Bounce right duration={2000}>
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
                </Bounce>
            </div>
        </div>
    )
};

export default Contacts;