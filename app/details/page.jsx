"use client";
import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar';
import styles from './page.module.css';
import menShoes from '../../assets/menShoes.jpeg';
import shoes from '../../assets/shoes.jpg'
import leftArrow from '../../public/right-arrow.png'
import RightArrow from '../../public/left-arrow.png'
import Card from '../../hooks/card.jsx';

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
      price: "1000",
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

  const handlePurchase = () => {

    if (!selectedColor || !selectedSize) {
      alert("Please select color and size before making a purchase.");
      return;
    }

    const purchaseDetails = {
      productId: id,
      color: selectedColor,
      size: selectedSize,
    };

    localStorage.setItem("yourChoice-purchase-details", JSON.stringify(purchaseDetails));
    window.location.href = "/buyProduct";
  };

  return (
    <>
        <Navbar />
      <div className={styles.productContainer}>
        <h1>BUY PRODUCT</h1>
        {products.filter((product) => product._id === id).map((e, index) => (
          <div 
          className={styles.product}
          style={{
            backgroundImage: `url(${e.img[currentImageIndex].src})`
          }}
          >
              <div className={styles.card} key={index}>
                <div className={styles.imgSideDiv}>
                  <div
                    className={styles.img}
                    style={{
                      backgroundImage: `url(${e.img[currentImageIndex].src})`
                    }}
                  ></div>
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
                  <p>Rs: {e.price}</p>
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
                          border: selectedColor === color ? "2px solid rgba(255, 255, 255, 0.900)" : 'none',
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
                              backgroundColor: selectedSize === size ? 'black' : 'transparent',
                              color: selectedSize === size ? 'white' : 'black',
                            }}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </>
                  : ""}
                <button className={styles.BuyBtn} onClick={handlePurchase}>Buy Now</button>
                </div>
              </div>
          </div>
        ))}
        <h2>Related Products</h2>
        <div className={styles.someProducts}>
          {products
            .filter((product) => product._id !== id)
            .filter((product) => product.gender === products.find((p) => p._id === id)?.gender)
            .filter((product) => product.type === products.find((p) => p._id === id)?.type)
            .slice(0, 4)
            .map((e, index) => (
              <Card e={e} index={index} key={index} />
            ))}
        </div>
      </div>
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
