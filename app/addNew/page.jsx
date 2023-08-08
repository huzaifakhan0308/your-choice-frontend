"use client";
import React, { useRef } from 'react'
import Navbar from '../navbar/navbar';
import Footer from '../../hooks/footer.jsx';

function Page() {

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const zipRef = useRef();

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
        setSuccessfullPage(true)

        localStorage.setItem("yourChoice-purchase-details", JSON.stringify(""));
        setDetails({
            productId: '',
            color: '',
            size: '',
        });
    };

  return (
    <>
        <Navbar/>
          <form className="row g-3" onSubmit={handleSubmit}>
              <h1>Thank you for choosing Your <span style={{ color: "red" }}>Choice</span> Shop!</h1>
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
        <Footer/>
    </>
  )
}

export default Page
