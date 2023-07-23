"use client";
import React, { useEffect, useState } from 'react'
import style from "./page.module.css";
import Navbar from '../navbar/navbar'
import Link from 'next/link';
import shopImg from '../../assets/shopImg5.jpeg';
import shoes from '../../assets/shoes.jpg'

function Page() {
  const products = [
    {
      name: "ALL",
      linkTo: "/all"
    },
    {
      name: "MEN's",
      linkTo: "/mens"
    },
    {
      name: "WOMEN's",
      linkTo: "/women"
    },
    {
      name: "KID's",
      linkTo: "/kids"
    }
  ]

  const product = [
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
      img: [shopImg],
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
    }
  ]

  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const getNextProductWithOff = (startIndex) => {
    let currentIndex = startIndex;
    while (true) {
      currentIndex = (currentIndex + 1) % product.length;
      if (product[currentIndex].off !== "") {
        return currentIndex;
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prevIndex) => getNextProductWithOff(prevIndex));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <main className={style.main}>
        <h1>OFF% Products </h1>
        <div className={style.offProducts} style={{ backgroundImage: `url(${product[currentProductIndex].img[0].src})` }}>
          <div className={style.layout}>
            <div className={style.details}>
              <div className={style.imgSideDiv}>
                <div style={{ backgroundImage: `url(${product[currentProductIndex].img[0].src})` }}></div>
              </div>
              <div className={style.detailsDiv}>
                <h2>{product[currentProductIndex].title}</h2>
                <p>Price: ${product[currentProductIndex].price}</p>
                <p>Discount: {product[currentProductIndex].off}%</p>
              </div>
            </div>
            </div>
          </div>
        <div className={style.products}>
          {products.map((e, index) => (
            <Link href={e.linkTo} className={style.cards} key={index}>
                {e.name}
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}

export default Page
