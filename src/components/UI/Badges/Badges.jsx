import { InputSearchIcon, PlusIcon, ResetIcon } from '../../Icons/Icons';

import styles from './Badges.module.scss';

function Badges({ label, children }) {
    return (
        <label className={styles.badges}>
            {label}
            <div className={styles.badges__container}>
                <ul className={styles.badges__list}>
                    {children}
                    <button className={styles.badges__resetButton} type="button">
                        <ResetIcon />
                    </button>
                </ul>
                <button className={styles.badges__button} type="button">
                    <PlusIcon />
                </button>
                <button className={styles.badges__button} type="button">
                    <InputSearchIcon />
                </button>
            </div>
        </label>
    );
}

export default Badges;
