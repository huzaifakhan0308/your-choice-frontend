import React from 'react'
import styles from './footer.module.css'

function Footer() {
  return (
      <footer className={styles.footer}>
          © 2023 YourChoiceShopping Services (Pvt) Ltd. All Rights Reserved.
          <span>
              Designed and Developed by {" "}
              <a href='https://huzaifa-portfolio.onrender.com/' >
                Muhammad Huzaifa khan.
              </a>
          </span>
      </footer>
  )
}

export default Footer
