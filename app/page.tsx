'use client'

import styles from '@/app/page.module.css'
import TodoForm from '@/app/components/Todos/TodoForm'
import TodoList from '@/app/components/Todos/TodoList'
import TodosActions from '@/app/components/Todos/TodosActions'
import { endingWord } from '@/app/utils/utils'
import { useTodoList } from '@/stores/stores'


function Home(): JSX.Element {

    const lengthAllTodo: number = useTodoList(state => state.todoList.length)
    const lengthCompletedTodo: number = useTodoList(state => state.todoList.filter(todo => todo.completed).length)

    return (

        <main className={styles.main}>
            <h1 className={styles.h1}>Список задач</h1>
            <TodoForm />
            {!!lengthAllTodo &&
                <TodosActions />}
            <TodoList />
            {!!lengthCompletedTodo && (
                <h2 className={styles.h2}>
                    Завершённых {lengthCompletedTodo} задач{endingWord(lengthCompletedTodo)}
                </h2>
            )}
        </main>
    )
}

export default Home
