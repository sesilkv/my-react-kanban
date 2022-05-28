import React from 'react'
import CoverImage from './CoverImage'
import Meta from './Meta'
import styles from '../../style/list.module.css'

const Header = () => {
  return (
    <div className={styles.headerContainer}>
        <CoverImage className={styles.coverImageContainer}/>
        <Meta />
    </div>
  )
}

export default Header