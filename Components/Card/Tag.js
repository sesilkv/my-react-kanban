import React from 'react'
import styles from '../../style/card.module.css'

const Tag = ({ children }) => {
  return (
    <div className={styles.tags}>
      {children}
    </div>
  )
}

export default Tag