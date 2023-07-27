"use client";
import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar'
import styles from './page.module.css'

function Contact() {

  return (
      <>
        <Navbar />
        <div className={styles.main}>
          <div className="">
            <h1>We'd love to hear from you</h1>
            <p>
              We value your feedback and welcome any queries or concerns you may have.
              Our dedicated customer support team is ready to assist you.
            </p>
          </div>
          <h3>Contact Information:</h3>
          <ul>
            <li>Customer Service: Email us at <a href="mailto:sunnykhan9530@gmail.com">sunnykhan9530@gmail.com</a> or call us at +923179530953.</li>
            <li>Business Inquiries: Email us at <a href="mailto:yourchoice333@gmail.com">yourchoice333@gmail.com</a>.</li>
          <li>Press & Media: Email us at <a href="mailto:sunnykhan9530@gmail.com">sunnykhan9530@gmail.com</a> for press releases and media coverage.</li>
          </ul>
          <p>
            Stay connected and be the first to know about our latest offers, product launches, and style inspiration by following us on social media:
          </p>
          <p>Facebook: <a href="https://web.facebook.com/profile.php?id=100069028956398">Your Choice Leather Collection</a></p>
          <h3>Location:</h3>
          <p>
            Our Shop is located at:
            <br />
            Near Khan Pur Bakre, Main GT Road Pabbi, KPK, Pakistan.
          </p>
        </div>
      </>
  )
}

export default Contact
