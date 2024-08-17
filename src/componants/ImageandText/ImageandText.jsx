import React from 'react'
import styles from './ImageandText.module.css'

const ImageandText = (props) => {
  return (
    <div className={styles.imgandtext}>
       <center><img src={props.iimg} alt="" /></center>
       <div class={styles.textimg}>
            <h1> {props.ititle}</h1>
            <p> {props.idescription} </p>
         </div>
   </div>
  )
}

export default ImageandText