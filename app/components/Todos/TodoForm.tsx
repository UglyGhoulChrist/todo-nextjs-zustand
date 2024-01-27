import { useState } from 'react'
import styles from '@/app/components/Todos/TodoForm.module.css'
import Button from '@/app/components/UI/Button'

type Props = {
    addTodo: (text: string) => void,
}

function TodoForm({ addTodo }: Props): JSX.Element {

    const [text, setText] = useState<string>('')

    function onSubmitHandler(event: { preventDefault: () => void }): void {
        event.preventDefault()
        text && addTodo(text)
        setText('')
    }

    return (

        <form className={styles.form} onSubmit={onSubmitHandler}>
            <input
                className={styles.input}
                placeholder='Введите новую задачу'
                value={text}
                onChange={(e) => {
                    setText(e.target.value)
                }}
            />
            <Button disabled={!text} text='Записать' />
        </form>
    )
}

export default TodoForm
