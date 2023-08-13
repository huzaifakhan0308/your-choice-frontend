"use client";
import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar';
import styles from './page.module.css';
import { useStateContext } from "../../context/StateContext";
import Card from '../../hooks/dltCard.jsx';
import Footer from '../../hooks/footer.jsx';

function Page() {
  const [boolean, setBoolean] = useState(false)
  const { products } = useStateContext();

  useEffect(() => {
      const data = JSON.parse(localStorage.getItem("your-choice-owner"));
      if (data && data.password === process.env.NEXT_PUBLIC_PASSWORD) {
        setBoolean(true)
      }
  }, []);

  return (
    <>
      <Navbar />
      {boolean?
        <div className={styles.container}> 
          <h1>My Products</h1>
          <div className={styles.products}>
            {products.map((e) => (
              <Card e={e} key={e._id} />
            ))}
          </div>
        </div>
      : ""}
      <Footer/>
    </>
  )
}

export default Page;
