import React from 'react'
import styles from './NavBar.module.css'

import SchedualButton from '../SchedualButton/SchedualButton'
const NavBar = () => {
  return (
    <>
    <div className={styles.nav}>
    <div className={styles.fnav}>
    <div className={styles.emaillink}>
                  <img src='/assets/img/email-icon.png' alt="" />
                  <p> info@company.com</p>
                </div>
                <div className={styles.emaillink}>
                  <img src='/assets/img/map.png' alt="" />
                  <p> sunny Isles Beach,FL 33160</p>
                </div>
                <div className={styles.socailmedia}>
                    <img src='/assets/img/facebook.svg' alt="" />
                    <img src='assets/img/twitter.svg' alt="" />
                    <img src='assets/img/linkedin.svg' alt="" />
                    <img src='assets/img/instagram.svg' alt="" />
                </div>
    </div>

    <div className={styles.snav}>
        <h2>VILLA</h2>
        <div className={styles.mlinks}>  
        <div className={styles.links}>
                <a href="#">Home</a>
                <a href="#">Properies</a>
                <a href="#">Property Details</a>
                <a href="#">Contact Us</a>
            </div>
            <SchedualButton />
           
            </div>
            <div className={styles.mymenu}> 
                <img src="/assets/img/icons8-menu.svg" alt="" />
            </div>
             
    </div>
    </div>
    
    </>
  )
}

export default NavBar