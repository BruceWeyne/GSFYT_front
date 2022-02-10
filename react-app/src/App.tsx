import React, { useState, useEffect } from "react"
import { TodoList } from "./components/TodoList"
import { TodoForm } from "./components/TodoForm"

import { getTodos } from "./lib/api/todos"
import { Todo } from "./interfaces/index"

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleGetTodos = async () => {
    try {
      const response = await getTodos()
      console.log('getTodos', response)

      if (response?.status === 200) {
        setTodos(response.data.todos)
      } else {
        console.log(response.data.message)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleGetTodos()
  }, [])

  // useEffect(() => {
  //   let abortCtrl = new AbortController()
  //   handleGetTodos()
  //   return () => {
  //     abortCtrl.abort()
  //   }
  // }, [])

  return (
    <>
      <h1>Todo App</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  )
}

export default App