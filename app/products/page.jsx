"use client";
import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar';
import styles from './page.module.css';
import { useStateContext } from "../../context/StateContext";
import Card from '../../hooks/dltCard.jsx';
import Footer from '../../hooks/footer.jsx';

function Page() {
  const [boolean, setBoolean] = useState(false)
  const { products, fetchData, productTotalCount } = useStateContext();

  useEffect(() => {
      const data = JSON.parse(localStorage.getItem("your-choice-owner"));
      if (data && data.password === process.env.NEXT_PUBLIC_PASSWORD) {
        setBoolean(true)
      }
  }, []);

  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const productsPerPage = 20;
  const totalPages = Math.ceil(productTotalCount / productsPerPage);
  const startIndex = currentPageIndex * productsPerPage;
  const visibleProducts = products.slice(startIndex, startIndex + productsPerPage);

  const handleNextPage = () => {
    if (currentPageIndex < totalPages - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData(`?page=${currentPageIndex}`)
    }
    getData()
  }, [currentPageIndex])

  return (
    <>
      <Navbar />
      {boolean?
        <div className={styles.container}> 
          <h1>My Products</h1>
          <div className={styles.pagination}>
            <button onClick={handlePreviousPage} disabled={currentPageIndex === 0} class="btn btn-outline-dark btn-sm">Previous</button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPageIndex(index)}
                className={index === currentPageIndex ? styles.activePage : ''}
                class="btn btn-outline-dark btn-sm"
                style={{ margin: "5px" }}
              >
                {index + 1}
              </button>
            ))}
            <button onClick={handleNextPage} disabled={currentPageIndex === totalPages - 1} class="btn btn-outline-dark btn-sm">Next</button>
          </div>
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
