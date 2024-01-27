import styles from '@/app/components/Todos/TodoList.module.css'
import Todo from '@/app/components/Todos/Todo'
import { ITodo } from '@/interfaces/interfaces'

type Props = {
    todos: ITodo[],
    deleteTodo: (id: string) => void,
    checkTodo: (id: string) => void,
}

function TodoList({ todos, deleteTodo, checkTodo }: Props): JSX.Element {

    return (

        <ul className={styles.todos}>
            {todos.length
                ?
                todos.map((todo) => (
                    <Todo
                        todo={todo}
                        key={todo.id}
                        deleteTodo={deleteTodo}
                        checkTodo={checkTodo}
                    />
                ))
                :
                <li className={styles.noTodo}>Нет задач</li>
            }
        </ul>
    )
}

export default TodoList
