import React, { useState } from 'react';
import { View } from 'react-native';
import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ])
  }

  const editTodo = (id, title) => {
    const newTodo = todos.map(
      todo=>{
        if(todo.id == id){
          todo.title = title
        }
        return todo
      }
    )
    setTodos(newTodo)
    setTodoId(null)


  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
    setTodoId(null)

  }

  const selectTodo = id => {
    setTodoId(id)
  }

  let content = (<MainScreen addTodo={addTodo} todos={todos} onRemove={removeTodo} selectTodo={selectTodo}></MainScreen>)

  if (todoId !== null) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = (<TodoScreen removeTodo={removeTodo} edit={editTodo} goBack={()=> setTodoId(null)} selectedTodo={selectedTodo} />)
  }
  return (
    <View>
      <Navbar title="Make your day better"></Navbar>
      <View>{content}</View>
    </View>
  );
}

