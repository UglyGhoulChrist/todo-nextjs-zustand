import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from '@/app/components/Todos/Todo.module.css'
import { clsx } from 'clsx'
import { ITodo } from '@/interfaces/interfaces'

type Props = {
    todo: ITodo,
    deleteTodo: (id: string) => void,
    checkTodo: (id: string) => void,
}

function Todo({ todo, deleteTodo, checkTodo }: Props): JSX.Element {

    return (

        <li className={clsx(styles.todo, todo.completed && styles.completed)}>
            <RiTodoFill className={styles.icon} />
            <div className={styles.text}>{todo.text}</div>
            <RiDeleteBin2Line
                title='Удалить задачу'
                className={styles.delete}
                onClick={() => deleteTodo(todo.id)}
            />
            <FaCheck
                title={todo.completed ? 'Возобновить задачу' : 'Завершить задачу'}
                className={styles.check}
                onClick={() => checkTodo(todo.id)}
            />
        </li>
    )
}

export default Todo
