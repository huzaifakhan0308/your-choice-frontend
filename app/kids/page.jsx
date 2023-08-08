"use client";
import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar';
import styles from '../../utilities/page.module.css'
import shoes from '../../assets/shoes.jpg'
import Card from '../../hooks/card.jsx';
import Footer from '../../hooks/footer.jsx';
import { useSearchParams } from 'next/navigation';
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

  const searchParams = useSearchParams();
  const selectedTypeFromQuery = searchParams.get('type') || 'shoes';
  const [selectedType, setSelectedType] = useState(selectedTypeFromQuery)

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
      <main className={styles.main}>
        <h1>Adorable Steps: Discover the Perfect Shoes for Kids - Comfort and Style Combined!</h1>
        <div className={styles.menu}>
          <button
            className={selectedType === 'shoes' ? styles.selected : ''}
            onClick={() => setSelectedType('shoes')}
          >
            Shoes
          </button>
        </div>
        <div className={styles.products}>
          {products.filter((product) => product.type === selectedType).map((e, index) => (
            <Card favorites={favorites} setFavorites={setFavorites} e={e} index={index} />
          ))}
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default Page;
