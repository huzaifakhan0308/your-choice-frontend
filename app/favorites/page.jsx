"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import Navbar from '../../components/navbar/navbar.jsx'
import Footer from '../../hooks/footer'
import Card from '../../hooks/card.jsx';
import { localStorageKeys } from '../../common/strings';
import { useStateContext } from "../../context/StateContext";

function Page() {
  const { findProductById } = useStateContext();
  const [favorites, setFavorites] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem(localStorageKeys.favouriteKey));
    if (Array.isArray(storedFavorites)) {
      setFavorites(storedFavorites);
    }
  }, []);

  const findProduct = async () => {
    const newLikedProducts = [];
    for (let i = 0; i < favorites.length; i++) {
      const data = await findProductById(favorites[i]);
      const isProductInArray = likedProducts.some((product) => product._id === data._id);

      if (!isProductInArray) {
        newLikedProducts.push(data);
      }
    }
    setLikedProducts((prevProducts) => [...prevProducts, ...newLikedProducts]);
  };

  useEffect(() => {
    if (favorites.length > 0) {
      findProduct()
    }
  }, [favorites])

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Favorites Collection</h1>
        {likedProducts.length > 0?
          <div className={styles.products}>
            {likedProducts.map((e, index) => (
              <Card favorites={favorites} setFavorites={setFavorites} e={e} index={index} />
            ))}
          </div>
        :
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column"}}>
            <h3>Explore our collection and discover products that catch your interest.</h3>
            <p>Your favorites list is currently empty.</p>
        </div>
        }
        
      </div>
      <Footer/>
    </>
  )
}

export default Page
