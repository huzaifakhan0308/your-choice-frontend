"use client";
import React, { useState } from 'react'
import Navbar from '../navbar/navbar';
import styles from './page.module.css'
import shoes from '../../assets/shoes.jpg'
import Card from '../../hooks/card.jsx';

function Page() {
  const products = [
    {
      title: "shoes",
      img: [shoes],
      price: "2000",
      off: "20",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes",
      _id: "1"
    },
    {
      title: "handbag",
      img: [shoes],
      price: "1000",
      off: "20",
      colors: ["black", "brown"],
      gender: "male",
      type: "handbag",
      _id: "2"
    },
    {
      title: "jackets",
      img: [shoes],
      price: "500",
      off: "",
      colors: ["black", "brown"],
      gender: "kid",
      type: "jackets",
      _id: "3"
    },
    {
      title: "shoes",
      img: [shoes],
      price: "2000",
      off: "20",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes",
      _id: "4"
    },
    {
      title: "shoes",
      img: [shoes],
      price: "2000",
      off: "",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes",
      _id: "5"
    },
    {
      title: "shoes",
      img: [shoes],
      price: "2000",
      off: "20",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes",
      _id: "6"
    },
    {
      title: "shoes",
      img: [shoes],
      price: "2000",
      off: "",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes",
      _id: "7"
    }
  ]

  const [selectedType, setSelectedType] = useState('shoes');
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <h1>Adorable Steps: Discover the Perfect Shoes for Kids - Comfort and Style Combined!</h1>
        <div className={styles.menu}>
          <button
            className={selectedType === 'shoes' ? styles.selected : ''}
            onClick={() => setSelectedType('shoes')}
          >
            Shoes
          </button>
        </div>
        <div className={styles.products}>
          {products.filter((product) => product.type === selectedType).map((e, index) => (
            <Card e={e} index={index} />
          ))}
        </div>
      </main>
      <footer className={styles.footer}>
        © 2023 YourChoiceShopping Services (Pvt) Ltd. All Rights Reserved.
        <span>
          Made by Huzaifa Khan <br />
          <a href='mailto:huzaifa031252khan@gmail.com' style={{ color: "red" }}>
            huzaifa031252khan@gmail.com
          </a>
        </span>
      </footer>
    </>
  )
}

export default Page;
