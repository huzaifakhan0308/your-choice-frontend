"use client";
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/navbar';
import styles from '../../utilities/page.module.css'
import Card from '../../hooks/card.jsx';
import Footer from '../../hooks/footer.jsx';
import { useSearchParams } from 'next/navigation';
import { useStateContext } from "../../context/StateContext";
import { localStorageKeys } from '../../common/strings';

function Page() {
  const { products, fetchData, productTotalCount } = useStateContext();
  const searchParams = useSearchParams();
  const selectedTypeFromQuery = searchParams.get('type') || 'shoes';
  const [selectedType, setSelectedType] = useState(selectedTypeFromQuery);

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
      const data = await fetchData(`?type=${selectedType}&adults=men&page=${currentPageIndex}`)
    }
    getData()
  }, [currentPageIndex, selectedType])
  
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1>Stylish Men&apos;s Collection: Explore Our Exclusive Shoes and Jackets!</h1>
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
        </div>
        <div className={styles.pagination}>
          <button onClick={handlePreviousPage} disabled={currentPageIndex === 0} className="btn btn-outline-dark btn-sm">Prev</button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPageIndex(index)}
              className={`${index === currentPageIndex ? styles.activePage : ''} btn btn-outline-dark btn-sm`}
              style={{ margin: "5px" }}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={handleNextPage} disabled={currentPageIndex === totalPages - 1} className="btn btn-outline-dark btn-sm">Next</button>
        </div>
        <div className={styles.products}>
          {visibleProducts.map((e, index) => (
            <Card favorites={favorites} setFavorites={setFavorites} e={e} index={index} key={index} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Page;
