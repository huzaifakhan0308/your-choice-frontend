"use client";
import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar';
import styles from './page.module.css';
import menShoes from '../../assets/menShoes.jpeg';
import shoes from '../../assets/shoes.jpg'
import Card from '../../hooks/dltCard.jsx';
import Footer from '../../hooks/footer.jsx';

function Page() {

  const products = [
    {
      title: "shoes",
      img: [shoes, menShoes, shoes, menShoes],
      price: "1000",
      off: "20",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes",
      _id: "1",
      sizes: [7, 8, 9, 10, 11],
      quantity: 3
    },
    {
      title: "handbag",
      img: [shoes, shoes, shoes, shoes,],
      price: "1000",
      off: "20",
      colors: ["black", "brown"],
      gender: "male",
      type: "handbag",
      _id: "2",
      sizes: [7, 8, 9, 10, 11],
      quantity: 3
    },
    {
      title: "jackets",
      img: [shoes, shoes, shoes, shoes,],
      price: "500",
      off: "",
      colors: ["black", "brown"],
      gender: "kid",
      type: "jackets",
      _id: "3",
      sizes: [3, 4, 5, 6, 7],
      quantity: 4
    },
    {
      title: "shoes",
      img: [shoes, shoes, shoes, shoes,],
      price: "2000",
      off: "20",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes",
      _id: "4",
      sizes: [7, 8, 9, 10, 11],
      quantity: 5
    },
    {
      title: "shoes",
      img: [shoes, shoes, shoes, shoes,],
      price: "1000",
      off: "20",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes",
      _id: "5",
      sizes: [7, 8, 9, 10, 11],
      quantity: 2
    },
    {
      title: "shoes",
      img: [shoes, shoes, shoes, shoes],
      price: "2000",
      off: "20",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes",
      _id: "6",
      sizes: [7, 8, 9, 10, 11],
      quantity: 3
    }
  ]
  const [boolean, setBoolean] = useState(false)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("your-choice-owner"));
    if (data && data.password === process.env.NEXT_PUBLIC_PASSWORD) {
      setBoolean(true)
    }
  }, []);
  return (
    <>
      <Navbar />
      {boolean?
        <div className={styles.container}> 
          <h1>My Products</h1>
          <div className={styles.products}>
            {products.map((e, index) => (
              <Card e={e} index={index} />
            ))}
          </div>
        </div>
      : ""}
      <Footer/>
    </>
  )
}

export default Page;
