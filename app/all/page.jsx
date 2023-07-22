"use client";
import React from 'react'
import Navbar from '../navbar/navbar';
import styles from './page.module.css'
import shoes from '../../assets/shoes.jpg'

function Page() {
  const products = [
    {
      title: "shoes",
      img: shoes,
      price: "2000",
      off: "20",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes"
    },
    {
      title: "peshawari chappal",
      img: shoes,
      price: "1000",
      off: "20",
      colors: ["black", "brown"],
      gender: "male",
      type: "handbag"
    },
    {
      title: "shoes",
      img: shoes,
      price: "500",
      off: "",
      colors: ["black", "brown"],
      gender: "kid",
      type: "jackets"
    },
    {
      title: "shoes",
      img: shoes,
      price: "2000",
      off: "20",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes"
    },
    {
      title: "shoes",
      img: shoes,
      price: "2000",
      off: "20",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes"
    },
    {
      title: "shoes",
      img: shoes,
      price: "2000",
      off: "20",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes"
    }
  ]
  return (
    <div className={styles.container}>
      <Navbar />
      <h2>Explore our ALL Products Page – Your your-choice-shop for men, women, and kids products, carefully curated for your convenience</h2>
      <div className={styles.products}>
        {products.map((e) => (
          <div className={styles.cards} key={e.title}>
            <div className={styles.img} style={{ backgroundImage: `url(${e.img.src})` }} ></div>
            <div className="">
              <h3>{e.title}</h3>
              <p>Price: ${e.price}</p>
              {e.off && <p>Discount: {e.off}% Off</p>}
              <p>Available Colors: {e.colors.join(", ")}</p>
              <p>Gender: {e.gender}</p>
              <button>View product</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page;
