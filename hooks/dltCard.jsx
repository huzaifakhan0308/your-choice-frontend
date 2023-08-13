"use client"
import React, { useState } from 'react'
import styles from './card.module.css'
import Link from 'next/link'
import axios from 'axios'

function Card({e}) {
    const [loading, setLoading] = useState(false)

    const setDetailsId = (id) => {
        localStorage.setItem("yourChoice-products-id", JSON.stringify(id))
    }

    const deletProduct = async (id) => {
        const data = JSON.parse(localStorage.getItem("your-choice-owner"))
        if (data && data.password === process.env.NEXT_PUBLIC_PASSWORD) {
            setLoading(true)
            const urls = e.img;

            const config = {
                params: {
                    password: data.password,
                    imageUrls: urls.join(',')
                }
            };

            try {
                const response = await axios.delete(`${process.env.NEXT_PUBLIC_API}/items/${id}`, config);
                console.log('Response:', response.data);
            } catch (error) {
                console.error('Error', error);
                return;
            }
            window.location.reload()
        }
    }
  return (
        <div className={styles.cards}>
            <div className={styles.img} style={{ backgroundImage: `url(${e.img[0]})` }}></div>
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
                {loading?
                ""
                :
                <>
                    <Link className={styles.link} href="./details" onClick={() => setDetailsId(e._id)}>
                        <button>View Product</button>
                    </Link>
                    <button onClick={() => deletProduct(e._id)}>delete</button>
                </>
                }
                
            </div>
        </div>
  )
}

export default Card
