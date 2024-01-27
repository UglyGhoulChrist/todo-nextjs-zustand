import styles from '@/app/components/UI/Button.module.css'

type Props = {
    text?: string,
    onClick?: () => void,
    children?: JSX.Element,
    title?: string,
    disabled?: boolean,
}

function Button({ onClick, children, title, disabled = false }: Props): JSX.Element {

    return (

        <button
            title={title}
            className={styles.button}
            type='submit'
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button
