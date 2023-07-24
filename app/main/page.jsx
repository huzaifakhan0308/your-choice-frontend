"use client";
import React, { useEffect, useState } from 'react'
import style from "./page.module.css";
import Navbar from '../navbar/navbar'
import Link from 'next/link';
import shopImg from '../../assets/shopImg5.jpeg';
import womenShoes from '../../assets/womenShoes.jpeg';
import kidShoes from '../../assets/kidShoes.jpeg';
import menShoes from '../../assets/menShoes.jpeg';
import shoes from '../../assets/shoes.jpg'
import leftArrow from '../../public/right-arrow.png'
import RightArrow from '../../public/left-arrow.png'

function Page() {
  const products = [
    {
      name: "ALL",
      linkTo: "/all",
      img: shopImg
    },
    {
      name: "MEN's",
      linkTo: "/mens",
      img: menShoes
    },
    {
      name: "WOMEN's",
      linkTo: "/women",
      img: womenShoes
    },
    {
      name: "KID's",
      linkTo: "/kids",
      img: kidShoes
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
      title: "handbag1",
      img: [shopImg],
      price: "1000",
      off: "20",
      colors: ["black", "brown"],
      gender: "male",
      type: "handbag",
      _id: "2"
    },
    {
      title: "handbag2",
      img: [shopImg],
      price: "1000",
      off: "20",
      colors: ["black", "brown"],
      gender: "male",
      type: "handbag",
      _id: "3"
    },
    {
      title: "handbag3",
      img: [shopImg],
      price: "1000",
      off: "20",
      colors: ["black", "brown"],
      gender: "male",
      type: "handbag",
      _id: "4"
    },
    {
      title: "jackets",
      img: [shoes],
      price: "500",
      off: "",
      colors: ["black", "brown"],
      gender: "kid",
      type: "jackets",
      _id: "5"
    }
  ]

  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const getNextProductWithOff = (startIndex, step) => {
    let currentIndex = startIndex;
    const productLength = product.length;
    while (true) {
      currentIndex = (currentIndex + step + productLength) % productLength;
      if (product[currentIndex].off !== "") {
        return currentIndex;
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prevIndex) => getNextProductWithOff(prevIndex, 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const setDetailsId = (id) => {
    localStorage.setItem("yourChoice-products-id", JSON.stringify(id))
  }

  const handleNextImage = () => {
    setCurrentProductIndex((prevIndex) => getNextProductWithOff(prevIndex, 1));
  };

  const handleBackImage = () => {
    setCurrentProductIndex((prevIndex) => getNextProductWithOff(prevIndex, -1));
  };

  return (
    <>
      <Navbar />
      <main className={style.main}>
        <h1>OFF% Products </h1>
        <div className={style.offProducts} style={{ backgroundImage: `url(${product[currentProductIndex].img[0].src})` }}>
          <div className={style.layout}>
            <button className={style.nextBtn} onClick={handleBackImage}>
              <img src={RightArrow.src} alt="" />
            </button>
            <div className={style.details}>
              <div className={style.imgSideDiv}>
                <div style={{ backgroundImage: `url(${product[currentProductIndex].img[0].src})` }}></div>
              </div>
              <div className={style.detailsDiv}>
                <h2>{product[currentProductIndex].title}</h2>
                <p>Price: ${product[currentProductIndex].price}</p>
                <p>Discount: {product[currentProductIndex].off}%</p>
                <div style={{ color: "red" }}>Available Colors: <br />
                  <div className={style.colorsDiv}>
                    {product[currentProductIndex].colors.map((color, index) => (
                      <div className={style.circles} style={{ backgroundColor: color }} key={index}></div>
                    ))}
                  </div>
                </div>
                <Link href="/details">
                  <button onClick={() => { setDetailsId(product[currentProductIndex]._id) }} >View Product</button>
                </Link>
              </div>
            </div>
            <button className={style.nextBtn} onClick={handleNextImage}>
              <img src={leftArrow.src} alt="" />
            </button>
          </div>
        </div>
        <h2>Select Type You Want</h2>
        <div className={style.products}>
          {products.map((e, index) => (
            <Link href={e.linkTo} className={style.cards} key={index} style={{ backgroundImage: `url(${e.img.src})`}}>
              <div className={style.layouts}>
                {e.name}
              </div>
            </Link>
          ))}
        </div>
      </main>
      <footer className={style.footer}>
        © 2023 YourChoiceShopping Services (Pvt) Ltd. All Rights Reserved.
        <span>
          Made by Huzaifa Khan <br />
          <a href='mailto:huzaifa031252khan@gmail.com' style={{ color: "red"}}>
            huzaifa031252khan@gmail.com
          </a>
        </span>
      </footer>
    </>
  )
}

export default Page
