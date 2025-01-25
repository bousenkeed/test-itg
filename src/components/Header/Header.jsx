import { useContext } from 'react';

import { SearchIcon, SettingsIcon, SidebarIcon } from '../Icons/Icons';
import Search from '../UI/Search/Search';
import { AppContext } from '../../App';

import styles from './Header.module.scss';

function Header() {
    const { setSidebarOpened } = useContext(AppContext);

    const toggleSideBarMenu = () => {
        setSidebarOpened((prev) => !prev);
    };
    
    return (
        <header className={styles.header}>
            <div className={styles.header__inner}>
                <a className={styles.header__logo} href="/">
                    <img src="images/logo.png" alt="Логотип" />
                </a>
                <button
                    className={styles.header__sidebarButton}
                    onClick={toggleSideBarMenu}
                >
                    <SidebarIcon />
                </button>
                <Search icon={<SearchIcon />} className={styles.header__searchButton} />
                <div className={styles.header__user}>
                    <img src="images/avatar.jpg" alt="Аватар" />
                    <span>Максим Галактионов</span>
                </div>
                <button className={styles.header__settings}>
                    <SettingsIcon />
                </button>
            </div>
        </header>
    );
}
export default Header;
