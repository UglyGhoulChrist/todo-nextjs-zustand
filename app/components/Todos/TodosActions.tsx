import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '@/app/components/UI/Button'
import styles from '@/app/components/Todos/TodosActions.module.css'

type Props = {
    onClickReset: () => void,
    onClickClearCompleted: () => void,
    completedTodoCount: number,
}

function TodosActions({ onClickReset, onClickClearCompleted, completedTodoCount }: Props): JSX.Element {

    return (

        <div className={styles.buttons}>
            <Button
                onClick={onClickReset}
                title='Удалить все задачи'>
                <RiDeleteBin2Line />
            </Button>
            <Button
                disabled={completedTodoCount === 0}
                title='Удалить завершённые задачи'
                onClick={onClickClearCompleted}
            >
                <RiRefreshLine />
            </Button>
        </div>
    )
}

export default TodosActions
