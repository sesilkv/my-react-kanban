import React from 'react'
import Image from 'next/image'
import CoverPic from '../../public/images/cover-01.png'
import styles from '../../style/list.module.css'

const CoverImage = () => {
  return (
    <div className={styles.coverImageContainer} >
      <Image className={styles.imageContainer} alt={CoverPic} src={CoverPic} height={140}/>
    </div>
  )
}

export default CoverImage