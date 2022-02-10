import React, { useState } from "react"
import { createTodo, getTodos } from "../lib/api/todos"
import { Todo } from "../interfaces/index"
import { log, timeLog } from "console"

interface TodoFormProps {
  todos: Todo[]
  setTodos: Function
}

export const TodoForm: React.FC<TodoFormProps> = ({ todos, setTodos }) => {
  const [title, setTitle] = useState<string>("")

  const handleCreateTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data: Todo = {
      title: title
    }

    try {
      const response = await createTodo(data)
      console.log('createTodo', data)

      if (response.status === 200) {
        setTodos([...todos, response.data.todo])
      } else {
        console.log(response.data.message)
      }
    } catch (error) {
      console.log(error)
    }

    setTitle("")
  }

  return (
    <form onSubmit={handleCreateTodo}>
      <input 
      type="text"
      value={title}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
      }}
       />
      <input type="submit" value="Add" disabled={!title} />
    </form>
  )
}