import React from 'react'
import Header from './Header'
import Separator from './Separator'
import Card from '../Card/index'
import styles from '../../style/list.module.css'

const List = () => {
  return (
    <div className={styles.listContainer}>
        <Header />
        <Separator />
        <Card>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
        </Card>
    </div>
  )
}

export default List