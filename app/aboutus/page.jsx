"use client";
import React from 'react'
import Navbar from '../../components/navbar/navbar'
import styles from './page.module.css'

function Contact() {

  return (
      <>
        <Navbar />
        <div className={styles.main}>
          <div className={styles.layout}>
            <h1>Discover Fashion Forward Styles for Everyone!</h1>
            <div className={styles.cardDiv}>
              <div className={styles.card}>
                <h2>Our Passion for Fashion</h2>
                <p>
                  At Your-Choice, we are passionate about fashion and believe that style knows no boundaries.
                  Our mission is to provide our customers with a carefully curated collection of shoes, jackets, and handbags.
                  From timeless classics to the latest trends, we offer a diverse range of products that suit every taste and occasion.
                </p>
              </div>
              <div className={styles.card}>
                <h2>Your-Choice Vision</h2>
                <p>
                  Your-Choice was founded with a vision to revolutionize the way people shop for footwear and accessories.
                  With a team of fashion enthusiasts, we embarked on a journey to curate an exclusive selection of top-quality shoes, jackets, and handbags from renowned brands and emerging designers.
                  Our goal is to inspire confidence and empower our customers to express themselves through their unique style choices.
                </p>
              </div>
              <div className={styles.card}>
                <h2>Customer Support</h2>
                <p>
                  We value your feedback and welcome any queries or concerns you may have.
                  Our dedicated customer support team is ready to assist you.
                </p>
                <p>
                  Embrace style, embrace confidence with Your-Choice Shop - your go-to destination for chic shoes, trendy jackets, and fashionable handbags for every member of your family. Thank you for visiting our online shopping website!
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default Contact
