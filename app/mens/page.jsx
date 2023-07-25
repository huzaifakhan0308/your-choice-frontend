"use client";
import React, { useState } from 'react'
import Navbar from '../navbar/navbar';
import styles from './page.module.css'
import shoes from '../../assets/shoes.jpg'
import Link from 'next/link';

function Page() {
  const products = [
    {
      title: "shoes",
      img: shoes,
      price: "2000",
      off: "20",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes",
      _id: "1"
    },
    {
      title: "handbag",
      img: shoes,
      price: "1000",
      off: "20",
      colors: ["black", "brown"],
      gender: "male",
      type: "handbag",
      _id: "2"
    },
    {
      title: "jackets",
      img: shoes,
      price: "500",
      off: "",
      colors: ["black", "brown"],
      gender: "kid",
      type: "jackets",
      _id: "3"
    },
    {
      title: "shoes",
      img: shoes,
      price: "2000",
      off: "20",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes",
      _id: "4"
    },
    {
      title: "shoes",
      img: shoes,
      price: "2000",
      off: "",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes",
      _id: "5"
    },
    {
      title: "shoes",
      img: shoes,
      price: "2000",
      off: "20",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes",
      _id: "6"
    },
    {
      title: "shoes",
      img: shoes,
      price: "2000",
      off: "",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes",
      _id: "7"
    }
  ]

  const [selectedType, setSelectedType] = useState('shoes');

  const setDetailsId = (id) => {
    localStorage.setItem("yourChoice-products-id", JSON.stringify(id))
  }
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <h1>Stylish Men's Collection: Explore Our Exclusive Shoes and Jackets!</h1>
        <div className={styles.menu}>
          <button
            className={selectedType === 'shoes' ? styles.selected : ''}
            onClick={() => setSelectedType('shoes')}
          >
            Shoes
          </button>
          <button
            className={selectedType === 'jackets' ? styles.selected : ''}
            onClick={() => setSelectedType('jackets')}
          >
            Jackets
          </button>
        </div>
        <div className={styles.products}>
          {products.filter((product) => product.type === selectedType).map((e, index) => (
            <div className={styles.cards} key={index}>
              <div className={styles.img} style={{ backgroundImage: `url(${e.img.src})` }} ></div>
              <div className={styles.detailDiv}>
                <h3>{e.title}</h3>
                <p>Price: {e.price}Rs</p>
                {e.off ? <p>OFF: {e.off}%</p> : ""}
                <div>Available Colors: <br />
                  <div className={styles.colorsDiv}>
                    {e.colors.map((color, index) => (
                      <div className={styles.circles} style={{ backgroundColor: color }} key={index}></div>
                    ))}
                  </div>
                </div>
                <Link className={styles.link} href="./details" onClick={() => setDetailsId(e._id)}>
                  <button>View Product</button>
                </Link>
              </div>
            </div>
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
