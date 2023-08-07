"use client";
import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar';
import styles from './page.module.css'
import shoes from '../../assets/shoes.jpg'
import Card from '../../hooks/card.jsx';
import Footer from '../../hooks/footer.jsx';
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
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <h1>Exquisite Selection: Shop Now for Premium Men's, Women's, and Kids' Products!</h1>
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
            <Card favorites={favorites} setFavorites={setFavorites} e={e} index={index}/>
          ))}
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default Page;
