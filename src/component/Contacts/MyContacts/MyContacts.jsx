import React from 'react';
import styles from './MyContacts.module.scss';
import HeaderBlock from '../../common/HeaderBlock/HeaderBlock';
import InfoItem from './InfoItem/InfoItem';
import {Bounce} from 'react-reveal';

const MyContacts = () => {
    const infoItems = [
        {header: 'Location', content: 'Minsk, Belarus'},
        {header: 'Email', content: '1989bvg@gmail.com'},
        {header: 'Phone', content: '+375 44 565 97 51'},
    ];
    return (
        <Bounce left duration={2000}>
            <div className={styles.contactsBlock}>
                <div className={styles.headerBlockWrap}>
                    <HeaderBlock headerName={'My contacts'}/>
                </div>
                <div className={styles.infoItemsWrap}>
                    {infoItems.map((item, i) => <InfoItem key={i}
                                                          header={item.header}
                                                          content={item.content}/>)}
                </div>
            </div>
        </Bounce>
    )
};

export default MyContacts;