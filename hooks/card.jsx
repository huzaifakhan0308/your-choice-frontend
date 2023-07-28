import React, { useEffect, useState } from 'react'
import styles from './card.module.css'
import Link from 'next/link'
import blackHeart from '../public/blackHeart.png'
import redHeart from '../public/redHeart.png'

function Card({e, index}) {
    const [favorites, setFavorites] = useState([])

    const setDetailsId = (id) => {
        localStorage.setItem("yourChoice-products-id", JSON.stringify(id))
    }

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('yourChoice-favorite'));
        if (Array.isArray(storedFavorites)) {
            setFavorites(storedFavorites);
        }
    }, []);

    
    const handleFavoriteToggle = (id) => {
        if (isFavorite(id)) {
            const updatedFavorites = favorites.filter((favId) => favId !== id);
            localStorage.setItem('yourChoice-favorite', JSON.stringify(updatedFavorites));
            setFavorites(updatedFavorites);
        } else {
            const updatedFavorites = [...favorites, id];
            localStorage.setItem('yourChoice-favorite', JSON.stringify(updatedFavorites));
            setFavorites(updatedFavorites);
        }
        window.location.reload()
    };

    const isFavorite = (id) => favorites.includes(id);
    
  return (
        <div className={styles.cards} key={index}>
            <div className={styles.img} style={{ backgroundImage: `url(${e.img[0].src})` }}>
              <img
                  src={isFavorite(e._id) ? redHeart.src : blackHeart.src}
                  alt=""
                  onClick={() => handleFavoriteToggle(e._id)}
              />
            </div>
            <div className={styles.detailDiv}>
                <h3>{e.title}</h3>
                <p>Price: {e.price}Rs</p>
                {e.off ? <p>OFF: {e.off}%</p> : ""}
                <div>Available Colors: <br />
                    <div className={styles.colorsDiv}>
                        {e.colors.map((color, index) => (
                            <div className={styles.circles} style={{ backgroundColor: color }} key={index}></div>
                        ))}
                    </div>
                </div>
                <Link className={styles.link} href="./details" onClick={() => setDetailsId(e._id)}>
                    <button>View Product</button>
                </Link>
            </div>
        </div>
  )
}

export default Card
