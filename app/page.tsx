'use client'
import styles from '@/app/page.module.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import TodoForm from '@/app/components/Todos/TodoForm'
import TodoList from '@/app/components/Todos/TodoList'
import TodosActions from '@/app/components/Todos/TodosActions'
import { endingWord } from '@/app/utils/utils'
import { ITodo } from '@/interfaces/interfaces'

const todoList: ITodo[] = [
    { id: uuidv4(), text: 'Learn JS', completed: false },
    { id: uuidv4(), text: 'Learn TS', completed: true },
]

function Home(): JSX.Element {

    const [todos, setTodos] = useState<ITodo[]>(todoList)

    function addTodoHandler(text: string): void {
        const newTodo: ITodo = {
            id: uuidv4(),
            text,
            completed: false,
        }
        setTodos([...todos, newTodo])
    }

    function deleteTodoHandler(id: string): void {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    function toggleTodoHandler(id: string): void {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : { ...todo }
            )
        )
    }

    function resetTodosHandler(): void {
        setTodos([])
    }

    function clearCompletedTodosHandler(): void {
        setTodos(todos.filter((todo) => !todo.completed))
    }

    const completedTodo: ITodo[] = todos.filter((todo) => todo.completed)
    const completedTodoCount: number = completedTodo.length

    return (

        <main className={styles.main}>
            <h1 className={styles.h1}>Список задач</h1>
            <TodoForm addTodo={addTodoHandler} />
            {!!todos.length && (
                <TodosActions
                    onClickReset={resetTodosHandler}
                    onClickClearCompleted={clearCompletedTodosHandler}
                    completedTodoCount={completedTodoCount}
                />
            )}
            <TodoList
                todos={todos}
                deleteTodo={deleteTodoHandler}
                checkTodo={toggleTodoHandler}
            />
            {!!completedTodoCount && (
                <h2 className={styles.h2}>
                    Завершённых {completedTodoCount} задач{endingWord(completedTodoCount)}
                </h2>
            )}
        </main>
    )
}

export default Home
