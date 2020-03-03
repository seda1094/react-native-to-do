import React, { useState, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Navbar } from './components/Navbar'
import {MainScreen} from './screens/MainScreen'
import {TodoScreen} from './screens/TodoScreen'
import { TodoContext } from './context/todo/todoContext'

export const MainLayout = () => {
    const {todos, addTodo, removeTodo, updateTodo} = useContext(TodoContext)
    const [todoId, setTodoId] = useState(null)
    // const [todos, setTodos] = useState([])


    // const addTodo = (title) => {
    //     setTodos(prev => [
    //         ...prev,
    //         {
    //             id: Date.now().toString(),
    //             title
    //         }
    //     ])
    // }

    // const editTodo = (id, title) => {
    //     const newTodo = todos.map(
    //         todo => {
    //             if (todo.id == id) {
    //                 todo.title = title
    //             }
    //             return todo
    //         }
    //     )
    //     setTodos(newTodo)
    //     setTodoId(null)


    // }

    // const removeTodo = id => {
    //     setTodos(prev => prev.filter(todo => todo.id !== id))
    //     setTodoId(null)

    // }

    const selectTodo = id => {
        setTodoId(id)
    }

    let content = (<MainScreen addTodo={addTodo} todos={todos} onRemove={removeTodo} selectTodo={selectTodo}></MainScreen>)

    if (todoId !== null) {
        const selectedTodo = todos.find(todo => todo.id === todoId)
        content = (<TodoScreen removeTodo={removeTodo} edit={updateTodo} goBack={() => setTodoId(null)} selectedTodo={selectedTodo} />)
    }


    return (
        <View>
            <Navbar title="Make your day better"></Navbar>
            <View>{content}</View>
        </View>
    )
}