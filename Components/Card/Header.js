import React from 'react'
import styles from '../../style/card.module.css'

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerTitle}>
        Not Started
      </div>
      <div className={styles.headerExpires}>
        Expire on 24th jun
      </div>
    </div>
  )
}

export default Header