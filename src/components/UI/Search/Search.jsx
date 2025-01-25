import styles from './Search.module.scss';

function Search({ className = '', icon }) {
    return (
        <div className={`${styles.search} ${className}`}>
            <input className={styles.search__input} type="text" placeholder="Поиск" />
            <button className={styles.search__button}>
                {icon}
            </button>
        </div>
    );
}

export default Search;
