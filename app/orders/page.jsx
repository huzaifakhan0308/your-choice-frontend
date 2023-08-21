"use client";
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/navbar';
import styles from './page.module.css';
import axios from 'axios';

function Page() {
  const [orders, setOrders] = useState([])
  const [boolean, setBoolean] = useState(false)

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

  const updateOrder = async (id) => {
    const config = {
      password: JSON.parse(localStorage.getItem("your-choice-owner")).password,
    };
    try {
      const response = await axios.put(`${process.env.NEXT_PUBLIC_API}/buy/${id}/confirm`, config )
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }

  const deleteOrder = async (id) => {
    const config = {
      params: {
        password: JSON.parse(localStorage.getItem("your-choice-owner")).password,
      }
    };
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API}/buy/${id}`, config )
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
    {boolean?
      <>
      <Navbar />
        <div className={styles.container}>
          <h1>Orders</h1>
          {orders.map((order, index) => (
              <div className={styles.orders} key={index}>
                <img src={order.productImg} alt="" />
                <div>
                  <h2>Name: {order.name}</h2>
                  <p>Address: {order.address}</p>
                  <p>Phone: {order.phone}</p>
                  {order.email ? <p>Email : {order.email}</p> : ""}
                </div>
                <div>
                  <div>
                    <span>Color: {order.color}</span>
                    <div className={styles.colorsDiv} style={{ backgroundColor: order.color }}></div>
                  </div>
                  <p>Size: {order.size}</p>
                  <p>City: {order.city}</p>
                  <p>State: {order.state}</p>
                  {order.zip ? <p> Zip: { order.zip } </p> : ""}
                  <p>Quantity: {order.quantity}</p>
                </div>
                <div className={styles.buttonDiv}>
                  <button 
                  className={order.confirm ? styles.confirmed : ""} 
                  onClick={() => { updateOrder(order._id) }}
                  disabled={order.confirm}
                  >Confirmed</button>
                  <button 
                  style={{ backgroundColor: "black", color: "white"}}
                  onClick={() => { deleteOrder(order._id) }}
                  >Delete</button>
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
