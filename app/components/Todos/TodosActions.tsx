import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '@/app/components/UI/Button'
import styles from '@/app/components/Todos/TodosActions.module.css'
import { useTodoList } from '@/stores/stores'

function TodosActions(): JSX.Element {

    const deleteAllTodo = useTodoList(state => state.deleteAllTodo)
    const deleteCompletedTodo = useTodoList(state => state.deleteCompletedTodo)
    const lengthCompletedTodo: number = useTodoList(state => state.todoList.filter(todo => todo.completed).length)

    return (

        <div className={styles.buttons}>
            <Button
                onClick={deleteAllTodo}
                title='Удалить все задачи'>
                <RiDeleteBin2Line />
            </Button>
            <Button
                disabled={lengthCompletedTodo === 0}
                title='Удалить завершённые задачи'
                onClick={deleteCompletedTodo}
            >
                <RiRefreshLine />
            </Button>
        </div>
    )
}

export default TodosActions
