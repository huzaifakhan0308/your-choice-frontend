"use client";
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/navbar';
import styles from './page.module.css';
import leftArrow from '../../public/right-arrow.png'
import RightArrow from '../../public/left-arrow.png'
import Card from '../../hooks/card.jsx';
import Footer from '../../hooks/footer.jsx';
import { useStateContext } from "../../context/StateContext";
import { localStorageKeys } from '../../common/strings';
import axios from 'axios';

function Page() {
  const { findProductById } = useStateContext();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [products, setProducts] = useState(null);
  const [realtedProducts, setRealtedProducts] = useState([]);

  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem(localStorageKeys.favouriteKey));
    if (Array.isArray(storedFavorites)) {
      setFavorites(storedFavorites);
    }
  }, []);

  const relatedItem = async () => {
    if (products && products.adults) {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/items?page=1&limit=10&adults=${products.adults}&type=${products.type}`);
        setRealtedProducts(response.data.items)
      } catch (error) {
        console.error('Error', error);
      }
    }
  }

  const getDetail = async (id) => {
    const data = await findProductById(id)
    setProducts(data)
  }

  useEffect(() => {
    relatedItem()
  }, [products])

  useEffect(() => {
    let id = JSON.parse(localStorage.getItem(localStorageKeys.productKey))
    if (id){
      getDetail(id)
    }
  }, [])

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
      productId: JSON.parse(localStorage.getItem(localStorageKeys.productKey)),
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
        {products && (
          <div 
          className={styles.product}
          style={{
            backgroundImage: `url(${products.img[currentImageIndex]})`
          }}
          >
            <div className={styles.card}>
              <div className={styles.imgSideDiv}>
                <img className={styles.img} src={products.img[currentImageIndex]} alt="" />
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
                <h2>{products.title}</h2>
                <p>Rs: {products.price}</p>
                {products.off?
                  <p>Discount: {products.off}%</p>
                  :
                  ""
                }
                <h4>Select Available Colors:</h4>
                <div className={styles.colorButtons}>
                  {products.colors.map((color) => (
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
                <h4>Select Available Sizes:</h4>
                <div className={styles.sizesButtons}>
                  {products.sizes.map((size) => (
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
                <button className={styles.BuyBtn} onClick={handlePurchase}>Buy Now</button>
              </div>
            </div>
          </div>
        )}
        <h2 style={{margin: "20px"}}>Related Products</h2>
        <div className={styles.someProducts}>
          {realtedProducts.length? realtedProducts.map((e, index) => (
            <Card favorites={favorites} setFavorites={setFavorites} e={e} index={index} key={index} />
            ))
          :
          <h2>please wait.. or view any product again!</h2>
          }
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Page;
