import React from 'react';
import styles from './NavMenu.module.scss'
import Menu from '../../common/Menu/Menu';

const NavMenu = (props) => {
    return (
        <div className={styles.navMenu}>
            <Menu isScrollPage={props.isScrollPage}/>
        </div>
    )
};

export default NavMenu;