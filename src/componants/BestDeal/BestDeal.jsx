import React from 'react'
import styles from './BestDeal.module.css'
import BestDealCard from '../BestDealCard/BestDealCard'
import SchedualButton from '../SchedualButton/SchedualButton'

const BestDeal = () => {
  return (
    <div className={styles.BestDeal}>
    <div className={styles.topsection}>
    <div className={styles.texttitle}>
        <h1> | Best Deal</h1>
        <h2>find your best deal right now!</h2>
          </div>
          <div className={styles.buttons}>
           <button> Appartment</button>
           <button> villa house</button>
           <button> penthouse</button>

          </div>
    </div>
    <div className={styles.downsection}>
        <div className={styles.cards}>
        <BestDealCard ftitle='185 m2' stitle='total flat space' />
        <BestDealCard ftitle='26th' stitle='floor number' />
        <BestDealCard ftitle='4' stitle='number of rooms' />
        <BestDealCard ftitle='yes' stitle='parking available' />
        <BestDealCard ftitle='bank' stitle='payment process' />
        </div>
        <img src="/assets/img/deal-01.jpg" alt="" className={styles.downsectionimg}/>
        <div className={styles.textcardside}>
            <h1>Extra info about property</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ut blanditiis architecto provident repudiandae. Animi ipsa pariatur, doloremque voluptatum veritatis porro, tempore aspernatur iste eius, magnam quam quos. Incidunt, rerum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur numquam non ullam doloremque, unde veritatis autem suscipit, mollitia dolore ut enim magni quasi harum ex dicta, incidunt iure rem debitis?</p>
            <SchedualButton />
        </div>
       
    </div>
 


    </div>
  )
}

export default BestDeal