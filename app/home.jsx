"use client";
import { useEffect, useState } from 'react';
import styles from "./page.module.css";
import Navbar from '../components/navbar/navbar'
import Link from 'next/link';
import shopImg from '../assets/shopImg5.jpeg';
import womenShoes from '../assets/womenShoes.jpeg';
import kidShoes from '../assets/kidShoes.jpeg';
import menShoes from '../assets/menShoes.jpeg';
import leftArrow from '../public/right-arrow.png'
import RightArrow from '../public/left-arrow.png'
import Card from '../hooks/card.jsx';
import Footer from '../hooks/footer.jsx';
import { localStorageKeys } from '../common/strings';
import { useStateContext } from "../context/StateContext";

function Home() {
    const cards = [
        {
            name: "ALL",
            linkTo: "/all",
            img: shopImg
        },
        {
            name: "MEN's",
            linkTo: "/mens",
            img: menShoes
        },
        {
            name: "WOMEN's",
            linkTo: "/women",
            img: womenShoes
        },
        {
            name: "KID's",
            linkTo: "/kids",
            img: kidShoes
        }
    ]

    const { offProducts, products, productTotalCount, fetchData } = useStateContext();

    const [changeColor, setChangeColor] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setChangeColor(prevChangeColor => !prevChangeColor);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem(localStorageKeys.favouriteKey));
        if (Array.isArray(storedFavorites)) {
            setFavorites(storedFavorites);
        }
    }, []);
    
    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const getNextProductWithOff = (startIndex, step) => {
        let currentIndex = startIndex + step;
        if (currentIndex < 0) {
            return offProducts.length - 1;
        } else if (currentIndex >= offProducts.length) {
            return 0;
        }
        return currentIndex;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProductIndex((prevIndex) => getNextProductWithOff(prevIndex, 1));
        }, 6000);
        return () => {
            clearInterval(interval);
        };
    }, [offProducts]);

    
    const handleNextImage = () => {
        setCurrentProductIndex((prevIndex) => getNextProductWithOff(prevIndex, 1));
    };
    
    const handleBackImage = () => {
        setCurrentProductIndex((prevIndex) => getNextProductWithOff(prevIndex, -1));
    };

    const setDetailsId = (id) => {
        localStorage.setItem(localStorageKeys.productKey, JSON.stringify(id))
    }
    
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
          <main className={styles.main}>
              <h1 style={{ color: changeColor ? "red" : "black" }} >OFF% Products</h1>
              <div className={styles.offProducts} style={{ backgroundImage: `url(${offProducts[currentProductIndex].img[0]})` }}>
                  <div className={styles.layout}>
                      <button className={styles.nextBtn} onClick={handleBackImage}>
                          <img src={RightArrow.src} alt="" />
                      </button>
                      <div className={styles.details}>
                          <div className={styles.imgSideDiv}>
                              <img src={offProducts[currentProductIndex].img[0]} alt="" />
                          </div>
                          <div className={styles.detailsDiv}>
                              <h2>{offProducts[currentProductIndex].title}</h2>
                              <p>Price: {offProducts[currentProductIndex].price}Rs</p>
                              <p>Discount: {offProducts[currentProductIndex].off}%</p>
                              <div style={{ color: "red" }}>Available Colors: <br />
                                  <div className={styles.colorsDiv}>
                                      {offProducts[currentProductIndex].colors.map((color, index) => (
                                          <div className={styles.circles} style={{ backgroundColor: color }} key={index}></div>
                                      ))}
                                  </div>
                              </div>
                              <Link href="/details">
                                  <button onClick={() => { setDetailsId(offProducts[currentProductIndex]._id) }} >View Product</button>
                              </Link>
                          </div>
                      </div>
                      <button className={styles.nextBtn} onClick={handleNextImage}>
                          <img src={leftArrow.src} alt="" />
                      </button>
                  </div>
              </div>
              <h2 style={{ paddingTop: "15px" }} >Select Type You Want</h2>
              <div className={styles.products}>
                  {cards.map((e, index) => (
                      <Link href={e.linkTo} className={styles.cards} key={index} style={{ backgroundImage: `url(${e.img.src})` }}>
                          <div className={styles.layouts}>
                              {e.name}
                          </div>
                      </Link>
                  ))}
              </div>
              <h2>Our Latest Collection</h2>
              <div className={styles.pagination}>
                  <button onClick={handlePreviousPage} disabled={currentPageIndex === 0} className="btn btn-outline-dark btn-sm">Prev</button>
                  {Array.from({ length: totalPages }, (_, index) => (
                      <button
                          key={index}
                          onClick={() => setCurrentPageIndex(index)}
                          className={`${index === currentPageIndex ? styles.activePage : ''} btn btn-outline-dark btn-sm`}
                          style={{margin: "5px"}}
                      >
                          {index + 1}
                      </button>
                  ))}
                  <button onClick={handleNextPage} disabled={currentPageIndex === totalPages - 1} className="btn btn-outline-dark btn-sm">Next</button>
              </div>
              <div className={styles.someProducts}>
                  {visibleProducts.map((e, index) => (
                      <Card favorites={favorites} setFavorites={setFavorites} e={e} index={startIndex + index} key={index} />
                  ))}
              </div>
          </main>
          <Footer />
      </>
  )
}

export default Home