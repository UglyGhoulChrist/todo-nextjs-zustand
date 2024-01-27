import styles from '@/app/components/UI/Button.module.css'

type Props = {
    text?: string,
    onClick?: () => void,
    children?: JSX.Element,
    title?: string,
    disabled?: boolean,
}

function Button({ text, onClick, children, title, disabled = false }: Props): JSX.Element {

    return (

        <button
            title={title}
            className={styles.button}
            type='submit'
            onClick={onClick}
            disabled={disabled}
        >
            {children}{text}
        </button>
    )
}

export default Button
