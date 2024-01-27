import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from '@/app/components/Todos/Todo.module.css'
import { clsx } from 'clsx'
import { ITodo } from '@/interfaces/interfaces'
import { useTodoList } from '@/stores/stores'

type Props = {
    todo: ITodo,
}

function Todo({ todo }: Props): JSX.Element {

    const deleteTodo = useTodoList(state => state.deleteTodo)
    const checkTodo = useTodoList(state => state.checkTodo)

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
