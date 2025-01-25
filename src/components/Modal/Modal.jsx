import { useEffect, useRef } from 'react';
import styles from './Modal.module.scss';

function Modal({ children, isModalOpened, setIsModalOpened }) {
    const contentRef = useRef(null);
    console.log(isModalOpened);

    useEffect(() => {
        const clickOutside = (event) => {
            if (contentRef.current && !contentRef.current.contains(event.target)) {
                setIsModalOpened(false);
            }
        };

        contentRef.current.scroll(0, 0)

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsModalOpened(false);
            }
        };

        if (isModalOpened) {
            document.addEventListener('mouseup', clickOutside);
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('mouseup', clickOutside);
            document.removeEventListener('keydown', handleKeyDown);

        };
    }, [isModalOpened, setIsModalOpened]);

    return (
        <div className={`${styles.modal} ${isModalOpened ? styles.opened : ''}`} >
            <div className={styles.modal__content} ref={contentRef}>
                {children}
            </div>
        </div>
    );
}

export default Modal;
