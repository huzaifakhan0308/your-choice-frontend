"use client";
import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar';
import Footer from '../../hooks/footer.jsx';
import styles from '../../utilities/page.module.css'
import Card from '../../hooks/card.jsx';
import { localStorageKeys } from '../../common/strings';
import { useStateContext } from "../../context/StateContext";

function Page() {

  const { products, fetchData, productTotalCount } = useStateContext();
  const [selectedType, setSelectedType] = useState('shoes');

  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem(localStorageKeys.favouriteKey));
    if (Array.isArray(storedFavorites)) {
      setFavorites(storedFavorites);
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
      const data = await fetchData(`?type=${selectedType}&page=${currentPageIndex}`)
    }
    getData()
  }, [currentPageIndex, selectedType])

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1>Exquisite Selection: Shop Now for Premium Men's, Women's, and Kids' Products!</h1>
        <div className={styles.menu}>
          <button
            className={selectedType === 'shoes' ? styles.selected : ''}
            onClick={() => setSelectedType('shoes')}
          >
            Shoes
          </button>
          <button
            className={selectedType === 'jacket' ? styles.selected : ''}
            onClick={() => setSelectedType('jacket')}
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
          {visibleProducts.map((e , index) => (
            <Card favorites={favorites} setFavorites={setFavorites} e={e} index={index}/>
          ))}
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default Page;
