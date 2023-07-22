"use client";
import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar';
import styles from './page.module.css';
import shoes from '../../assets/shoes.jpg'
import leftArrow from '../../public/right-arrow.png'
import RightArrow from '../../public/left-arrow.png'

function Page() {
  const products = [
    {
      title: "shoes",
      img: [shoes, shoes, shoes, shoes,],
      price: "2000",
      off: "20",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes",
      _id: "1"
    },
    {
      title: "handbag",
      img: [shoes, shoes, shoes, shoes,],
      price: "1000",
      off: "20",
      colors: ["black", "brown"],
      gender: "male",
      type: "handbag",
      _id: "2"
    },
    {
      title: "jackets",
      img: [shoes, shoes, shoes, shoes,],
      price: "500",
      off: "",
      colors: ["black", "brown"],
      gender: "kid",
      type: "jackets",
      _id: "3"
    },
    {
      title: "shoes",
      img: [shoes, shoes, shoes, shoes,],
      price: "2000",
      off: "20",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes",
      _id: "4"
    },
    {
      title: "shoes",
      img: [shoes, shoes, shoes, shoes,],
      price: "2000",
      off: "20",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes",
      _id: "5"
    },
    {
      title: "shoes",
      img: [shoes, shoes, shoes, shoes],
      price: "2000",
      off: "20",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes",
      _id: "6"
    }
  ]

  const [id, setId] = useState("")

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("yourChoice-products-id"))
    if(data){
      setId(data)
    }
  })

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    if (currentImageIndex < 3) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handleBackImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div>
        <Navbar />
      <div className={styles.productContainer}>
        <div className={styles.product}>
          {products.filter((product) => product._id === id).map((e, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.imgSideDiv}>
                  {
                  <div
                    className={styles.img}
                    style={{
                      backgroundImage: `url(${e.img[currentImageIndex].src})`
                    }}
                  ></div>
                  }
                <div className={styles.buttonsContainer}>
                  <button onClick={handleBackImage} disabled={currentImageIndex === 0}>
                    <img src={RightArrow.src} alt="" />
                  </button>
                  <button onClick={handleNextImage} disabled={currentImageIndex === 3}>
                    <img src={leftArrow.src} alt="" />
                  </button>
                </div>
              </div>
              <div className={styles.contentDiv}>
                details
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page;
