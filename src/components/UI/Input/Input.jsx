import { DateIcon, InputSearchIcon, PlusIcon, RequiredIcon } from '../../Icons/Icons';

import styles from './Input.module.scss';

function Input({ label, plus = false, search = false, required = false, date = false }) {
    return (
        <label className={styles.input}>
            <div className={styles.input__label}>
                {required && <RequiredIcon />}
                {label}
            </div>
            <div className={styles.input__container}>
                <input className={styles.input__field} type="text" required={required} />
                {plus && (
                    <button className={styles.input__button} type="button">
                        <PlusIcon />
                    </button>
                )}
                {search && (
                    <button className={styles.input__button} type="button">
                        <InputSearchIcon />
                    </button>
                )}
                {date && (
                    <button className={styles.input__button} type="button">
                        <DateIcon />
                    </button>
                )}
            </div>
        </label>
    );
}

export default Input;
