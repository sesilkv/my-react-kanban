import React from 'react'
import List from '../Components/List'
import styles from '../style/index.module.css'

const Home = () => {
  return (
    <div className={styles.boardContainer}>
      <h1>My Kanban Board</h1>
      <div className={styles.listContainer}>
        <List />
        <List />
        <List />
        <List />
      </div>
    </div>
  )
}

export default Home