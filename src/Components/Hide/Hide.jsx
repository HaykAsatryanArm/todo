import React from 'react'
import styles from './Hide.module.scss'

const Hide = ({ hidden, setHidden }) => {
   return (
      <div className={styles.hide}>
         <input id={'check'} className={styles.checkbox} type="checkbox" checked={hidden} onChange={() => setHidden(!hidden)}/>
         <label htmlFor={'check'} className={styles.text} onChange={() => setHidden(!hidden)}>Hide completed</label>
      </div>
   )
}

export default Hide
