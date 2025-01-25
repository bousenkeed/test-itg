import styles from './Button.module.scss';

function Button({
    children,
    variant = 'primary', // primary, secondary
    className = '',
    type = 'button',
    onClick,
}) {
    const classes = `${styles.button} ${styles[`button__${variant}`]} ${className}`;

    return (
        <button className={classes} type={type} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
