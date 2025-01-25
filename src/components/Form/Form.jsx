import { useContext, useEffect, useState } from 'react';

import Button from '../UI/Button/Button';
import InputList from '../InputList/InputList';
import Modal from '../Modal/Modal';
import { DeleteIcon } from '../Icons/Icons';
import { AppContext } from '../../App';

import styles from './Form.module.scss';

function Form({ scrollContainerRef }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpened, setIsModalOpened] = useState(false);
    const { setSidebarOpened } = useContext(AppContext);

    const toggleModal = () => {
        setIsModalOpened((prev) => !prev);
        setSidebarOpened(false);
    };

    useEffect(() => {
        const updateScrollState = () => {
            if (scrollContainerRef.current) {
                setIsScrolled(scrollContainerRef.current.scrollTop > 0);
            }
        };

        const handleResize = () => {
            if (window.innerWidth < 991) {
                setIsScrolled(false);
            }
        };

        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', updateScrollState);
        }
        window.addEventListener('resize', handleResize);

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', updateScrollState);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, [scrollContainerRef]);

    return (
        <div className={styles.form}>
            <form>
                <div
                    className={`${styles.form__header} ${
                        isScrolled ? styles.form__header_scrolled : ''
                    }`}
                >
                    <div className={styles.form__topLeft}>
                        <h2>Подзадача</h2>
                        <Button variant="secondary" onClick={toggleModal}>
                            Создать
                        </Button>
                    </div>
                    <div className={styles.form__topRigth}>
                        <Button type="submit">Сохранить</Button>
                        <Button variant="secondary" type="submit">
                            Сохранить и выйти
                        </Button>
                    </div>
                </div>
                <h1 className={styles.form__title}>
                    STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто
                    некоторые поля остаются редактируемыми для агента если он Caller
                </h1>
                <InputList modalStyles={false} />
            </form>
            <Modal isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened}>
                <form className={styles.modal}>
                    <div className={styles.modal__top}>
                        <div className={styles.modal__subTask}>
                            <h3>Подзадача</h3>
                            <button
                                className={styles.modal__closeButton}
                                onClick={toggleModal}
                                type="button"
                            >
                                <DeleteIcon />
                            </button>
                        </div>
                        <div className={styles.modal__buttons}>
                            <Button type="submit">Сохранить</Button>
                            <Button variant="secondary" onClick={toggleModal}>
                                Отменить
                            </Button>
                        </div>
                    </div>
                    <h2>Новая запись</h2>
                    <InputList modalStyles={true} />
                </form>
            </Modal>
        </div>
    );
}

export default Form;
