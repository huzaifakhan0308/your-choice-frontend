"use client";
import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar';
import styles from './page.module.css';
import { useStateContext } from "../../context/StateContext";
import axios from 'axios';

function Page() {
  const { findProductById } = useStateContext();
  const [orders, setOrders] = useState([])
  const [products, setProducts] = useState([])

  const findProduct = async () => {
    for (let i = 0; i < orders.length; i++) {
      const data = await findProductById(orders[i].productId)
      const isProductInArray = products.some(product => product._id === data._id);
      if (!isProductInArray) {
        setProducts(prevProducts => [...prevProducts, data]);
      }
    }
  };

  const [boolean, setBoolean] = useState(false)

  useEffect(() => {
    console.log(products);
    if (orders.length > 0) {
      findProduct()
    }
  }, [orders]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("your-choice-owner"));
    if (data && data.password === process.env.NEXT_PUBLIC_PASSWORD) {
      setBoolean(true)
    }
  }, []);

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/buy`)
        setOrders(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    data()
  }, []);

  return (
    <>
    {boolean?
      <>
      <Navbar />
        <div className={styles.container}>
          <h1>Orders</h1>
          {orders.map((order, index) => (
            <div className={styles.orders} key={index}>
              {/* <img src={findProductById(order.productId)?.img[0]} alt="" /> */}
              <div>
                <h2>Name: {order.name}</h2>
                <p>Address: {order.address}</p>
                <p>Phone: {order.phoneNumber}</p>
                {order.email ? <p>Email : {order.email}</p> : ""}
              </div>
              <div>
                <p>Color: {order.color}</p>
                <p>Size: {order.size}</p>
                <p>City: {order.city}</p>
                <p>State: {order.state}</p>
                {order.zip ? <p> Zip: { order.zip } </p> : ""}
                <p>Quantity: {order.quantity}</p>
              </div>
              <div className={styles.buttonDiv}>
                <button className={order.confirmed ? styles.confirmed : ""}>Confirmed</button>
                <button style={{ backgroundColor: "black", color: "white"}}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </>
    : ""}
    </>
  )
}

export default Page;
