"use client";
import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar'
import styles from './page.module.css'
import menShoes from '../../assets/menShoes.jpeg';
import shoes from '../../assets/shoes.jpg'

function Contact() {
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
      sizes: [7, 8, 9, 10, 11]
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
      sizes: [7, 8, 9, 10, 11]
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
      sizes: [3, 4, 5, 6, 7]
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
      sizes: [7, 8, 9, 10, 11]
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
      sizes: [7, 8, 9, 10, 11]
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
      sizes: [7, 8, 9, 10, 11]
    }
  ]


  const [details, setDetails] = useState("")

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("yourChoice-purchase-details"))
    if (data) {
      setDetails(data)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can save the form details to your backend or perform any other actions you want.
    // For example, you can send an API request to save the customer's information to your database.
    console.log(details);
    // Clear the form after submission
    // setDetails({
    //   name: '',
    //   address: '',
    //   phoneNumber: '',
    //   email: '',
    // });
    window.location.reload()
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
      <>
        <Navbar />
      <div>
        <h2>Contact Information</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={details.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={details.address}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={details.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={details.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className={styles.details}>
        <div style={{ backgroundImage: `url(${details? products[details.productId].img[0].src : ""})`}}></div>
        <h2>{details ? products[details.productId].title : ""}</h2>
        <p>Rs: {details ? products[details.productId].price : ""}</p>
        <p>Color:{details? details.color : ""}</p>
        <p>Size:{details ? details.size : ""}</p>
      </div>
      </>
  )
}

export default Contact
