import React from 'react'
import styles from './card.module.css'
import Link from 'next/link'

function Card({e, index}) {
    const setDetailsId = (id) => {
        localStorage.setItem("yourChoice-products-id", JSON.stringify(id))
    }

    const deletProduct = (id) => {
        const data = JSON.parse(localStorage.getItem("your-choice-owner"))
        if (data && data.password === process.env.NEXT_PUBLIC_PASSWORD) {
            
        }
    }
  return (
        <div className={styles.cards} key={index}>
            <div className={styles.img} style={{ backgroundImage: `url(${e.img[0].src})` }}></div>
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
              <button onClick={deletProduct(e._id)}>delete</button>
            </div>
        </div>
  )
}

export default Card
