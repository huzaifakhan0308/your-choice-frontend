import React, { useEffect, useState } from 'react'
import styles from "./page.module.css";
import backgroundImage from '../assets/shopImg3.jpeg';

function Welcome() {
    const [hide, setHide] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setHide(true)
        }, 2500);
        return () => clearTimeout(timeout);
    }, []);

  return (
      <div
          className={`${styles.container} ${hide ? styles.hidden : styles.visible}`}
          style={{ backgroundImage: `url(${backgroundImage.src})` }}
      >
          <div className={styles.WelcomePageLayout}>
              <h1>Welcome to Your <span style={{ color: "red" }}>Choice</span> Shop</h1>
              <h2>Your Your-Choice Shop for Fashion and style!</h2>
          </div>
      </div>
  )
}

export default Welcome
