import React from 'react'
import styles from './footer.module.css'

function Footer() {
  return (
      <footer className={styles.footer}>
          © 2023 YourChoiceShopping Services (Pvt) Ltd. All Rights Reserved.
          <span>
              Designed and Developed by Huzaifa Khan <br />
              <a href='mailto:huzaifa031252khan@gmail.com' >
                  huzaifa031252khan@gmail.com
              </a>
          </span>
      </footer>
  )
}

export default Footer
