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
      off: "20",
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
    }
  ]

  const [selectedType, setSelectedType] = useState('shoes');

  const setDetailsId = (id) => {
    localStorage.setItem("yourChoice-products-id", JSON.stringify(id))
  }
  return (
    <div className={styles.container}>
      <Navbar />
      <h2>Explore our ALL Products Page – Your your-choice-shop for men, women, and kids products, carefully curated for your convenience</h2>
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
        <button
          className={selectedType === 'handbag' ? styles.selected : ''}
          onClick={() => setSelectedType('handbag')}
        >
          Handbags
        </button>
      </div>
      <div className={styles.products}>
        {products.filter((product) => product.type === selectedType).map((e , index) => (
          <div className={styles.cards} key={index}>
            <div className={styles.img} style={{ backgroundImage: `url(${e.img.src})` }} ></div>
            <div className={styles.detailDiv}>
              <h3>{e.title}</h3>
              <p>PKR: {e.price}</p>
              {<p>OFF: {e.off}%</p>}
              <div>Available Colors: <br /> 
                <div className={styles.colorsDiv}>
                  {e.colors.map((color, index) => (
                    <div className={styles.circles} style={{ backgroundColor: color }} key={index}></div>
                  ))}
                </div>
              </div>
              <Link className={styles.link} href="./details" onClick={() => setDetailsId(e._id)}>
                <button>View product</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page;
