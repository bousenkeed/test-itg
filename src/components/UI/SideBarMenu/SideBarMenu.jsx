import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

import { FilterIcon, NoPinIcon } from '../../Icons/Icons';
import Search from '../Search/Search';

import styles from './SideBarMenu.module.scss';

function SideBarMenu({ menuOpened }) {
    const menuRef = useRef(null);

    const listTitles = [
        'Моя работа',
        'Структура портала',
        'Личное расписание',
        'Отсутствие на рабочем месте',
        'Портфель услуг',
        'Дашборды',
        'Доски задач',
        'Обращения',
        'События',
        'Инциденты',
        'Проблемы',
        'Настройка каталогов',
        'Запросы на обслуживание',
        'Запросы на изменение',
        'Управление конфигурациями',
        'Управление уровнем услуг',
        'Настройка соответствий',
    ];

    return (
        <CSSTransition
            in={menuOpened}
            timeout={300}
            classNames={{
                enter: styles.menu_enter,
                enterActive: styles.menu_enterActive,
                exit: styles.menu_exit,
                exitActive: styles.menu_exitActive,
            }}
            unmountOnExit
            nodeRef={menuRef}
        >
            <div className={styles.menu} ref={menuRef}>
                <div className={styles.menu__search}>
                    <Search icon={<FilterIcon />} />
                    <button className={styles.menu__noPinButton}>
                        <NoPinIcon />
                    </button>
                </div>
                <ul className={styles.menu__list}>
                    {listTitles.map((title) => (
                        <li key={title} className={styles.menu__listItem}>
                            <button className={styles.menu__listButton}>
                                <img src="images/icons/arrow.svg" alt="Стрелка" />
                                <h3>{title}</h3>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </CSSTransition>
    );
}

export default SideBarMenu;
