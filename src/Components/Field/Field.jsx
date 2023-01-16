import React, { useState } from 'react'
import styles from './Field.module.scss'

import { GrFormClose as Clear } from 'react-icons/gr'

const Field = ({ setTodos, todos }) => {
   const [value, setValue] = useState('')
   const [error, setError] = useState(false)

   const valueValidation = val => {
      if (val.length > 54) {
         setError(true)
      } else {
         setError(false)
      }
   }

   const updateTodos = val => {
      if (!error) {
         setTodos([{
            id: todos.length,
            value: val,
            done: false
         }, ...todos])
         setValue('')
      }
   }

   return (
      <div className={styles.field}>
         <div className={styles.name}>Task</div>
         <div className={styles.content}>
            <div className={styles.inputContent}>
               <div className={styles.inputWrapper}>
                  <input
                     className={`${styles.input} ${error ? styles.active : ''}`}
                     value={value}
                     onChange={e => {
                        setValue(e.target.value)
                        valueValidation(value)
                     }}
                     type='text'
                     placeholder='Write here' />
                     <div className={`${styles.clear} ${value != '' ? styles.active : ''}`} onClick={() => setValue('')}>
                        <Clear />
                     </div>
               </div>
               <div className={`${styles.error} ${error ? styles.active : ''}`}>
                  Task content can contain max 54 characters.
               </div>
            </div>
            <button
               className={styles.button}
               onClick={() => updateTodos(value)}>
               Add
            </button>
         </div>
      </div>
   )
}

export default Field
