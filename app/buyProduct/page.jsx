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
    productId: '',
    color: '',
    size: '',
  });

  const firstNameRef = React.useRef();
  const lastNameRef = React.useRef();
  const addressRef = React.useRef();
  const phoneRef = React.useRef();
  const emailRef = React.useRef();
  const cityRef = React.useRef();
  const stateRef = React.useRef();
  const zipRef = React.useRef();

  const [quantity, setQuantity] = useState(1);

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

    const formData = {
      name: firstNameRef.current.value + " " + lastNameRef.current.value,
      address: addressRef.current.value,
      phoneNumber: phoneRef.current.value,
      email: emailRef.current.value,
      productId: details.productId,
      color: details.color,
      size: details.size,
      city: cityRef.current.value,
      state: stateRef.current.value,
      zip: zipRef.current.value,
      quantity: quantity
    };

    console.log("Form Values:", formData);

    localStorage.setItem("yourChoice-purchase-details", JSON.stringify(""));
    setDetails({
      productId: '',
      color: '',
      size: '',
    });
  };

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
  };

  return (
      <>
        <Navbar />
      <div className={styles.container}>
          {!details.productId ? (
            <p>You need to select a product first.</p>
          ) : (
            <>
              <form className="row g-3" onSubmit={handleSubmit}>
                <h1>Your <span style={{ color: "red"}}>Choice</span> Shop!</h1>
                <div className="col-md-6">
                  <label className="form-label">First name</label>
                  <input type="text" className="form-control" id="inputEmail4" ref={firstNameRef} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Last name</label>
                  <input type="text" className="form-control" id="inputPassword4" ref={lastNameRef} required />
                </div>
                <div className="col-12">
                  <label className="form-label">Address</label>
                  <input type="text" className="form-control" id="inputAddress" ref={addressRef} placeholder="1234 Main Street" required />
                </div>
                <div className="col-12">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" id="inputEmail4" placeholder="+92" pattern="[\d+]{11,}" ref={phoneRef} required />
                  <small className="form-text text-muted">Please enter a valid phone number with at least 11 digits.</small>
                </div>
                <div className="col-12">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" id="inputPhoneNumber" placeholder="abc@example.com (optional)" ref={emailRef} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">City</label>
                  <input type="text" className="form-control" ref={cityRef} id="inputCity" required />
                </div>
                <div className="col-md-4">
                  <label className="form-label">State</label>
                  <select id="inputState" className="form-select" ref={stateRef} required>
                    <option value="" disabled>Choose...</option>
                    <option value="KPK">KPK</option>
                    <option value="Sindh">Sindh</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Balochistan">Balochistan</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label className="form-label">Zip</label>
                  <input type="text" className="form-control" id="inputZip" placeholder="(optional)" ref={zipRef} />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-dark">Confirm</button>
                </div>
              </form>
              <div className={styles.detailsDiv}>
                <img src={products.find((product) => product._id === details.productId)?.img[0].src || ""} alt="" />
                <h2>{details ? products.find((product) => product._id === details.productId)?.title : ""}</h2>
                <p>Total Rs: {details ? products.find((product) => product._id === details.productId)?.price * quantity : ""}</p>
                <div className={styles.colorDiv} style={{ color: "red"}} >Selected Color :<br />
                  <div style={{ backgroundColor: details ? details.color : "" }}></div>
                </div>        
                <p className={styles.selectedSize}>Selected Size: <span>{details ? details.size : ""}</span></p>
                <div className={styles.quantityDiv}>
                  <p>Number of Items: </p>
                  <div>
                    <button onClick={decreaseQuantity}>-</button>
                      <h4>{quantity}</h4>
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                </div>
              </div>
            </>
          )}
      </div>
      </>
  )
}

export default Contact
