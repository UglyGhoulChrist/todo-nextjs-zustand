import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import { ITodo } from '@/interfaces/interfaces'
import { persist, createJSONStorage } from 'zustand/middleware'

type UseTodoList = {
    todoList: ITodo[],
    addTodo: (text: string) => void,
    deleteTodo: (id: string) => void,
    deleteAllTodo: () => void,
    checkTodo: (id: string) => void,
    deleteCompletedTodo: () => void,
}

const useTodoList = create<UseTodoList>()(persist((set, get) => ({
    todoList: [
        { id: uuidv4(), text: 'Learn JS', completed: false },
        { id: uuidv4(), text: 'Learn TS', completed: true },
    ],
    addTodo: (text) => set((state) => ({
        todoList: [...state.todoList, { id: uuidv4(), text, completed: false }]
    })),

    // Вариант использования GET

    // addTodo: (text) => {
    //     set({ todoList: [...get().todoList, { id: uuidv4(), text, completed: false }] })
    // },

    deleteTodo: (id) => set((state) => ({
        todoList: state.todoList.filter(todo => todo.id !== id)
    })),
    deleteAllTodo: () => set(() => ({
        todoList: []
    })),
    deleteCompletedTodo: () => set((state) => ({
        todoList: state.todoList.filter(todo => !todo.completed)
    })),
    checkTodo: (id: string) => set((state) => ({
        todoList: state.todoList.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    })),
})
    ,
    {
        name: 'todos-storage',
        storage: createJSONStorage(() => localStorage),
    },
))

export { useTodoList }