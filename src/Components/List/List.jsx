import React, { useState } from 'react'
import styles from './List.module.scss'

import { GrFormClose as Delete } from 'react-icons/gr'

const List = ({ hidden, setTodos, todos, completed }) => {
   const [popup, setPopup] = useState(false)
   const [id, setId] = useState(null)

   const popupFunc = id => {
      setId(id)
      setPopup(true)
   }

   const deleteTodo = id => {
      setTodos(todos.filter(todo => todo.id != id))
      setPopup(false)
   }

   const toggleTodo = id => {
      let result = []
      todos.forEach(todo => {
         if (todo.id == id) {
            todo.done = !todo.done
         }
         result.push(todo)
      })
      setTodos(result)
   }

   return (
      <div className={styles.list}>
         <div className={`${styles.overlay} ${popup ? styles.active : ''}`} onClick={(e) => {
            if (!(e.target.parentNode.parentNode.id == 'popup' || e.target.parentNode.id == 'popup' || e.target.id == 'popup') || e.target.id == 'cancel') {
               setPopup(false)
            }
         }}>
            <div className={styles.popup} id={'popup'}>
               <div className={styles.title}>Are you sure you want to delete?</div>
               <div className={styles.options}>
                  <div className={styles.positive} onClick={() => deleteTodo(id)}>Yes</div>
                  <div className={styles.negative} id={'cancel'}>No</div>
               </div>
            </div>
         </div>
         {
            todos.length == 0
               ?
               <div className={styles.empty}>
                  <div className={styles.subtitle}>Your life is a blank page. You write on it.</div>
                  <div className={styles.title}>So start by adding your tasks here.</div>
               </div>
               :
               <div className={styles.todos}>
                  {
                     hidden
                        ?
                        completed.map(todo => (
                           <div className={styles.todo} key={todo.id}>
                              <div className={styles.context}>
                                 <input
                                    type='checkbox'
                                    className={styles.checkbox}
                                    checked={todo.done ? true : false}
                                    onChange={() => toggleTodo(todo.id)} />
                                 <p className={`${styles.value} ${todo.done ? styles.done : ''}`}>{todo.value}</p>
                              </div>
                              <div className={styles.delete} onClick={() => popupFunc(todo.id)}>
                                 <Delete />
                              </div>
                           </div>
                        ))
                        :
                        todos.map(todo => (<div className={styles.todo} key={todo.id}>
                           <div className={styles.context}>
                              <input
                                 type='checkbox'
                                 className={styles.checkbox}
                                 checked={todo.done ? true : false}
                                 onChange={() => toggleTodo(todo.id)} />
                              <p className={`${styles.value} ${todo.done ? styles.done : ''}`}>{todo.value}</p>
                           </div>
                           <div className={styles.delete} onClick={() => popupFunc(todo.id)}>
                              <Delete />
                           </div>
                        </div>
                        ))
                  }
               </div>
         }
      </div>
   )
}

export default List
