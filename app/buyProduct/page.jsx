"use client";
import React, { useEffect, useState, useRef } from 'react'
import Navbar from '../../components/navbar/navbar'
import styles from './page.module.css'
import done from '../../public/done.png'
import Link from 'next/link';
import { useStateContext } from "../../context/StateContext";
import axios from 'axios';
import { localStorageKeys } from '../../common/strings';
  
function Contact() {
  const { findProductById } = useStateContext();
  const [products, setProducts] = useState(null)

  const getDetail = async (id) => {
    const data = await findProductById(id)
    setProducts(data)
  }

  useEffect(() => {
    let id = JSON.parse(localStorage.getItem(localStorageKeys.productKey))
    if (id) {
      getDetail(id)
    }
  }, [])

  const [details, setDetails] = useState({
    productId: '',
    color: '',
    size: '',
  });

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const zipRef = useRef();

  const [quantity, setQuantity] = useState(1);
  const [successfullPage, setSuccessfullPage] = useState(false);
  const [enoughQuantity, setEnoughQuantity] = useState(false);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("yourChoice-purchase-details"))
    if (data) {
      setDetails(data)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!details.productId) {
      alert("You need to select a product first.");
      return;
    }

    const formData = {
      name: firstNameRef.current.value + " " + lastNameRef.current.value,
      address: addressRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      productImg: details.productImg,
      color: details.color,
      size: details.size,
      city: cityRef.current.value,
      state: stateRef.current.value,
      zip: zipRef.current.value,
      quantity: quantity
    };

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API}/buy`, formData)
    } catch (error) {
      console.error(error);
    }

    setSuccessfullPage(true)

    localStorage.setItem("yourChoice-purchase-details", JSON.stringify(""));
    setDetails({
      productId: '',
      color: '',
      size: '',
    });
  };

  const increaseQuantity = () => {
    if (quantity === products.quantity) {
      setEnoughQuantity(true)
    }else{
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  const decreaseQuantity = () => {
    setEnoughQuantity(false)
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
  };

  return (
      <>
        <Navbar />
      <div className={styles.container}>
          {!details.productId ? (
            <>
              {successfullPage ?
                <div className={styles.successfullPage}>
                  <p className={styles.hey}>Hey {firstNameRef.current && firstNameRef.current.value ? firstNameRef.current.value + " " + lastNameRef.current.value : ""},</p>
                  <h2>Your Order is Confirmed!</h2>
                  <img src={done.src} alt="" />
                  <p className={styles.info}>
                    Thank you for placing your order. We will inform you very soon with further updates once your order is processed.
                  </p>
                  <Link href={"/"}>
                    <button>Go to Home Page</button>
                  </Link>
                </div>
                :
                <p style={{ marginTop: "10vh" }} >Oops! something went wrong wait for few seconds or select any product again.</p>
              }
            </>
          ) : (
            <>
              <form className="row g-3" onSubmit={handleSubmit}>
                  <h1>Thank you for choosing Your <span style={{ color: "red"}}>Choice</span> Shop!</h1>
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
                {products && (
                  <>
                    <img src={products.img[0] || ""} alt="" />
                    <h2>{products.title || ""}</h2>
                    <p>Total Rs: {products.price * quantity || ""}</p>
                    <div className={styles.colorDiv} style={{ color: "red"}} >Selected Color:<br />
                      <div className={styles.colorsContainer}>
                        <span style={{ color: "black", fontSize: "small"}} >{details.color}</span>
                        <div style={{ backgroundColor: details ? details.color : "" }}></div>
                      </div>
                    </div>        
                    <p className={styles.selectedSize}>Selected Size: <span>{details ? details.size : ""}</span></p>
                    <div className={styles.quantityDiv}>
                      <p>Number of Items: </p>
                      <div>
                        <button onClick={decreaseQuantity}>-</button>
                          <h4>{quantity}</h4>
                        <button onClick={increaseQuantity}>+</button>
                      </div>
                        <p 
                          style={{ display: enoughQuantity ? "block" : "none", fontWeight: 'lighter', color: "red" }} >
                            we have only  <span style={{ fontWeight: 'bolder' }}>
                            {products.quantity}</span> items of this type
                        </p>
                    </div>
                    <p className={styles.delivery}>
                      Free delivery is offered for locations within the Nowshera to Peshawar range<br />
                      For other cities, delivery charges will apply, we will notify you on the provided contact number after receiving your order. <br />
                    </p>
                  </>
                )}
              </div>
            </>
          )}
      </div>
      </>
  )
}

export default Contact
