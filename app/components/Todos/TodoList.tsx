import styles from '@/app/components/Todos/TodoList.module.css'
import Todo from '@/app/components/Todos/Todo'
import { ITodo } from '@/interfaces/interfaces'
import { useTodoList } from '@/stores/stores'


function TodoList(): JSX.Element {

    const todos: ITodo[] = useTodoList((state) => state.todoList)

    return (

        <ul className={styles.todos}>
            {todos.length
                ?
                todos.map((todo) => (
                    <Todo
                        todo={todo}
                        key={todo.id}
                    />
                ))
                :
                <li className={styles.noTodo}>Нет задач</li>
            }
        </ul>
    )
}

export default TodoList
