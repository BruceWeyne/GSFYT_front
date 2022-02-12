import React, { useState, useEffect } from "react"
import { TodoList } from "./components/TodoList"
import { TodoForm } from "./components/TodoForm"
import { VideoForm } from "./components/VideoForm"

import { getTodos } from "./lib/api/todos"
import { Todo, Url } from "./interfaces/index"

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [urls, setUrls] = useState<Url[]>([])

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
    // handleGetTodos()
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
      <h1>YouTube Video Subtitle Downloader</h1>
      <p>Send YouTube Video URL to get its subtitle.</p>
      <VideoForm />
      {/* <TodoForm todos={todos} setTodos={setTodos} /> */}
      {/* <TodoList todos={todos} setTodos={setTodos} /> */}
    </>
  )
}

export default App