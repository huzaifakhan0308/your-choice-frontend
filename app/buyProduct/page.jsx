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

  const [details, setDetails] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    email: '',
    productId: '',
    color: '',
    size: '',
  });

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("yourChoice-purchase-details"))
    if (data) {
      setDetails(data)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!details.productId) {
      alert("You need to select a product first.");
      return;
    }
    console.log(details);
    localStorage.setItem("yourChoice-purchase-details", JSON.stringify(""));
    setDetails({
      name: '',
      address: '',
      phoneNumber: '',
      email: '',
      productId: '',
      color: '',
      size: '',
    })
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
      <div className={styles.container}>
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputFirstName" class="form-label">First name</label>
            <input type="text" class="form-control" id="inputEmail4"/>
          </div>
          <div class="col-md-6">
            <label for="inputLastName" class="form-label">Last name</label>
            <input type="text" class="form-control" id="inputPassword4"/>
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main Street"/>
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">Phone Number</label>
            <input type="text" class="form-control" id="inputEmail4" placeholder="+92"/>
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputPhoneNumber" placeholder="abc@example.com"/>
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">City</label>
            <input type="text" class="form-control" id="inputCity"/>
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">State</label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>KPK</option>
              <option>Sindh</option>
              <option>Punjab</option>
              <option>Balochistan</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">Zip</label>
            <input type="text" class="form-control" id="inputZip"/>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Sign in</button>
          </div>
        </form>
        <div className={styles.detailsDiv}>
          {!details.productId ? (
            <p>You need to select a product first.</p>
          ) : (
            <>
              <div style={{ backgroundImage: `url(${products.find((product) => product._id === details.productId)?.img[0].src || ""})` }}></div>
              <h2>{details ? products.find((product) => product._id === details.productId)?.title : ""}</h2>
              <p>Rs: {details ? products.find((product) => product._id === details.productId)?.price : ""}</p>
              <p>Color: {details ? details.color : ""}</p>
              <p>Size: {details ? details.size : ""}</p>
            </>
          )}
        </div>
      </div>
      </>
  )
}

export default Contact
