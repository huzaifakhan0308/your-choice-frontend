"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import Navbar from '../navbar/navbar.jsx'
import Footer from '../../hooks/footer'
import Card from '../../hooks/card.jsx';
import shoes from '../../assets/shoes.jpg'
import { localStorageKeys } from '../../common/strings';

function Page() {
  const products = [
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
      img: [shoes],
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
    },
    {
      title: "shoes",
      img: [shoes],
      price: "2000",
      off: "20",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes",
      _id: "4"
    },
    {
      title: "shoes",
      img: [shoes],
      price: "2000",
      off: "",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes",
      _id: "5"
    },
    {
      title: "shoes",
      img: [shoes],
      price: "2000",
      off: "20",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes",
      _id: "6"
    },
    {
      title: "shoes",
      img: [shoes],
      price: "2000",
      off: "",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes",
      _id: "7"
    }
  ]

  const [selectedType, setSelectedType] = useState('shoes');

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem(localStorageKeys.favouriteKey));
    if (Array.isArray(storedFavorites)) {
      setFavorites(storedFavorites);
    }
  }, []);

  const likedProducts = products.filter(product => favorites.includes(product._id));

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Favorites Collection</h1>
        <div className={styles.products}>
          {likedProducts.map((e, index) => (
            <Card favorites={favorites} setFavorites={setFavorites} e={e} index={index} />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Page
