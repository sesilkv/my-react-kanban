import React from 'react'
import Tag from './Tag'
import styles from '../../style/card.module.css'

const TagList = () => {
  return (
    <div className={styles.tagContainer}>
        <Tag>Website</Tag>
        <Tag>UX</Tag>
        <Tag>UI</Tag>
        <Tag>Wireframe</Tag>
    </div>
  )
}

export default TagList