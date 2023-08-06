"use client";
import { useEffect, useState } from 'react';
import styles from "./page.module.css";
import Navbar from './navbar/navbar'
import Link from 'next/link';
import shopImg from '../assets/shopImg5.jpeg';
import womenShoes from '../assets/womenShoes.jpeg';
import kidShoes from '../assets/kidShoes.jpeg';
import menShoes from '../assets/menShoes.jpeg';
import shoes from '../assets/shoes.jpg'
import leftArrow from '../public/right-arrow.png'
import RightArrow from '../public/left-arrow.png'
import Card from '../hooks/card.jsx';
import Footer from '../hooks/footer.jsx';
import { localStorageKeys } from '../common/strings';

function Home() {
    const products = [
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

    const product = [
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
            title: "handbag1",
            img: [shopImg],
            price: "1000",
            off: "20",
            colors: ["black", "brown"],
            gender: "male",
            type: "handbag",
            _id: "2"
        },
        {
            title: "handbag2",
            img: [shopImg],
            price: "1000",
            off: "20",
            colors: ["black", "brown"],
            gender: "male",
            type: "handbag",
            _id: "3"
        },
        {
            title: "handbag3",
            img: [shopImg],
            price: "1000",
            off: "20",
            colors: ["black", "brown"],
            gender: "male",
            type: "handbag",
            _id: "4"
        },
        {
            title: "jackets",
            img: [shoes],
            price: "500",
            off: "",
            colors: ["black", "brown"],
            gender: "kid",
            type: "jackets",
            _id: "5"
        }
        ,
        {
            title: "jackets",
            img: [shoes],
            price: "500",
            off: "",
            colors: ["black", "brown"],
            gender: "kid",
            type: "jackets",
            _id: "6"
        },
        {
            title: "jackets",
            img: [shoes],
            price: "500",
            off: "",
            colors: ["black", "brown"],
            gender: "kid",
            type: "jackets",
            _id: "7"
        }
    ]

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const timeout = setTimeout(() => {
            setIsVisible(false);
        }, 3000);
        return () => clearTimeout(timeout);
    }, []);

    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const [changeColor, setChangeColor] = useState(false);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem(localStorageKeys.favouriteKey));
        if (Array.isArray(storedFavorites)) {
            setFavorites(storedFavorites);
        }
    }, []);

    const getNextProductWithOff = (startIndex, step) => {
        let currentIndex = startIndex;
        const productLength = product.length;
        while (true) {
            currentIndex = (currentIndex + step + productLength) % productLength;
            if (product[currentIndex].off !== "") {
                return currentIndex;
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProductIndex((prevIndex) => getNextProductWithOff(prevIndex, 1));
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setChangeColor(prevChangeColor => !prevChangeColor);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const setDetailsId = (id) => {
        localStorage.setItem("yourChoice-products-id", JSON.stringify(id))
    }

    const handleNextImage = () => {
        setCurrentProductIndex((prevIndex) => getNextProductWithOff(prevIndex, 1));
    };

    const handleBackImage = () => {
        setCurrentProductIndex((prevIndex) => getNextProductWithOff(prevIndex, -1));
    };

  return (
      <>
          <Navbar />
          <main className={styles.main}>
              <h1 style={{ color: changeColor ? "red" : "black" }} >OFF% Products</h1>
              <div className={styles.offProducts} style={{ backgroundImage: `url(${product[currentProductIndex].img[0].src})` }}>
                  <div className={styles.layout}>
                      <button className={styles.nextBtn} onClick={handleBackImage}>
                          <img src={RightArrow.src} alt="" />
                      </button>
                      <div className={styles.details}>
                          <div className={styles.imgSideDiv}>
                              <img src={product[currentProductIndex].img[0].src} alt="" />
                          </div>
                          <div className={styles.detailsDiv}>
                              <h2>{product[currentProductIndex].title}</h2>
                              <p>Rs: {product[currentProductIndex].price}</p>
                              <p>Discount: {product[currentProductIndex].off}%</p>
                              <div style={{ color: "red" }}>Available Colors: <br />
                                  <div className={styles.colorsDiv}>
                                      {product[currentProductIndex].colors.map((color, index) => (
                                          <div className={styles.circles} style={{ backgroundColor: color }} key={index}></div>
                                      ))}
                                  </div>
                              </div>
                              <Link href="/details">
                                  <button onClick={() => { setDetailsId(product[currentProductIndex]._id) }} >View Product</button>
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
                  {products.map((e, index) => (
                      <Link href={e.linkTo} className={styles.cards} key={index} style={{ backgroundImage: `url(${e.img.src})` }}>
                          <div className={styles.layouts}>
                              {e.name}
                          </div>
                      </Link>
                  ))}
              </div>
              <h2>Some Products</h2>
              <div className={styles.someProducts}>
                  {product.slice(0, 15).map((e, index) => (
                      <Card favorites={favorites} setFavorites={setFavorites} e={e} index={index} key={index} />
                  ))}
              </div>
          </main>
          <Footer />
      </>
  )
}

export default Home
