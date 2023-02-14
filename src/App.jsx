import React, { useState, useEffect } from 'react'
import styles from './App.module.scss'

import { Field, List, Hide } from './Components'

const App = () => {
   const [todos, setTodos] = useState(JSON.parse(sessionStorage.getItem('todos')))
   const [hidden, setHidden] = useState(false)
   const [completed, setCompleted] = useState([])

   if (JSON.parse(sessionStorage.getItem('todos')) === null) {
      sessionStorage.setItem('todos', JSON.stringify([]))
   }
   
   useEffect(() => {
      sessionStorage.setItem('todos', JSON.stringify(todos))
      setCompleted(todos.filter(todo => !todo.done))
   }, [todos])

   return (
      <div className={styles.container}>
         <div className={styles.wrapper}>
            <Hide hidden={hidden} setHidden={setHidden} />
            <Field setTodos={setTodos} todos={todos} />
            <List hidden={hidden} setTodos={setTodos} todos={todos} completed={completed} />
         </div>
      </div>
   )
}

export default App
