import React from "react"
import { deleteTodo } from "../lib/api/todos"
import { Todo } from "../interfaces/index"
// import { Button } from 'react-bootstrap';

import "../stylesheets/custom.css";

interface TodoItemProps {
  todo: Todo
  setTodos: Function
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, setTodos }) => {
  const handleDeleteTodo = async (id: number) => {
    try {
      const response = await deleteTodo(id)
      console.log('deleteTodo', response)

      if (response?.status === 200) {
        setTodos((prev: Todo[]) => prev.filter((todo: Todo) => todo.id !== id))
      } else {
        console.log(response.data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <li>
      <span>{todo.title}</span>
      <span></span>
      <span>
        {/* <button onClick={() => handleDeleteTodo(todo.id || 0)}>Delete</button> */}
        {/* <Button variant="delete" onClick={() => handleDeleteTodo(todo.id || 0)}>Delete</Button> */}
      </span>
    </li>
  )
}