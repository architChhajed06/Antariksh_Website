import React from 'react'
import styles from './IntroBox.module.css'

const IntroBox = () => {
  return (
    <div>
        <div className={`${styles.introBox}`}>
        <div className={`${styles.heading}`}>
          <h1><span id="part1">Space</span> and <span id="part2">Beyond</span> Blogs!</h1>
          <div className={`${styles.IntroImgContainer} ${styles.floating}`}>
            <img src='https://static.vecteezy.com/system/resources/previews/014/012/721/original/earth-space-illustration-png.png' />
          </div>
        </div>
          <p>Welcome to Antariksh Exclusive Blog! Join us on a celestial journey where we unravel the mysteries of the universe. Explore the cosmos with insightful articles, captivating imagery, and the latest astronomical discoveries.</p>
      </div>
    </div>
  )
}

export default IntroBox