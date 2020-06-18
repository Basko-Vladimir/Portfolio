import React from 'react';
import styles from './MobileNavMenu.module.scss';
import lightMenu from '../../../images/lightMenu.png';
import darkMenu from '../../../images/darkMenu.png';
import Menu from '../../common/Menu/Menu';

class MobileNavMenu extends React.Component {
    state = {
        isVisible: false
    };

    isToggleMenu = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    };

    render() {
        let mobileMenu = this.props.isScrollPage ? lightMenu : darkMenu;
        let classMobileMenu = this.props.isScrollPage
            ? `${styles.mobileMenu} ${styles.mobileMenuBlack}`
            : styles.mobileMenu;
        return (
            <div className={styles.mobileNavMenu}>
                <img src={mobileMenu} alt="NavMenu" onClick={this.isToggleMenu}/>
                {
                    this.state.isVisible && <div className={classMobileMenu}>
                        <Menu isScrollPage={this.props.isScrollPage}/>
                    </div>
                }
            </div>
        )
    }
}

export default MobileNavMenu;
