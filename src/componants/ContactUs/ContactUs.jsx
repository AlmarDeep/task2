import React from 'react'
import styles from './ContactUs.module.css'
import FeaturedCard from '../FeaturedCard/FeaturedCard'
import ImageandText from '../ImageandText/ImageandText'
const ContactUs = () => {
  return (
    <div className={styles.ContactUs}>
    <div className={styles.rr}>
      <div className={styles.textonimg}>
       <ImageandText iimg='/assets/img/contact-bg.jpg' ititle='| Contact Us' idescription='Get in touch with our agents' />
      </div>
       
        <img src="/assets/img/lo.JPG" alt="" className={styles.imgchild} />
        <div className={styles.contactcard}>
            <h1>full name</h1>
            <input type="text" placeholder='  your name'  />
            <h1>Email address</h1>
            <input type="email" placeholder='  your E-mail'  />
            <h1>sbject</h1>
            <input type="text" placeholder='  subject'  />
            <h1>massage</h1>
            <textarea name="" id="" ></textarea>
            <button>send massage</button> 
        </div>
        <div className={styles.contactuscard}>
            <FeaturedCard cimg='/assets/img/phone-icon.png' ctitle='010-020-030' ctext='phonenumber' />
            <FeaturedCard cimg='/assets/img/phone-icon.png' ctitle='010-020-030' ctext='phonenumber' />
        </div>
       
        </div>
    

    </div>
  )
}

export default ContactUs