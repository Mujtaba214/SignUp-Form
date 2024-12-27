import React from 'react'
import img from '../../assets/img.png'
import styles from './Image.module.css'
const Image = () => {
  return (
      <div>
          <img src={img} className={styles.img} alt="" />
    </div>
  )
}

export default Image