"use client";
import React from 'react'
import Navbar from '../navbar/navbar';
import styles from './page.module.css';
import shoes from '../../assets/shoes.jpg'
import menShoes from '../../assets/menShoes.jpeg';

function Page() {
const orders = [
    {
      name: "huzaifa",
      address: "pirpiai",
      phoneNumber: "+923083972806",
      email: "huzaifa@gmail.com",
      productId: "1",
      color: "brown",
      size: "10",
      city: "nowshera",
      state: "KPK",
      zip: "1234",
      quantity: "2",
      confirmed: false
    },
    {
      name: "huzaifa",
      address: "pirpiai",
      phoneNumber: "+923083972806",
      email: "huzaifa@gmail.com",
      productId: "2",
      color: "brown",
      size: "10",
      city: "nowshera",
      state: "KPK",
      zip: "1234",
      quantity: "2",
      confirmed: false
    },
    {
      name: "huzaifa",
      address: "pirpiai",
      phoneNumber: "+923083972806",
      email: "huzaifa@gmail.com",
      productId: "3",
      color: "brown",
      size: "10",
      city: "nowshera",
      state: "KPK",
      zip: "1234",
      quantity: "2",
      confirmed: false
    },
    {
      name: "huzaifa",
      address: "pirpiai",
      phoneNumber: "+923083972806",
      email: "huzaifa@gmail.com",
      productId: "4",
      color: "brown",
      size: "10",
      city: "nowshera",
      state: "KPK",
      zip: "1234",
      quantity: "2",
      confirmed: true
    }
  ]

  const products = [
    {
      title: "shoes",
      img: [shoes, menShoes, shoes, menShoes],
      price: "1000",
      off: "20",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes",
      _id: "1",
      sizes: [7, 8, 9, 10, 11],
      quantity: 3
    },
    {
      title: "handbag",
      img: [shoes, shoes, shoes, shoes,],
      price: "1000",
      off: "20",
      colors: ["black", "brown"],
      gender: "male",
      type: "handbag",
      _id: "2",
      sizes: [7, 8, 9, 10, 11],
      quantity: 3
    },
    {
      title: "jackets",
      img: [shoes, shoes, shoes, shoes,],
      price: "500",
      off: "",
      colors: ["black", "brown"],
      gender: "kid",
      type: "jackets",
      _id: "3",
      sizes: [3, 4, 5, 6, 7],
      quantity: 4
    },
    {
      title: "shoes",
      img: [shoes, shoes, shoes, shoes,],
      price: "2000",
      off: "20",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes",
      _id: "4",
      sizes: [7, 8, 9, 10, 11],
      quantity: 5
    },
    {
      title: "shoes",
      img: [shoes, shoes, shoes, shoes,],
      price: "1000",
      off: "20",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes",
      _id: "5",
      sizes: [7, 8, 9, 10, 11],
      quantity: 2
    },
    {
      title: "shoes",
      img: [shoes, shoes, shoes, shoes],
      price: "2000",
      off: "20",
      colors: ["red", "green"],
      gender: "female",
      type: "shoes",
      _id: "6",
      sizes: [7, 8, 9, 10, 11],
      quantity: 3
    }
  ]

  const findProductById = (_id) => {
    return products.find((product) => product._id === _id);
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Orders</h1>
        {orders.map((order) => (
          <div className={styles.orders}>
            <img src={findProductById(order.productId)?.img[0].src} alt="" />
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
  )
}

export default Page;
