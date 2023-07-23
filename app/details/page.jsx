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
      _id: "1",
      sizes: [7, 8, 9, 10, 11]
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
      sizes: [7, 8, 9, 10, 11]
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
      sizes: [3, 4, 5, 6, 7]
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
      sizes: [7, 8, 9, 10, 11]
    },
    {
      title: "shoes",
      img: [shoes, shoes, shoes, shoes,],
      price: "2000",
      off: "20",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes",
      _id: "5",
      sizes: [7, 8, 9, 10, 11]
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
      sizes: [7,8,9,10,11]
    }
  ]

  const [id, setId] = useState("")
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const availableSizes = ['7', '8', '9', '10', '11'];

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("yourChoice-products-id"))
    if(data){
      setId(data)
    }
  })

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
                <h2>{e.title}</h2>
                <p>Price: ${e.price}</p>
                {e.off?
                  <p>Discount: {e.off}%</p>
                  :
                  ""
                }
                <h4>Select Available Colors:</h4>
                <div className={styles.colorButtons}>
                  {e.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      style={{
                        border: selectedColor === color ? "2px solid black" : 'none',
                        backgroundColor: color
                      }}
                    >
                    </button>
                  ))}
                </div>
                {e.sizes?
                  <>
                    <h4>Select Available Sizes:</h4>
                    <div className={styles.sizesButtons}>
                      {e.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          style={{
                            backgroundColor: selectedSize === size ? 'gray' : 'transparent'
                          }}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </>
                : ""}
                <button className={styles.BuyBtn}>Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page;
