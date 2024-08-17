import React from 'react'
import styles from'./Properties.module.css'
import PropertyCard from '../PropertyCard/PropertyCard'

const Properties = () => {
  return (
    <div className={styles.Properties}>
        <div className={styles.protitles}>
            <center><h1> | Properties</h1></center>
            <p> WE PROVIDE THE BEST PROPERTY FOR YOU</p>
        </div>
        <div className={styles.propcard}>
            <PropertyCard  PropertyCardimg='/assets/img/property-01.jpg'  villatype='luxray villa' villaprice='$2.23.000' location='18new street maimi,or97219'
            bedroom='8' bathroom='8' area='545m2' floor='3' parking='6 spots' />
              <PropertyCard  PropertyCardimg='/assets/img/property-01.jpg'  villatype='luxray villa' villaprice='$2.23.000' location='18new street maimi,or97219'
            bedroom='8' bathroom='8' area='545m2' floor='3' parking='6 spots' />
              <PropertyCard  PropertyCardimg='/assets/img/property-01.jpg'  villatype='luxray villa' villaprice='$2.23.000' location='18new street maimi,or97219'
            bedroom='8' bathroom='8' area='545m2' floor='3' parking='6 spots' />
              <PropertyCard  PropertyCardimg='/assets/img/property-01.jpg'  villatype='luxray villa' villaprice='$2.23.000' location='18new street maimi,or97219'
            bedroom='8' bathroom='8' area='545m2' floor='3' parking='6 spots' />
              <PropertyCard  PropertyCardimg='/assets/img/property-01.jpg'  villatype='luxray villa' villaprice='$2.23.000' location='18new street maimi,or97219'
            bedroom='8' bathroom='8' area='545m2' floor='3' parking='6 spots' />
              <PropertyCard  PropertyCardimg='/assets/img/property-01.jpg'  villatype='luxray villa' villaprice='$2.23.000' location='18new street maimi,or97219'
            bedroom='8' bathroom='8' area='545m2' floor='3' parking='6 spots' />
        </div>
    </div>
  )
}

export default Properties