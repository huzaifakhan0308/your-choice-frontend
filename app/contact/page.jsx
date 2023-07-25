"use client";
import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar'
import styles from './page.module.css'

function Contact() {
  const [boolean, setBoolean] = useState(false)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("your-choice-owner"));
    if (data && data.username === process.env.NEXT_PUBLIC_USERNAME) {
      setBoolean(true)
    }
  }, []);
  return (
      <>
        {boolean? ""
        :
          <>
            <Navbar />
            <div className={styles.main}>
              <h1>Get In Touch</h1>
              <h2>Reach Out to Us</h2>
              <p>
                We value your feedback and welcome any queries or concerns you may have.
                Our dedicated customer support team is ready to assist you.
              </p>
              <h3>Contact Information:</h3>
              <ul>
                <li>Customer Service: Email us at <a href="mailto:support@yourcompany.com">support@yourcompany.com</a> or call us at +1-XXX-XXX-XXXX.</li>
                <li>Business Inquiries: Email us at <a href="mailto:partnerships@yourcompany.com">partnerships@yourcompany.com</a>.</li>
                <li>Press & Media: Email us at <a href="mailto:media@yourcompany.com">media@yourcompany.com</a> for press releases and media coverage.</li>
              </ul>
              <p>
                [Your Company Name] is an online-only retailer, and you can explore our latest collection on our website at
                <a href="https://www.yourcompany.com">www.yourcompany.com</a>.
              </p>
              <p>
                Stay connected and be the first to know about our latest offers, product launches, and style inspiration by following us on social media:
              </p>
              <ul>
                <li>Instagram: <a href="https://www.instagram.com/yourcompany">instagram.com/yourcompany</a></li>
                <li>Facebook: <a href="https://www.facebook.com/yourcompany">facebook.com/yourcompany</a></li>
                <li>Twitter: <a href="https://www.twitter.com/yourcompany">twitter.com/yourcompany</a></li>
              </ul>
              <p>Embrace style, embrace confidence with [Your Company Name] - your go-to destination for chic shoes, trendy jackets, and fashionable handbags for every member of your family. Thank you for being a part of our fashion journey!</p>
            </div>
            
          </>
        }
      </>
  )
}

export default Contact
