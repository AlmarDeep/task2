import React from 'react'
import styles from './Featured.module.css'
import FeaturedCard from '../FeaturedCard/FeaturedCard'

const Featured = () => {
  return (
   <> 
   <div className={styles.featured}>
    <div className={styles.me}>
      <div className={styles.imgside}>
      <img src="/assets/img/featured-icon.png" alt="" className={styles.parentim} />
      <img src="/assets/img/featured.jpg" alt=""  className={styles.child}/>
      
    </div>
    <div className={styles.textside}>
        <div className={styles.texttitle}>
        <h1> | FEATURED</h1>
        <h2>BEST APPARTMENT AND SEA VEIW</h2>
          </div>
        
        <div className={styles.usefullinks}>
          <h1 className={styles.title}>Best useful links ?</h1>
          <p>get <span>THE BEST VILLA</span> website template in HTML CSS and Bootstrap for your business .tempaltemo provides you the 
          <a> best free css template </a>in the world.please  tell you friends about it. </p>
          <h2> How does this work?</h2>
          <h2>Why is Villa Agency the best?</h2>
        </div>
      </div>
      </div>
    
      <div className={styles.cardside}>
        <FeaturedCard cimg='/assets/img/info-icon-01.png ' ctitle='250 m2' ctext='total flat space'/>
        <FeaturedCard cimg='/assets/img/info-icon-02.png ' ctitle='contract' ctext='contract ready'/>
        <FeaturedCard cimg='/assets/img/info-icon-03.png ' ctitle='payment' ctext='payment'/>
        <FeaturedCard cimg='/assets/img/info-icon-04.png ' ctitle='safety' ctext='24/7 under'/>
      </div>
   </div>
   </>
  )
}

export default Featured