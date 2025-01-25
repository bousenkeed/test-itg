import { useContext } from 'react';

import { FavoriteIcon, SidebarIcon } from '../Icons/Icons';
import { AppContext } from '../../App';
import SideBarMenu from '../UI/SideBarMenu/SideBarMenu';

import styles from './Sidebar.module.scss';

function Sidebar() {
    const { sidebarOpened, setSidebarOpened } = useContext(AppContext);

    const toggleDisplaySidebar = () => {
        setSidebarOpened((prev) => !prev);
    };

    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebar__panel}>
                <button
                    className={styles.sidebar__panelButton}
                    onClick={toggleDisplaySidebar}
                >
                    <SidebarIcon />
                </button>
                <button
                    className={styles.sidebar__panelButton}
                    onClick={toggleDisplaySidebar}
                >
                    <FavoriteIcon />
                </button>
            </div>
            <SideBarMenu menuOpened={sidebarOpened} />
        </aside>
    );
}

export default Sidebar;
