import React from 'react'
import styles from './BestDealCard.module.css'

const BestDealCard = (props) => {
  return (
    <div className={styles.bestcard}>
        <div className={styles.besttext} > 
        <p>{props.stitle}</p>
        <h2>{props.ftitle}</h2>
       
       </div>
    </div>
  )
}

export default BestDealCard