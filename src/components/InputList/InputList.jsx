import Input from '../UI/Input/Input';
import Badges from '../UI/Badges/Badges';
import { DeleteIcon } from '../Icons/Icons';

import styles from './InputList.module.scss';

function InputList({ modalStyles = false }) {

    const badgesArr = [
        'Андрей Пивоваров',
        'Максим Галактионов',
        'Алла Лин',
        'Константин Константинопольский Константинович',
        'Игорь Иванченко',
        'Юлия Эйчаровна',
        'Артём Подпрыгайко-Саппортов',
        'Илья Вазнец',
        'Михаил Вортенов',
        'Наталья Нашевна',
        'Евгения Итамовна',
        'Алиса Киральчук',
    ];
    return (
        <div className={styles.inputList}>
            <div className={`${styles.inputList__top} ${modalStyles ? styles.modal : ''}`}>
                <Input label="Тема" required={true} />
                <Input label="Статус" />
                <Input label="Описание" />
                <Input label="Продукт" search={true} />
                <Input label="Рабочие заметки" required={true} />
                <Input label="Приоритет" />
                <Badges label="Ответственный">
                    <span className={styles.badge}>Константин Константинопольский</span>
                </Badges>
                <Badges label="Группа">
                    <span className={styles.badge}>Support Group</span>
                </Badges>
            </div>
            <div className={`${styles.inputList__middle} ${modalStyles ? styles.modal : ''}`}>
                <Input label="Комментарии" />
                <Badges label="Согласующие">
                    {badgesArr.map((badge) => {
                        return (
                            <span
                                key={badge}
                                className={`${styles.badge} ${styles.badge_padding}`}
                            >
                                {badge}
                                <button type='button'>
                                    <DeleteIcon />
                                </button>
                            </span>
                        );
                    })}
                </Badges>
            </div>
            <div className={`${styles.inputList__bottom} ${modalStyles ? styles.modal : ''}`}>
                <Input label="Когда открыто" date={true} />
                <Input label="Когда создано" date={true} />
                <Badges label="Ответственный">
                    <span className={styles.badge}>Андрей Пивоваров</span>
                </Badges>
                <Badges label="Ответственный">
                    <span className={styles.badge}>Андрей Пивоваров</span>
                </Badges>
            </div>
        </div>
    );
}

export default InputList;
