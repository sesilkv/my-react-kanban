import React from 'react'
import Avatar from './Avatar'
import Header from './Header'
import TagList from './TagList'
import styles from '../../style/card.module.css'

const Card = ({ children }) => {
  return (
      <div className={styles.cardContainer}>
        <Header />
        <div className={styles.cardChildren}>
          {children}
        </div>
        <TagList />
        <Avatar />
      </div>
  )
}

export default Card